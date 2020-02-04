import querystring from "querystring";

export interface IqueryStringData extends querystring.ParsedUrlQueryInput {
  servicekey: string; // 인증키
  numOfRows: number; // 한 페이지 결과 수 Default: 10
  pageNo: number; // 페이지 번호 Default: 1
  dataType?: string; // 요청자료형식(XML/JSON) Default: XML
  base_date: string; // Ymd
  base_time: string; // Hi
  nx: number; // 예보지점의 X 좌표값
  ny: number; // 예보지점의 Y 좌표값
}
