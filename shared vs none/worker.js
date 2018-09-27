onmessage = (e) => {
    console.group('[worker]');
    console.log(`Data received from main thread: ${e.data}`);
    console.groupEnd();
};