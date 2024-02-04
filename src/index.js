import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

const pathToFile = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

// console.log(pathToFile(filePath1));

const difference = (filePath1, filePath2) => {
  const path1 = pathToFile(filePath1);
  const path2 = pathToFile(filePath2);

  const readedFile1 = readFileSync(path1, { encoding: 'utf-8' });
  const readedFile2 = readFileSync(path2, { encoding: 'utf-8' });

  const obj1 = JSON.parse(readedFile1);
  const obj2 = JSON.parse(readedFile2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const keys = _.union(keys1, keys2).sort();

  const result = ['{'];

  // eslint-disable-next-line
  for (const key of keys) {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      result.push(`  - ${key}: ${obj1[key]}`);
    }
    if (Object.hasOwn(obj2, key) && !Object.hasOwn(obj1, key)) {
      result.push(`  + ${key}: ${obj2[key]}`);
    }
    if (Object.hasOwn(obj2, key) && Object.hasOwn(obj1, key) && obj1[key] === obj2[key]) {
      result.push(`    ${key}: ${obj1[key]}`);
    }
    if (Object.hasOwn(obj2, key) && Object.hasOwn(obj1, key) && obj1[key] !== obj2[key]) {
      result.push(`  - ${key}: ${obj1[key]}`);
      result.push(`  + ${key}: ${obj2[key]}`);
    }
  }
  result.push('}');
  return result.join('\n');
};
export default difference;
