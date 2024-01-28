// TASK
// rename.js - implement function that renames file 'wrongFilename.txt' 
// to 'properFilename' with extension '.md' (if there's no file 'wrongFilename.txt' 
// or 'properFilename.md' already exists Error with message 'FS operation failed' must be thrown)

import { rename as renameFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE_TEXT = 'FS operation failed';
const OLD_FILE_NAME = 'wrongFilename';
const OLD_FILE_EXTENSION = 'txt';
const NEW_FILE_NAME = 'properFilename';
const NEW_FILE_EXTENSION = 'md';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    try {
        await renameFile(resolve(_dirname, FOLDER, `${OLD_FILE_NAME}.${OLD_FILE_EXTENSION}`), resolve(_dirname, FOLDER, `${NEW_FILE_NAME}.${NEW_FILE_EXTENSION}`));
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await rename();