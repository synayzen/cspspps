const Item = require("../Item");

class SourceCoal extends Item {
    constructor(){
        super("SOURCE_COAL", "<:kmr:843451583891111966> Kömür", "Bu bir kömür. Çok işlevsel bir şey gibi görünebilir ancak görüşünü sizi yanıltmasın.", "MINE", "coal");

        this.Sell = 2;
        this.RarityMin = 0;
        this.RarityMax = 0.3;
    }
}

module.exports = SourceCoal;