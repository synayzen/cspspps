const Item = require("../Item");
const User = require("../../../Models/Database/User");
const InventoryManager = require("../InventoryManager");

class Pickaxe extends Item {
    constructor(){
        super("Pickaxe", ":pick: Kazma", "Maden kazmak için kullanabileceğin bir şey Akıllı..", "USEABLE", "pickaxe");

        this.Price = 5000;
        this.MaxUse = 25;
    }


    async use(id){
        let user = await User.findOrCreate(id);
        if(!user.Mine){
            user.Mine = {
                Pickaxe: {
                    Have: true,
                    Use: 0,
                    MaxUse: this.MaxUse
                },
                TotalMined: 0
            }
            await User.updateOne({Id: id}, {$set: {"Mine": user.Mine}}).exec();
        }
        else{
            user.Mine.Pickaxe.Use = 0;
            user.Mine.Pickaxe.MaxUse = this.MaxUse;
            user.Mine.Pickaxe.Have = true;
            await User.updateOne({Id: id}, {$set: {"Mine": user.Mine}}).exec();
        }
    }
}

module.exports = Pickaxe;