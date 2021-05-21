const { Message, Client, MessageEmbed } = require("discord.js");
const User = require("../../Models/Database/User");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    let users = await User.find().sort({Coin: -1}).limit(15).exec();

    message.channel.send(new MessageEmbed()
    .setFooter("⚔ Assassins Developed by Synayzen İvar").setDescription(users.map((user, index) => `\`${index + 1}.\` <@${user.Id}>: <:dolar:843433771168694282> **${user.Coin}** parası var!`).join("\n")));
}

module.exports.settings = {
    Commands: ["parasıralaması"],
    Usage: "parasıralaması",
    Description: "En çok paraya sahip olan kullanıcıları listeler.",
    Category: "Economy",
    cooldown: 5000,
    Activity: true
}