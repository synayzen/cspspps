const { Message, Client, MessageEmbed } = require("discord.js");
const InventoryManager = require("../../Managers/Inventory/InventoryManager");

const User = require("../../Models/Database/User");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    let victim = message.mentions.users.first() || message.author;

    let user = await User.findOrCreate(victim.id);
    if(!user.Coin){
        user.Coin = 0;
        user.save();
    }
    message.reply(`toplam **${InventoryManager.Number(user.Coin)}**<:dolar:843433771168694282> paran var.`)
}

module.exports.settings = {
    Commands: ["param", "puan", "puanım", "puanim"],
    Usage: "param",
    Description: "Üzerinde ne kadar puan olduğunu öğrenirsin.",
    Category: "Economy",
    cooldown: 5000,
    Activity: true
}