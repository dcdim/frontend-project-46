import _ from 'lodash';

const offset = ' ';
const defOffset = 4;
const currentOffset = (depth) => offset.repeat(defOffset * depth - 2);
const currentOffsetOperator = (depth) => offset.repeat(defOffset * depth - defOffset);
const braceOffset = (depth) => offset.repeat(defOffset * depth - defOffset);

const joinStrings = (lines, depth) => [
  '{',
  ...lines,
  `${braceOffset(depth)}}`,
].join('\n');

const stringify = (obj, depth) => {
  if ((!_.isObject(obj)) || (obj === null)) {
    return String(obj);
  }
  const keys = Object.keys(obj);
  const lines = keys.map((key) => `${currentOffset(depth)}  ${key}: ${stringify(obj[key], depth + 1)}`);
  return joinStrings(lines, depth);
};

const stylishDiff = (tree) => {
  const iter = (node, depth) => {
    if (node.type === 'root') {
      const result = node.children.flatMap((child) => iter(child, depth));
      return joinStrings(result, depth);
    } if (node.type === 'nasted') {
      const childrenString = node.children.flatMap((child) => iter(child, depth + 1));
      return `${currentOffset(depth)}${node.key}: ${joinStrings(childrenString, depth + 0.5)}`;
    } if (node.type === 'added') {
      return `${currentOffsetOperator(depth)}+ ${node.key}: ${stringify(node.value, depth + 0.5)}`;
    } if (node.type === 'deleted') {
      return `${currentOffsetOperator(depth)}- ${node.key}: ${stringify(node.value, depth + 0.5)}`;
    } if (node.type === 'changed') {
      return [`${currentOffsetOperator(depth)}- ${node.key}: ${stringify(node.value1, depth + 0.5)}`,
        `${currentOffsetOperator(depth)}+ ${node.key}: ${stringify(node.value2, depth + 1)}`];
    } if (node.type === 'unchanged') {
      return `${currentOffset(depth)}${node.key}: ${stringify(node.value, depth)}`;
    }
    throw Error('Uncorrect');
  };
  return iter(tree, 1);
};

export default stylishDiff;
