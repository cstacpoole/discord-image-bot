const { Client, Attachment } = require('discord.js')
const client = new Client()

require('dotenv').config();

// Import the native fs module
const fs = require('fs');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!phil') {

    var files = fs.readdirSync('./images');
    let chosenFile = files[Math.floor(Math.random() * files.length)]; 
    console.log(chosenFile);

    const buffer = fs.readFileSync('./images/' + chosenFile);
    msg.channel.send(new Attachment(buffer, chosenFile));
  }
});

client.login(process.env.DISCORD_TOKEN);

