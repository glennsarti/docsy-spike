---
title: "Puppet Development Kit"
weight: 2
description: >
  Built in PDK Development Kit (PDK) commands
---

You can use the [Puppet Development Kit](https://puppet.com/blog/develop-modules-faster-new-puppet-development-kit) inside VS Code from the command palette. To use any of the above commands, open the command palette and start typing a command. You can also use the right-click context menu or the editor menu to reach these commands.

> Note: The PDK must be installed prior to using these commands

## Requirements

### Unsupported commands

`pdk convert` is not available in the command palette as it is a complicated command that requires user input to succeed. It is better to use it from the builtin terminal.

### PDK Supported Versions

The Puppet VSCode Extension supports the current PDK version, and one older version.

## PDK new module

`PDK New Module` is available even if the extension isn't loaded, the rest of the commands are only available when the extension is loaded.

![pdk_new_module]({{< static "img/pdk_new_module.gif" >}})

## PDK new class

You can create new classes using PDK using the VS Code command palette. This functionality is only available when a Puppet file has already been opened, to trigger the extension.

![pdk_new_class]({{< static "img/pdk_new_class.gif" >}})

## PDK validate

You can initiate a valiadtion of your module using PDK using the VS Code command palette. This functionality is only available when a Puppet file has already been opened, to trigger the extension.

![pdk_validate]({{< static "img/pdk_validate.gif" >}})

## PDK test unit

You can run the test suite of your module using PDK using the VS Code command palette. This functionality is only available when a Puppet file has already been opened, to trigger the extension.

![pdk_test_unit]({{< static "img/pdk_test_unit.gif" >}})
