exports.run = (bot, message, Discord) => {
    const embed = new Discord.RichEmbed()
      .setTitle("Hello!")
      .setDescription(`My name is ${bot.user}, and I'm bot!`)
    message.channel.sendMessage(embed);
  }