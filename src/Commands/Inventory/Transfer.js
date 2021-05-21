const { Message, Client, MessageEmbed } = require("discord.js");
const InventoryManager = require("../../Managers/Inventory/InventoryManager");

const User = require("../../Models/Database/User");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    let value = Number(args[1]);
    if(isNaN(value)) return message.reply(`sadece sayı girebilirsin!`);
    value = value.toFixed(0);

    if(value <= 0) return message.reply("Mal mısın?.. girdiğin sayı 0'dan küçük olamaz.");

    let victim = message.mentions.users.first();
    if(!victim) return message.reply("birini etiketlemelisin.")
    let user = await User.findOrCreate(message.author.id);

    if(user.Coin < value) return message.reply("<:cryy:836248972393840700> yeterli paran yok :(");

    user.Coin -= value;
    await user.save();

    await User.updateOne({Id: victim.id}, {$inc: {"Coin": value}}).exec();
    message.reply(`${victim} kişisine <:dolar:843433771168694282> **${value}** para gönderdin.`)
}

module.exports.settings = {
    Commands: ["paraat", "eft", "ibanınayolla"],
    Usage: "eft @user <Miktar>",
    Description: "Etiketlemiş olduğun kişiye belirtmiş olduğun kadar para yollarsın.",
    Category: "Economy",
    cooldown: 5000,
    Activity: true
}