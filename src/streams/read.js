// TASK
// read.js - implement function that reads file 'fileToRead.txt' 
// content using Readable Stream and prints it's content into 'process.stdout'

import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { dirname, resolve } from 'node:path';

const FILE = 'fileToRead.txt';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileReadableStream = createReadStream(resolve(_dirname, FOLDER, FILE));
	fileReadableStream.pipe(process.stdout);
};

await read();