<template>
	<div class="home" id="thishomediv">
		<el-container>
			<el-aside width="220px" style="padding:20px 0 0 10px">
				<el-container>
					<el-header style="height:30px;text-align:left;padding:0 10px 0 0">
						<svg style="float:right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1492ff" class="bi bi-graph-up" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
						</svg>
						<span style="font-size:16px;">检索结果分析</span>
					</el-header>
					<el-main style="padding:0" class="wrapper slistchfx">
						<div style="padding-right:10px;">
							<el-menu ref="leftmenu" default-active="1-1" class="el-menu-vertical-demo" style="text-align:left;border-right:0" @select="handleSelect" @open="handleopen">
								<el-submenu v-show="hascnshow" index="1" style="border-bottom:dashed 1px #F1F1F1">
									<template slot="title">
										<span>区域分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
										<el-menu-item index="1-1">区域排名分析</el-menu-item>
										<el-menu-item index="1-2">区域趋势分析</el-menu-item>
										<el-menu-item index="1-3">区域技术构成分析</el-menu-item>
										<el-menu-item index="1-4">区域专利权人分析</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="2" style="border-bottom:dashed 1px #F1F1F1">
									<template slot="title">
										<span>申请人分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
										<el-menu-item index="2-1">申请人趋势分析</el-menu-item>
										<el-menu-item index="2-2">申请人分析</el-menu-item>
										<el-menu-item index="2-3">申请人技术构成分析</el-menu-item>
										<!--<el-menu-item index="2-4">申请人组合分析</el-menu-item>-->
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="3" style="border-bottom:dashed 1px #F1F1F1">
									<template slot="title">
										<span>技术领域分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
										<el-menu-item index="3-1">技术领域趋势分析</el-menu-item>
										<el-menu-item index="3-2">技术领域区域分布分析</el-menu-item>
										<el-menu-item index="3-3">技术领域申请人构成分析</el-menu-item>
										<el-menu-item index="3-4">技术领域发明人构成分析</el-menu-item>
                    <el-menu-item index="3-5">技术领域组合分析</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="4" style="border-bottom:dashed 1px #F1F1F1">
									<template slot="title">
										<span>趋势分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
										<el-menu-item index="4-1">申请日趋势分析</el-menu-item>
										<el-menu-item index="4-2">公开日趋势分析</el-menu-item>
                    <el-menu-item index="4-3">生命周期分析（申请人）</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu v-show="hascnshow" index="5" style="border-bottom:dashed 1px #F1F1F1">
									<template slot="title">
										<span>专利类型分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
										<el-menu-item index="5-1">专利类型分析</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="6" style="border-bottom:dashed 1px #F1F1F1;display:none">
									<template slot="title">
										<span>自定义分析</span>
									</template>
									<el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="6-1" style="padding:0">                      
                      <div>
                        <el-select v-model="zdyfx1" placeholder="请选择" style="padding:0;margin:0" size="small">
                          <el-option label="主申请人" value="主申请人"></el-option>
                          <el-option label="主发明人" value="主发明人"></el-option>
                          <el-option label="主分类" value="主分类"></el-option>
                          <el-option label="申请年份" value="申请年份"></el-option>
                          <el-option label="公开年份" value="公开年份"></el-option>
                          <el-option label="区域" value="区域"></el-option>
                          <el-option label="代理机构" value="代理机构"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <el-select v-model="zdyfx2" placeholder="请选择" style="padding:0;margin:0" size="small">
                          <el-option label="请选择" value="请选择"></el-option>
                          <el-option label="主申请人" value="主申请人"></el-option>
                          <el-option label="主发明人" value="主发明人"></el-option>
                          <el-option label="主分类" value="主分类"></el-option>
                          <el-option label="申请年份" value="申请年份"></el-option>
                          <el-option label="公开年份" value="公开年份"></el-option>
                          <el-option label="区域" value="区域"></el-option>
                          <el-option label="代理机构" value="代理机构"></el-option>
                        </el-select>
                      </div>
                      <div>
                        <el-button type="primary" round size="small" style="width:100%" @click="zdyfxdom">分析</el-button>
                      </div>
                    </el-menu-item>
									</el-menu-item-group>
								</el-submenu>
							</el-menu>
						</div>
					</el-main>
				</el-container>
			</el-aside>
			<el-main style="padding: 0;">
				<el-container>
					<el-aside style="width:6px;background:#E1E1E1"></el-aside>
					<el-main style="display: flex;padding:0px;background:#FFF">
						<el-container>
							<el-header style="text-align: left;padding:0 10px;box-shadow:0 0 10px 0 #E1E1E1;height:60px">
								<div style="white-space:normal;height:60px;font-size:14px;overflow:hidden;width:98%;line-height:60px;">
									<span style="color: #409eff" :title="expr">检索式：{{expr}}</span>
								</div>
							</el-header>
							<el-main v-loading="loading" id="ssssss" style="display: flex;padding:0px;margin-top:10px;" class="wrapper">
								<template>
									<el-carousel ref="pageshow" height="100%" style="width:100%;height:100%" direction="vertical" :autoplay="false" :indicator-position="none">
										<el-carousel-item name="1-1">
											<div id="echart1-1" style="width: 95%;height: 97%;"></div>
										</el-carousel-item>
										<el-carousel-item name="1-2">
											<div id="echart1-2" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="1-3">
											<div id="echart1-3" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="1-4">
											<div id="echart1-4" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="2-1">
											<div id="echart2-1" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="2-2">
											<div id="echart2-2" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="2-3">
											<div id="echart2-3" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="2-4">
											<div id="echart2-4" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="3-1">
											<div id="echart3-1" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="3-2">
											<div id="echart3-2" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="3-3">
											<div id="echart3-3" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="3-4">
											<div id="echart3-4" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="3-5">
											<div id="echart3-5" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="4-1">
											<div id="echart4-1" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="4-2">
											<div id="echart4-2" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="4-3">
											<div id="echart4-3" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="5-1">
											<div id="echart5-1" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
										<el-carousel-item name="6-1">
											<div id="echart6-1" style="width: 95%; height: 97%; "></div>
										</el-carousel-item>
									</el-carousel>
								</template>
							</el-main>
						</el-container>
					</el-main>
				</el-container>
			</el-main>
		</el-container>
		<div style="display: none;text-align: left;padding-top: 10px;height: 10%;">
			<div class="title_before"></div>
			<p class="title">{{title}}</p>
			<p class="total">总计：{{total}}</p>
			<p style="margin-left: 50px;" class="title">切换分析类型：</p>
			<el-select v-model="type" placeholder="请选择" @change="change()">
				<el-option-group v-for="group in options" :key="group.label" :label="group.label">
					<el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-option-group>
			</el-select>
			<p style="margin-left: 50px;" class="title">自定义分析：</p>
			<el-select style="margin-left: 10px;" v-model="field1" placeholder="请选择第一字段">
				<el-option v-for="item in options2" :key="item" :label="item" :value="item">
				</el-option>
			</el-select>
			<el-select style="margin-left: 10px;" v-model="field2" placeholder="请选择第二字段">
				<el-option v-for="item in options2" :key="item" :label="item" :value="item">
				</el-option>
			</el-select>
			<div style="margin-left: 10px;">
				<el-button type="primary" @click="myself">自定义分析</el-button>
			</div>
		</div>

		<div style="width: 100%;height: 80%;display:none" id="main"></div>
		<el-button type="primary" size="small" @click="back" style="display:none">返回</el-button>
		<el-button type="primary" size="small" @click="see()" style="display:none">查看表格</el-button>

		<el-dialog title="详情表格" :visible.sync="see1" width="800px" style="text-align: center;width: auto;">
			<div style="width: 700px;margin: 0 auto;overflow-x: auto;padding: 50px 0;">
				<div v-for="(item,index) in tableData1" style="display: grid;grid-template-columns: repeat(2,1fr);">
					<div style="border: 1px solid #000000;">{{item.name}}</div>
					<div style="border: 1px solid #000000;">{{item.value}}</div>
				</div>
			</div>
		</el-dialog>

		<el-dialog title="详情表格" :visible.sync="see2" width="1500px" style="text-align: center;width: auto;">
			<div style="width: 1400px;margin: 0 auto;overflow-x: auto;padding: 50px 0;">
				<div style="display: grid;grid-template-columns: repeat(50,1fr);">
					<div style="width: 200px;border: 1px solid #000000;"></div>
					<div style="width: 100px;border: 1px solid #000000;" v-for="item in data">{{item}}</div>
				</div>
				<div v-for="(item,index) in tableData">
					<div style="display: grid;grid-template-columns: repeat(50,1fr);">
						<div style="width: 200px;border: 1px solid #000000;">{{item.name}}</div>
<!-- 						<div style="width: 100px;border: 1px solid #000000;" v-for="data in item.records">{{data.count}}
						</div> -->
						<div style="width: 100px;border: 1px solid #000000;" v-for="id in data.length">
							<p>{{item.records[id]?item.records[id].count:'0'}}</p>
						</div>
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		single_field,
    double_field,
    adjacency_matrix,
    statistic
	} from '../../api/search.js'
	export default {
		data() {
      return {
        hascnshow: true,
        expr: localStorage.getItem("expr"),
				loading: false,
				pagenames: ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3', '3-4', '3-5', '4-1', '4-2', '4-3', '5-1', '6-1'],
        cncountry: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建"
                , "江西", "山东", "河南", "湖北", "湖南", "广东", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "海南"
                , "台湾", "重庆", "香港", "广西", "澳门"],
        //pageshow,
				myForm: 1,
				tableData: [],
        tableData1: [],
        zdyfx1: '主申请人',
        zdyfx2: '请选择',
				data: [],
				see1: false,
				see2: false,
				title: '检索结果分析图',
				total: 0,
				type: '区域排名分析',
				field1: '',
				field2: '',
				options: [{
					label:'',
					options:[
						{
							value:'请选择分析类型',
							label:'请选择分析类型'
						}
					]
				},{
					label: '区域分析',
					options: [{
							value: '区域排名分析',
							label: '区域排名分析'
						}, {
							value: '区域趋势分析',
							label: '区域趋势分析'
						},
						{
							value: '区域技术构成分析',
							label: '区域技术构成分析'
						},
						{
							value: '区域专利权人分析',
							label: '区域专利权人分析'
						}
					]
				}, {
					label: '申请人分析',
					options: [{
							value: '申请人分析',
							label: '申请人分析'
						}, {
							value: '申请人趋势分析',
							label: '申请人趋势分析'
						}, {
							value: '申请人技术构成分析',
							label: '申请人技术构成分析'
						},
						// {
						// 	value: '申请人组合分析',
						// 	label: '申请人组合分析'
						// },
					]
				}, {
					label: '技术领域分析',
					options: [{
							value: '技术领域趋势分析',
							label: '技术领域趋势分析'
						}, {
							value: '技术领域区域分布分析',
							label: '技术领域区域分布分析'
						}, {
							value: '技术领域构成分析',
							label: '技术领域构成分析'
						}, {
							value: '技术领域发明人构成分析',
							label: '技术领域发明人构成分析'
						},
						// {
						// 	value: '技术领域组合分析',
						// 	label: '技术领域组合分析'
						// },
					]
				}, {
					label: '趋势分析',
					options: [{
						value: '申请日趋势分析',
						label: '申请日趋势分析'
					}, {
						value: '公开日趋势分析',
						label: '公开日趋势分析'
					}, {
						value: '周期分析',
						label: '周期分析'
					}]
				}],
				options2: ['请选择第一字段','国省代码', '申请年份', '公开年份', '主申请人', '主发明人', '专利类型', '代理机构', '主分类', '主分类部', '主分类大类', '主分类小类',
					'主分类大组',
					'主分类小组', '法律状态'
				]
			}
		},
		mounted() {
      try {
        document.getElementById("thishomediv").style.height = (document.body.clientHeight - 60) + '.px';
      } catch (e) { }
      try {
        window.onresize = () => {
					document.getElementById("thishomediv").style.height = (document.body.clientHeight - 60) + '.px';
					this.pagenames.forEach(item => {
						try {
              var pagediv = document.getElementById('echart' + item);
							if (pagediv.innerHTML.length >10) {
								var echarts = require('echarts');
								var chartDom = document.getElementById('echart' + item);
								var myChart = echarts.init(chartDom);
								myChart.resize();
							}
						}
						catch (e) {  }
					});
        }
      } catch (e) { }
			//this.chart1('国省代码');
      var shitemk = '1-1';
      try {
        var countryss = localStorage.getItem("countries");
        countryss = countryss.toUpperCase();
        if (countryss.indexOf('FM') >= 0 || countryss.indexOf('FMSQ') >= 0 || countryss.indexOf('SYXX') >= 0 || countryss.indexOf('WG') >= 0) {
          this.hascnshow = true;
        }
        else {
          this.hascnshow = false;
          shitemk = '2-1';
          try {
            this.$refs.leftmenu.open('2');
          }
          catch (e) { }
        }
      }
      catch (e) { }
			this.$nextTick(() => {
        this.setpageshow(shitemk);
      });
		},
		methods: {
      setpageshow(name) {
				try {
					this.$refs.pageshow.setActiveItem(name); 
				}
        catch (e) { }
				try {
					var pagediv = document.getElementById('echart' + name);
          if (pagediv.innerHTML.length < 10) {
            this.loading = true;
            var echarts = require('echarts');
						var myChart11 = echarts.init(pagediv);
						if (name == '1-1') {
							var data = [];
							var xdata = [];
							var query = {};
							query.id = localStorage.getItem('search');
              query.field = '国省代码';
              query.limit = 300;
							single_field(query).then(res => {
								//this.total = res.count
								res.records.map((item) => {
									item.value = item.count; 
								})
								this.tableData1 = res.records;
								//data = res.records;
								res.records.forEach(item => {
									if(this.cncountry.indexOf(item.name) >= 0){
										xdata.push(item.name);
										data.push(item.count);
									}
								});
                var option = {
                  title: {
										text: '区域排名分析',
                    left:'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
											saveAsImage: {},
											dataView: { //数据视图
												show: true,
												optionToContent: function (opt) {
													var axisData = opt.xAxis[0].data; // 坐标数据
													var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>区域</td><td>数量</td>'; // 表头
													//series.forEach(function (item) {
													//	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
													//});
													var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
													var tdBodys = ''; // 表数据
													for (var i = 0, l = axisData.length; i < l; i++) {
														for (var j = 0; j < series.length; j++) {
															tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
														}
														table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
														tdBodys = '';
													}
													table += '</tbody></table></div>';
													return table;
												},
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
											},
                      magicType: {
                        //type: ['line', 'bar']
                      }
										},
                    orient: 'horizontal',//horizontal  vertical
										showTitle: true,
                    
                  },
                  legend: {},
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [
                    {
                      data: data,
                      type: 'bar',
                      label: {
                        formatter: '{c}',
                        show: true,
                        position: 'top'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
							});
						}
            if (name == '1-2') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 300;
							query.field_1 = '国省代码';
              query.field_2 = '申请年份';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var legenddata = [];//图例
                var series = [];
                this.tableData = res.records;
                //data = res.records;
								//var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
									item.records.forEach(item => {
										if (xdata.indexOf(item.name) < 0) {
											xdata.push(item.name);
										}
                  });
								});
								xdata = xdata.sort();
								//alert(xdata);
								var iiiii = 0;
								res.records.forEach(item => {
									item.records.map((item) => {
										item.value = item.count;
									});
									if (this.cncountry.indexOf(item.name) >= 0) {
										legenddata.push(item.name);
										var itemrecords = [];
                    //if (iiiii == 0) { alert(itemrecords.length); }
										xdata.forEach(item1 => {
											var xsitem = item.records.filter(item => item.name == item1);
											if (xsitem.length == 0) {
												itemrecords.push({ "name": item1, "count": 0, value: 0 });
											} else {
												itemrecords = itemrecords.concat(xsitem);
											}
										});
                    itemrecords = itemrecords.sort(s => s.name);
                    //if (iiiii == 0) { alert(itemrecords.length); }
										iiiii = iiiii + 1;
                    series.push({
                      name: item.name,
                      type: 'line',
                      label: {
                        formatter: '{b}：{c}',
                        show: false,
                        position: 'top'
                      },
                      data: itemrecords
                    })
                  }
                });
                var option = {
                  title: {
                    text: '区域趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                          	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
														for (var j = 0; j < series.length; j++) {
															tdBodys += '<td>' + series[j].data[i].count + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
												},
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
									legend: {
                    bottom:0
									},
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: series
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '1-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 300;
              query.limit_2 = 300;
              query.field_1 = '国省代码';
              query.field_2 = '主分类部';
							double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
								var series = [];
								var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records = res.records.sort(s => s.name);
                res.records.forEach(item => {
                  if (this.cncountry.indexOf(item.name) >= 0) {
                    xdata.push(item.name);
                    item.records.forEach(item => {
                      if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                        && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                        if (ydata1.filter(item1 => item1.name == item.name).length == 0) {
                          ydata1.push({ 'name': item.name, 'count': item.count});
                        }
                        else {
                          ydata1.forEach(iitt => {
                            if (iitt.name == item.name)
                            {
                              iitt.count = iitt.count + item.count;
                            }
                          });
                        }
                      }
                    });
                  }
                });
                //alert(JSON.stringify(ydata1));
                ///小到大排序
                ydata1 = ydata1.sort(function (a, b) {
                  let x = a.count;
                  let y = b.count;
                  return ((x < y) ? -1 : (x > y) ? 1 : 0);
                });
                ydata1.reverse();
                ydata1.forEach(iitt => {
                  ydata.push(iitt.name);
                });
                ydata = ydata.slice(0, 10);
                //xdata = xdata.slice(0, 10);
                //alert(JSON.stringify(ydata1));
                //return;
								
								var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
										var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
											if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        //alert(JSON.stringify(item));
                        //alert(JSON.stringify(ysitem));
                        series.push([iiiii, jjjjj, ysitem[0].count]);
												if (max < ysitem[0].count) { max = ysitem[0].count;}
											}
											jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
								});
                //alert(ydata);
								//alert(series);
								var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
								});
                var option = {
                  title: {
                    text: '区域技术构成分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
										formatter: function (params) {
											//alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主分类部：' +
                        ydata[params.value[1]] +
                        '， 区域：' +
                        xdata[params.value[0]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
											data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '1-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 300;
              query.limit_2 = 50;
              query.field_1 = '国省代码';
              query.field_2 = '主申请人';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
                var series = [];
                var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records = res.records.sort(s => s.name);
                res.records.forEach(item => {
                  if (this.cncountry.indexOf(item.name) >= 0) {
                    xdata.push(item.name);
                    item.records.forEach(item => {
                      if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                        && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                        if (ydata1.filter(item1 => item1.name == item.name).length == 0) {
                          ydata1.push({ 'name': item.name, 'count': item.count });
                        }
                        else {
                          ydata1.forEach(iitt => {
                            if (iitt.name == item.name) {
                              iitt.count = iitt.count + item.count;
                            }
                          });
                        }
                      }
                    });
                  }
                });
                //alert(JSON.stringify(ydata1));
                ///小到大排序
                ydata1 = ydata1.sort(function (a, b) {
                  let x = a.count;
                  let y = b.count;
                  return ((x < y) ? -1 : (x > y) ? 1 : 0);
                });
                ydata1.reverse();
                ydata1.forEach(iitt => {
                  ydata.push(iitt.name);
                });
                ydata = ydata.slice(0, 10);
                //xdata = xdata.slice(0, 10);
                //alert(JSON.stringify(ydata1));
                //return;

                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
                    var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
                      if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        //alert(JSON.stringify(item));
                        //alert(JSON.stringify(ysitem));
                        series.push([iiiii, jjjjj, ysitem[0].count]);
                        if (max < ysitem[0].count) { max = ysitem[0].count; }
                      }
                      jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
                });
                //alert(ydata);
                //alert(series);
                var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
                });
                var option = {
                  title: {
                    text: '区域专利权人分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params.value));
                      return (
                        params.value[2] +
                        '， 主申请人：' +
                        ydata[params.value[1]] +
                        '， 区域：' +
                        xdata[params.value[0]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '1-5') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 20;
              query.field_1 = '国省代码';
              query.field_2 = '主分类部';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var legenddata = [];//图例
                var series = [];
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  item.records.forEach(item => {
                    if (xdata.indexOf(item.name) < 0) {
                      xdata.push(item.name);
                    }
                  });
                });
                xdata = xdata.sort();
                //alert(xdata);
                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (this.cncountry.indexOf(item.name) >= 0) {
                    legenddata.push(item.name);
                    var itemrecords = [];
                    //if (iiiii == 0) { alert(itemrecords.length); }
                    xdata.forEach(item1 => {
                      var xsitem = item.records.filter(item => item.name == item1);
                      if (xsitem.length == 0) {
                        itemrecords.push({ "name": item1, "count": 0, value: 0 });
                      } else {
                        itemrecords = itemrecords.concat(xsitem);
                      }
                    });
                    itemrecords = itemrecords.sort(s => s.name);
                    //if (iiiii == 0) { alert(itemrecords.length); }
                    iiiii = iiiii + 1;
                    series.push({
                      name: item.name,
                      type: 'line',
                      data: itemrecords
                    })
                  }
                });
                var option = {
                  title: {
                    text: '区域趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i].count + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: series
                };
                myChart11.setOption(option);
              });
            }

            if (name == '2-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 10;
              query.field_1 = '主申请人';
              query.field_2 = '申请年份';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var legenddata = [];//图例
                var series = [];
                //this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  item.records.forEach(item => {
                    if (xdata.indexOf(item.name) < 0) {
                      xdata.push(item.name);
                    }
                  });
                });
                xdata = xdata.sort();
                //alert(xdata);
                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  //if (this.cncountry.indexOf(item.name) >= 0) {
                    legenddata.push(item.name);
                    var itemrecords = [];
                    //if (iiiii == 0) { alert(itemrecords.length); }
                    xdata.forEach(item1 => {
                      var xsitem = item.records.filter(item => item.name == item1);
                      if (xsitem.length == 0) {
                        itemrecords.push({ "name": item1, "count": 0, value: 0 });
                      } else {
                        itemrecords = itemrecords.concat(xsitem);
                      }
                    });
                    itemrecords = itemrecords.sort(s => s.name);
                    //if (iiiii == 0) { alert(itemrecords.length); }
                    iiiii = iiiii + 1;
                    series.push({
                      name: item.name,
                      type: 'line',
                      data: itemrecords
                    })
                  //}
                });
                var option = {
                  title: {
                    text: '申请人趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i].count + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: series
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '2-2') {
              var data = [];
              var xdata = [];
              var query = {};
              query.id = localStorage.getItem('search');
              query.field = '主申请人';
              query.limit = 10;
              single_field(query).then(res => {
                //this.total = res.count
                res.records.map((item) => {
                  item.value = item.count;
                })
                this.tableData1 = res.records;
                //data = res.records;
                res.records.forEach(item => {
                  xdata.push(item.name);
                  data.push(item.count);
                });
                var option = {
                  title: {
                    text: '申请人分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>区域</td><td>数量</td>'; // 表头
                          //series.forEach(function (item) {
                          //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          //});
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {},
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [
                    {
                      data: data,
                      type: 'bar',
                      label: {
                        formatter: '{c}',
                        show: true,
                        position: 'top'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '2-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 10;
              query.limit_2 = 300;
              query.field_1 = '主申请人';
              query.field_2 = '主分类部';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
                var series = [];
                var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  //if (this.cncountry.indexOf(item.name) >= 0) {
                    xdata.push(item.name);
                  item.records.forEach(item => {
                    if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                      && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                      if (ydata1.filter(item1 => item1.name == item.name).length == 0) {
                        ydata1.push({ 'name': item.name, 'count': item.count });
                      }
                      else {
                        ydata1.forEach(iitt => {
                          if (iitt.name == item.name) {
                            iitt.count = iitt.count + item.count;
                          }
                        });
                      }
                    }
                    });
                  //}
                });
                //alert(JSON.stringify(ydata1));
                ///小到大排序
                ydata1 = ydata1.sort(function (a, b) {
                  let x = a.count;
                  let y = b.count;
                  return ((x < y) ? -1 : (x > y) ? 1 : 0);
                });
                ydata1.reverse();
                ydata1.forEach(iitt => {
                  ydata.push(iitt.name);
                });
                ydata = ydata.slice(0, 10);
                //xdata = xdata.slice(0, 10);
                //alert(JSON.stringify(ydata1));
                //return;

                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
                    var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
                      if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        //alert(JSON.stringify(item));
                        //alert(JSON.stringify(ysitem));
                        series.push([iiiii, jjjjj, ysitem[0].count]);
                        if (max < ysitem[0].count) { max = ysitem[0].count; }
                      }
                      jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
                });
                //alert(ydata);
                //alert(series);
                var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
                });
                var option = {
                  title: {
                    text: '申请人技术构成分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主申请人：' +
                        xdata[params.value[0]] +
                        '， 主分类部：' +
                        ydata[params.value[1]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '2-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit = 10;
              query.field = '申请人';
              adjacency_matrix(query).then(res => {
                //alert(JSON.stringify(res.records));
                var xdata = [];//X轴
                var ydata = [];//Y轴
                
                var series = [];
                var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  if (item.name.indexOf('&') < 0) {
                    xdata.push(item.name);
                    ydata.push(item.name);
                  }
                });
                
                //alert(xdata.length);
                var iiiii = 0;
                xdata.forEach(item => {
                  var jjjjj = 0;
                  xdata.forEach(item1 => {
                    var xsitem = res.records.filter(item => item.name.indexOf(item1) >= 0 && item.name.indexOf(xdata[iiiii]) >= 0);
                    if (xsitem.length == 0) {
                      //series.push([iiiii, jjjjj, 0]);
                    } else {
                      series.push([iiiii, jjjjj, xsitem[0].count]);
                      if (max < xsitem[0].count) { max = xsitem[0].count; }
                    }
                    jjjjj = jjjjj + 1;
                  });
                  iiiii = iiiii + 1;
                });
                var series1 = series.map(function (item) {
                  return [item[1], item[0], item[2]];
                });
                var option = {
                  title: {
                    text: '申请人组合分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主申请人：' +
                        xdata[params.value[0]] +
                        '， 主申请人：' +
                        ydata[params.value[1]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }

            if (name == '3-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 20;
              query.field_1 = '主分类部';
              query.field_2 = '申请年份';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var legenddata = [];//图例
                var series = [];
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  item.records.forEach(item => {
                    if (xdata.indexOf(item.name) < 0) {
                      xdata.push(item.name);
                    }
                  });
                });
                xdata = xdata.sort();
                //alert(xdata);
                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  //if (this.cncountry.indexOf(item.name) >= 0) {
                  legenddata.push(item.name);
                  var itemrecords = [];
                  //if (iiiii == 0) { alert(itemrecords.length); }
                  xdata.forEach(item1 => {
                    var xsitem = item.records.filter(item => item.name == item1);
                    if (xsitem.length == 0) {
                      itemrecords.push({ "name": item1, "count": 0, value: 0 });
                    } else {
                      itemrecords = itemrecords.concat(xsitem);
                    }
                  });
                  itemrecords = itemrecords.sort(s => s.name);
                  //if (iiiii == 0) { alert(itemrecords.length); }
                  iiiii = iiiii + 1;
                  series.push({
                    name: item.name,
                    type: 'line',
                    data: itemrecords
                  })
                  //}
                });
                var option = {
                  title: {
                    text: '技术领域趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i].count + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: series
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '3-2') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 50;
              query.limit_2 = 300;
              query.field_1 = '主分类部';
              query.field_2 = '国省代码';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
                var series = [];
                var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                    && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                    xdata.push(item.name);
                    item.records.forEach(item => {
                      if (this.cncountry.indexOf(item.name) >= 0) {
                        if (ydata.indexOf(item.name) < 0) {
                          ydata.push(item.name);
                        }
                      }
                    });
                  }
                });
                //alert(JSON.stringify(xdata));
                xdata = xdata.slice(0, 10);
                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
                    var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
                      if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        series.push([iiiii, jjjjj, ysitem[0].count]);
                        if (max < ysitem[0].count) { max = ysitem[0].count; }
                      }
                      jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
                });
                var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
                });
                var option = {
                  title: {
                    text: '技术领域区域分布分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主分类部：' +
                        xdata[params.value[0]] +
                        '， 区域：' +
                        ydata[params.value[1]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '3-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 10;
              query.limit_2 = 50;
              query.field_1 = '主分类部';
              query.field_2 = '主申请人';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
                var series = [];
                var max = 0;
                this.tableData = res.records;
                res.records = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                    && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                    xdata.push(item.name);
                    item.records.forEach(item => {
                      if (ydata1.filter(item1 => item1.name == item.name).length == 0) {
                        ydata1.push({ 'name': item.name, 'count': item.count });
                      }
                      else {
                        ydata1.forEach(iitt => {
                          if (iitt.name == item.name) {
                            iitt.count = iitt.count + item.count;
                          }
                        });
                      }
                    });
                  }
                });
                //alert(JSON.stringify(ydata1));
                ///小到大排序
                ydata1 = ydata1.sort(function (a, b) {
                  let x = a.count;
                  let y = b.count;
                  return ((x < y) ? -1 : (x > y) ? 1 : 0);
                });
                ydata1.reverse();
                ydata1.forEach(iitt => {
                  ydata.push(iitt.name);
                });
                ydata = ydata.slice(0, 10);
                //xdata = xdata.slice(0, 10);
                //alert(JSON.stringify(ydata1));
                //return;

                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
                    var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
                      if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        //alert(JSON.stringify(item));
                        //alert(JSON.stringify(ysitem));
                        series.push([iiiii, jjjjj, ysitem[0].count]);
                        if (max < ysitem[0].count) { max = ysitem[0].count; }
                      }
                      jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
                });
                //alert(ydata);
                //alert(series);
                var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
                });
                var option = {
                  title: {
                    text: '技术领域申请人构成分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主申请人：' +
                        ydata[params.value[1]] +
                        '， 主分类部：' +
                        xdata[params.value[0]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '3-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit_1 = 10;
              query.limit_2 = 50;
              query.field_1 = '主分类部';
              query.field_2 = '主发明人';
              double_field(query).then(res => {
                var xdata = [];//X轴
                var ydata = [];//Y轴
                var ydata1 = [];//Y轴
                var legenddata = [];//图例
                var series = [];
                var max = 0;
                this.tableData = res.records;
                res.records = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  if (item.name != '0' && item.name != '1' && item.name != '2' && item.name != '3' && item.name != '4'
                    && item.name != '5' && item.name != '6' && item.name != '7' && item.name != '8' && item.name != '9') {
                    xdata.push(item.name);
                    item.records.forEach(item => {
                      if (ydata1.filter(item1 => item1.name == item.name).length == 0) {
                        ydata1.push({ 'name': item.name, 'count': item.count });
                      }
                      else {
                        ydata1.forEach(iitt => {
                          if (iitt.name == item.name) {
                            iitt.count = iitt.count + item.count;
                          }
                        });
                      }
                    });
                  }
                });
                //alert(JSON.stringify(ydata1));
                ///小到大排序
                ydata1 = ydata1.sort(function (a, b) {
                  let x = a.count;
                  let y = b.count;
                  return ((x < y) ? -1 : (x > y) ? 1 : 0);
                });
                ydata1.reverse();
                ydata1.forEach(iitt => {
                  ydata.push(iitt.name);
                });
                ydata = ydata.slice(0, 10);
                //xdata = xdata.slice(0, 10);
                //alert(JSON.stringify(ydata1));
                //return;

                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (xdata.indexOf(item.name) >= 0) {
                    //alert(JSON.stringify(item));
                    var jjjjj = 0;
                    ydata.forEach(item1 => {
                      var ysitem = item.records.filter(item => item.name == item1);
                      if (ysitem.length == 0) {
                        //series.push([iiiii, jjjjj, 0]);
                      } else {
                        //alert(JSON.stringify(item));
                        //alert(JSON.stringify(ysitem));
                        series.push([iiiii, jjjjj, ysitem[0].count]);
                        if (max < ysitem[0].count) { max = ysitem[0].count; }
                      }
                      jjjjj = jjjjj + 1;
                    });
                    iiiii = iiiii + 1;
                  }
                });
                //alert(ydata);
                //alert(series);
                var series1 = series.map(function (item) {
                  return [item[0], item[1], item[2]];
                });
                var option = {
                  title: {
                    text: '技术领域发明人构成分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， 主发明人：' +
                        ydata[params.value[1]] +
                        '， 主分类部：' +
                        xdata[params.value[0]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '3-5') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.limit = 10;
              query.field = 'IPC';
              adjacency_matrix(query).then(res => {
                //alert(JSON.stringify(res.records));
                var xdata = [];//X轴
                var ydata = [];//Y轴

                var series = [];
                var max = 0;
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  if (item.name.indexOf('&') < 0) {
                    xdata.push(item.name);
                    ydata.push(item.name);
                  }
                });

                //alert(xdata.length);
                var iiiii = 0;
                xdata.forEach(item => {
                  var jjjjj = 0;
                  xdata.forEach(item1 => {
                    var xsitem = res.records.filter(item => item.name.indexOf(item1) >= 0 && item.name.indexOf(xdata[iiiii]) >= 0);
                    if (xsitem.length == 0) {
                      //series.push([iiiii, jjjjj, 0]);
                    } else {
                      series.push([iiiii, jjjjj, xsitem[0].count]);
                      if (max < xsitem[0].count) { max = xsitem[0].count; }
                    }
                    jjjjj = jjjjj + 1;
                  });
                  iiiii = iiiii + 1;
                });
                var series1 = series.map(function (item) {
                  return [item[1], item[0], item[2]];
                });
                var option = {
                  title: {
                    text: '技术领域组合分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
                              //if (j == 0) { alert(JSON.stringify(series)); }
                              var fff = series[0].data.filter(ss => ss[1] == i && ss[0] == j);
                              if (fff.length == 0) { tdBodys += '<td>0</td>'; }
                              else {
                                tdBodys += '<td>' + fff[0][2] + '</td>'; //组装表数据
                              }
                            }
                            table += '<tr><td style="padding: 0 10px">' + ydata[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,
                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params));
                      return (
                        params.value[2] +
                        '， IPC：' +
                        xdata[params.value[0]] +
                        '， IPC：' +
                        ydata[params.value[1]]
                      );
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  yAxis: {
                    type: 'category',
                    data: ydata,
                    splitLine: {
                      show: true
                    },
                    axisLine: {
                      show: true
                    }
                  },
                  visualMap: {
                    min: 1,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: series1,
                      label: {
                        show: true
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '4-1') {
              var data = [];
              var xdata = [];
              var query = {};
              query.id = localStorage.getItem('search');
              query.field = '申请年份';
              query.limit = 20;
              single_field(query).then(res => {
                //this.total = res.count
                res.records.map((item) => {
                  item.value = item.count;
                })
                this.tableData1 = res.records;
                //data = res.records;
                res.records.forEach(item => {
                  xdata.push(item.name);
                  data.push(item.count);
                });
                var option = {
                  title: {
                    text: '申请日趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请年份</td><td>数量</td>'; // 表头
                          //series.forEach(function (item) {
                          //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          //});
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {},
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    },
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [
                    {
                      data: data,
                      type: 'line',
                      label: {
                        formatter: '{b}年\n{c}',
                        show: true,
                        position: 'top'
                      },
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '4-2') {
              var data = [];
              var xdata = [];
              var query = {};
              query.id = localStorage.getItem('search');
              query.field = '公开年份';
              query.limit = 20;
              single_field(query).then(res => {
                //this.total = res.count
                res.records.map((item) => {
                  item.value = item.count;
                })
                this.tableData1 = res.records;
                //data = res.records;
                res.records.forEach(item => {
                  xdata.push(item.name);
                  data.push(item.count);
                });
                var option = {
                  title: {
                    text: '公开日趋势分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>公开年份</td><td>数量</td>'; // 表头
                          //series.forEach(function (item) {
                          //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          //});
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                        contentToOption: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        }
                      },
                      magicType: {
                        //type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {},
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [
                    {
                      data: data,
                      type: 'line',
                      label: {
                        formatter: '{b}年\n{c}',
                        show: true,
                        position: 'top'
                      },
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            if (name == '4-3') {
              var data = [];
              var names = [];
              var xdata = [];
              var ydata = [];
              var query = {};
              query.id = localStorage.getItem('search');
              query.field = '申请年份';
              query.limit = 200;
              single_field(query).then(res => {
                res.records.forEach(item => {
                  names.push(item.name);
                  xdata.push(item.count);
                });
                query.field_1 = '申请年份';
                query.field_2 = '主申请人数量';
                query.limit_1 = 200;
                query.limit_2 = 10;
                double_field(query).then(res => {
                  var iii = 0;
                  names.forEach(item => {
                    var ysitem = res.records.filter(item1 => item1.name == item);
                    if (ysitem.length == 0) {
                      data.push([xdata[iii], 0]);
                    }
                    else {
                      data.push([xdata[iii], ysitem[0].count]);
                    }
                    iii = iii + 1;
                  });
                  //alert(JSON.stringify(data));
                  var series1 = data.map(function (item) {
                    return [item[0], item[1], item[2]];
                  });
                  //alert(JSON.stringify(series1));
                  var option = {
                    title: {
                      text: '生命周期分析（申请人）',
                      left: 'center'
                    },
                    toolbox: {
                      feature: {
                        dataZoom: {
                          yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {},
                        dataView: { //数据视图
                          show: true,
                          optionToContent: function (opt) {
                            var axisData = opt.xAxis[0].data; // 坐标数据
                            var series = opt.series; // 折线图数据
                            var tdHeaders = '<td>申请年份</td><td>申请人数量</td><td>专利申请数量</td>'; // 表头
                            //series.forEach(function (item) {
                            //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                            //});
                            var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                            var tdBodys = ''; // 表数据
                            for (var i = 0, l = names.length; i < l; i++) {
                              tdBodys += '<td>' + data[i][1] + '</td>' + '<td>' + data[i][0] + '</td>'; //组装表数据
                              table += '<tr><td style="padding: 0 10px">' + names[i] + '</td>' + tdBodys + '</tr>';
                              tdBodys = '';
                            }
                            table += '</tbody></table></div>';
                            return table;
                          },
                        },
                        magicType: {
                          //type: ['line', 'bar']
                        }
                      },
                      orient: 'horizontal',//horizontal  vertical
                      showTitle: true,

                    },
                    legend: {},
                    dataZoom: {
                      type: 'inside'
                    },
                    tooltip: {
                      position: 'top',
                      formatter: function (params) {
                        //alert(JSON.stringify(params));
                        return (
                          names[params.dataIndex] +
                          '， 专利申请量：' +
                          params.value[0] +
                          '， 申请人数量：' +
                          params.value[1]
                        );
                      }
                    },
                    xAxis: {
                      type: 'value',
                      axisLabel: {
                        formatter: '{value}'
                      }
                    },
                    yAxis: {
                      type: 'value',
                      axisLabel: {
                        formatter: '{value}'
                      }
                    },
                    series: [
                      {
                        type: 'line',                        
                        data: series1,
                        smooth: true,
                        label: {
                          formatter: function (params) { return (names[params.dataIndex] + '年\n专利：' + params.value[0] + '\n申请人' + params.value[1]) },
                          show: true,
                          position: 'top'
                        },
                      }
                    ]
                  };
                  myChart11.setOption(option);
                  this.loading = false;
                });
                return;
              });
            }
            if (name == '5-1') {
              var data = [];
              var xdata = [];
              var query = {};
              query.id = localStorage.getItem('search');
              query.field = '专利库';
              query.size = 300;
              statistic(query).then((res) => {
                if (res.categories) {
                  var sss = [];
                  res.categories.forEach((item) => {
                    //alert(JSON.stringify(item));//{"name":"WG","count":2928283}
                    if (item.name == 'WG' || item.name == '外观设计') {
                      xdata.push('外观设计');
                      data.push({ value: item.count, name:'外观设计' });
                    }
                    if (item.name == 'FM' || item.name == '发明') {
                      xdata.push('发明');
                      data.push({ value: item.count, name: '发明' });
                    }
                    if (item.name == 'FMSQ' || item.name == '发明授权') {
                      xdata.push('发明授权');
                      data.push({ value: item.count, name: '发明授权' });
                    }
                    if (item.name == 'SYXX' || item.name == '实用新型') {
                      xdata.push('实用新型');
                      data.push({ value: item.count, name: '实用新型' });
                    }
                    
                  });
                  //alert(xdata);
                  //alert(data);
                  var option = {
                    title: {
                      text: '申请类型分析',
                      left: 'center'
                    },
                    toolbox: {
                      feature: {
                        dataZoom: {
                          yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {},
                        dataView: { //数据视图
                          show: true,
                          optionToContent: function (opt) {
                            //var axisData = opt.data; // 坐标数据
                            var series = opt.series; // 折线图数据
                            var tdHeaders = '<td>申请类型</td><td>数量</td>'; // 表头
                            //series.forEach(function (item) {
                            //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                            //});
                            var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                            var tdBodys = ''; // 表数据
                            //for (var i = 0, l = axisData.length; i < l; i++) {
                            //alert(JSON.stringify(series[0].data));
                            for (var j = 0; j < series[0].data.length; j++) {
                              //alert(JSON.stringify(series[0].data[j]));
                              tdBodys += '<tr><td>' + series[0].data[j].name + '</td><td>' + series[0].data[j].value + '</td></tr>'; //组装表数据
                              }
                            //table += '<tr><td style="padding: 0 10px">' + series[j].data.name + '</td>' + tdBodys + '</tr>';
                              //tdBodys = '';
                            //}
                            table += tdBodys +  '</tbody></table></div>';
                            return table;
                          },
                        },
                        magicType: {
                          //type: ['line', 'bar']
                        }
                      },
                      orient: 'horizontal',//horizontal  vertical
                      showTitle: true,

                    },
                    legend: {
                      orient: 'vertical',
                      left: 'right',
                      top:'middle'
                    },
                    dataZoom: {
                      //type: 'inside'
                    },
                    tooltip: {
                      trigger: 'item'
                    },
                    series: [
                      {
                        radius: '50%',
                        data: data,
                        type: 'pie',
                        emphasis: {
                          itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                        },
                        label: {
                          formatter:'{b}：{c}',
                          show: true,
                          position: 'top'
                        },
                      }
                    ]
                  };
                  myChart11.setOption(option);
                  this.loading = false;
                } else {
                  this.loading = false;                  
                }
              });
            }
            if (name == '6-1') {
              this.loading = false;              
            }
					}
					else {
            this.loading = false;
					}
				}
        catch (e) {
          this.loading = false;
        }
      },
      zdyfxdom() {
        try {
          this.loading = true;
          //主申请人 主发明人 主分类  区域 代理机构 ------ 柱状图
          //申请年份 公开年份 --------   折线图
          var file1 = this.zdyfx1;
          var file2 = this.zdyfx2;
          if (file2 == '请选择') { file2 = ''; }
          var echarts = require('echarts');
          var myChart11 = echarts.init(document.getElementById('echart6-1'));
          try { myChart11.clear(); } catch (e) { }
          var query = {};
          query.id = localStorage.getItem('search');
          ///////////////////////  单字段  ///////////////
          if (file2 == '') {
            var tttile = file1;
            var tbtype = 'bar';//line
            var data = [];
            var xdata = [];
            query.field = file1;
            query.limit = 10;
            if (file1 == '区域') {
              query.field = '国省代码';
              tttile = '区域';
              query.limit = 300;
            }
            if (file1 == '申请年份' || file1 == '公开年份' ) {
              tbtype = 'line';
            }
            this.loading = true;
            single_field(query).then(res => {
              res.records.map((item) => {
                item.value = item.count;
              });
              res.records.forEach(item => {
                if (file1 == '区域') {
                  if (this.cncountry.indexOf(item.name) >= 0) {
                    xdata.push(item.name);
                    data.push(item.count);
                  }
                }
                else {
                  xdata.push(item.name);
                  data.push(item.count);
                }
              });
              var option = {
                title: {
                  text: tttile + '分析',
                  left: 'center'
                },
                toolbox: {
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {},
                    dataView: { //数据视图
                      show: true,
                      optionToContent: function (opt) {
                        var axisData = opt.xAxis[0].data; // 坐标数据
                        var series = opt.series; // 折线图数据
                        var tdHeaders = '<td>' + tttile+'</td><td>数量</td>'; // 表头
                        //series.forEach(function (item) {
                        //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                        //});
                        var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                        var tdBodys = ''; // 表数据
                        for (var i = 0, l = axisData.length; i < l; i++) {
                          for (var j = 0; j < series.length; j++) {
                            tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
                          }
                          table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                          tdBodys = '';
                        }
                        table += '</tbody></table></div>';
                        return table;
                      },
                    },
                    magicType: {
                      //type: ['line', 'bar']
                    }
                  },
                  orient: 'horizontal',
                  showTitle: true,
                },
                legend: {},
                dataZoom: {
                  type: 'inside'
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                xAxis: {
                  type: 'category',
                  data: xdata
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    data: data,
                    type: tbtype
                  }
                ]
              };
              myChart11.setOption(option);
              this.loading = false;
            });
          }
          ///////////////////////  双字段  ///////////////
          else {
            ///折线堆叠
            if (((file1 == '申请年份' || file1 == '公开年份') && (file2 != '公开年份' && file2 != '申请年份'))
              || ((file2 == '申请年份' || file2 == '公开年份') && (file1 != '公开年份' && file1 != '申请年份'))) {
              var subfile1 = file1;
              var subfile2 = file2;
              if (file1 == '申请年份' || file1 == '公开年份') {
                subfile1 = file2; subfile2 = file1;
              }
              query.limit_1 = 10;
              query.field_1 = subfile1; if (subfile1 == '区域') { query.limit_1 = 300; query.field_1 = '国省代码'; }
              query.field_2 = subfile2;
              double_field(query).then(res => {
                var xdata = [];//X轴
                var legenddata = [];//图例
                var series = [];
                this.tableData = res.records;
                //data = res.records;
                //var rrr = res.records.sort(s => s.count);
                res.records.forEach(item => {
                  item.records.forEach(item => {
                    if (xdata.indexOf(item.name) < 0) {
                      xdata.push(item.name);
                    }
                  });
                });
                xdata = xdata.sort();
                //alert(xdata);
                var iiiii = 0;
                res.records.forEach(item => {
                  item.records.map((item) => {
                    item.value = item.count;
                  });
                  if (subfile1 == '区域') {
                    if (this.cncountry.indexOf(item.name) >= 0) {
                      legenddata.push(item.name);
                      var itemrecords = [];
                      xdata.forEach(item1 => {
                        var xsitem = item.records.filter(item => item.name == item1);
                        if (xsitem.length == 0) {
                          itemrecords.push({ "name": item1, "count": 0, value: 0 });
                        } else {
                          itemrecords = itemrecords.concat(xsitem);
                        }
                      });
                      itemrecords = itemrecords.sort(s => s.name);
                      iiiii = iiiii + 1;
                      series.push({
                        name: item.name,
                        type: 'line',
                        data: itemrecords
                      })
                    }
                  }
                  else {
                    legenddata.push(item.name);
                    var itemrecords = [];
                    xdata.forEach(item1 => {
                      var xsitem = item.records.filter(item => item.name == item1);
                      if (xsitem.length == 0) {
                        itemrecords.push({ "name": item1, "count": 0, value: 0 });
                      } else {
                        itemrecords = itemrecords.concat(xsitem);
                      }
                    });
                    itemrecords = itemrecords.sort(s => s.name);
                    iiiii = iiiii + 1;
                    series.push({
                      name: item.name,
                      type: 'line',
                      data: itemrecords
                    })
                  }
                });
                var option = {
                  title: {
                    text: subfile1 + '-' + subfile2 + '分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {},
                      dataView: { //数据视图
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                              tdBodys += '<td>' + series[j].data[i].count + '</td>'; //组装表数据
                            }
                            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
                            tdBodys = '';
                          }
                          table += '</tbody></table></div>';
                          return table;
                        },
                      },
                      magicType: {
                        type: ['line', 'bar']
                      }
                    },
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  legend: {
                    bottom: 0
                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  xAxis: {
                    type: 'category',
                    data: xdata
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: series
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            ///邻接矩阵 申请人  发明人  IPC
            else if (file1 == file2) {
              if (file1 == '主申请人' || file1 == '主发明人' || file1 == '主分类') {

              }
              else {

              }
            }
          }
        }
        catch (e) {
          this.loading = false;
        }
      },
			handleSelect(key, keyPath) {
        //1-1   1,1-1
				this.setpageshow(key);
      },
      handleopen(key) {
        if (key == '6') {
          this.setpageshow('6-1');
        }
      },
			see() {
				if (this.myForm == 1) {
					this.see1 = true
				} else if (this.myForm == 2) {
					this.see2 = true
				}
			},
			back() {
				this.$router.push('/search_list')
			},
			myself() {
				if (this.field1 == '') {
					this.$message.warning('第一字段必选')
					return
				}
				var echarts = require('echarts');
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				myChart.clear();
				if (this.field2 == '') {
					this.chart1(this.field1);
				} else {
					this.chart2(this.field1, this.field2);
				}
			},
			change() {
				console.log(this.type)
				var echarts = require('echarts');
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				myChart.clear();
				switch (this.type) {
					case '区域排名分析':
						this.chart1('国省代码');
						break;
					case '申请人分析':
						this.chart1('主申请人');
						break;
					case '申请日趋势分析':
						this.chart1('申请年份');
						break;
					case '公开日趋势分析':
						this.chart1('公开年份');
						break;

					case '区域趋势分析':
						this.chart2('国省代码', '申请年份');
						break;
					case '区域技术构成分析':
						this.chart2('国省代码', '主分类部');
						break;
					case '区域专利权人分析':
						this.chart2('国省代码', '主申请人');
						break;

					case '申请人趋势分析':
						this.chart2('主申请人', '申请年份');
						break;
					case '申请人技术构成分析':
						this.chart2('主申请人', '主分类部');
						break;
						// case '申请人组合分析':
						// 	this.chart2('国省代码', '主申请人');
						// 	break;

					case '技术领域趋势分析':
						this.chart2('主分类部', '申请年份');
						break;
					case '技术领域区域分布分析':
						this.chart2('主分类部', '国省代码');
						break;
					case '技术领域构成分析':
						this.chart2('主分类部', '主申请人');
						break;
					case '技术领域发明人构成分析':
						this.chart2('主分类部', '主发明人');
						break;
						// case '技术领域组合分析':
						// 	this.chart2('主分类部', '主发明人');
						// 	break;
					case '请选择分析类型':
						break;
					// case '周期分析':
					// 	this.chart3();
					// 	break;
				}
			},
			// chart3(){
			// 	this.myForm = 1
			// 	var query = {}
			// 	query.id = localStorage.getItem('search')
			// 	query.field_1 = '主申请人'
			// 	query.field_2 = '申请年份'
			// 	single_field(query).then(res => {
					
			// 	})
			// },
			chart2(type1, type2) {
				this.myForm = 2
				var query = {}
				query.id = localStorage.getItem('search')
				query.field_1 = type1
				query.field_2 = type2
				double_field(query).then(res => {
					var data = []
					var series = []
					this.tableData = res.records
					res.records[0].records.forEach(item => {
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
							},
							markLine: {
								data: [{
									type: 'average',
									name: 'Avg'
								}]
							}
						})
						console.log(series)
					})
					var option;
					option = {
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
			chart1(type) {
				this.myForm = 1
				var option;
				option = {
					legend: {
						top: 'bottom'
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
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						right: '50',
						top: '50'
					},
					series: [{
						name: 'Nightingale Chart',
						type: 'pie',
						radius: [50, 250],
						center: ['50%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 8
						},
						data: []
					}]
				};
				var query = {}
				query.id = localStorage.getItem('search')
				query.field = type; 
				single_field(query).then(res => {
					this.total = res.count
					res.records.map((item) => {
						item.value = item.count
					})
					this.tableData1 = res.records
					console.log(this.tableData1)
					option.series[0].data = res.records
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
  html,
  body,
  #app,
  .home,
  .el-container {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .el-container {
    direction: vertical;
  }
  .el-menu-vertical-demo, >>> .el-submenu__title {
    height: 40px;
    line-height: 40px;
    background: #E1E1E1;
  }
  .el-menu-item, >>> .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-carousel >>> .el-carousel__indicators {
    display: none;
  }
  .fxlmitem {
    text-align: left;
  }
  .fxlmitem ul{
    padding:0;margin:0;list-style:none;
  }
    .fxlmitem li {
      padding:7px 0;
    }
	.home {
    width: 100%;
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
