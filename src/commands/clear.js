const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js'); // PermissionsBitField'ı içe aktarın

module.exports = {

    data: new SlashCommandBuilder()

        .setName('temizle')

        .setDescription('Belirtilen sayıda mesajı temizler.')

        .addIntegerOption(option =>

            option.setName('miktar')

                .setDescription('Temizlenecek mesaj sayısı')

                .setRequired(true)),

    async execute(interaction) {

        // Kullanıcının "Mesajı Yönet" yetkisini kontrol et
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            return interaction.reply('Bu komutu kullanabilmek için "Mesajı Yönet" yetkinizin olması gerekiyor.');
        }

        const amount = interaction.options.getInteger('miktar');

        if (amount < 1 || amount > 100) {
            return interaction.reply('1 ile 100 arasında bir sayı girmelisiniz.');
        }

        await interaction.channel.bulkDelete(amount, true);

        await interaction.reply(`${amount} mesaj silindi.`);

    },

};
