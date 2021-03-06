
const Item = require("./Item");
const UserItem = require("./UserItem");

class InventoryManager {
    static Items = [];

    static Numbers = [
        "<a:Asssassins_0:841387614929420328>",
        "<a:Assassins_1:841387642468827197>",
        "<a:Assassins_2:841387668143079435>",
        "<a:Assassins_3:841387694416592936>",
        "<a:Assassins_4:841387721633169459>",
        "<a:Assassins_5:841387749176639541>",
        "<a:Assassins_6:841387775240699944>",
        "<a:Assassins_7:841387802109542400>",
        "<a:Assassins_8:841387896459624488>",
        "<a:Assassins_9:841387921100767305>"
    ];

    static Number(num){
        let str = "";
        let numbers = String(num).split('');
        numbers.forEach(number => {
            str += this.Numbers[Number(number)];
        });
        return str == "" ? numbers[0] : str;
    }

    /**
     * @param {String} name
     * @returns {Item} 
     */
    static RandomItemByName(name){
        let items = this.FindItems(name);
        let item = items[Math.floor(Math.random() * items.length)];
        return item;
    }
    /**
     * @param {String} id
     * @param {Number} count
     * @returns {UserItem} 
     */
    static CreateUserItem(id, count){
        return {Id: id, Count: count};
    }

    /**
     * @param {String} id
     * @returns {Item}
     */
    static FindItem(id) {
        return this.Items.find(item => item.Id == id);
    }

    /**
     * @param {Array} array
     * @param {String} id
     * @returns {UserItem}
     */
    static FindItemToArray(array, id) {
        return array.find(item => item.Id == id);
    }

    /**
     * @param {Array} array
     * @param {String} name
     * @returns {Array<UserItem>}
     */
    static FindItemsToArray(array, name) {
        return array.filter(item => item.Id.includes(name));
    }

    /**
     * @param {String} name
     * @returns {Array<Item>}
     */
    static FindItems(name) {
        return this.Items.filter(item => item.Id.includes(name));
    }

    static FindItemsToType(name){
        return this.Items.filter(item => item.Type == name);
    }

    static async addItemOfInventory(user, item, count){
        let element = user.Inventory.find(e => e.Id == item.Id);
        if(element) element.Count += count;
        else user.Inventory.push(this.CreateUserItem(item.Id, count));
        user.markModified("Inventory");

        await user.save((err, res) => {
            if(err) console.error(err);
        });
    }

    static async removeItemOfInventory(user, item, count){
        let element = user.Inventory.find(e => e.Id == item.Id);
        if(element) {
            user.markModified("Inventory");
            element.Count -= count;
            
            if(element.Count <= 0){
                let index = user.Inventory.findIndex(e => e.Id == element.Id);
                user.Inventory.splice(index, 1);
            }
            await user.save((err, res) => {
                if(err) console.error(err);
            });
        }
    }
}

module.exports = InventoryManager;