import { SlashCommandBuilder } from "discord.js";
import { REST, Routes } from 'discord.js';

import {processStart, config} from '../config.js';


export class Commands {
    constructor (commandName, descripton) {
        this.name = commandName;
        this.descripton = descripton;

        this.regisrtrationCommands(this.name, this.descripton);
    }

    regisrtrationCommands (name, description) {
        const command = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description)
            .toJSON()

        const rest = new REST({ version: 10 }).setToken(config.token);

        rest.put(Routes.applicationGuildCommands(config.appId, config.guildId), { body: [command] })
            .then(() => console.log('Команды успешно зарегистрированны'))
            .catch(console.error);
    }
}

const testCommand = new Commands('test', 'test command');
const startCommand = new Commands('start', 'start command');