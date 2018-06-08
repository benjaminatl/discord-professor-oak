exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need directions to the gym **East Carroll**. I have found that information for you, https://goo.gl/maps/ZSCWZnXeKt32").catch(console.error);
}
