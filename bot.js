const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = Infinity;

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {

        if (command === 'ping') {
            msg.channel.send("Pong!");
        } else if (command === 'noscope') {
            msg.channel.send("", {file: "https://media2.giphy.com/media/UJLtz0z7VrAIM/200.gif"});
        } else {
             return;
        }
    } else {
        return;
    }
});
  
        } else if (command === 'help') {
            msg.channel.send("ReverseTrap [Owner: F1R3SHAD0W]"
                             "Beta"
                             "^help: Lists possible commands");
        } else {
             return;
        }
    } else {
        return;
    }
});
                        
client.login(config.token);
