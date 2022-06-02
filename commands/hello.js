
const replies = [ 'Have I been summoned?', 'Why Hello There', 'Wwwwassssuuuppp','Hey 😀', '👋' ];

module.exports = function(msg, args) 
{
const index = Math.floor(Math.random() * replies.length);
msg.channel.send(replies[index]);
};