const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.channel.id === "298059784987607040") {
        client.channels.get("401395421769105431").send("working")
        client.channels.get("401395421769105431").send(message.content)
    }
});

client.login(process.env.BOT_TOKEN);
