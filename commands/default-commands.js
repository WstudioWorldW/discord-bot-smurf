import { SlashCommandBuilder } from "discord.js";
import { REST, Routes } from 'discord.js';

import {processStart, config} from '../config.js';


export class Commands {
    constructor (command) {
        this.name = command.name;
        this.descripton = command.description;

        this.regisrtrationCommands(this.name, this.descripton);
    }

    regisrtrationCommands (name, description) {
        if (name.length === description.length) {
            const arrayCommands = [];

            for (let i = 0; i < name.length; i++) {
                const command = new SlashCommandBuilder()
                    .setName(name[i])
                    .setDescription(description[i])
                    .toJSON();

                arrayCommands.push(command);
            }
    
            const rest = new REST({ version: 10 }).setToken(config.token);
    
            rest.put(Routes.applicationGuildCommands(config.appId, config.guildId), { body: arrayCommands })
                .then(() => console.log('Команды успешно зарегистрированны'))
                .catch(console.error);
        }
        else {
            console.log('У одной из комманд нет имени или описания');
        }
    }
}

const сommands = new Commands({
    name: ['test', 'start', 'help'],
    description: [
        'Test command',
        'Start command',
        'Help command'
    ]
});