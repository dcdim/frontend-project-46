import path from 'node:path';
import _ from 'lodash';
import parser from './parsers.js';

const pathToFile = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

const difference = (filePath1, filePath2) => {
  const path1 = pathToFile(filePath1);
  const path2 = pathToFile(filePath2);

  const obj1 = parser(path1);
  const obj2 = parser(path2);

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
