const Item = require("../Item");

class SourceDiamond extends Item {
    constructor(){
        super("SOURCE_DIAMOND", "<a:elmas11:839090496214269952> Elmas", "Parlak, parlak- ÇOK PARLAK!", "MINE", "diamond");

        this.Sell = 110;
        this.RarityMin = 0.5;
        this.RarityMax = 0.52;
    }
}

module.exports = SourceDiamond;