exports.run = async (bot, message, args) => { // This function takes three arguments, the bot (client) message (full message with prefix etc.) and args (Arguments of command)
  message.reply(`Pong! ${bot.ping}`); // Sends message with bot latency and short message (Pong!)
} 

exports.help = {
  name: 'ping' // Insert your command's name here!
}
