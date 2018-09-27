//creating mixin
let Speak = (superClass) => class extends superClass {
    loud() {
        console.log('loud may!');
    }

    quiet() {
        console.log('quiet');
    }
}

class Cat {
    constructor(name = '', color = '') {
        //creating private variables
        let sn = Symbol.for('name'),
            sc = Symbol.for('color');

        this[sn] = name;
        this[sc] = color;
    }

    get catName() {
        return this[Symbol.for('name')];
    }

    get catColor() {
        return this[Symbol.for('color')];
    }
}

class CoolCat extends Speak(Cat) {};

let myr = new CoolCat('myr', 'white');

console.log(myr.color);
console.log(myr.catColor);

console.log(myr.name);
console.log(myr.catName);

console.log(myr.loud());
