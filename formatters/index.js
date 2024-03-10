import makePlain from './plain.js';
import makeStylish from './stylish.js';

const formatters = (tree, format) => {
  if (format === 'stylish') {
    return makeStylish(tree);
  } if (format === 'plain') {
    return makePlain(tree);
  } if (format === 'json') {
    return JSON.stringify(tree);
  }
  return null;
};

export default formatters;
