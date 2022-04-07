<template>
	<div class="home">
		<div style="display: flex;text-align: left;padding-top: 10px;height: 10%;">
			<div class="title_before"></div>
			<p class="title">{{title}}</p>
			<p class="total">总计：{{total}}</p>
			<p style="margin-left: 50px;" class="title">切换分析类型：</p>
			<el-select v-model="type" placeholder="请选择" @change="change()">
				<el-option v-for="item in options" :key="item" :label="item" :value="item">
				</el-option>
			</el-select>
		</div>
		<div style="width: 100%;height: 80%;" id="main"></div>
		<el-button type="primary" size="small" @click="back">返回</el-button>
	</div>
</template>

<script>
	import {
		single_field
	} from '../../api/search.js'
	export default {
		data() {
			return {
				title: '检索结果分析图',
				total: 0,
				type: '申请年份',
				options: ['国省代码', '申请年份', '公开年份', '主申请人', '主发明人', '专利类型', '代理机构', '主分类', '主分类部', '主分类大类', '主分类小类', '主分类大组',
					'主分类小组', '法律状态'
				]
			}
		},
		mounted() {
			this.chart()
		},
		methods: {
			back() {
				this.$router.push('/search_list')
			},
			change() {
				console.log(this.type)
				var echarts = require('echarts');
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				myChart.clear();
				this.chart()
			},
			chart() {
				var option;		
				option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: [this.type]
					},
					// toolbox: {
					// 	show: true,
					// 	feature: {
					// 		dataView: {
					// 			show: true,
					// 			readOnly: false
					// 		},
					// 		magicType: {
					// 			show: true,
					// 			type: ['line', 'bar']
					// 		},
					// 		restore: {
					// 			show: true
					// 		},
					// 		saveAsImage: {
					// 			show: true
					// 		}
					// 	}
					// },
					calculable: true,
					xAxis: [{
						type: 'category',
						// prettier-ignore
						data: []
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: this.type,
							type: 'bar',
							data: [],
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
							},
							markLine: {
								data: [{
									type: 'average',
									name: 'Avg'
								}]
							}
						}
					]
				};
				var query = {}
				query.id = localStorage.getItem('search')
				query.field = this.type; 
				single_field(query).then(res=>{
					this.total = res.count
					res.records.map((item)=>{
						item.value = item.count
					})
					console.log(res.records)
					option.series[0].data = res.records
					res.records.forEach(item=>{
						option.xAxis[0].data.push(item.name)
					})
					console.log(option)
					var echarts = require('echarts');
					
					var chartDom = document.getElementById('main');
					var myChart = echarts.init(chartDom);
					
					option && myChart.setOption(option);
				})
			}
		}
	}
</script>

<style scoped>
	.home {
		width: 100%;
		height: 90vh;
	}

	.title_before {
		width: 5px;
		height: 30px;
		margin: 5px 10px 5px 20px;
		background-color: #1492ff;
	}

	.title {
		line-height: 40px;
		font-size: 20px;
		font-weight: 600;
	}

	.total {
		text-align: left;
		margin-left: 38px;
		line-height: 40px;
		font-size: 20px;
		font-weight: 600;
		color: #1492ff;
	}
</style>
