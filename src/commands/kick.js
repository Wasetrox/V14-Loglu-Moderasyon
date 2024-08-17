const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('kick')

        .setDescription('Kicks a user from the server.')

        .addUserOption(option =>

            option.setName('target')

                .setDescription('The user to kick')

                .setRequired(true)),

    async execute(interaction) {

        const target = interaction.options.getUser('target');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) return interaction.reply('User not found.');

        await member.kick();

        await interaction.reply(`${target.tag} has been kicked.`);

    },

};