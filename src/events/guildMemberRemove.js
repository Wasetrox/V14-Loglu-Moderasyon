const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'guildMemberRemove',

    async execute(member) {

        const logChannel = member.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Member Left')

            .setDescription(`${member.user.tag} has left the server.`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};