import difference from '../src/index.js';
import result from '../__fixtures__/result.js';

test('check flat json files', () => {
  expect(difference('file1.json', 'file2.json')).toEqual(result);
});

test('check flat yaml files', () => {
  expect(difference('file1.yaml', 'file2.yaml')).toEqual(result);
});

test('check flat yml files', () => {
  expect(difference('file1.yml', 'file2.yml')).toEqual(result);
});
