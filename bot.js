import { Client, GatewayIntentBits  } from 'discord.js';
import { config, processStart } from './config.js';


class Bot {
    constructor (client) {
        this.client = client;
        
        this.startBot();
        this.client.login(config.token);
    }

    startBot () {
        this.client.on('ready', () => {
            console.log(`Бот вошел в сеть!`);
        });
    }
}

const bot = new Bot (new Client({ intents: [GatewayIntentBits.Guilds] }));

