// TASK
// write.js - implement function that writes process.stdin 
// data into file fileToWrite.txt content using Writable Stream

import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';

const FILE = 'fileToWrite.txt';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const fileWritableStream = createWriteStream(resolve(_dirname, FOLDER, FILE), { flags: 'a'});
	process.stdin.pipe(fileWritableStream);
};

await write();