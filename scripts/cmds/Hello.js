module.exports = {
    config: {
        name: "hello",
        version: "1.0",
        author: "Siyabonga",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hello") return message.reply("Hey ♥️❤️‍🔥🥺 my name is Whis ❤️‍🔥❤️can you be my friend♥️");
}
};
