import axios from 'axios'

//全文法律状态
export const search_ftlegal = (param1, param2) => {
  return new Promise((resolve, reject) => {
    axios.request({
      method: "GET",
      url: "https://zljs.diandongmark.com/search/query_encrypt?type=" + param1 + "&AppNo=" + param2,
      //https://zljs.diandongmark.com/search/query_encrypt?type=3&AppNo=Q04yMDE5ODAwMDA1OTcuMA==
    }).then(res => {
      resolve(res);
    }).catch(err => {
      //alert(JSON.stringify(err));
      reject(err)
    })
  });
}

//const https = require('https');
//const agent = new https.Agent({
//  rejectUnauthorized: false
//});
//全文法律状态
export const search_ftlegal22 = (param1, param2) => {
  return new Promise((resolve, reject) => {
    axios.request({
      method: "GET",
      url: "http://221.194.47.226:8017/Home/SHftflztget?type=" + param1 + "&AppNo=" + param2,
      //httpsAgent: agent,
    }).then(res => {
      resolve(res);
    }).catch(err => {
      //alert(JSON.stringify(err));
      reject(err)
    })
  });
}



//全文法律状态
export const search_ftlegal11 = (param) => {
  //axios({
  //  method: "POST",
  //  url: "http://221.194.47.226:8017/Home/SHftflzt",
  //  params: param,
  //}).then((res) => {
  //  alert(JSON.stringify(res));
  //});


  return new Promise((resolve, reject) => {
    axios.request({
      method: "POST",
      url: "http://221.194.47.226:8017/Home/SHftflzt",
      params: param,
    }).then(res => {
      resolve(res);
    }).catch(err => {
      //alert(JSON.stringify(err));
      reject(err)
    })
  });
  //return http1.post('http://221.194.47.226:8017/Home/SHftflzt', param)
  //return http1.post('http://221.194.47.226:8017/Home/SHftflzt', param)
}
