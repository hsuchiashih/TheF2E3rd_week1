import axios from 'axios';
import jsSHA from 'jssha';

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = 'b08bd5bac7454020a6cf8ac618face1d';
  let AppKey = 'u6UomC7GzQ05LDrcW4bIwd0BRIg';
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

// Activity相關的 api
const activityRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity',
  headers: getAuthorizationHeader()
});

// Foods相關的 api
const foodsRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant',
  headers: getAuthorizationHeader()
});
// 搜尋相關的 api
const searchActivityRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/',
  headers: getAuthorizationHeader()
});

const searchScenicSpotRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/',
  headers: getAuthorizationHeader()
});

const searchFoodsRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/',
  headers: getAuthorizationHeader()
});

export const apiBaseActivity = () => activityRequest.get('?$top=4&$format=JSON');
export const apiBaseFoods = () => foodsRequest.get('?$top=10&$format=JSON');
export const apiSearchActivity = (url) => searchActivityRequest.get(url);
export const apiSearchScenicSpot = (url) => searchScenicSpotRequest.get(url);
export const apiSearchFoods = (url) => searchFoodsRequest.get(url);