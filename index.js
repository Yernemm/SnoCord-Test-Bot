const SnoCord = require("./../SnoCord/index.js");
const config = require("./config.json");

let bot = new SnoCord.Bot();
bot.setConfig(config);

bot.addResponse((message) => {return true;}, (message, respond) => {
    console.log("oop")
    respond("fuck")
});
bot.init();
