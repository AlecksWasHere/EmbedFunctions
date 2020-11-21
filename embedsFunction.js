function embedOne() {
    let embed = new Discord.MessageEmbed()
            .setColor('#ffb347')
            .setTitle(`  ☃️   This is an embed   ☃️  `)
            .setDescription('O:')
            .setTimestamp()
    message.channel.send(embed);
}
module.exports = { embedOne }