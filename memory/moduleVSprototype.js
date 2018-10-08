Class1 = function () {}
Class1.prototype.foo = function () {
    log('foo');
}
Class1.prototype.bar = function () {
    log('bar');
}

// Module pattern
Class2 = function () {
    var foo = function () {
        log('foo');
    },
    bar = function () {
        log('bar');
    };

    return {
        foo: foo,
        bar: bar
    }
}

// Module pattern with cached functions
var FooFunction = function () {
    log('foo');
};
var BarFunction = function () {
    log('bar');
};

Class3 = function () {
    return {
        foo: FooFunction,
        bar: BarFunction
    }
}

// Iteration tests

// Prototypal
console.time('Prototypal');
var i = 1000,
    objs = [];
while (i--) {
    var o = new Class1()
    objs.push(new Class1());
    o.bar;
    o.foo;
}
console.timeEnd('Prototypal');
// 

console.time('Module pattern');
var i = 1000,
    objs = [];
while (i--) {
    var o = Class2()
    objs.push(Class2());
    o.bar;
    o.foo;
}
console.timeEnd('Module pattern');

// Module pattern with cached functions
console.time('Module pattern with cached functions');
var i = 1000,
    objs = [];
while (i--) {
    var o = Class3()
    objs.push(Class3());
    o.bar;
    o.foo;
}
console.timeEnd('Module pattern with cached functions');