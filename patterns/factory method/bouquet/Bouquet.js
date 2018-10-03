class Bouquet {
    show() {
        let flower = this.createFlower();

        flower.paint();
        flower.paint();
        flower.paint();
    }

    createFlower() {
        return {};
    }
}

module.exports = Bouquet;