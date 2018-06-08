exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need directions to **East Carroll**. I have found that information for you, see below.").catch(console.error);,
    message.channel.send("https://goo.gl/maps/ZSCWZnXeKt32").catch(console.error);
}
