$ErrorActionPreference = 'Stop'

If (Test-Path -Path 'lingua-pupuli/static/editor-services') { Remove-Item -Path 'lingua-pupuli/static/editor-services' -Force -Recurse | Out-Null}
If (Test-Path -Path 'lingua-pupuli/static/editor-syntax') { Remove-Item -Path 'lingua-pupuli/static/editor-syntax' -Force -Recurse | Out-Null}
& hugo --source editor-services --destination '../lingua-pupuli/static/editor-services' --environment developmnent
& hugo --source editor-syntax --destination '../lingua-pupuli/static/editor-syntax' --environment developmnent

& hugo serve --source lingua-pupuli --bind "0.0.0.0" hugo --config config.toml,config-localhost.toml
