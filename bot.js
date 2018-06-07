const discord = require('discord.js');
const handles = require('discord-handles');
const config = require("./config.json");

const client = new discord.Client();
const handler = new handles.Client(client);



client.login(process.env.BOT_TOKEN);
