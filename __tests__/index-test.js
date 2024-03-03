import difference from '../src/index.js';
import resultStylish from '../__fixtures__/result.js';

test('check stylish json files', () => {
  expect(difference('file1.json', 'file2.json')).toEqual(resultStylish);
});

test('check stylish yaml files', () => {
  expect(difference('file1.yaml', 'file2.yaml')).toEqual(resultStylish);
});

test('check stylish yml files', () => {
  expect(difference('file1.yml', 'file2.yml')).toEqual(resultStylish);
});
