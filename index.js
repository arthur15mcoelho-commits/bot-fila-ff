require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.once('ready', () => {
  console.log(`🤖 Bot ligado como ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
