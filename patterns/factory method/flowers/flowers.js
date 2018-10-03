const FlowerInterface = require('./FlowerInterface');

class Cherry extends FlowerInterface {
    paint() {
        console.log('🌸');
    }
}

class Rose extends FlowerInterface {
    paint() {
        console.log('🌹');
    }
}

module.exports = {
    Rose,
    Cherry
};