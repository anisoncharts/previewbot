const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.channel.id === "401395421769105431") {
        client.channels.get("401395421769105431").send("right");
        client.channels.get("401395421769105431").send(message.content.includes("https://"));
    
    }
});

client.login(process.env.BOT_TOKEN);
