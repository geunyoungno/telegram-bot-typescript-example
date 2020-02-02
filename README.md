# telegram-bot-typescript-example

node 와 typescript 기반의 telegram bot api example

## 기본 설정
```
npm init # npm 초기화화
npm install --save-dev typescript ts-node @types/node-telegram-bot-api
npm install --save node-telegram-bot-api
```

## bot 에 작성한 message 에 반응해 응답

```
DEBUG=node-telegram-bot-api ts-node simple.ts
```

- onText method 의 match parameter 의 null 처리 
> RegExpExecArray | null 타입
- `node-telegram-bot-api` import 주의 사항
1. > `import * as TelegramBot from "node-telegram-bot-api"` (X)
2. > `import TelegramBot from "node-telegram-bot-api"` (O)
3. > `import {default as TelegramBot} from "node-telegram-bot-api"` (O)

> 정확히는 이해 못했지만, `ES6` 스펙에서 네임스페이스 호출에 대한 개념이 변경되어서 그런듯 하다. esModuleInterop 옵션을 false 로 사용하면 `1.` 에서도 오류 없이 사용 가능함

> [stackoverflow 문서](https://stackoverflow.com/questions/49256040/a-namespace-style-import-cannot-be-called-or-constructed-and-will-cause-a-failu) 

- Long polling 사용하여 message 에 반응함

## .env 추가하여 환경 변수 분리

```
npm install dotenv
```

- `.env.example` 를 `.env` 로 rename
- dotenv.config() 실행 시점에 `process.env` 에 `.env`의 환경 변수 들이 추가됨