const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('clear')

        .setDescription('Clears a specified number of messages.')

        .addIntegerOption(option =>

            option.setName('amount')

                .setDescription('Number of messages to clear')

                .setRequired(true)),

    async execute(interaction) {

        const amount = interaction.options.getInteger('amount');

        if (amount < 1 || amount > 100) {

            return interaction.reply('You need to input a number between 1 and 100.');

        }

        await interaction.channel.bulkDelete(amount, true);

        await interaction.reply(`Cleared ${amount} messages.`);

    },

};