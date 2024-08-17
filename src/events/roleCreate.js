const { EmbedBuilder } = require('discord.js');

const config = require('../../config.json');

module.exports = {

    name: 'roleCreate',

    async execute(role) {

        const logChannel = role.guild.channels.cache.get(config.logChannelId);

        if (!logChannel) return;

        const embed = new EmbedBuilder()

            .setTitle('Role Created')

            .setDescription(`A new role has been created: ${role.name}`)

            .setTimestamp();

        logChannel.send({ embeds: [embed] });

    },

};