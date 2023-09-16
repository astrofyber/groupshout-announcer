const aoijs = require("aoi.js") // Made by CallMeFyber on Github || v6 aoi.js

const bot = new aoijs.AoiClient({ 
    token: "BOT TOKEN", // CHANGE YOUR BOT TOKEN
    prefix: "BOT PREFIX", //CHANGE YOUR BOT PREFIX
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers", "GuildPresences"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

console.log('Code working! Made by Fyber#7177')
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/") // COMMANDS LOADER

bot.status({
    text: 'github @CallMeFyber', // BOT STATUS # CREDITS
    type: 'WATCHING',
    status: 'online',
    time: 15
});

bot.variables({

	// CONFIGURE YOUR SHOUT POSTER:
	groupid: "group id", // PASTE YOUR GROUP ID
	channel: "channel id", // PASTE YOUR CHANNEL ID

	// DO NOT TOUCH THE FOLLOWING VARS:
  	shoutm: "yes",  // DO NOT TOUCH
  	same: "no", // DO NOT TOUCH
})
