var fs = require('fs');
var path = require('path');

const docsOutputPath = path.resolve(__dirname, 'vscode', 'content', 'en', 'docs', 'Extension Settings.md');
const packageJson = path.resolve(__dirname, 'vscode', 'data', 'package.json');
const packageData = JSON.parse(fs.readFileSync(packageJson, { encoding: 'UTF8' }));

var fileContent = fs.readFileSync(docsOutputPath, { encoding: 'UTF8' });

function GenerateAvailableSettings(obj) {
  var result = "";
  Object.keys(obj.contributes.configuration.properties).forEach((propName) => {
    var prop = obj.contributes.configuration.properties[propName];
    if (!prop.description.includes("DEPRECATED")) {
      result += "#### " + propName + "\n\n" + prop.description + "\n\n";

      // Add default if it exists
      if (prop.enum == undefined) {
        // Do nothing
      } else {
        result += "Possible values: " + prop.enum.join(", ") + "\n\n";
      }

      // Add default if it exists
      if (prop.default == undefined) {
        // Do nothing
      } else if(prop.default == "") {
        // Do nothing
      } else if(prop.default == []) {
        // Do nothing
      } else {
        result += "Default: " + prop.default.toString() + "\n\n";
      }
    }
  });
  return result;
}

function GenerateDeprecatedSettings(obj) {
  var result = "";
  Object.keys(obj.contributes.configuration.properties).forEach((propName) => {
    var prop = obj.contributes.configuration.properties[propName];
    if (prop.description.includes("DEPRECATED")) {
      result += "#### " + propName + "\n\n" + prop.description.replace("**DEPRECATED**", "").trim() + "\n\n";
    }
  });
  return result;
}

function ReplaceTextChunk(value, beforeMarker, afterMarker, replacement) {
  //var regex = new RegExp(regExpEscape(beforeMarker) + "", "gm");
  const beforeIndex = value.indexOf(beforeMarker);
  const afterIndex = value.indexOf(afterMarker);
  if (beforeIndex == -1 || afterIndex == -1) { return value; }
  const tobeReplaced = value.substring(beforeIndex, afterIndex + afterMarker.length);

  return value.replace(tobeReplaced, beforeMarker + replacement + afterMarker);
}

fileContent = ReplaceTextChunk(fileContent, "<!-- Begin Available Settings -->\n", "\n<!-- End Available Settings -->", GenerateAvailableSettings(packageData));
fileContent = ReplaceTextChunk(fileContent, "<!-- Begin Deprecated Settings -->\n", "\n<!-- End Deprecated Settings -->", GenerateDeprecatedSettings(packageData));

fs.writeFileSync(docsOutputPath, fileContent);
