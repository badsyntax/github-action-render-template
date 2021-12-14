import path from 'node:path';
import fs from 'node:fs';
import { debug, setFailed, setOutput } from '@actions/core';
import Handlebars from 'handlebars';

import { getInputs } from './inputs.js';

export async function run(): Promise<void> {
  try {
    const inputs = getInputs();
    debug(`Inputs:\n${JSON.stringify(inputs, null, 2)}`);
    const templateBody = fs.readFileSync(path.resolve(inputs.template), 'utf8');
    const template = Handlebars.compile(templateBody);
    const context = JSON.parse(inputs.inputs.trim());
    setOutput('result', template(context));
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    } else {
      setFailed('Unknown error');
    }
  }
}

void run();
