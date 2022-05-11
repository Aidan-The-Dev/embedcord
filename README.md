# Welcome to EmbedCord 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/Aidan-The-Dev/embedcord/blob/main/README.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Aidan-The-Dev/embedcord/blob/main/LICENSE)

> A package to easily setup a discord embed
> This version only supports discord.js v12
> Version 2.0.0 will support discord.js v13

### 🏠 [Homepage](https://github.com/Aidan-The-Dev/embedcord/blob/main/README.md)

## Install

```sh
npm i embedcord
```

## Usage

### Please note that none of the embed inputs are required if you want to skip one just leave an empty string ''

```javascript
const discord = require('discord.js')
const client = new discord.Client()
const newEmbed = require('embedcord')
const prefix = '!'

client.once('ready', () => {
  console.log('Ready')
})

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return
  if(message.content.startsWith(`${prefix}embed`)) {
    const embed = newEmbed('Your title here', 'Your hex code here', 'Your description')
    message.channel.send(embed)
  }
})

client.login('your-token-here')
```

### More than title, color, and description will be coming in future updates

## Author

👤 **Aidan White**

* Github: [@Aidan-The-Dev](https://github.com/Aidan-The-Dev)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/Aidan-The-Dev/embedcord/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2022 [Aidan White](https://github.com/Aidan-The-Dev).

This project is [MIT](https://github.com/Aidan-The-Dev/embedcord/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
