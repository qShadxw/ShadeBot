// Imports
const { Client, Events, GatewayIntentBits } = require("discord.js");

// Client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ]});
const replies = ["Listen here you fart sniffing bottom humping grass eating one sock havin ass", "Fuck you"];

// Function which returns a whole number from min max
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ready
client.once(Events.ClientReady, listener => {
    console.log(`Logged in as ${listener.user.tag}`);
});

// Message back the user when they tag the bot
client.on(Events.MessageCreate, async message => {
    console.log(`[${message.author.username} (${message.author.id}) #${message.channel.name}]: ${message.content}`);

    if (message.author.bot) return;
    if (message.content !== `<@${process.env.client_id}>`) return;

    let random = randomInteger(0, replies.length-1);
    message.channel.send(replies[random]);
});

// Login
client.login(process.env.bot_token);