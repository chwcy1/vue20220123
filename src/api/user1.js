import http from '../utils/http';
// 用户登录
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
// 删除专题库
export const topic_del = (param) => {
  return http.post('/topic/delete', param)
}