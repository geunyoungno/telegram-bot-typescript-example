import TelegramBot from "node-telegram-bot-api"

// @BotFather 가 준 Telegram token 입력
const token: string = "telegram bot token";
// TelegramBot의 uses 'polling' to fetch new updates
const options: TelegramBot.ConstructorOptions = {polling: true};

// bot 생성
const bot: TelegramBot = new TelegramBot(token, options);

bot.onText(/\/echo (.+)/, (msg, match) => {   
  const chatId: number = msg.chat.id; 

  let resp:string;
  /**
   * match의 TYPE은 `RegExpExecArray | null`
   * null 처리 추가
   */
  if (match === null) {
      resp = "받은 응답 없음";
  } else {
      resp = "응답: "+match[1];
  }
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, '메세지');
});
