const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

global.apikey = {'https://hermit-web.herokuapp.com': 'free'}
global.apiUrl = 'https://hermit-web.herokuapp.com/'

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)
module.exports = {
	VERSION: 'v3.0.0', 
    SESSION_ID: process.env.SESSION_ID || '27_8_session_id_4a4b_bba5_8f_LyFE',
    MODE: process.env.MODE || 'public',
    HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
    SEND_READ: process.env.READ_COMMAND || false, 
    MSG_LOG: convertToBool(process.env.LOG_MSG) || false, 
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    BOT_NAME: process.env.BOT_NAME || '🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸',
    BOT_INFO: process.env.BOT_INFO || '🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸;🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸;94741671668;https://i.postimg.cc/ftT69xrC/Didula.webp',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined ? '🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸;᳆⃟ʜᷘᴜᷧɴᷢᴛⷦᴇʀꜱ™৫ ᴅɪɴɪʏᴀᜰ;https://i.postimg.cc/ftT69xrC/Didula.webp' : process.env.AUDIO_DATA,
    STICKER_DATA: process.env.STICKER_DATA === undefined ? '🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸;᳆⃟ʜᷘᴜᷧɴᷢᴛⷦᴇʀꜱ™৫ ᴅɪɴɪʏᴀᜰ' : process.env.AUDIO_DATA,
    ERROR_MESSAGE: convertToBool(process.env.ERROR_MESSAGE) || true, 
    WARN: process.env.WARN || '4',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
       },
       DATABASE_URL: DATABASE_URL,
       DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
       RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
       ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
       SUDO: process.env.SUDO || '94741671668,0,972528277755',
       DEBUG: DEBUG
};


