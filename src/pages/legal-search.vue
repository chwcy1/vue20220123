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
						中国法律状态检索
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<el-card style="width: 100%;margin: 0 auto;background:#FFF;text-align:left" shadow="never">
			<form style="padding:20px 20px 0 20px">
				<div style="text-align:left">
					<el-checkbox-group v-model="checkcountry">
						<el-checkbox label="FM" value="FM" border>中国发明专利</el-checkbox>
						<el-checkbox label="SYXX" value="SYXX" border>中国实用新型</el-checkbox>
						<el-checkbox label="WG" value="WG" border>中国外观设计</el-checkbox>
						<el-checkbox label="FMSQ" value="FMSQ" border>中国发明授权</el-checkbox>
					</el-checkbox-group>
				</div>
				<div>
					<p style="padding:25px 0 5px 0">法律状态</p>
					<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td valign="top" style="padding: 7px; white-space: nowrap; border-bottom: dashed 1px #DCDFE6" width="130">
								<el-checkbox :indeterminate="isIndeterminateYQ" @change="handleCheckAllChangeYQ" label="有权" value="有权" border size="small" v-model="yq" @keyup.enter.native="submit"></el-checkbox>
							</td>
							<td valign="top" style="padding: 7px; border-bottom: dashed 1px #DCDFE6">
								<div style="text-align:left">
									<el-checkbox-group v-model="yqsub" @keyup.enter.native="submit">
										<el-checkbox label="审定授权" value="审定授权" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">审定授权</el-checkbox>
										<el-checkbox label="部分无效" value="部分无效" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">部分无效</el-checkbox>
									</el-checkbox-group>
								</div>
							</td>
						</tr>
						<tr>
							<td valign="top" style="padding:7px;white-space:nowrap;border-bottom:dashed 1px #DCDFE6" width="1">
								<el-checkbox :indeterminate="isIndeterminateSZ" @change="handleCheckAllChangeSZ" label="审中" value="审中" border size="small" v-model="sz" @keyup.enter.native="submit"></el-checkbox>
							</td>
							<td valign="top" style="padding: 7px; border-bottom: dashed 1px #DCDFE6">
								<div style="text-align:left">
									<el-checkbox-group v-model="szsub" @keyup.enter.native="submit">
										<el-checkbox label="公开发明" value="公开发明" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">公开发明</el-checkbox>
										<el-checkbox label="实质审查" value="实质审查" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">实质审查</el-checkbox>
									</el-checkbox-group>
								</div>
							</td>
						</tr>
						<tr>
							<td valign="top" style="padding: 7px; white-space: nowrap; border-bottom: dashed 1px #DCDFE6" width="1">
								<el-checkbox :indeterminate="isIndeterminateWQ" @change="handleCheckAllChangeWQ" label="无权" value="无权" border size="small" v-model="wq" @keyup.enter.native="submit"></el-checkbox>
							</td>
							<td valign="top" style="padding: 7px; border-bottom: dashed 1px #DCDFE6">
								<div style="text-align:left">
									<el-checkbox-group v-model="wqsub" @keyup.enter.native="submit">
										<el-checkbox label="避重放弃" value="避重放弃" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">避重放弃</el-checkbox>
										<el-checkbox label="主动放弃" value="主动放弃" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">主动放弃</el-checkbox>
										<el-checkbox label="视为放弃" value="视为放弃" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">视为放弃</el-checkbox>
										<el-checkbox label="未缴年费" value="未缴年费" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">未缴年费</el-checkbox>
										<el-checkbox label="驳回" value="驳回" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">驳回</el-checkbox>
										<el-checkbox label="全部无效" value="全部无效" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">全部无效</el-checkbox>
										<el-checkbox label="期满终止" value="期满终止" border size="small" style="margin-bottom:5px;margin-left:0;width:97px">期满终止</el-checkbox>
										<el-checkbox label="主动撤回" value="主动撤回" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">主动撤回</el-checkbox>
										<el-checkbox label="视为撤回" value="视为撤回" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px">视为撤回</el-checkbox>
										<!--<el-checkbox label="视为撤回" value="视为撤回" border size="small" style="margin-bottom: 5px; margin-left: 0; width: 97px"></el-checkbox>-->
									</el-checkbox-group>
								</div>
							</td>
						</tr>
					</table>
				</div>
				<div style="width:900px; margin: 0 auto 0 auto">
					<div style="padding:10px 0 0 0 ">
						<div style="padding: 5px 0">
							<el-input placeholder="例如：CN201410302384.2" v-model="input2" @input="changeinput($event)"
												title="输入示例：
1、完整的申请号或公开号：CN201410302384.2 或 201410302384.2
2、申请号或公开号中部分字符：201410302
3、可使用逻辑运算符：CN201410302384.2 OR CN201230530623.1" clearable @keyup.enter.native="submit">
								<template slot="prepend">
									申请号/公开号&ensp;&ensp;&ensp;
								</template>
							</el-input>
						</div>
						<div style="text-align: left; padding: 5px 0 ;white-space:nowrap;overflow:hidden">
							<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="1">
										<el-select v-model="type3" slot="prepend" @blur="blurselect" @change="changeselect" ref="selectAppType" style="width:152px">
											<el-option label="公告日" value="PD="></el-option>
											<el-option label="申请日" value="AD="></el-option>
										</el-select>
									</td>
									<td>
										<el-input placeholder="例如：20130105 或 201301 或 2013" @input="changeinput($event)" v-model="input3" maxlength="8"
															show-word-limit style="width:347px"
															title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" clearable @keyup.enter.native="submit">
										</el-input>
									</td>
									<td width="1" align="center" style="font-size:14px">
										至
									</td>
									<td align="right">
										<el-input placeholder="例如：20150105 或 201501 或 2015" @input="changeinput($event)" v-model="input4" maxlength="8" show-word-limit style="width:347px;float:right"
															title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" clearable @keyup.enter.native="submit">
										</el-input>
									</td>
								</tr>
							</table>
						</div>
						<div style="padding: 5px 0">
							<el-input placeholder="例如：华为" v-model="input1" @input="changeinput($event)"
												title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“华为”和“公司”，输入：华为 AND 公司
2、内容中需要包含“华为”或者“公司”，输入：华为 OR 公司" clearable @keyup.enter.native="submit">
								<template slot="prepend">
									申请人/发明人&ensp;&ensp;&ensp;
								</template>
							</el-input>
						</div>
						<div style="padding: 5px 0">
							<el-input placeholder="例如：计算机" v-model="input" @input="changeinput($event)"
												title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" clearable @keyup.enter.native="submit">
								<template slot="prepend">
									<!--名称/摘要/主权项-->关键词&emsp;&emsp;&emsp;&emsp;&emsp;
								</template>
							</el-input>
						</div>
					</div>
					<div style="margin-top: 20px;text-align:center">
						<el-button type="primary" @click="submit">检索</el-button>
						<el-button @click="reloadall">清空</el-button>
					</div>
				</div>
			</form>
		</el-card>
		<el-tabs style="width:100%;display:none" type="border-card" shadow="never">
			<el-tab-pane label="中国法律状态检索">
				<el-form class="myForm" label-width="80px" :model="form">
					<el-form-item label="申请号">
						<el-input v-model.trim="form.zlh" placeholder="例如:CN98803865.X"></el-input>
					</el-form-item>
					<el-form-item label="公告日">
						<el-input v-model="form.region" placeholder="例如:20101010"></el-input>
					</el-form-item>
					<el-form-item label="状态">
						<el-input v-model="form.type" placeholder="例如:公开"></el-input>
					</el-form-item>
					<el-form-item label="详情">
						<el-input v-model="form.data" placeholder="请输入内容"></el-input>
					</el-form-item>
				</el-form>
				<div>
					<el-button type="primary" @click="onSubmit">检索</el-button>
					<el-button @click="form = {}">清空</el-button>
				</div>
			</el-tab-pane>
		</el-tabs>
		<el-card v-if="!first" v-loading="loading" style="margin: 20px; text-align: left; display: none;">
			<div class="title">
				<span style="margin-left: 10px;">申请号：</span>
				<span style="color: #1DA1F2;">{{result.zlh}}</span>
			</div>
			<div class="detail">
				<div><strong>标题：</strong>{{result.title}}</div>
				<!-- <div><strong>最终法律状态：</strong>
				<el-tag>{{result.sub_law_stat}}</el-tag>
			</div> -->
				<div>
					<strong>法律状态信息：</strong>
					ng
					su
					<el-tag>{{result.main_law_stat}}</el-tag>
				</div>
			</div>
			<el-timeline>
				<el-timeline-item v-for="item in result.raw_law_stats" :timestamp="item.law_date" placement="top">
					<el-card>
						<h4>法律状态类型：{{item.law_stat}}</h4>
						<p v-html="item.law_note"></p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</el-card>
	</div>
</template>

<script>
	import {
    search, law_stat
	} from '../api/search.js'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				loading: false,
				first: true,
				form: {
					zlh:'',
				},
				result: {},
				checkcountry: ["FM", "SYXX", "WG"],
        yqsub: [],
        szsub: [],
        wqsub: [],
        type3: "PD=",
        input: "",
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        username: localStorage.getItem("username"),
			}
		},
		mounted() {},
		watch: {
			'form.zlh': { // 深度监听，可监听到对象、数组的变化
				handler (val, oldVal) {
				this.form.zlh = val.toUpperCase()
				},
				deep: true
			}
		},
		methods: {
			reloadall() {
				location.reload();
			},
      handleCheckAllChangeYQ(val) {
        let arrayPush = ['审定授权','部分无效'];
        this.yqsub = val ? arrayPush : [];
      },
      handleCheckAllChangeSZ(val) {
        let arrayPush = ['公开发明', '实质审查'];
        this.szsub = val ? arrayPush : [];
      },
      handleCheckAllChangeWQ(val) {
        let arrayPush = ['避重放弃', '主动放弃', '视为放弃', '未缴年费', '驳回', '全部无效', '期满终止', '主动撤回', '视为撤回'];
        this.wqsub = val ? arrayPush : [];
			},
			changeinput(e) {
        this.$forceUpdate();
			},
      submit() {
        var query = {};
				query.expr = "";
				var arr11 = this.yqsub.concat(this.szsub).concat(this.wqsub);
				if (arr11.length == 0) { alert('请选择法律状态！'); return; }
				//alert(arr11); return;
        query.expr = "LS=(" + arr11.join(" OR ") + ")";
        //alert(query.expr); return;
        if (this.input != "") {
          if (query.expr == "") {
            query.expr = "ALL=(" + this.input + ")";
            //query.expr = "TI=(" + this.input + ")" + " OR AB=(" + this.input + ")" + " OR FCL=(" + this.input + ")";
          } else {
            query.expr = "(" + query.expr + ")" + " AND " + "ALL=(" + this.input + ")";
            //query.expr = "(" + query.expr + ")" + " AND " + "(" + "TI=(" + this.input + ")" + " OR AB=(" + this.input + ")" + ")";
          }
        }
        if (this.input1 != "") {
          if (query.expr == "") {
            query.expr = "PA=(" + this.input1 + ")" + " OR IN=(" + this.input1 + ")";
          } else {
            query.expr = "(" + query.expr + ")" + " AND (" + "PA=(" + this.input1 + ")" + " OR IN=(" + this.input1 + ")" + ")";
          }
        }
        if (this.input2 != "") {
          if (query.expr == "") {
            query.expr = "PNM=(" + this.input2 + ")" + " OR AN=(" + this.input2 + ")";
          } else {
            query.expr = "(" + query.expr + ")" + " AND (" + "PNM=(" + this.input2 + ")" + " OR AN=(" + this.input2 + ")" + ")";
          }
        }
        if (this.input3 == undefined || this.input3 == "undefined") { this.input3 = ""; }
        if (this.input4 == undefined || this.input4 == "undefined") { this.input4 = ""; }
        if (this.input3 != "" || this.input4 != "") {
          var d1 = this.input3;
					var d2 = this.input4;
          if (d1 == "" && d2 != "") { d1 = d2; d2 = ""; }
          const result = /^\d+$/.test(d1);
          if (!result) {
            alert("日期格式为4位、6位、8位数字，请正确填写！");
            return;
          }
          if (d2 != "") {
            const result2 = /^\d+$/.test(d2);
            if (!result2) {
              alert("日期格式为4位、6位、8位数字，请正确填写！");
              return;
            }
            if (d1.length != d2.length) {
              alert("起始日期格式与结束日期格式不一致，请修正后重新检索！");
              return;
            }
            const result1 = /^\d+$/.test(d2);
            if (!result1) {
              alert("日期格式为4位、6位、8位数字，请正确填写！");
              return;
            }
            if (query.expr == "") {
              query.expr = this.type3 + "(" + d1 + " TO " + d2 + ")";
            } else {
              query.expr = "(" + query.expr + ")" + " AND (" + this.type3 + "(" + d1 + " TO " + d2 + ")" + ")";
            }
          }
          else {
            if (query.expr == "") {
              query.expr = this.type3 + d1;
            } else {
              query.expr = "(" + query.expr + ")" + " AND (" + this.type3 + d1 + ")";
            }
          }
				}
				//alert(query.expr); return;
        query.is_cross_language = false;
        query.is_include_synonym = false;
        query.is_include_company = false;
        query.countries = this.checkcountry.join(",");
        if (this.username != null && this.username != 'guest') {
          query.username = this.username;
        }
        query.analysis = false;
        localStorage.setItem("expr", query.expr);
        search(query).then((res) => {
          if (res) {
            var history = localStorage.getItem("history");
            if (history)
              localStorage.setItem(
                "history",
                history + "#" + query.expr + "@" + query.countries
              );
            else
            localStorage.setItem("history", query.expr + "@" + query.countries);
            localStorage.setItem("isnew", 1);
            localStorage.setItem("countries", query.countries);
            localStorage.setItem("search", res.msg);
            // this.$message.success(res.id);
            this.$router.push("/search-result");
          }
        });
      },
			onSubmit() {
				if (!this.form.zlh) {
					this.$message.warning("申请号必须输入")
				} else {
					this.loading = true
					this.first = false
					law_stat(this.form).then(res => {
						if (res) {
							this.result = res
							this.result.zlh = this.form.zlh
							this.result.data = '暂无相关信息'
						}
						this.loading = false
					})
				}
			}
		}
	}
</script>

<style scoped>
  .home {
    /*text-align: left;*/
    padding: 20px;
    /*width: 80%;
    margin: 0 auto;*/
  }

	.myForm {
		margin: 10px 10px 10px 50px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.title {
		width: 100%;
		background-color: #EBEEF5;
		border-radius: 3px;
		height: 40px;
		line-height: 40px;
		border: #909399 solid 1px;
	}

	.detail {
		padding: 10px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
	}
</style>
