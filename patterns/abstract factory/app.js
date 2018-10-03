const HeartPresent = require('./presents').HeartPresent,
    SimplePresent = require('./presents').SimplePresent;

class PresentMaker {
    constructor(factory) {
        this.factory = factory;
        this.flower = null;
        this.ribbon = null;
    }

    createPresent() {
        this.flower = this.factory.addFlower();
        this.ribbon = this.factory.tie();
    }

    view() {
        this.flower.paint();
        this.flower.paint();
        this.flower.paint();
        this.ribbon.tie();
    }
}

const factory = new SimplePresent();
      presentMaker = new PresentMaker(factory);

presentMaker.createPresent();
presentMaker.view();