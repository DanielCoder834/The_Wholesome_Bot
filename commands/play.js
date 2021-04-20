module.exports = function (msg, args) {
        //Checking if the message author is in a voice channel.
    if (!msg.member.voice.channel) {
        msg.reply("You must be in a voice channel to use this command.");
    }
        //Checking if the bot is in a voice channel.
    if (msg.guild.me.voice.channel) {
        msg.reply("I'm already playing.");
    }

        //Joining the channel and creating a VoiceConnection.
        msg.member.voice.channel.join().then(VoiceConnection => {
            //Playing the music, and, on finish, disconnecting the bot.
            VoiceConnection.play("./discordMusic/Test.mp3").on("finish", () => VoiceConnection.disconnect());
            msg.reply("Playing...");
        }).catch(e => console.log(e))
}