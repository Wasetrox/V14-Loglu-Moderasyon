const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('mute')

        .setDescription('Mutes a user.')

        .addUserOption(option =>

            option.setName('target')

                .setDescription('The user to mute')

                .setRequired(true)),

    async execute(interaction) {

        const target = interaction.options.getUser('target');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) return interaction.reply('User not found.');

        const muteRole = interaction.guild.roles.cache.find(role => role.name === 'Muted');

        if (!muteRole) return interaction.reply('Mute role not found.');

        await member.roles.add(muteRole);

        await interaction.reply(`${target.tag} has been muted.`);

    },

};