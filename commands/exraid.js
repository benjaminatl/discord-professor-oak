module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("EX Raid Pass Info")
    
    .setColor(0x00AE86)
    .setDescription("Exclusive Raid Pass to join a special Raid Battle. You can use this pass only at the specified limited-time event.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-default.jpg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/exraidpass.png?raw=true")
    
    .setTimestamp()
    .addField("How To Receive An Ex-Raid Pass",
      "According to my research, you will need to raid at gyms located inside of in-game parks. I have found all Ex-Raid locations for below cities. You can use `!oak ` followed by any gym name *(no spaces in gym name)* listed below or more information and directions. *Ex: `!oak eastcarroll`*")
   
    .addField("Carrollton", "Starbucks, East Carroll", true)
  
    message.channel.send({embed});
  }