import request from "request";
import querystring from "querystring";

import { queryStringData, responseBody, methodTypes } from "../../interfaces/publicData/weather";

class Weather {
  private url:string = "http://apis.data.go.kr/1360000/VilageFcstInfoService"; // 동네예보 조회서비스

  constructor(private serviceKey:string, private nx:number, private ny:number) {}

  /**
   * 
   * @param method 
   * @param base_date 
   * @param base_time 
   * @param pageNo 
   * @param numOfRows 
   */
  call(method:methodTypes, base_date:string, base_time:string = "0600", pageNo:number = 1, numOfRows:number = 10) {
    const url:string = this.getUrl(method);
    const queryString:queryStringData = {
      servicekey: this.serviceKey,
      base_date: base_date,
      base_time: base_time,
      pageNo: pageNo,
      numOfRows: numOfRows,
      dataType:"JSON",
      nx: this.nx,
      ny: this.ny,
    };
    const data:string = querystring.unescape(querystring.stringify(queryString));

    request(`${url}?${data}`, function(error, response, body){
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }


  getUrl(method:methodTypes):string {
      const url:string = this.url+"/"+method;

      return url;
  }


}

const weather = new Weather("0pRRfcfoMg7BM6xDwx14pG6KSmg2jqHCXuwEO6V1MXpDkVwLYxC%2Bzr9LBh42sBde2vwX6YXGeWlmVKhVLmwrcA%3D%3D", 58
, 125);

console.log(weather.call("getUltraSrtNcst", "20200202", "1900"));
