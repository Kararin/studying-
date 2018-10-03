const RibbonInterface = require('./abstractRibbon');

class Ribbon extends RibbonInterface {
    tie() {
        console.log('\u1F380');
    }
}

class HeartRibbon extends RibbonInterface {
    tie() {
        console.log('\u1F49D');
    }
}

module.exports = {
    Ribbon,
    HeartRibbon
};