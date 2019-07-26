
## Cloning

This project uses git submodules

```
git clone --recurse-submodules https://github.com/lingua-pupuli/docs/git
```

To update the Docsy theme use

```
git submodule update --init --recursive
```

## Lingua-Pupuli Umbrella Project

This hugo site needs the editor-services and editor-syntax site built first, into the `lingua-pupuli/static/<...>` directory

```
> hugo --source editor-services --destination '../lingua-pupuli/static/vscode'

> hugo --source editor-syntax --destination '../lingua-pupuli/static/vscode'

> hugo server --bind "0.0.0.0" --source lingua-pupuli
```

## VSCode

```
hugo server --bind "0.0.0.0" --source vscode
```
