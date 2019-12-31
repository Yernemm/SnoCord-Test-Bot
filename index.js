const SnoCord = require("./../SnoCord/index.js");
const config = require("./config.json");

let bot = new SnoCord.Bot();
bot.setConfig(config);

bot.addResponse(() => {return true;}, (r) => {
    console.log("oop")
    r.respond("i like bears\ni like bears")
}, -1);



bot.addResponse(/retard/ig,(m,r)=>r("what the fuck did you just fucking say") )
bot.addResponse(/^(fuck you gene)/i, (r) => r.respond("ay fuck you too"))

bot.addCommand("help",(r)=>{r.respond(`I won't help you, ${r.message.author}`)})

bot.addCommandHandler('./commands/');



bot.init();
