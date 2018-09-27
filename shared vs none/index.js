//not shared
const w = new Worker('worker.js');
let n = 9;
w.postMessage(n);
n = 1;


//shared
const w1 = new Worker('workerShared.js');
buff = new SharedArrayBuffer(1);
var arr = new Int8Array(buff);
/* setting data */
arr[0] = 9;
/* sending the buffer (copy) to worker */
w1.postMessage(buff);
arr[0] = 1;

w1.onmessage = (e) => {
    console.group('[main]');
    console.log(`Updated data received from worker thread: ${arr[0]}`);
    console.groupEnd();
};