
//const fetch = require('node-fetch');

const gif = require("./commands/gif.js");
const hello = require("./commands/hello.js");

const commands = { hello, gif };

module.exports = async function (msg) {
  if (msg.channel.id == '823622800736124958' || msg.channel.id == '823895207556415518') {
    try {
      let tokens = msg.content.split(" ");
      let command = tokens.shift();

      if (command.charAt(0) === "!") 
      {
        command = command.substring(1);
        commands[command](msg, tokens);
      }
    }
    catch (e) {
      console.log(e);
    }
  }
}