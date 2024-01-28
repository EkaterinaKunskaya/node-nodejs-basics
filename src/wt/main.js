// TASK
// main.js - implement function that creates number of worker 
// threads (equal to the number of host machine logical CPU cores) from 
// file 'worker.js' and able to send data to those threads and to receive 
// result of the computation from them. You should send incremental number 
// starting from '10' to each 'worker'. For example: on host machine with 4 cores 
// you should create 4 workers and send 10 to first worker, 11 to second worker, 
// 12 to third worker, 13 to fourth worker. After all workers will finish, function 
// should log array of results into console. The results are array of objects with 
// 2 properties:
// 'status' - 'resolved' in case of successfully received value from 'worker' or 'error'
// in case of error in 'worker'
// 'data' - value from 'worker' in case of success or 'null' in case of error in worker
// The results in the array must be in the same order that the workers were created

import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const START_NUMBER = 10;
const WORCKER = 'worker.js';
const _dirname = dirname(fileURLToPath(import.meta.url));
const WORKER_PATH = resolve(_dirname, WORCKER);

const performCalculations = async () => {
    const CPUsNumber = cpus().length;

    const runWorker = (workerData) => {
        return new Promise((resolve) => {
            const worker = new Worker(WORKER_PATH, { workerData });

            worker.on('message', (data) => resolve({ status: 'resolved', data: data }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        });
    }

    const runCalculations = async () => {
        const workersPromises = Array.from({ length: CPUsNumber }, (_, index) => runWorker(START_NUMBER + index));
        return Promise.all(workersPromises);
    };

    try {
        const result = await runCalculations();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
};

await performCalculations();