import path from 'node:path';
import { readFileSync } from 'node:fs';

const pathToFile = (filePath) => (filePath.includes('__fixtures__')
    ? path.resolve(process.cwd(), filePath)
    : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

const difference = (filePath1, filePath2) => {
    const path1 = pathToFile(filePath1);
    const path2 = pathToFile(filePath2);

    const readedFile1 = readFileSync(path1, {encoding : 'utf-8'});
    const readedFile2 = readFileSync(path2, {encoding : 'utf-8'});

    const data1 = JSON.parse(readedFile1);
    const data2 = JSON.parse(readedFile2);

    return `${data1}, ${data2}`;
}
export default difference;
