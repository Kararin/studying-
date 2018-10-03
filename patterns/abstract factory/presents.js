const abstractPresent = require('./abstractPresent'),
      SunFlower = require('./flower/flowers').SunFlower,
      Tulip =  require('./flower/flowers').Tulip,
      SimpleRibbon = require('./ribbon/ribbons').Ribbon,
      HeartRibbon = require('./ribbon/ribbons').HeartRibbon;

class SimplePresent extends abstractPresent {
    addFlower() {
        return new SunFlower();
    }

    tie() {
        return new SimpleRibbon();
    }
}

class HeartPresent extends abstractPresent {
    addFlower() {
        return new Tulip();
    }

    tie() {
        console.log(HeartRibbon)
        return new HeartRibbon();
    }
}

module.exports = {
    HeartPresent,
    SimplePresent
};