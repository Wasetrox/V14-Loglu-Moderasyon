const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField } = require('discord.js'); // PermissionsBitField'ı içe aktarın

module.exports = {

    data: new SlashCommandBuilder()

        .setName('at')

        .setDescription('Bir kullanıcıyı sunucudan atar.')

        .addUserOption(option =>

            option.setName('hedef')

                .setDescription('Atılacak kullanıcı')

                .setRequired(true)),

    async execute(interaction) {

        // Sunucudan atılacak hedef kullanıcıyı al
        const hedef = interaction.options.getUser('hedef');

        // Kullanıcıyı üye olarak al
        const uye = interaction.guild.members.cache.get(hedef.id);

        // Üye bulunamazsa yanıt ver
        if (!uye) return interaction.reply('Kullanıcı bulunamadı.');

        // Yetki kontrolü: Eğer komut sahibi "Üyeleri Sunucudan At" yetkisine sahip değilse
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            return interaction.reply('Bu komutu kullanabilmek için "Üyeleri Sunucudan At" yetkisine sahip olmanız gerekmektedir.');
        }

        // Kullanıcıyı at
        await uye.kick();

        // Yanıt ver
        await interaction.reply(`${hedef.tag} sunucudan atıldı.`);

    },

};
