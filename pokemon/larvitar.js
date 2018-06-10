module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Larvitar - #246")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("© Professor Oak", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
 
  .addField("!oak larvitar100", "100% CP search.", true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
}