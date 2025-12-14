require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Servidor fake só pra manter o Render feliz
app.get('/', (req, res) => {
  res.send('Bot online');
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor HTTP ativo na porta ${PORT}`);
});

// Bot Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`🤖 Bot ligado como ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
