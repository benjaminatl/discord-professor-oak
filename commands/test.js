exports.run = (client, message, args) => {
  
  let messagecount = parseInt(args[1]) || 1;

var deletedMessages = -1;

message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
    messages.forEach(m => {
        if (m.author.id == bot.user.id) {
            m.delete().catch(console.error);
            deletedMessages++;
        }
    });
}).then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
            .then(m => m.delete(2000));
}).catch(console.error);
}