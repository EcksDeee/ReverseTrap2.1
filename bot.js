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
        } else if (command === 'help') {
            msg.channel.send("ReverseTrap [Owner: F1R3SHAD0W]\nBeta\n:>help: Lists possible commands\n:>ping: Says pong..What did u expect??\n:>gifhelp: Lists possible gifs\n:>status: OML THAT TOOK FOREVER USE WISELY")
        } else if (command === 'stickman') {
            msg.channel.send("", {file: "https://media0.giphy.com/media/jSXkVsYaQxw6k/200.gif"});
        } else if (command === 'rekt') {
            msg.channel.send("rekt m8", {file: "http://i.imgur.com/olx0xRF.gif"});
        } else if (command === 'ganked') {
            msg.channel.send("", {file: "https://i.gifer.com/U3Wn.gif"});
        } else if (command === 'gifhelp') {
            msg.channel.send(":>noscope: Noscopes kids\n:>stickman: Stick people beat each other up\n:>rekt: Use ONLY when someone gets toasted\n:>ganked: Partying gets you beat up")
        } else if (command === 'status') {
 		          	if (botstatus === true) {
 				                msg.channel.send('ReverseTrap is currently: **ENABLED**');
 			          } else if (botstatus === false) {
 				                msg.channel.send('ReverseTrap is currently: **DISABLED**');
 			          } else {
 				                return;
 		  	        }
        } else {
            return;
        }
    } else {
        return;
    }
});

client.login(config.token);
