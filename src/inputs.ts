import { getInput } from '@actions/core';

export function getInputs() {
  const template = getInput('template', {
    required: true,
    trimWhitespace: true,
  });

  const inputs = getInput('inputs', {
    required: true,
    trimWhitespace: true,
  });

  return {
    template,
    inputs,
  };
}
