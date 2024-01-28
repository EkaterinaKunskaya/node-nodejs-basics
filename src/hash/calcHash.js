// TASK
// calcHash.js - implement function that calculates SHA256 hash
// for file 'fileToCalculateHashFor.txt' and logs it into console
// as 'hex' using Streams API

import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const FILE= 'fileToCalculateHashFor.txt';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
	const fileStream = createReadStream(resolve(_dirname, FOLDER, FILE));
	const hash = createHash('SHA256').setEncoding('hex');

	fileStream.pipe(hash);
	fileStream.on('end', () => {
		hash.end();
		console.log(hash.read());
	});
};

await calculateHash();