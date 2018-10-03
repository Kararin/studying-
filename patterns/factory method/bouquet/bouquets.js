const Bouquet = require('./Bouquet'),
    Rose = require('../flowers/flowers').Rose,
    Cherry = require('../flowers/flowers').Cherry;


class Roses extends Bouquet {
    createFlower() {
        return new Rose();
    }
}

class Cherries extends Bouquet {
    createFlower() {
        return new Cherry();
    }
}

module.exports = {
    Roses,
    Cherries
};