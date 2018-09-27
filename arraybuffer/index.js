let ab = new ArrayBuffer(16),
    int32 = new Uint32Array(ab),
    int16 = new Uint16Array(ab);

for (var i = 0; i < int32.length; i++) {
    int32[i] = i * 2;
    }

console.log('32');
for (let i of int32) {
    console.log(i);
}

console.log('\n 16');
for (let i of int16) {
    console.log(i);
}

console.log(ab.transfer);

