import _ from 'lodash';

const buildAST = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();

  const diffObjects = keys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        type: 'added',
        key,
        value: obj2[key],
      };
    }
    if (!_.has(obj2, key)) {
      return {
        type: 'deleted',
        key,
        value: obj1[key],
      };
    }
    if (obj1[key] === obj2[key]) {
      return {
        type: 'unchanged',
        key,
        value: obj1[key],
      };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        type: 'nasted',
        key,
        children: buildAST(obj1[key], obj2[key]),
      };
    }
    return {
      type: 'changed',
      key,
      value1: obj1[key],
      value2: obj2[key],
    };
  });
  return diffObjects;
};

const getTree = (obj1, obj2) => ({
  type: 'root',
  children: buildAST(obj1, obj2),
});

export default getTree;
