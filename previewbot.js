const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.channel.id === "298059784987607040") {
        if (message.content.includes("https://") {
            
            client.channels.get("401395421769105431").send(message.content);
        } else {
            client.channels.get("401395421769105431").send("fail");
    }
});

client.login(process.env.BOT_TOKEN);
