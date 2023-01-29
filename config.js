import *as dotenv from 'dotenv';

export const processStart = dotenv.config()

export const config = {
    token: process.env.TOKEN,
    appId: process.env.APPID,
    guildId: process.env.GUILDID
}

console.log(config);