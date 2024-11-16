# Moderasyon ve Loglama Discord Botu

![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Bu, Discord sunucuları için `discord.js` v14 kullanılarak geliştirilmiş bir moderasyon ve loglama botudur. Bot, banlama, kickleme, susturma ve mesaj temizleme gibi moderasyon komutları sağlar. Ayrıca, sunucudaki önemli olayları loglama ve küfür ile reklamları engellemek için özelleştirilebilir bir sistem içerir.

## Özellikler

- **Moderasyon Komutları:**
  - `/ban`: Bir kullanıcıyı sunucudan banlar.
  - `/kick`: Bir kullanıcıyı sunucudan atar.
  - `/timeout`: Bir kullanıcıyı belirli bir süre boyunca susturur.
  - `/purge`: Bir kanalda belirli sayıda mesajı toplu olarak siler.

- **Loglama Olayları:**
  - Mesaj silinmelerini ve düzenlemelerini loglar.
  - Kanal oluşturma, silme ve güncellemelerini loglar.
  - Rol oluşturma, silme ve güncellemelerini loglar.
  - Kullanıcıların sunucuya katılma, ayrılma ve banlanma olaylarını loglar.

- **Küfür ve Reklam Engelleme:**
  - `kufur.txt` dosyası kullanılarak küfür filtresi.
  - URL'ler ve Discord davet bağlantıları için reklam filtresi.
  - Bu filtreler, slash komutları ile açılıp kapatılabilir.

## Kurulum


1. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

2. `config.json` dosyasını oluşturun ve yapılandırın:
    ```json
    {
      "token": "BOT_TOKENINIZ",
      "logChannelId": "LOG_KANAL_IDNIZ",
      "swearFilter": true,
      "adFilter": true
    }
    ```

3. Botu başlatın:
    ```bash
    node index.js
    ```

## Kullanım

- Botun filtrelerini yönetmek ve moderasyon işlemlerini gerçekleştirmek için slash komutlarını kullanın.
- Bot, `config.json` dosyasında belirtilen yapılandırmaya göre sunucu olaylarını otomatik olarak loglayacaktır.
- Küfür filtresini özelleştirmek için `kufur.txt` dosyasını düzenleyin.

## Proje Yapısı

```
/src
|-- /commands
|   |-- ban.js
|   |-- kick.js
|   |-- timeout.js
|   |-- purge.js
|   |-- filter.js
|
|-- /events
|   |-- ready.js
|   |-- messageDelete.js
|   |-- messageUpdate.js
|   |-- channelCreate.js
|   |-- channelDelete.js
|   |-- channelUpdate.js
|   |-- roleCreate.js
|   |-- roleDelete.js
|   |-- roleUpdate.js
|   |-- guildBanAdd.js
|   |-- guildMemberAdd.js
|   |-- guildMemberRemove.js
|   |-- messageCreate.js
|
|-- config.json
|-- kufur.txt
|-- index.js
|-- package.json
```

## Katkıda Bulunma

Katkılar, sorunlar ve özellik talepleri memnuniyetle karşılanır! Katkıda bulunmak isterseniz, [sorunlar sayfasını](https://github.com/kullaniciadiniz/proje-adi/issues) inceleyebilirsiniz.

## Lisans

Bu proje, MIT Lisansı ile lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## Teşekkürler

- [Discord.js](https://discord.js.org/) - Discord API'si ile etkileşim kurmak için güçlü bir kütüphane.
- Node.js - Chrome'un V8 motoru üzerinde çalışan JavaScript çalışma zamanı.

## İletişim
[Discord Sunucumuz](https://discord.gg/novadev)
