const Discord = require('discord.js');
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');

const client = new Discord.Client();

var botstatus = true;

require('events').EventEmitter.defaultMaxListeners = Infinity;

const music = new Music(client, {
    youtubeKey: process.env.ytapikey, //Youtube Dev API3 Key
    prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'default', defVolume: 100, anyoneCanSkip: true, messageHelp: true,
    botOwner: '342681780635172864', helpCmd: 'assist', playCmd: 'play',    skipCmd: 'skip', queueCmd: 'queue',
    pauseCmd: 'pause', resumeCmd: 'resume', volumeCmd: 'vol', leaveCmd: 'leave', clearCmd: 'clear', setCmd: 'set',
    loopCmd: 'loop', searchCmd: 'search', ownerCmd: 'owner', enableQueueStat: true});

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
    const pref = msg.content.slice(0, 2);
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (pref === config.prefix) {

        if (command === 'ping' && botstatus) {
            msg.channel.send("Pong!");
        } else if (command === 'noscope') {
            msg.channel.send("", {file: "https://media2.giphy.com/media/UJLtz0z7VrAIM/200.gif"});
        } else if (command === 'help') {
            msg.channel.send("ReverseTrap [Owner: F1R3SHAD0W]\nBeta\n:>help: Lists possible commands\n:>ping: Says pong..What did u expect??\n:>gifhelp: Lists possible gifs\n:>status: Not Ready\n:>musicCMDS");
        } else if (command === 'stickman') {
            msg.channel.send("", {file: "https://media0.giphy.com/media/jSXkVsYaQxw6k/200.gif"});
        } else if (command === 'rekt') {
            msg.channel.send("rekt m8", {file: "http://i.imgur.com/olx0xRF.gif"});
        } else if (command === 'ganked') {
            msg.channel.send("", {file: "https://i.gifer.com/U3Wn.gif"});
        } else if (command === 'gifhelp') {
            msg.channel.send(":>noscope: Noscopes kids\n:>stickman: Stick people beat each other up\n:>rekt: Use ONLY when someone gets toasted\n:>ganked: Partying gets you beat up");
		}
	}
	
    if (pref === config.prefix) {
		if (command === 'enable') {
			if (botstatus === false) {
				botstatus = true;
				msg.channel.send(':white_check_mark: ReverseTrap is now **ENABLED**');
			} else if (botstatus === true) {
				msg.channel.send(':white_check_mark: ReverseTrap is already **ENABLED**');
			} else {
				return;
			}
		} else if (command === 'disable') {
			if (botstatus === true) {
				botstatus = false;
				msg.channel.send(':x: ReverseTrap is now **DISABLED**');
			} else if (botstatus === false) {
				msg.channel.send(':x: ReverseTrap is already **DISABLED**');
			} else {
				return;
			}
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

client.login(process.env.token);
