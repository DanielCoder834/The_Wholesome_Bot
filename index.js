console.log('Beep boop!');
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

// client.on('messageCreate', (msg) => {
// 	if(msg.content == 'ping') {
// 		msg.reply('pong');
// 	}
// })



client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;
  
	console.log(interaction);

	if (interaction.commandName === 'hey') {
	  return interaction.reply('hey!');
	}
  
	if (interaction.commandName === 'ping') {
	  return interaction.reply('Pong!');
	}
  });

client.login(process.env.TOKEN);



client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('😀');
}



