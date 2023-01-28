import { Client, GatewayIntentBits  } from 'discord.js';
import *as dotenv from 'dotenv';


class Bot {
    constructor (client) {
        this.client = client;

        this.startBot();

        dotenv.config();
        this.client.login(process.env.TOKEN);
    }

    startBot () {
        this.client.on('ready', () => {
            console.log(`Бот вошел в сеть!`);
        });
    }
}

const bot = new Bot (new Client({ intents: [GatewayIntentBits.Guilds] }));