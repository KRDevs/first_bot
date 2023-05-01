TELEGRAM_BOT_TOKEN='5189208368:AAGv7vRsBiZhX65NFVqQ_d0nJEOfd0L4_rE';
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds=[];
// bot.on('text', (msg) => msg.reply.text('Kelgan habar: '+ msg.text));

const CronJob = require('cron').CronJob;
const job = new CronJob(
	'0/5 * * * * *',
	function() {
        chatIds.forEach(chatId=>{
            bot.sendMessage(chatId,'Assalomu aleykum hurmatli foydalanuvchi')
        });
    },
	null,
	true
);

bot.on('/start',(msg) =>{
    let chatId=msg.chat.id;
    if(!chatIds.includes(chatId)){
        chatIds.push(chatId);
        msg.reply.text('Boshladik!')
    }
    job.start();
})
bot.on('/stop',(msg) =>{
    let chatId=msg.chat.id;
        chatIds.pop(chatId);
})

bot.start();