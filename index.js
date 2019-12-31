const SnoCord = require("./../SnoCord/index.js");
const SnoDB = require("snodb");
const config = require("./config.json");

let db = new SnoDB('./db.sqlite')

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

bot.addCommand('write', (r)=>{
    let table = r.args[0]
    let key = r.args[1]
    let data = r.argsText.substring(table.length + key.length + 2);

    db.setTo(table,key,data).then(
        r.respond("Written.")
    )
})

bot.addCommand('read', (r)=>{
    let table = r.args[0]
    let key = r.args[1]

    db.getFrom(table,key).then(
       (data=>{r.respond(data)})
    )
})



bot.init();
