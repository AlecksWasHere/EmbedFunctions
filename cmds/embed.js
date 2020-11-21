const embeds = require('../embedsFunction');

module.exports = {
    name: "embed",
    execute(client, Discord, message, args) {
        embeds.embedOne()
    }
};