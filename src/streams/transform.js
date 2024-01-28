// TASK
// transform.js - implement function that reads data from 'process.stdin', 
// reverses text using Transform Stream and then writes it into 'process.stdout'

import { Transform } from 'node:stream';

class reverseTransform extends Transform {
    _transform(chunk, _, callback) {
        try {
            callback(null, chunk.toString().split('').reverse().join(''));
        } catch (error) {
            callback(error);
        }
    }
}

const transform = async () => {
	process.stdin.pipe(new reverseTransform()).pipe(process.stdout);
};

await transform();