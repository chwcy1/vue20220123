import http from '../utils/http';
// 用户搜索
export const search = (param) => {
  return http.post('/patent/search', param)
}
// 企业词搜索
export const company_synonym = (param) => {
  return http.post('/patent/company_synonym', param)
}
export const search_result = (param) => {
  return http.post('/patent/search_result', param)
}
export const ipc = (param) => {
  return http.post('/ipc/coll', param)
}
// 按名字查找IPC
export const ipc_by_title = (param) => {
  return http.post('/ipc/by_title', param)
}
// 按分类号查找IPC
export const ipc_by_code = (param) => {
  return http.post('/ipc/by_code', param)
}
// 法律状态
export const law_stat = (param) => {
  return http.post('/patent/law_stat', param)
}
// 搜索之后左侧统计
export const statistic = (param) => {
  return http.post('/patent/statistic', param)
}
// 搜索——单一参数表格统计
export const single_field = (param) => {
  return http.post('/agg/single_field', param)
}
// 搜索——双参数表格统计
export const double_field = (param) => {
  return http.post('/agg/double_field', param)
}
// 搜索——邻接 申请人、发明人、IPC
export const adjacency_matrix = (param) => {
  return http.post('/agg/adjacency_matrix', param)
}
// 提取关键词
export const keywords = (param) => {
  return http.post('/patent/keywords', param)
}
// 收藏
export const fav_list_add = (param) => {
  return http.post('/patent/fav_list_add', param)
}
// 获取收藏列表
export const fav_list = (param) => {
  return http.post('/patent/fav_list', param)
}
// 删除收藏列表
export const fav_list_del = (param) => {
  return http.post('/patent/fav_list_del', param)
}
export const download_text = (param) => {
  return http.post('/res/download_text', param)
}
//专题库图片
export const upload_topic_cover = (param) => {
  return http.post('/res/upload_topic_cover', param)
}
//获取验证码
export const getvcodemsg = (param) => {
  return http.get('/captchaImage', param);
}
//获取全文法律状态
export const getftflztmsg = (param) => {
  return http.get('/search/query_encrypt', param);
}


// 搜索——单一参数表格统计
export const single_field_v2 = (param) => {
  return http.post('/agg/single_field_v2', param)
}
// 搜索——双参数表格统计
export const double_field_v2 = (param) => {
  return http.post('/agg/double_field_v2', param)
}
export const double_field_first_applicant_db_name = (param) => {
  return http.post('/agg/double_field_first_applicant_db_name', param)
}
export const double_field_first_applicant_main_law_status = (param) => {
  return http.post('/agg/double_field_first_applicant_main_law_status', param)
}
export const double_field_first_applicant_app_date = (param) => {
  return http.post('/agg/double_field_first_applicant_app_date', param)
}
export const double_field_first_inventor_db_name = (param) => {
  return http.post('/agg/double_field_first_inventor_db_name', param)
}
export const double_field_first_inventor_main_law_status = (param) => {
  return http.post('/agg/double_field_first_inventor_main_law_status', param)
}
export const double_field_country_code_app_date = (param) => {
  return http.post('/agg/double_field_country_code_app_date', param)
}
export const double_field_country_code_db_name = (param) => {
  return http.post('/agg/double_field_country_code_db_name', param)
}
export const double_field_country_code_main_law_status = (param) => {
  return http.post('/agg/double_field_country_code_main_law_status', param)
}
export const double_field_country_code_open_date = (param) => {
  return http.post('/agg/double_field_country_code_open_date', param)
}
export const double_field_main_ipc_class_and_large_group = (param) => {
  return http.post('/agg/double_field_main_ipc_class_and_large_group', param)
}
export const double_field_main_ipc_class_app_date = (param) => {
  return http.post('/agg/double_field_main_ipc_class_app_date', param)
}
export const double_field_main_ipc_class_first_applicant = (param) => {
  return http.post('/agg/double_field_main_ipc_class_first_applicant', param)
}
export const double_field_main_ipc_class_first_inventor = (param) => {
  return http.post('/agg/double_field_main_ipc_class_first_inventor', param)
}
export const double_field_main_ipc_class_main_law_status = (param) => {
  return http.post('/agg/double_field_main_ipc_class_main_law_status', param)
}
export const double_field_main_ipc_class_open_date = (param) => {
  return http.post('/agg/double_field_main_ipc_class_open_date', param)
}
export const double_field_app_date_first_applicant = (param) => {
  return http.post('/agg/double_field_app_date_first_applicant', param)
}
export const double_field_app_date_first_inventor = (param) => {
  return http.post('/agg/double_field_app_date_first_inventor', param)
}
export const double_field_first_applicant_main_ipc_class = (param) => {
  return http.post('/agg/double_field_first_applicant_main_ipc_class', param)
}
export const double_field_first_inventormain_main_ipc_class = (param) => {
  return http.post('/agg/double_field_first_inventormain_main_ipc_class', param)
}
export const double_field_country_code_main_ipc_class = (param) => {
  return http.post('/agg/double_field_country_code_main_ipc_class', param)
}
export const double_field_app_country_main_ipc_class = (param) => {
  return http.post('/agg/double_field_app_country_main_ipc_class', param)
}
export const double_field_country_code_main_law_status_ls = (param) => {
  return http.post('/agg/double_field_country_code_main_law_status_ls', param)
}




