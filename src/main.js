const discord = require('discord.js')

module.exports = newEmbed

/**
 * @return {Discord.MessageEmbed}
 * @param {string} title The title for the embed
 * @param {string} color The color for the embed the default code is set to blue(#0000ff)
 * @param {string} description The description for the embed
 */

 // Future Update:
 //@param {string} footer The footer of the embed

function newEmbed(title, color = '#0000ff', description) {

      let userEmbed = {
        embed: {
          title: title,
          color: color,
          description: description,
        }
      }
  return userEmbed
}
