const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    var channel = client.channels.get("454601350072762378");
    console.log(channel);
});

client.on('message', message => {
    if (message.channel.id === "298059784987607040" && message.content.includes("http")) {
        client.channels.get("454601350072762378").send(message.content);
    }
    
    if (message.channel.id === "311143593018392578" && message.content.includes("http") && message.author.id != "203303038243438592") {
        client.channels.get("456302366556291072").send(message.content);
    }
});

client.login(process.env.BOT_TOKEN);
