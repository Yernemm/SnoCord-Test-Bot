const SnoCord = require("./../SnoCord/index.js");
const config = require("./config.json");

let bot = new SnoCord.Bot();
bot.setConfig(config);

bot.addResponse((message) => {return true;}, (message, respond) => {
    console.log("oop")
    respond("i like bears\ni like bears")
}, -1);

bot.addResponse(/^(fuck (you )?gene)/i, (m, r) => r("ay fuck you too"))

bot.addResponse(/retard/ig,(m,r)=>r("what the fuck did you just fucking say") )

bot.init();
