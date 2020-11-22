/*
    This project uses my Command Handler (https://github.com/AlecksWasHere/RandomHandler), if you like any of my projects; please put a star, thanks for coming by. :)
*/

const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    //all you gotta do is make commands now, in ../cmds folder.

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
        let reply = new Discord.MessageEmbed()
            .setColor('#ffb347')
            .setTitle(`  ☃️   A bot   ☃️  `)
            .setDescription('An error happened; the command has failed to run. Contact the bot Administrator.')
            .setTimestamp()
        message.channel.send(reply);
    }
});

client.login(config.token);