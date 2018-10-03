const flowerInterface = require('./abstractFlower');

class SunFlower extends flowerInterface {
    paint() {
        console.log('🌻');
    }
}

class Tulip extends flowerInterface {
    paint() {
        console.log('🌷');
    }
}

module.exports = {
    SunFlower,
    Tulip
};