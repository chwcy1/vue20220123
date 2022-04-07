import http from '../utils/http';
// 用户登录
//export const login = (param) => {
//  return http.post('http://221.194.47.208:8080/api/v1/user/login', param)
//}
//export const register = (param) => {
//  return http.post('http://221.194.47.208:8080/api/v1/user/register', param)
//}
export const login = (param) => {
  return http.post('/user/login', param)
}
export const register = (param) => {
  return http.post('/user/register', param)
}
export const topic_list = (param) => {
  return http.post('/topic/list', param)
}
// 创建专题库
export const topic_create = (param) => {
  return http.post('/topic/create', param)
}
// 创建专题库 文本 
export const topic_createtext = (param) => {
  return http.post('/topic/create_by_text', param)
}
// 保存暂存库
export const save_temp = (param) => {
  return http.post('/topic/save_temp', param)
}
// 编辑专题库
export const dbedit = (param) => {
  return http.post('/topic/edit', param)
}
// 删除专题库
export const topic_del = (param) => {
  return http.post('/topic/delete', param)
}
// 获取历史记录
export const history_list = (param) => {
  return http.post('/history/list', param)
}
// 删除历史记录
export const history_del = (param) => {
  return http.post('/history/delete_one', param)
}

export const history_del_all = (param) => {
  return http.post('/history/delete_all', param)
}
