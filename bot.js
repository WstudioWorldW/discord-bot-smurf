import { Client, GatewayIntentBits  } from 'discord.js';
import *as dotenv from 'dotenv';


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Бот вошел в сеть!`);
});

dotenv.config();
client.login(process.env.TOKEN);