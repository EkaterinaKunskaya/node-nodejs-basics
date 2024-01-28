// TASK
// decompress.js - implement function that decompresses 'archive.gz' 
// back to the 'fileToCompress.txt' with same content as before compression using zlib and Streams API

import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const DECOMPRESS_FILE = 'fileToCompress.txt';
const COMPRESS_FILE = 'archive.gz';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(resolve(_dirname, FOLDER, COMPRESS_FILE));
    const destination = createWriteStream(resolve(_dirname, FOLDER, DECOMPRESS_FILE));

    await pipeline(source, unzip, destination);
};

await decompress();