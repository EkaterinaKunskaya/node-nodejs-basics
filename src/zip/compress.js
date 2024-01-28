// TASK
// compress.js - implement function that compresses file
// 'fileToCompress.txt' to 'archive.gz' using zlib and Streams API

import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const FILE = 'fileToCompress.txt';
const COMPRESS_FILE = 'archive.gz';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
	const gzip = createGzip();
	const source = createReadStream(resolve(_dirname, FOLDER, FILE));
	const destination = createWriteStream(resolve(_dirname, FOLDER, COMPRESS_FILE));

	await pipeline(source, gzip, destination);
};

await compress();