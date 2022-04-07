<template>
	<div class="home" style="max-width:1100px;margin:auto">
		<div style="font-size: 20px; padding: 10px 0; font-weight: normal; border-bottom: dashed 1px #DCDFE6">
			<!--<span @click="this.$router.push('/Home')"></span>检索系统<span style="padding:0 15px">/</span>-->
			<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="1" style="padding-top:3px;padding-right:7px">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
							<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
						</svg>
					</td>
					<td valign="top" align="left">
						我的收藏
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<el-tabs type="border-card">
			<el-tab-pane v-loading="loading" label="收藏专利列表">
				<div style="width:100%;text-align:left">
					<el-checkbox v-model="checkAll" @change="getAll" border size="mini">全选</el-checkbox>
					<el-button  icon="el-icon-delete" type="warning" round size="small" style="float:right" @click="delselect">删除选中</el-button>
				</div>
				<div v-for="(item, index) in list.result" :key="index" style="padding:5px 0;border-bottom:dashed 1px #E1E1E1">
					<!--<el-divider></el-divider>-->
					<div style="display: flex;padding:5px 0 10px 0">
						<el-checkbox v-model="app_no_list" :label="item.app_no" style="width:16px;overflow:hidden"></el-checkbox>
						<p @click="getDetail(item)" style="font-weight: bold; color: #409eff; margin-left: 5px;font-size:15px;cursor:pointer;">
							{{ index + 1 + (page-1)*size }}&nbsp;
							<template v-if="item.db=='发明授权' ||item.db=='FMSQ'">
								<span style="color:#e6a23c;font-weight:bold;font-size:14px">[发明授权]</span>
							</template>
							<template v-else-if="item.app_type!=null &&　item.app_type.length>1">
								<span style="color:#e6a23c;font-weight:bold;font-size:14px">[{{ item.app_type }}]</span>
							</template>
							<span v-html="item.title" style="text-decoration:underline"></span>
						</p>
						<template v-if="judgels(item.main_law_status,'有权')">
							<el-tag type="success" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
						</template>
						<template v-if="judgels(item.main_law_status,'无权')">
							<el-tag type="danger" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
						</template>
						<template v-if="judgels(item.main_law_status,'审中')">
							<el-tag type="warning" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
						</template>
					</div>
					<p style="font-weight: normal; font-size: 14px; line-height: 150%;text-align:left;">
						<span style="color:forestgreen">申请号：</span><span v-html="item.app_no"></span><!--{{ item.app_no }}-->&nbsp;&nbsp;
						<span style="color:forestgreen">申请日：</span>{{item.app_date}}&nbsp;&nbsp;
						<span style="color:forestgreen">公开公告号：</span><span v-html="item.open_no"></span>&nbsp;&nbsp;
						<span style="color:forestgreen">公开公告日：</span>{{item.app_date}}
					</p>
					<p style="font-weight: normal; font-size: 14px; line-height: 150%; text-align: left;">
						<span style="color:#e6a23c">申请人：</span>
						<!--<span style="" :key="tag" v-for="tag in item.applicant"><span v-html="tag"></span>;</span>-->
						<span v-html="item.applicant"></span>
						&nbsp;&nbsp;
						<span style="color:#e6a23c">发明人：</span>
						<!--<span style="" :key="tag" v-for="tag in item.inventor"><span v-html="tag"></span>;-->
						<span v-html="detail.inventor"></span>
					</p>
					<div style="display: flex; margin-top: 5px; line-height: 150%; text-align: left;">
						<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="padding:0;margin:0;" valign="top">
									<p style="flex: 5; font-size: 14px">
										文摘：<span v-html="item.abstract">; </span>
									</p>
								</td>
								<td style="padding:0;margin:0;" width="1" valign="middle">
									<el-image v-if="item.ab_img_path" @click="showbigimg(baseURL + '/res?path=' + item.ab_img_path[0])"
														style="flex: 2; width: 200px; max-height: 180px;margin:0 0 0 5px"
														:src="baseURL + '/res?path=' + item.ab_img_path[0]"
														fit="contain" :preview-src-list="zyftsrcList">
									</el-image>
									<el-image v-else-if="item.wg_img_path" @click="showbigimg(baseURL + '/res?path=' + item.wg_img_path[0])"
														style="flex: 2; width: 200px; max-height: 180px; margin: 0 0 0 5px "
														:src="baseURL + '/res?path=' + item.wg_img_path[0]"
														fit="contain" :preview-src-list="zyftsrcList">
									</el-image>
								</td>
							</tr>
						</table>
					</div>

					<el-dialog class="editztk" title="专利详情" :visible.sync="nodequery" width="700px" style="text-align:left" top="5vh">
						<div style="height:100%;overflow-x:hidden" class="wrapper">
							<el-card style="margin-top: 0px;  overflow-y: auto;border:0" shadow="never">
								<p style="font-weight: normal; color: #409eff; margin-left: 0px;font-size:18px;padding:10px 0;text-align:center">
									<span v-html="detail.title"></span>
								</p>
								<p style="padding:0;margin:0;width:100%;text-align:center">
									<span v-if="detail.pdf_path"
												@click="toPdf(detail.pdf_path)"
												style="color: #e6a23c; margin-left: 5px; font-size: 13px"
												class="point">
										查看全文
									</span>
								</p>
								<table class="ipmessageone" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">申请号：</td>
										<td><span v-html="detail.app_no"></span></td>
										<!--<td><div v-html="detail.app_no"></div></td>-->
										<td style="white-space:nowrap;text-align:right;" width="1">申请日：</td>
										<td>{{ detail.app_date }}</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right" width="1">公开(公告)号：</td>
										<td><span v-html="detail.open_no"></span></td>
										<td style="white-space:nowrap;text-align:right" width="1">公开(公告)日：</td>
										<td>{{ detail.open_date }}</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">申请人：</td>
										<td colspan="3">
											<!--<span style="" :key="tag" v-for="tag in detail.applicant"><span v-html="tag"></span>;</span>-->
											<span v-html="detail.applicant"></span>
										</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">发明人：</td>
										<td colspan="3">
											<!--<span style="" :key="tag" v-for="tag in detail.inventor"><span v-html="tag"></span>;</span>-->
											<span v-html="detail.inventor"></span>
										</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">联系地址：</td>
										<td colspan="3"><span v-html="detail.current_applicant_address"></span></td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">主分类号：</td>
										<td colspan="3"><span v-html="detail.main_ipc"></span></td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">分类号：</td>
										<td colspan="3">
											<!--<span style="" :key="tag" v-for="tag in detail.ipc"><span v-html="tag"></span>; </span>-->
											<span v-html="strreplace(detail.ipc)"></span>
										</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">国省代码：</td>
										<td colspan="3"><span v-html="detail.country_code"></span></td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">代理机构：</td>
										<td colspan="3">
											<!--<span style="" :key="tag" v-for="tag in detail.agent_organ"><span v-html="tag"></span>;</span>-->
											<span v-html="detail.agent_organ"></span>
										</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">代理人：</td>
										<td colspan="3">
											<!--<span style="" :key="tag" v-for="tag in detail.agent"><span v-html="tag"></span>;</span>-->
											<span v-html="detail.agent"></span>
										</td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">国际申请：</td>
										<td colspan="3"><span v-html="detail.i_application"></span></td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">国际公布：</td>
										<td colspan="3"><span v-html="detail.i_publication"></span></td>
									</tr>
									<tr>
										<td style="white-space:nowrap;text-align:right;" width="1">进入国家日期：</td>
										<td colspan="3"><span v-html="detail.date_entry"></span></td>
									</tr>
									<tr>
										<td colspan="4" style="text-align:left">
											<div style="width:100%;padding:5px 0">摘要：</div>
											<div><span v-html="detail.abstract"></span></div>
										</td>
									</tr>
									<template v-if="detail.app_type!='外观设计'">
										<tr>
											<td colspan="4" style="text-align:left">
												<div style="width:100%;padding:5px 0">主权项：</div>
												<!--<div>{{ detail.first_claim }}</div>-->
												<div style="line-height:150%" v-html="detail.first_claim"></div>
											</td>
										</tr>
									</template>
									<tr>
										<td colspan="4" style="line-height:200%">
											<div style="width: 100%; height: 30px;">
												<ul style="list-style:none">
													<li style="float:left;font-size:14px;font-weight:bold">法律状态：</li>
													<li style="float:right"><el-button type="primary" size="mini" plain @click="showflzt($event)">查看</el-button></li>
												</ul>
											</div>
											<el-timeline>
												<el-timeline-item v-for="item in legallist" placement="top">
													<el-card shadow="never">
														<el-row>
															<el-col :span="12">
																<span style="font-weight:bold">法律状态公告日：</span>{{item.lawdate}}
															</el-col>
															<el-col :span="12">
																<span style="font-weight:bold">法律状态类型：</span>{{item.lawtype}}
															</el-col>
														</el-row>
														<el-row>
															<span style="font-weight:bold">法律状态信息：</span>
															<p v-html="item.note"></p>
														</el-row>
													</el-card>
												</el-timeline-item>
											</el-timeline>
										</td>
									</tr>
									<template v-if="detail.app_type!='外观设计' && (detail.db =='FM' ||detail.db =='FMSQ' ||detail.db =='SYXX' ||detail.db =='WG' )">
										<tr>
											<td colspan="4">
												<div style="width:100%;height:30px;">
													<ul style="list-style:none">
														<li style="float:left;font-size:14px;font-weight:bold">代码化全文：</li>
														<li style="float:right"><el-button type="primary" size="mini" plain @click="showftext($event)">查看</el-button></li>
													</ul>
												</div>
											</td>
										</tr>
										<template v-if="showfulltext">
											<tr>
												<td colspan="4" style="text-align:left">
													<div style="width:100%;padding:5px 0">权利要求：</div>
													<div style="line-height:150%" v-html="fulltext.claim"></div>
												</td>
											</tr>
											<tr>
												<td colspan="4" style="text-align:left">
													<div style="width:100%;padding:5px 0">说明书：</div>
													<div style="line-height:150%" v-html="fulltext.description"></div>
												</td>
											</tr>
										</template>
										<!--<tr>
		<td colspan="4" style="text-align:left">
			<div style="width:100%;padding:5px 0">权利要求：</div>
			<div style="line-height:150%" v-html="detail.claim"></div>
		</td>
	</tr>
	<tr>
		<td colspan="4" style="text-align:left">
			<div style="width:100%;padding:5px 0">说明书：</div>
			<div style="line-height:150%" v-html="detail.description"></div>
		</td>
	</tr>-->
									</template>
								</table>
								<!-- 							<div style="width: 100%;text-align: center;margin-top: 10px;">
		<el-button type="primary">打印</el-button>
		<el-button>返回</el-button>
	</div> -->
							</el-card>
						</div>
					</el-dialog>
				</div>
				<el-pagination @current-change="updateCurrent"
											 :page-sizes="[20, 50, 100, 200]"
											 :page-size="size"
											 layout=" total, prev, pager, next, jumper"
											 :total="list.total_hits">
				</el-pagination>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
  import { baseURL } from "../api/base.js";
	import {
		search,
		search_result,
		statistic,
		fav_list_add,
		download_text,
		fav_list,
		fav_list_del
	} from '../api/search.js';
  import {
    search_ftlegal,
  } from "../api/search226.js";
  import axios from "axios";
  import { allcountryfl2cn, allcountrycn2fl } from "../assets/country.js";
  let Base64 = require("js-base64").Base64;
	export default {
		data() {
      return {
        baseURL: baseURL,
        type: localStorage.getItem("type"),
        app_no_list: [],
        size: 20,
        page: 1,
        loading: false,
        list: {
          result: [],
          return_hits: 0,
          total_hits: 0,
        },
				detail: {},
				zyftsrcList: [''],
        nodequery: false,
        picture: require("../assets/index.png"),
        username: localStorage.getItem("username"),
        legallist: [],
        fulltext: {},
        showfulltext: false,
			}
		},
		mounted() {
      this.updateSearch();
		},
    methods: {
      strreplace(s1) {
        return s1.split(';').join('; ');
      },
      filterHtml(val) {
        return val.replace(/<[^>]+>/g, '');//去除文字的<...></...>标签
      },
			//全选/取消
      getAll(val) {
        if (val) {
          this.list.result.forEach((item) => {
            if (this.app_no_list.indexOf(item.app_no) == -1) {
              this.app_no_list.push(item.app_no);
            }
          });
        }
        else {
          this.app_no_list = [];
        }
        console.log(this.app_no_list);
      },
      // 更新页码
      updateCurrent(page) {
        this.page = page;
        this.updateSearch();
			},
      updateSearch() {
        this.loading = true;
				var query = {};
				query.username = this.username;
        query.size = this.size;
				query.from = (this.page - 1) * this.size + 1;
				query.ascending = true;//true:越新越靠前,false:越旧越靠前,默认false
				//alert(JSON.stringify(query));
				fav_list(query).then((res) => {
          //alert(JSON.stringify(res));
          this.list = res;
          this.loading = false;
					this.detail = this.list.result[0];
        });
      },
      judgels(t, t1) {
        if (t == t1) { return true; }
        return false;
      },
      showbigimg(imgurl) {
        //alert(imgurl)
        this.zyftsrcList = [imgurl];
      },
      getDetail(data) {
				this.detail = data;
        this.nodequery = true;
      },
      toPdf(pdf) {
        window.open(this.baseURL + "/res?path=" + pdf[0]);
      },
			delselect() {
        if (window.confirm('你确定要删除选择的专利吗？')) {
          var query = {};
          var records = [];
          this.app_no_list.forEach(itemsave => {
            this.list.result.forEach(itemlist => {
              if (itemsave == this.filterHtml(itemlist.app_no)) {
                records.push({ "app_no": itemsave, "country": itemlist.db, "open_no": itemlist.open_no });
              }
            });
          });
          if (records.length == 0) {
            alert('请选择需要删除的专利！');
            return;
          }
          query.records = records;
          this.loading = true;
          //alert(JSON.stringify(query));
          fav_list_del(query).then((res) => {
            //alert(JSON.stringify(res));
            this.loading = false;
            if (res.success) {
              this.$message.success('操作成功');
              location.reload();
            }
            if (res.code != undefined) {
              alert(res.msg);
            }
          });
				}
				else {

        }        
			},

      showflzt(obj) {
        //alert(this.detail.app_no);
        var query = {};
        query.type = '3';
        var nohtmlno = this.detail.app_no_encrypt;
        try {
          nohtmlno = this.filterHtml(nohtmlno);
        } catch (e) { }
        query.AppNo = nohtmlno;
        try {
          //alert(JSON.stringify(query));
        }
        catch (e) { alert(e); }
        search_ftlegal(query.type, query.AppNo).then((res) => {
          //alert(JSON.stringify(res));
          this.legallist = res.data.data;
        });
      },
      showftext(obj) {
        var query = {};
        query.type = this.detail.db;
        if (this.detail.db == 'fmsq') {
          query.type = '1';
        }
        else {
          query.type = '2';
        }
        var nohtmlno = this.detail.app_no_encrypt;
        try {
          nohtmlno = this.filterHtml(nohtmlno);
        } catch (e) { }
        query.AppNo = nohtmlno;
        try {
          //alert(JSON.stringify(query));
        }
        catch (e) { alert(e); }
        this.showfulltext = true;
        search_ftlegal(query.type, query.AppNo).then((res) => {
          //try { alert(JSON.stringify(res.data.data)); } catch (e) { alert(e);}
          try {
            this.fulltext = res.data.data[0];
          }
          catch (e) { }
        });
      },
		}
	}
</script>

<style scoped>
	.home {
		padding: 20px;
		width: 80%;
		margin: 0 auto;
	}
  .editztk >>> .el-dialog__body {
    padding-top:0px;
		padding-bottom:10px;
    height:80vh;
  }
  .ipmessageone {
    width: 95%;
    margin-top: 15px;
    font-size: 14px;
    text-align: left;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
  }

    .ipmessageone td {
      padding: 7px 5px;
      border-bottom: solid 1px #EEE
    }
</style>
