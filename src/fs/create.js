// TASK
// create.js - implement function that creates new file 'fresh.txt' with content 
// 'I am fresh and young' inside of the 'files' folder (if file already exists Error 
// with message 'FS operation failed' must be thrown)

import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILE_NAME = 'fresh';
const FILE_EXTENSION = 'txt';
const SUCCESS_MESSAGE_TEXT = 'I am fresh and young';
const ERROR_MESSAGE_TEXT = 'FS operation failed';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    try {
        await writeFile(resolve(_dirname, FOLDER, `${ FILE_NAME}.${FILE_EXTENSION}`), SUCCESS_MESSAGE_TEXT, { flag: 'wx' });
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await create();