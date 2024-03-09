import _ from 'lodash';

const getPath = (nodeNames) => nodeNames.flat().join('.');

const checkVal = (value) => {
  if (typeof value === 'object') {
    return !value ? 'null' : '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const plainDiff = (tree) => {
  const iter = (node, path) => node.map((child) => {
    const currentPath = getPath([path, child.key]);
    if (child.type === 'nasted') {
      return iter(child.children, currentPath);
    } if (child.type === 'added') {
      return `Property '${currentPath}' was added with value: ${checkVal(child.value)}`;
    } if (child.type === 'deleted') {
      return `Property '${currentPath}' was removed`;
    } if (child.type === 'changed') {
      return `Property '${currentPath}' was updated. From ${checkVal(child.value1)} to ${checkVal(child.value2)}`;
    } if (child.type === 'unchanged') {
      return null;
    }
    throw Error('Uncorrect');
  });
  return iter(tree.children, []);
};

const makePlain = (obj) => {
  const result = plainDiff(obj);
  const flatten = _.flatMapDeep(result);
  const filtered = flatten.filter((el) => el);
  return filtered.join('\n');
};
export default makePlain;
