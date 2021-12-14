# Render Template GitHub Action

[![Build & Test](https://github.com/badsyntax/github-action-render-template/actions/workflows/test.yml/badge.svg)](https://github.com/badsyntax/github-action-render-template/actions/workflows/test.yml)
[![Render Template](https://github.com/badsyntax/github-action-render-template/actions/workflows/render-template.yml/badge.svg)](https://github.com/badsyntax/github-action-render-template/actions/workflows/render-template.yml)
[![CodeQL](https://github.com/badsyntax/github-action-render-template/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/badsyntax/github-action-render-template/actions/workflows/codeql-analysis.yml)

A super simple GitHub Action to render a handlebars template.

Features

- Renders any handlebars template
- Accepts any inputs via JSON string
- Outputs an escaped string that can be used as an input to a different Action

## Getting Started

```yml
name: 'Render Template'

on:
  pull_request:
    types: [opened, synchronize, reopened]
  push:
    branches:
      - master

jobs:
  deploy:
    name: 'Render'
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2

      - uses: badsyntax/github-action-render-template@v0.0.1
        name: Render Template
        id: render-template
        with:
          template: '.github/pr-comment-template.hbs'
          inputs: |
            {
              "firstName":"Bob",
              "lastName":"Marley"
            }

      - name: Output Rendered Template
        run: |
          echo "Rendered Template: $OUTPUT"
        env:
          OUTPUT: ${{ steps.render-template.outputs.result }}
```

## Action Inputs

| Name       | Description                                                    | Example                             |
| ---------- | -------------------------------------------------------------- | ----------------------------------- |
| `template` | The path to the handlebars template file                       | `./.github/pr-comment-template.hbs` |
| `inputs`   | A JSON string object of key value pairs (can include newlines) | `{"key":"value"}`                   |

## Action Outputs

| Name     | Description                                                                | Example                    |
| -------- | -------------------------------------------------------------------------- | -------------------------- |
| `result` | Escaped rendered template which can be used an input to a different Action | `(your rendered template)` |

## Support

- 👉 [Submit a bug report](https://github.com/badsyntax/github-action-render-template/issues/new?assignees=badsyntax&labels=bug&template=bug_report.md&title=)
- 👉 [Submit a feature request](https://github.com/badsyntax/github-action-render-template/issues/new?assignees=badsyntax&labels=enhancement&template=feature_request.md&title=)

## License

See [LICENSE.md](./LICENSE.md).
