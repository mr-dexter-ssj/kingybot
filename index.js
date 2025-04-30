/*import {dotenv} from 'dotenv';
import {Client, GatewayIntentBits} from 'discord.js';
dotenv.config()
*/

/*import { 
    Client,
    GatewayIntentBits,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from 'discord.js';
*/

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Project is running!");
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
        Guilds,
        GuildMessages,
        GuildMembers,
        DirectMessages,
    ],
});


client.on("message", message => {
    if(message.content === "optigui") {
        message.channel.send("Insert links!")
    }
})


client.login(process.env.token)