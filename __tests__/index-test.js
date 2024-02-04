import difference from '../src/index.js';
import result from '../__fixtures__/result.js';

test('check flat json files', () => {
  expect(difference('file1.json', 'file2.json')).toEqual(result);
});
