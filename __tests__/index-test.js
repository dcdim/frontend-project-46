import difference from '../src/index.js';
import resultStylish from '../__fixtures__/result.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.js';

describe('stylish', () => {
  test('check json files', () => {
    expect(difference('file1.json', 'file2.json')).toEqual(resultStylish);
  });
  test('check yaml files', () => {
    expect(difference('file1.yaml', 'file2.yaml')).toEqual(resultStylish);
  });
  test('check yml files', () => {
    expect(difference('file1.yml', 'file2.yml')).toEqual(resultStylish);
  });
});

describe('plain', () => {
  test('check json files', () => {
    expect(difference('file1.json', 'file2.json', 'plain')).toEqual(resultPlain);
  });
  test('check yaml files', () => {
    expect(difference('file1.yaml', 'file2.yaml', 'plain')).toEqual(resultPlain);
  });
  test('check yml files', () => {
    expect(difference('file1.yml', 'file2.yml', 'plain')).toEqual(resultPlain);
  });
});

describe('json', () => {
  test('check json files', () => {
    expect(difference('file1.json', 'file2.json', 'json')).toEqual(resultJSON);
  });
  test('check yaml files', () => {
    expect(difference('file1.yaml', 'file2.yaml', 'json')).toEqual(resultJSON);
  });
  test('check yml files', () => {
    expect(difference('file1.yml', 'file2.yml', 'json')).toEqual(resultJSON);
  });
});
