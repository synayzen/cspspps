const Item = require("../Item");

class CoinCrate extends Item {
    constructor(){
        super("COIN_CRATE", "<:pngwing:843450855024885760> Altın Sandık", "Bir miktar para çıkarmak için kullanılır.", "CRATE", "coincrate");

        this.Min = 50;
        this.Max = 150;
    }

    /**
     * @param {Number} min 
     * @param {Number} max
     * @returns {Number}
     */
    open(){
        let rnd = Math.floor(Math.random() * (this.Max - this.Min) + this.Min);
        return rnd;
    }
}

module.exports = CoinCrate;