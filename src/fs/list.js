// TASK
// list.js - implement function that prints all array of filenames from 'files' 
// folder into console (if 'files' folder doesn't exists Error with message 
// 'FS operation failed' must be thrown)

import { readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// CONSTANTS
const ERROR_MESSAGE_TEXT = 'FS operation failed';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        const filenamesArray = await readdir(resolve(_dirname, FOLDER));
        console.log(filenamesArray);
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await list();