console.time('uninitialized');
let a = new Array(),
    b = 0;
for (b = 0; b < 1000; b++) {
  a[0] = b;  // Oh no!
}
console.timeEnd('uninitialized');

console.time('initialized');
let a1 = new Array();
a1[0] = 0;
for (b = 0; b < 1000; b++) {
  a[0] = b;  // Much better! 2x faster.
}
console.timeEnd('initialized');

console.time('assign');
let a2 = new Array();
a2[0] = 77;   // Allocates
a2[1] = 88;
a2[2] = 0.5;   // Allocates, converts
a2[3] = true; // Allocates, converts
console.timeEnd('assign');

console.time('assign');
let a3 = [77, 88, 0.5, true];
console.timeEnd('assign');
