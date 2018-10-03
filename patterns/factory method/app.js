const Roses = require('./bouquet/bouquets').Roses,
    Cherries = require('./bouquet/bouquets').Cherries;
    
let random = Math.round(Math.random()),
    bouquet = random ? new Roses() : new Cherries();


bouquet.show();