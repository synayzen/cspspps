const { Message, Client, MessageEmbed } = require("discord.js");
const User = require("../../Models/Database/User");
const InventoryManager = require("../../Managers/Inventory/InventoryManager");

const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");


/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    let user = await User.findOrCreate(message.author.id);

    if (user.DailyCoin) {
        let nextDay = user.DailyCoin + (1000 * 60 * 60 * 2);
        if (Date.now() < nextDay) {
            return message.reply(`Yok öyle beleşçilik.. yeni puan almak için **${moment.duration((nextDay - Date.now())).format("HH:mm:ss")} saat** beklemen gerekiyor!`);
        }
    }
    User.updateOne({ _id: user._id }, { $set: { "DailyCoin": Date.now() }, $inc: { "Coin": 50 } }).exec();
    message.reply(`günlük <:dolar:843433771168694282> **${InventoryManager.Number(50)}** para aldın!`);
}

module.exports.settings = {
    Commands: ["günlükpara"],
    Usage: "günlükpara",
    Description: "Günlük alabileceğin puanı alırsın.",
    Category: "Economy",
    cooldown: 5000,
    Activity: true
}
