// TASK
// read.js - implement function that prints content of the 'fileToRead.txt' 
// into console (if there's no file 'fileToRead.txt' Error with message 
// 'FS operation failed' must be thrown)

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE_TEXT = 'FS operation failed';
const READABLE_FILE = 'fileToRead.txt';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const fileContent = await readFile(resolve(_dirname, FOLDER, READABLE_FILE), {
            encoding: 'utf8',
        });
        console.log(fileContent);
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await read();