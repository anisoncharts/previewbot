const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
    console.log('I am ready!');
});

client.on('messageCreate', message => {
    if (message.channel.id === "298059784987607040" && message.content.includes("http")) {
	archive = client.channels.cache.get('454601350072762378');
        archive.send(message.content);
    }
  
    if (message.channel.id === "1016602103604584528" && message.content.includes("http")) {
	archive = client.channels.cache.get('454601350072762378'); 
	archive.send(message.content);
    }

    if (message.channel.id === "454601350072762378" && message.crosspostable()) {
	message.crosspost()
		.then(() => console.log('Crossposted message'))
    		.catch(console.error);
    }
});

client.login(process.env.BOT_TOKEN);
