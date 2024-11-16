const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js'); // PermissionsBitField'ı içe aktarın

module.exports = {

    data: new SlashCommandBuilder()

        .setName('ban')

        .setDescription('Bir kullanıcıyı sunucudan yasaklar.')

        .addUserOption(option =>

            option.setName('target')

                .setDescription('Yasaklanacak kullanıcı')

                .setRequired(true)),

    async execute(interaction) {

        // Yetki kontrolü: Kullanıcının "BAN_MEMBERS" yetkisi olup olmadığını kontrol et
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            return interaction.reply('Bu komutu kullanmak için yasaklama yetkiniz yok.');
        }

        const target = interaction.options.getUser('target');
        const member = interaction.guild.members.cache.get(target.id);

        if (!member) return interaction.reply('Kullanıcı bulunamadı.');

        await member.ban();

        await interaction.reply(`${target.tag} yasaklandı.`);

    },

};
