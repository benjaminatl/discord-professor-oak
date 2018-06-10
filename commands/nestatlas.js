exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! The **Nest Atlas** helps both local and traveling Trainers worldwide discover nests. The map is updated and verified by Trainers in their said community and was created by **SilphRoad**. If you plan on traveling, check the map below to find out which Pokemon are nesting at your destination. https://thesilphroad.com/atlas#13.32/33.58055/-85.07418").catch(console.error);
}
