// TASK
// copy.js - implement function that copies folder 'files' files with all its 
// content into folder 'files_copy' at the same level (if files folder doesn't 
// exists or files_copy has already been created Error with message 
// 'FS operation failed' must be thrown)

import { cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ERROR_MESSAGE_TEXT = 'FS operation failed';
const SOURCE = 'files'
const DESTINATION = `${SOURCE}_copy`;
const _dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    try {
        await cp(resolve(_dirname, SOURCE), resolve(_dirname, DESTINATION), {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch (error) {
        console.error(error.message);
        throw new Error(ERROR_MESSAGE_TEXT);
    }
};

await copy();