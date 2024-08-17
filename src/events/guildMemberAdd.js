const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'guildMemberAdd',

    async execute(member) {

        const logChannel = member.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Member Joined')

            .setDescription(`${member.user.tag} has joined the server.`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};