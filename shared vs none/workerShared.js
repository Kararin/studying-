onmessage = (e) => {
    let arr =  new Int8Array(e.data);
    console.group('[worker]');
    console.log(`Data received from main thread: ${arr[0]}`);
    console.groupEnd();

    arr[0] = 7;
    postMessage('');
};