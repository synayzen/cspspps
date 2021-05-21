const client = global.Client;
const { Client } = require("discord.js");
const Config = require("./Configuration/Config.json");

const EM = require("./Managers/EventManager");

require("./Managers/InviteManager");

EM.addEvent("CommandHandler");
EM.addEvent("Timer.js");

EM.addEvent("Stat/OnMessageStat");
EM.addEvent("Stat/OnVoiceReady");
EM.addEvent("Stat/OnVoiceStateUpdate");

EM.addEvent("Penal/OnMemberUpdate");
EM.addEvent("Penal/OnReady");
EM.addEvent("Penal/OnVoiceStateUpdate");

EM.addEvent("Misc/Welcome.js");
EM.addEvent("Misc/PrivateChannels.js");
EM.addEvent("Market/CaseDrop.js");
EM.addEvent("Friends/OnVoiceStateUpdate");
EM.addEvent("Friends/OnVoiceReady");

EM.addEvent("Tag/UserUpdate");


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus AKIYORR")

client.user.setActivity(`Synayzen lvar 💕 Assassin's Creed Family`, {
type: "STREAMING",
url: "https://www.twitch.tv/synayzen"})
    .then(presence => console.log(`HAZIR KAPTAN ASSASSİNS!  ${presence.game ? presence.game.none : '🛠'}`))
    .catch(console.error);
});

require("./Utils/Helper");
require("./Utils/Patch");

client.on("ready", () => {
    client.channels.cache.get("801730967910875188").join()
    })

    
client.login(Config.Token).catch(console.error);





