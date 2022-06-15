const fetch = require('node-fetch');
require("dotenv").config();

module.exports = async function () {
  const res = await fetch(`https://discord.com/api/v9/guilds/${process.env.DISCORD_GUILD_ID}/scheduled-events`, {
    method: "GET",
    headers: {
      "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    }
  })

  const data = await res.json()

  return data
}