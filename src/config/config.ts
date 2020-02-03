import dotenv from "dotenv";

/**
 * config 호출 시 process.env 에 .env 파일의 내용이 추가됨
 */
const result:dotenv.DotenvConfigOutput = dotenv.config();

if (result.error) {
  throw "config error";
}

const token: string = process.env.TELEGRAM_BOT_TOKEN ? process.env.TELEGRAM_BOT_TOKEN : '';
const serviceKey: string = process.env.PUBLIC_DATA_SERVICE_KEY ? process.env.PUBLIC_DATA_SERVICE_KEY : '';

export {
  token, serviceKey
};
