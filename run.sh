#!/usr/bin/env bash

INPUT_TEMPLATE=".github/pr-comment-template.hbs" \
    INPUT_INPUTS='{"firstName":"bob","lastName":"marley"}' \
    node dist/index.js
