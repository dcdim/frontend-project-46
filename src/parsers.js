import path from 'node:path';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const parser = (filename) => {
  const extention = path.extname(filename);

  return extention === '.json'
    ? JSON.parse(readFileSync(filename, { encoding: 'utf-8' }))
    : yaml.load(readFileSync(filename, { encoding: 'utf-8' }));
};

export default parser;
