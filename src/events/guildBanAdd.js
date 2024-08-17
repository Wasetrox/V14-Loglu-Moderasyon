const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'guildBanAdd',

    async execute(ban) {

        const logChannel = ban.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Member Banned')

            .setDescription(`${ban.user.tag} has been banned.`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};