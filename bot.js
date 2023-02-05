import { Client, GatewayIntentBits, Events } from 'discord.js';
import { config, processStart } from './config.js';
import {commandsMessage} from './apps/database/commands-message.js';


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


class ClientCommandMessage extends Bot {
    constructor (client, command) {
        super(client);

        this.client = this.client;

        this.commandName = command.name;
        this.message = command.message;

        this.arrayCommands = this.commandName.length === this.message.length ? this.commandName.length : '';

        this.sendMessageCommand(this.commandName, this.message, this.arrayCommands);
    }
    sendMessageCommand (name, message, arrayCommands) {
        return this.client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isChatInputCommand()) return;
            
            for (let i = 0; i < arrayCommands; i++) {
                if (interaction.commandName === name[i]) {
                    await interaction.reply(message[i]);
                }
            }
        });
    }
}


const bot = new Bot (new Client({ 
    intents: [GatewayIntentBits.Guilds] 
}));

for (let i = 0; i < commandsMessage.length; i++) {
    const clientCommandMessage = new ClientCommandMessage ((
        new Client({ 
            intents: [GatewayIntentBits.Guilds] 
        })),
        {
            name: [commandsMessage[i].name],
            message: [commandsMessage[i].message]
        }
    )
}