<template>
	<div class="home" style="margin:0 20px;padding:0">		
		<el-container>
			<el-header style="padding-top:0;padding-bottom:0">
				<div style="font-size: 20px; padding:20px 0 0 0; font-weight: normal; border-bottom: dashed 1px #DCDFE6">
					<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="1" style="padding-top:3px;padding-right:7px">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
									<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
								</svg>
							</td>
							<td valign="top" align="left">
								技术统计分析
							</td>
						</tr>
					</table>
				</div>
			</el-header>
			<el-container style="padding:0 20px">
				<el-aside width="200px">
					<el-tree ref="csjtree" :data="list" :props="defaultProps" @node-click="handleNodeClick" default-expand-all="true" 
									 node-key="type"
									 :expand-on-click-node =" false"
									 :current-node-key="currentLivingId"
									 highlight-current="true"
									 ></el-tree>
					<!--<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item title="长三角专利申请类型报表" name="1">
				<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
				<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
			</el-collapse-item>
			<el-collapse-item title="反馈 Feedback" name="2">
				<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
				<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
			</el-collapse-item>
			<el-collapse-item title="效率 Efficiency" name="3">
				<div>简化流程：设计简洁直观的操作流程；</div>
				<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
			</el-collapse-item>
			<el-collapse-item title="可控 Controllability" name="4">
				<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
				<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
			</el-collapse-item>
		</el-collapse>-->
				</el-aside>
				<el-main>
					<h2>{{name}}</h2>
					<div style="width: 100%;height: 79vh;" id="main"></div>
					<!-- <div>
			<el-button type="primary" size="small" @click="back">返回</el-button>
			<el-button type="primary" size="small" @click="see()">查看表格</el-button>
		</div> -->
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import {
		single_field,
		double_field,
		search,
	} from '../api/search.js'
	export default {
		data() {
			return {
        name: '长三角发明专利报表',
				id: '',
				type: 0,
				list: [{
						label: '长三角专利申请类型报表',
						children: [{
								label: '发明专利',
								type: 1
							},
							{
								label: '实用新型',
								type: 2
							},
							{
								label: '外观设计',
								type: 3
							},
							{
								label: '发明授权',
								type: 4
							}
						]
					}, {
						label: '长三角技术构成报表',
						children: [{
								label: '上海',
								type: 5
							},
							{
								label: '江苏',
								type: 6
							},
							{
								label: '浙江',
								type: 7
              },
              {
                label: '安徽',
                type: 14
              }
						]
					}, {
						label: '上海各地区申请类型报表',
						children: [{
								label: '发明专利',
								type: 8
							},
							{
								label: '实用新型',
								type: 9
							},
							{
								label: '外观设计',
								type: 10
							},
							{
								label: '发明授权',
								type: 11
							}
						]
					}, {
						label: '上海各地区技术构成报表',
						children: [{
								label: '黄浦区',
								type: 12
							},
							{
								label: '徐汇区',
								type: 12
							},
							{
								label: '长宁区',
								type: 12
							},
							{
								label: '静安区',
								type: 12
							},
							{
								label: '普陀区',
								type: 12
							},
							{
								label: '虹口区',
								type: 12
							},
							{
								label: '杨浦区',
								type: 12
							},
							{
								label: '闵行区',
								type: 12
							},
							{
								label: '宝山区',
								type: 12
							},
							{
								label: '嘉定区',
								type: 12
							},
							{
								label: '浦东新区',
								type: 12
							},
							{
								label: '金山区',
								type: 12
							},
							{
								label: '松江区',
								type: 12
							},
							{
								label: '青浦区',
								type: 12
							},
							{
								label: '奉贤区',
								type: 12
							},
							{
								label: '崇明区',
								type: 12
							},

						],
					},
					{
						label: '热点地图分析',
						type: 13
					},
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
        currentLivingId:'',
			}
		},
		mounted() {
      var expr = 'CO=(上海 OR 江苏 OR 浙江 OR 安徽)'
			var countries = 'FM'
			var field_1 = '国省代码'
			var field_2 = '申请年份'
			this.getsearch(expr, countries, field_1, field_2);
			window.onresize = () => {
        var echarts = require('echarts');
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        myChart.resize();
			}
      //alert(JSON.stringify(this.$refs.csjtree.data[0].children[0].type));
      this.currentLivingId = this.$refs.csjtree.data[0].children[0].type
      this.$nextTick(function () {
        this.$refs.csjtree.setCurrentKey(this.currentLivingId)
      })
		},
		methods: {
			handleNodeClick(data) {
				if (data.type) {
					this.type = data.type
					var echarts = require('echarts');
					var chartDom = document.getElementById('main');
					var myChart = echarts.init(chartDom);
					myChart.clear();
					switch (data.type) {
						// 长三角发明专利报表
						case 1:
							this.name = '长三角发明专利报表'
              var expr = 'CO=(上海 OR 江苏 OR 浙江 OR 安徽)'
							var countries = 'FM'
							var field_1 = '国省代码'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 2:
							this.name = '长三角实用新型报表'
              var expr = 'CO=(上海 OR 江苏 OR 浙江 OR 安徽)'
							var countries = 'SYXX'
							var field_1 = '国省代码'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 3:
							this.name = '长三角外观设计报表'
              var expr = 'CO=(上海 OR 江苏 OR 浙江 OR 安徽)'
							var countries = 'WG'
							var field_1 = '国省代码'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 4:
							this.name = '长三角发明授权报表'
              var expr = 'CO=(上海 OR 江苏 OR 浙江 OR 安徽)'
							var countries = 'FMSQ'
							var field_1 = '国省代码'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						// 长三角技术构成报表
						case 5:
							this.name = '长三角（上海）技术构成报表'
							var expr = 'CO=上海'
							var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
							var field_1 = '主分类部'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 6:
							this.name = '长三角（江苏）技术构成报表'
							var expr = 'CO=江苏'
							var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
							var field_1 = '主分类部'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 7:
							this.name = '长三角（浙江）技术构成报表'
							var expr = 'CO=浙江'
							var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
							var field_1 = '主分类部'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
              break;
            case 14:
              this.name = '长三角（安徽）技术构成报表'
              var expr = 'CO=安徽'
              var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
              var field_1 = '主分类部'
              var field_2 = '申请年份'
              this.getsearch(expr, countries, field_1, field_2)
              break;
						// 上海各地区发明专利报表
						case 8:
							this.name = '上海各地区发明专利报表'
							var expr =
								'CO=上海 AND ADDR=(黄浦区 OR 徐汇区 OR 长宁区 OR 静安区 OR 普陀区 OR 虹口区 OR 杨浦区 OR 闵行区 OR 宝山区 OR 嘉定区 OR 浦东新区 OR 金山区 OR 松江区 OR 青浦区 OR 奉贤区 OR 崇明区)'
							var countries = 'FM'
							var field_1 = '申请地址'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 9:
							this.name = '上海各地区实用新型报表'
							var expr =
								'CO=上海 AND ADDR=(黄浦区 OR 徐汇区 OR 长宁区 OR 静安区 OR 普陀区 OR 虹口区 OR 杨浦区 OR 闵行区 OR 宝山区 OR 嘉定区 OR 浦东新区 OR 金山区 OR 松江区 OR 青浦区 OR 奉贤区 OR 崇明区)'
							var countries = 'SYXX'
							var field_1 = '申请地址'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 10:
							this.name = '上海各地区外观设计报表'
							var expr =
								'CO=上海 AND ADDR=(黄浦区 OR 徐汇区 OR 长宁区 OR 静安区 OR 普陀区 OR 虹口区 OR 杨浦区 OR 闵行区 OR 宝山区 OR 嘉定区 OR 浦东新区 OR 金山区 OR 松江区 OR 青浦区 OR 奉贤区 OR 崇明区)'
							var countries = 'WG'
							var field_1 = '申请地址'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						case 11:
							this.name = '上海各地区发明授权报表'
							var expr =
								'CO=上海 AND ADDR=(黄浦区 OR 徐汇区 OR 长宁区 OR 静安区 OR 普陀区 OR 虹口区 OR 杨浦区 OR 闵行区 OR 宝山区 OR 嘉定区 OR 浦东新区 OR 金山区 OR 松江区 OR 青浦区 OR 奉贤区 OR 崇明区)'
							var countries = 'FMSQ'
							var field_1 = '申请地址'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						// 上海各地区技术构成报表
						case 12:
							this.name = '上海各地区技术构成报表'
							var expr = 'CO=上海 AND ADDR=' + data.label
							var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
							var field_1 = '申请地址'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
						// 热点地图分析
						case 13:
							this.name = '热点地图分析'
							var expr = 'CO=北京 OR CO=天津 OR CO=河北 OR CO=山西 OR CO=内蒙古 OR CO=辽宁 OR CO=吉林 OR CO=黑龙江 OR CO=上海 OR CO=江苏 OR CO=浙江 OR CO=安徽 OR CO=福建 OR CO=江西 OR CO=山东 OR CO=河南 OR CO=湖北 OR CO=湖南 OR CO=广东 OR CO=四川 OR CO=贵州 OR CO=云南 OR CO=西藏 OR CO=陕西 OR CO=甘肃 OR CO=青海 OR CO=宁夏 OR CO=新疆 OR CO=海南 OR CO=台湾 OR CO=重庆 OR CO=香港 OR CO=广西 OR CO=澳门'
							// var countries = 'FMSQ'
							var countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
							var field_1 = '国省代码'
							var field_2 = '申请年份'
							this.getsearch(expr, countries, field_1, field_2)
							break;
					}
				}
			},
			getsearch(expr, countries, field_1, field_2) {
				var query = {}
				// query.expr = Base64.encode(this.expr)
				query.expr = expr;
				query.is_cross_language = false;
				query.is_include_synonym = false;
				query.is_include_company = false;
				// query.countries = ["FM", "SYXX", "WG", "FMSQ"].join(',')
				query.countries = countries;
				query.analysis = true;
				search(query).then(res => {
          if (res.msg != undefined) {
						console.log('执行了')
            this.id = res.msg
						this.chart2(field_1, field_2);
					}
				})
			},
			chart2(type1, type2) {
				this.myForm = 2
				var query = {}
				query.id = this.id
				query.field_1 = type1
				query.field_2 = type2
				double_field(query).then(res => {
					var data = []
					var series = []
					this.tableData = res.records
					res.records[0].records.forEach(item => {
						console.log(item.name)
						data.push(item.name)
					})
					res.records.forEach(item => {
						item.records.map((item) => {
							item.value = item.count
						})
						series.push({
							name: item.name,
							type: 'bar',
							data: item.records,
							markPoint: {
								data: [{
										type: 'max',
										name: 'Max'
									},
									{
										type: 'min',
										name: 'Min'
									}
								]
							}
						})
						console.log(series)
					})
					var option;
          option = {
            dataZoom: {
              type: 'inside'
            },
						tooltip: {
							trigger: 'axis'
						},
						toolbox: {
							show: true,
							feature: {
								mark: {
									show: true
								},
								dataView: {
									show: true,
									readOnly: false
								},
								restore: {
									show: true
								},
								saveAsImage: {
									show: true
								}
							}
						},
						// tooltip: {
						// 	trigger: 'item'
						// },
						legend: {
							orient: 'vertical',
							right: '50',
							top: '50'
						},
						// legend: {
						// 	data: data
						// },
						calculable: true,
						xAxis: [{
							type: 'category',
							data: data
						}],
						yAxis: [{
							type: 'value'
						}],
						series: series
					};
					var echarts = require('echarts');

					var chartDom = document.getElementById('main');
					var myChart = echarts.init(chartDom);

					option && myChart.setOption(option);
					this.data = data
					console.log(this.tableData)
				})
			},
		}
	}
</script>

<style scoped>
	.home {}
</style>
