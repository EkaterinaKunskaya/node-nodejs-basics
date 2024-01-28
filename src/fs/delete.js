// TASK
// delete.js - implement function that deletes file 'fileToRemove.txt' 
// (if there's no file 'fileToRemove.txt' Error with message 'FS operation failed' must be thrown)

import { unlink } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE_TEXT = 'FS operation failed';
const DELETED_FILE = 'fileToRemove.txt';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    try {
        await unlink(resolve(_dirname, FOLDER, DELETED_FILE));
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await remove();