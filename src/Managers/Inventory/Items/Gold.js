const Item = require("../Item");

class SourceGold extends Item {
    constructor(){
        super("SOURCE_GOLD", "<:gold:843449122204024863> Altın", "Güneş gözlüğünü hazırla çünkü altın değerli bir madendir. Çıktığı yer, bulunduğu ortam ve opaklığı epey göz alıcıdır.", "MINE", "gold");

        this.Sell = 40; 
        this.RarityMin = 0.51;
        this.RarityMax = 0.56;
    }
}

module.exports = SourceGold;