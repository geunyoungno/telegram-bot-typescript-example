import querystring from "querystring";

interface queryStringData extends querystring.ParsedUrlQueryInput {
  servicekey:string; // 인증키
  numOfRows:number; // 한 페이지 결과 수 Default: 10
  pageNo:number; // 페이지 번호 Default: 1
  dataType?:string; // 요청자료형식(XML/JSON) Default: XML
  base_date:string; // Ymd
  base_time:string; // Hi
  nx:number; // 예보지점의 X 좌표값
  ny:number; // 예보지점의 Y 좌표값
}

interface responseBody {
  numOfRows:number; // 한 페이지 결과 수
  pageNo:number; // 페이지 번호
  totalCount:number; // 데이터 총 개수
  resultCode:string; // 응답 메시지코드
  resultMsg:string; // 응답 메시지 설명
  dataType:string; // 요청자료형식(XML/JSON)
  base_date:string; // Ymd
  base_time:string; // Hi
  nx?:number; // 예보지점의 X 좌표값
  ny?:number; // 예보지점의 Y 좌표값
  category:string; // 자료구분코드
  obsrValue?:string; // 실황 값
}

type methodTypes = 
  | 'getUltraSrtNcst' // 초단기실황조회
  | 'getUltraSrtFcst' // 초단기예보조회
  | 'getVilageFcst' // 동네예보조회
  | 'getFcstVersion' // 예보버전조회
  ;

export {
  queryStringData,
  responseBody,
  methodTypes,
};
