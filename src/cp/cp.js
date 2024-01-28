// TASK
// cp.js - implement function 'spawnChildProcess' that receives array 
// of arguments 'args' and creates child process from file 'script.js', passing 
// these 'args' to it. This function should create IPC-channel between 'stdin' and 
// 'stdout' of master process and child process:
// - child process 'stdin' should receive input from master process 'stdin'
// - child process 'stdout' should send data to master process 'stdout'

import { fork } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILE = 'script.js';
const FOLDER = 'files';
const _dirname = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = resolve(_dirname, FOLDER, FILE);

const spawnChildProcess = async (args) => {
    // FIRST VARIANT
    return fork(FILE_PATH, args);

    // SECOND VARIANT
    // const childProcess = fork(FILE_PATH, args, {silent: true});
    // process.stdin.pipe(childProcess.stdin);
    // childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument2'] );