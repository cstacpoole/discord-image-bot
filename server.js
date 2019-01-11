require('dotenv').config();

const { Client, Attachment } = require('discord.js')
const client = new Client()
const botCommand = process.env.BOT_COMMAND || '!image';

// Import the native fs module
const fs = require('fs');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === botCommand) {

    var files = fs.readdirSync('./images');
    let chosenFile = files[Math.floor(Math.random() * files.length)]; 
    console.log(chosenFile);

    const buffer = fs.readFileSync('./images/' + chosenFile);
    msg.channel.send(new Attachment(buffer, chosenFile));
  }
});

client.login(process.env.DISCORD_TOKEN);

