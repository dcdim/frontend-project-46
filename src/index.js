import path from 'node:path';
// import _ from 'lodash';
import parser from './parsers.js';
import buildAST from './AST.js';
import stylishDiff from '../formatters/stylish.js';

const pathToFile = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

const difference = (filePath1, filePath2, format = 'stylish') => {
  const path1 = pathToFile(filePath1);
  const path2 = pathToFile(filePath2);

  const obj1 = parser(path1);
  const obj2 = parser(path2);

  return stylishDiff(buildAST(obj1, obj2), format);
};
export default difference;
