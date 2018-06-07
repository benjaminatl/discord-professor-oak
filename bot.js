const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  } else
  if (command === 'test') {
    message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}})};

client.login(process.env.BOT_TOKEN);
