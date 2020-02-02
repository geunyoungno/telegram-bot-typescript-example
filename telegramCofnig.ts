import dotenv from "dotenv";

/**
 * config 호출 시 process.env 에 .env 파일의 내용이 추가됨
 */
dotenv.config();

if (process.env.TELEGRAM_BOT_TOKEN === undefined) {
  throw "token not exist";
}

const token: string = process.env.TELEGRAM_BOT_TOKEN;

export {
  token
};
