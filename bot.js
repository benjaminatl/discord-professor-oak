const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {  // This line of code reads all files from our "commands" folder
  if(err) console.error(err); // If there is an error, send it to console.

  let cmds = files.filter(f => f.split('.').pop() === 'js'); // This array will contain all files with 'js' extension
  
  if(cmds.lenght <= 0) { // If array contains less than, or exactly 0 objects, send message that there is no commands to load
    return console.log('No command files found...');
  }

  console.log(`Loading ${files.lenght} commands...`); // Optional, prints how many commands we are loading

  cmds.forEach((f, i) => { // Execute this code for every file from our array, f is files, and i stands for number
    const command = require(`./commands/${f}`); // Require file with command
    console.log(`${i + 1}: ${f} loaded!`); // When command is loaded, log it into console
    bot.commands.set(command.help.name, command); // Push command name and file with it's code to our Collection
  }); 
});

  const messageArray = message.content.split(/\s+/g); // Message split into separate objects for example message containing 'Hello there!' would look like this: ["Hello", "there!"]
  const command = messageArray[0]; // Command with prefix
  const args = messageArray.slice(1); // Arguments given to command
  let cmd = bot.commands.get(command.slice(prefix.length)); // We need to get command from our collection

  if(command.startsWith(prefix)){ // If command object starts with prefix
    if(cmd) cmd.run(bot, message, args); // If cmd object isn't null, execute command code
    console.log(`ExampleBOT: ${message.author.username}#${message.author.discriminator} used command '${command}' on ${message.guild.name}`); // We can log it to console
  }
  
  
bot.login(process.env.BOT_TOKEN);
