<template>
	<div class="home" id="thishomediv">
		<el-container>
			<el-aside width="260px" style="padding:20px 0 0 10px">
				<el-container>
					<el-header style="height:30px;text-align:left;padding:0 10px 0 0">
						<svg style="float:right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1492ff" class="bi bi-graph-up" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
						</svg>
						<span style="font-size:16px;">检索结果分析</span>
					</el-header>
					<el-main style="padding:0" class="wrapper slistchfx">
						<div style="padding-right:10px;">
              <el-menu ref="leftmenu" default-active="1-1" class="el-menu-vertical-demo" style="text-align:left;border-right:0" @select="handleSelect" @open="handleopen" unique-opened="true">
                <el-submenu v-show="hascnshow" index="1" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>概况分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="1-1">申请趋势分析</el-menu-item>
                    <el-menu-item index="1-2">公开趋势分析</el-menu-item>
                    <template v-if="searchcountry.length==0">
                      <el-menu-item index="1-3">申请类型分析</el-menu-item>
                      <el-menu-item index="1-4">有效性分析</el-menu-item>
                    </template>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>申请人分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="2-1">申请人排行榜</el-menu-item>
                    <el-menu-item index="2-2">申请人申请趋势分析</el-menu-item>
                    <template v-if="searchcountry.length==0">
                      <el-menu-item index="2-3">申请人专利类型分析</el-menu-item>
                      <el-menu-item index="2-4">申请人专利有效性分析</el-menu-item>
                    </template>
                    <el-menu-item index="2-5">申请人技术构成分析</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>发明人分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="3-1">发明人排行榜</el-menu-item>
                    <el-menu-item index="3-2">发明人申请趋势分析</el-menu-item>
                    <template v-if="searchcountry.length==0">
                      <el-menu-item index="3-3">发明人专利类型分析</el-menu-item>
                      <el-menu-item index="3-4">发明人专利有效性分析</el-menu-item>
                    </template>
                    <el-menu-item index="3-5">发明人技术构成分析</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>国家专利分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="4-1">国家申请量分布分析</el-menu-item>
                    <el-menu-item index="4-2">国家申请趋势分析</el-menu-item>
                    <el-menu-item index="4-3">国家公开趋势分析</el-menu-item>
                    <el-menu-item index="4-4">国家专利技术构成分析</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <template v-if="searchcountry.length==0">
                  <el-submenu v-show="hascnshow" index="5" style="border-bottom:dashed 1px #F1F1F1">
                    <template slot="title">
                      <span>中国各省专利情况分析</span>
                    </template>
                    <el-menu-item-group style="padding-bottom:20px">
                      <el-menu-item index="5-1">专利申请量分布</el-menu-item>
                      <el-menu-item index="5-2">专利申请趋势分析</el-menu-item>
                      <el-menu-item index="5-3">专利类型分布分析</el-menu-item>
                      <el-menu-item index="5-4">专利有效性分析</el-menu-item>
                      <el-menu-item index="5-5">有效专利类型分布分析</el-menu-item>
                      <el-menu-item index="5-6">专利公开趋势分析</el-menu-item>
                      <el-menu-item index="5-7">专利技术构成分析</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </template>
                <el-submenu v-show="hascnshow" index="6" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>技术领域分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="6-1">IPC技术构成分析</el-menu-item>
                    <el-menu-item index="6-2">IPC技术申请趋势分析</el-menu-item>
                    <el-menu-item index="6-3">IPC技术公开趋势分析</el-menu-item>
                    <el-menu-item index="6-4">IPC申请人分析</el-menu-item>
                    <el-menu-item index="6-5">IPC发明人分析</el-menu-item>
                    <template v-if="searchcountry.length==0">
                      <el-menu-item index="6-6">IPC专利有效性分析</el-menu-item>
                    </template>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu v-show="hascnshow" index="7" style="border-bottom:dashed 1px #F1F1F1">
                  <template slot="title">
                    <span>技术生命周期分析</span>
                  </template>
                  <el-menu-item-group style="padding-bottom:20px">
                    <el-menu-item index="7-1">技术生命周期分析（申请人）</el-menu-item>
                    <el-menu-item index="7-2">技术生命周期分析（发明人）</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8" style="border-bottom:dashed 1px #F1F1F1;display:none">
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
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart1111" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart1112" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('1-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart1-1" style="width: 95%;height: 90%;"></div>
                    </el-carousel-item>
                    <el-carousel-item name="1-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">公开年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart1211" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart1212" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('1-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart1-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="1-3">
                      <div id="echart1-3" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="1-4">
                      <div id="echart1-4" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="2-1">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2111" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2112" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('2-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart2-1" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="2-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2211" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2212" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2221" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2222" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('2-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart2-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="2-3">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2311" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2312" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('2-3')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart2-3" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="2-4">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2411" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2412" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('2-4')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart2-4" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="2-5">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2511" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2512" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2521" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart2522" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('2-5')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart2-5" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="3-1">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3111" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3112" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('3-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart3-1" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="3-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3211" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3212" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3221" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3222" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('3-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart3-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="3-3">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3311" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3312" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('3-3')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart3-3" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="3-4">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3411" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3412" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('3-4')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart3-4" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="3-5">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3511" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3512" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3521" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart3522" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('3-5')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart3-5" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="4-1">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">国家数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4111" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4112" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('4-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart4-1" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="4-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">国家数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4211" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4212" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4221" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4222" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('4-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart4-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="4-3">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">国家数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4311" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4312" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">公开年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4321" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4322" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('4-3')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart4-3" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="4-4">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">国家数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4411" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4412" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4421" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart4422" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('4-4')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart4-4" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-1">
                      <div id="echart5-1" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5211" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5212" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('5-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart5-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-3">
                      <div id="echart5-3" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-4">
                      <div id="echart5-4" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-5">
                      <div id="echart5-5" style="width: 95%; height: 97%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-6">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">公开年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5211" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5212" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('5-6')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart5-6" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="5-7">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5711" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart5712" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('5-7')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart5-7" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-1">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC小类数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6111" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6112" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">IPC大组数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6121" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6122" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-1" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6211" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6212" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6221" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6222" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-2" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-3">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6311" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6312" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">公开年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6321" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6322" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-3')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-3" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-4">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6411" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6412" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">申请人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6421" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6422" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-4')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-4" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-5">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6511" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6512" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px">发明人数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6521" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6522" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-5')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-5" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="6-6">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">IPC数量</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6611" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart6612" placeholder="请输入序号" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('6-6')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart6-6" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="7-1">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart7111" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart7112" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('7-1')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart7-1" style="width: 95%; height: 90%; "></div>
                    </el-carousel-item>
                    <el-carousel-item name="7-2">
                      <table style="width:100%;white-space:nowrap" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="height:50px">&nbsp;</td>
                          <td width="1" style="padding:0 3px">申请年度</td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart7211" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"> - </td>
                          <td width="1" style="padding:0 3px"><el-input v-model="chart7212" placeholder="请输入年份" size="small" style="width:110px;text-align:center" @input="changeinput($event)"></el-input></td>
                          <td width="1" style="padding:0 3px"><el-button type="primary" round size="small" @click="reloadchart('7-2')">提交</el-button></td>
                          <td width="50">&nbsp;</td>
                        </tr>
                      </table>
                      <div id="echart7-2" style="width: 95%; height: 90%; "></div>
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
    single_field_v2,
    double_field_v2,
    double_field_first_applicant_db_name,
    double_field_first_applicant_main_law_status,
    double_field_first_applicant_app_date,
    double_field_first_inventor_db_name,
    double_field_first_inventor_main_law_status,
    double_field_country_code_app_date,
    double_field_country_code_db_name,
    double_field_country_code_main_law_status,
    double_field_country_code_open_date,
    double_field_main_ipc_class_and_large_group,
    double_field_main_ipc_class_app_date,
    double_field_main_ipc_class_first_applicant,
    double_field_main_ipc_class_first_inventor,
    double_field_main_ipc_class_main_law_status,
    double_field_main_ipc_class_open_date,
    double_field_app_date_first_applicant,
    double_field_app_date_first_inventor,
    double_field_first_applicant_main_ipc_class,
    double_field_first_inventormain_main_ipc_class,
    double_field_country_code_main_ipc_class,
    double_field_app_country_main_ipc_class,
    double_field_country_code_main_law_status_ls,
    adjacency_matrix,
    statistic
  } from '../../api/search.js';
  import {
    chinacountrycode
  } from "../../assets/country.js";
	export default {
		data() {
      return {
        chinacountrycode: chinacountrycode,
        hascnshow: true,
        expr: localStorage.getItem("expr"),
        searchcountry: localStorage.getItem('countries').replaceAll('FMSQ', '').replaceAll('FM', '').replaceAll('SYXX', '').replaceAll('WG', '').replaceAll(',', '').replaceAll(' ', ''),
				loading: false,
        pagenames: ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2', '2-3', '2-4', '2-5', '3-1', '3-2', '3-3', '3-4', '3-5', '4-1', '4-2', '4-3', '4-4'
          , '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '7-1', '7-2'],
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
        type: '概况分析',
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
        ],
        chart1111: new Date().getFullYear() - 20,
        chart1112: (new Date().getFullYear()),
        chart1211: new Date().getFullYear() - 20,
        chart1212: (new Date().getFullYear()),
        chart2111: 1,
        chart2112: 5,
        chart2211: 1,
        chart2212: 5,
        chart2221: new Date().getFullYear() - 20,
        chart2222: new Date().getFullYear(),
        chart2311: 1,
        chart2312: 5,
        chart2411: 1,
        chart2412: 5,
        chart2511: 1,
        chart2512: 5,
        chart2521: 1,
        chart2522: 5,
        chart3111: 1,
        chart3112: 5,
        chart3211: 1,
        chart3212: 5,
        chart3221: new Date().getFullYear() - 20,
        chart3222: new Date().getFullYear(),
        chart3311: 1,
        chart3312: 5,
        chart3411: 1,
        chart3412: 5,
        chart3511: 1,
        chart3512: 5,
        chart3521: 1,
        chart3522: 5,
        chart4111: 1,
        chart4112: 5,
        chart4211: 1,
        chart4212: 5,
        chart4221: new Date().getFullYear() - 20,
        chart4222: new Date().getFullYear(),
        chart4311: 1,
        chart4312: 5,
        chart4321: new Date().getFullYear() - 20,
        chart4322: new Date().getFullYear(),
        chart4411: 1,
        chart4412: 5,
        chart4421: 1,
        chart4422: 5,
        chart5211: new Date().getFullYear() - 20,
        chart5212: new Date().getFullYear(),
        chart5611: new Date().getFullYear() - 20,
        chart5612: new Date().getFullYear(),
        chart5711: 1,
        chart5712: 5,
        chart6111: 1,
        chart6112: 5,
        chart6121: 1,
        chart6122: 5,
        chart6211: 1,
        chart6212: 5,
        chart6221: new Date().getFullYear() - 20,
        chart6222: new Date().getFullYear(),
        chart6311: 1,
        chart6312: 5,
        chart6321: new Date().getFullYear() - 20,
        chart6322: new Date().getFullYear(),
        chart6411: 1,
        chart6412: 5,
        chart6421: 1,
        chart6422: 5,
        chart6511: 1,
        chart6512: 5,
        chart6521: 1,
        chart6522: 5,
        chart6611: 1,
        chart6612: 5,
        chart7111: new Date().getFullYear() - 20,
        chart7112: new Date().getFullYear(),
        chart7211: new Date().getFullYear() - 20,
        chart7212: new Date().getFullYear(),
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
              var pagetable = document.getElementById('table' + item);
              try { }
              catch (e) { pagetable.style.height = (document.body.clientHeight - 60) + '.px'; }
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
      //try {
      //  var countryss = localStorage.getItem("countries");
      //  countryss = countryss.toUpperCase();
      //  if (countryss.indexOf('FM') >= 0 || countryss.indexOf('FMSQ') >= 0 || countryss.indexOf('SYXX') >= 0 || countryss.indexOf('WG') >= 0) {
      //    this.hascnshow = true;
      //  }
      //  else {
      //    this.hascnshow = false;
      //    shitemk = '2-1';
      //    try {
      //      this.$refs.leftmenu.open('2');
      //    }
      //    catch (e) { }
      //  }
      //}
      //catch (e) { }
			this.$nextTick(() => {
        this.setpageshow(shitemk);
      });
		},
    methods: {
      changeinput(e) {
        this.$forceUpdate();
      },
      reloadchart(name) {
        try {
          var pagediv = document.getElementById('echart' + name);
          var echarts = require('echarts');
          var myChart11 = echarts.init(pagediv);
          myChart11.dispose();
          this.setpageshow(name);
        }
        catch (e) { alert(e);}
      },
      setpageshow(name) {
        //alert(this.searchcountry);
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
            //申请趋势分析
						if (name == '1-1') {
							var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '申请年份';
              query.field_1_date1 = this.chart1111.toString();
              query.field_1_date2 = this.chart1112.toString();
              query.field_1_num1 = 0;
              query.field_1_num2 = 0;
              //alert(JSON.stringify(query));
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                //图例
                var legenddata = []; 
                //X
                var xdata = res.data.xdata;//['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
                //y
                var ydara = res.data.ydata;//['1235', '1523', '2461', '1679', '3496', '2157', '1376', '4628', '2618', '2493', '1957'];
                var option = {
                  title: {
                    text: '专利申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请年份</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table class="datetable11" style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                      data: ydara,
                      type: 'line',
                      label: {
                        formatter: '{b}年 - {c}件',
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
            //公开趋势分析
            if (name == '1-2') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '公开年份';
              query.field_1_date1 = this.chart1211.toString();
              query.field_1_date2 = this.chart1212.toString();
              query.field_1_num1 = 0;
              query.field_1_num2 = 0;
              //alert(JSON.stringify(query));
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                //图例
                var legenddata = [];
                //X
                var xdata = res.data.xdata;//['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
                //y
                var ydara = res.data.ydata;//['1235', '1523', '2461', '1679', '3496', '2157', '1376', '4628', '2618', '2493', '1957'];
                var option = {
                  title: {
                    text: '专利公开趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>公开年份</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                      data: ydara,
                      type: 'line',
                      label: {
                        formatter: '{b}年 - {c}件',
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
            //申请类型分析
            if (name == '1-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '申请类型';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = 0;
              query.field_1_num2 = 10;
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));

                var data = res.data;
                //  [
                //  { value: 1048, name: '实用新型' },
                //  { value: 735, name: '发明申请' },
                //  { value: 580, name: '外观设计' },
                //];
                var option = {
                  title: {
                    text: '申请类型分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      saveAsImage: {},
                      dataView: { //数据视图
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请类型</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var j = 0; j < series[0].data.length; j++) {
                            tdBodys += '<tr><td>' + series[0].data[j].name + '</td><td>' + series[0].data[j].value + '</td></tr>'; //组装表数据
                          }
                          table += tdBodys + '</tbody></table></div>';
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
                  tooltip: {
                    trigger: 'item'
                  },
                  legend: {
                    orient: 'vertical',
                    left: 'right',
                    top: 'middle',
                  },
                  series: [
                    {
                      //name: '专利类型',
                      type: 'pie',
                      radius: '50%',
                      data: data,
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      },
                      label: {
                        formatter: '{b}：{c}: ({d}%)',
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
            //有效性分析
            if (name == '1-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主法律状态';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = 0;
              query.field_1_num2 = 10;
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var data = res.data;
                var data1 = [];
                for (var i = 0; i < data.length; i++) {
                  if (data[i].name == '有权' || data[i].name == '无权' || data[i].name == '审中') {
                    data1.push(data[i]);
                  }
                }
                data = data1;
                var option = {
                  title: {
                    text: '有效性分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      saveAsImage: {},
                      dataView: { //数据视图
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>有效性</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var j = 0; j < series[0].data.length; j++) {
                            tdBodys += '<tr><td>' + series[0].data[j].name + '</td><td>' + series[0].data[j].value + '</td></tr>'; //组装表数据
                          }
                          table += tdBodys + '</tbody></table></div>';
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
                  tooltip: {
                    trigger: 'item'
                  },
                  legend: {
                    orient: 'vertical',
                    left: 'right',
                    top: 'middle',
                  },
                  series: [
                    {
                      type: 'pie',
                      radius: '50%',
                      data: data,
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      },
                      label: {
                        formatter: '{b}：{c}: ({d}%)',
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
            //申请人排行榜
            if (name == '2-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主申请人';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = this.chart2111 - 1;
              query.field_1_num2 = this.chart2112 - 1;
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var xdata = res.data.xdata;
                var ydata = res.data.ydata;
                var option = {
                  title: {
                    text: '申请人排行榜',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请人</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  series: [
                    {
                      data: ydata,
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
            //申请人申请趋势分析
            if (name == '2-2') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主申请人';
              query.field_1_num1 = this.chart2211 - 1;
              query.field_1_num2 = this.chart2212 - 1;
              query.field_2 = '申请年份';
              query.field_2_date1 = this.chart2221.toString();
              query.field_2_date2 = this.chart2222.toString();
              double_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.datalist;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '申请人申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //申请人专利类型分析
            if (name == '2-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主申请人';
              query.field_1_num1 = this.chart2311 - 1;
              query.field_1_num2 = this.chart2312 - 1;
              query.field_2 = '申请类型';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_first_applicant_db_name(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var fmdata = res.data.fmdata;//[120, 132, 101, 134, 90, 230, 210];
                var syxxdata = res.data.syxxdata;//[220, 182, 191, 234, 290, 330, 310];
                var wgdata = res.data.wgdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '申请人专利类型分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '发明',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: fmdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '实用新型',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: syxxdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '外观',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wgdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //申请人专利有效性分析
            if (name == '2-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主申请人';
              query.field_1_num1 = this.chart2411 - 1;
              query.field_1_num2 = this.chart2412 - 1;
              query.field_2 = '主法律状态';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_first_applicant_main_law_status(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var yqdata = res.data.yqdata;//[120, 132, 101, 134, 90, 230, 210];
                var wqdata = res.data.wqdata;//[220, 182, 191, 234, 290, 330, 310];
                var szdata = res.data.szdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '申请人有效性分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '有权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: yqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '审中',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: szdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '无权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //申请人技术构成分析
            if (name == '2-5') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '主申请人';
              query.field_1_num1 = this.chart2511 - 1;
              query.field_1_num2 = this.chart2512 - 1;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart2521 - 1;
              query.field_2_num2 = this.chart2522 - 1;
              double_field_first_applicant_main_ipc_class(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.ydata;
                var xdata = res.data.xdata;
                var max = res.data.max;
                var data11 = res.data.data;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 申请人：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //发明人排行榜
            if (name == '3-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主发明人';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = this.chart3111 - 1;
              query.field_1_num2 = this.chart3112 - 1;
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var xdata = res.data.xdata;
                var ydata = res.data.ydata;
                var option = {
                  title: {
                    text: '发明人排行榜',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>发明人</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  series: [
                    {
                      data: ydata,
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
            //发明人申请趋势分析
            if (name == '3-2') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主发明人';
              query.field_1_num1 = this.chart3211 - 1;
              query.field_1_num2 = this.chart3212 - 1;
              query.field_2 = '申请年份';
              query.field_2_date1 = this.chart3221.toString();
              query.field_2_date2 = this.chart3222.toString();
              double_field_first_applicant_app_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.xdata;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '发明人申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //发明人专利类型分析
            if (name == '3-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主发明人';
              query.field_1_num1 = this.chart3311 - 1;
              query.field_1_num2 = this.chart3312 - 1;
              query.field_2 = '申请类型';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_first_inventor_db_name(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var fmdata = res.data.fmdata;//[120, 132, 101, 134, 90, 230, 210];
                var syxxdata = res.data.syxxdata;//[220, 182, 191, 234, 290, 330, 310];
                var wgdata = res.data.wgdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '发明人专利类型分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '发明',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: fmdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '实用新型',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: syxxdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '外观',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wgdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //发明人专利有效性分析
            if (name == '3-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主发明人';
              query.field_1_num1 = this.chart3411 - 1;
              query.field_1_num2 = this.chart3412 - 1;
              query.field_2 = '主法律状态';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_first_inventor_main_law_status(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var yqdata = res.data.yqdata;//[120, 132, 101, 134, 90, 230, 210];
                var wqdata = res.data.wqdata;//[220, 182, 191, 234, 290, 330, 310];
                var szdata = res.data.szdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '发明人有效性分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '有权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: yqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '审中',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: szdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '无权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //发明人技术构成分析
            if (name == '3-5') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '主发明人';
              query.field_1_num1 = this.chart3511 - 1;
              query.field_1_num2 = this.chart3512 - 1;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart3521 - 1;
              query.field_2_num2 = this.chart3522 - 1;
              double_field_first_inventormain_main_ipc_class(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.ydata;
                var xdata = res.data.xdata;
                var max = res.data.max;
                var data11 = res.data.data;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
                });
                var option = {
                  title: {
                    text: '发明人技术构成分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 发明人：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //国家申请量分布分析
            if (name == '4-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '申请国家';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = this.chart4111 - 1;
              query.field_1_num2 = this.chart4112 - 1;
              //alert(JSON.stringify(query));
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var data = res.data;
                var option = {
                  title: {
                    text: '国家申请量分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      saveAsImage: {},
                      dataView: { //数据视图
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请类型</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var j = 0; j < series[0].data.length; j++) {
                            tdBodys += '<tr><td>' + series[0].data[j].name + '</td><td>' + series[0].data[j].value + '</td></tr>'; //组装表数据
                          }
                          table += tdBodys + '</tbody></table></div>';
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
                  tooltip: {
                    trigger: 'item'
                  },
                  legend: {
                    orient: 'vertical',
                    left: 'right',
                    top: 'middle',
                  },
                  series: [
                    {
                      //name: '专利类型',
                      type: 'pie',
                      radius: '50%',
                      data: data,
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      },
                      label: {
                        formatter: '{b}：{c}: ({d}%)',
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
            //国家申请趋势分析
            if (name == '4-2') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '申请国家';
              query.field_1_num1 = this.chart4211 - 1;
              query.field_1_num2 = this.chart4212 - 1;
              query.field_2 = '申请年份';
              query.field_2_date1 = this.chart4221.toString();
              query.field_2_date2 = this.chart4222.toString();
              double_field_first_applicant_app_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.xdata;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '国家申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //国家公开趋势分析
            if (name == '4-3') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '申请国家';
              query.field_1_num1 = this.chart4311 - 1;
              query.field_1_num2 = this.chart4312 - 1;
              query.field_2 = '公开年份';
              query.field_2_date1 = this.chart4321.toString();
              query.field_2_date2 = this.chart4322.toString();
              double_field_first_applicant_app_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.xdata;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '国家公开趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //国家专利技术构成分析
            if (name == '4-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '申请国家';
              query.field_1_num1 = this.chart4411 - 1;
              query.field_1_num2 = this.chart4412 - 1;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart4421 - 1;
              query.field_2_num2 = this.chart4422 - 1;
              double_field_app_country_main_ipc_class(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.yqdata;
                var xdata = res.data.xdata;
                var max = 0;//res.data.max;
                var data11 = res.data.datalist;
                var data22 = [];
                for (var i = 0; i < ydata.length; i++) {
                  for (var j = 0; j < data11[i].length; j++) {
                    data22.push([i, j, data11[i][j]]);
                  }
                }
                data11 = data22;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
                });
                //alert(JSON.stringify(data11));
                //alert(JSON.stringify(data));
                for (var i = 0; i < data11.length; i++) {
                  for (var j = 0; j < data11[i].length; j++) {
                    if (max < data11[i][j]) { max = data11[i][j]; }
                  }
                }
                var option = {
                  title: {
                    text: '国家专利技术构成分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 国家：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //专利申请量分布
            if (name == '5-1') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '国省代码';
              query.field_1_date1 = '';
              query.field_1_date2 = '';
              query.field_1_num1 = 0;
              query.field_1_num2 = 300;
              //alert(JSON.stringify(query));
              single_field_v2(query).then((res) => {
                //alert(JSON.stringify(res));
                var data = [];// res.data;
                for (var i = 0; i < res.data.length; i++) {
                  var item = res.data[i];
                  for (var j = 0; j < this.chinacountrycode.length; j++) {
                    if (item.name.indexOf(this.chinacountrycode[j]) >= 0) {
                      data.push(item);
                    }
                  }
                }
                var option = {
                  title: {
                    text: '专利申请量分布',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      saveAsImage: {},
                      dataView: { //数据视图
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>省市</td><td>数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var j = 0; j < series[0].data.length; j++) {
                            tdBodys += '<tr><td>' + series[0].data[j].name + '</td><td>' + series[0].data[j].value + '</td></tr>'; //组装表数据
                          }
                          table += tdBodys + '</tbody></table></div>';
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
                  tooltip: {
                    trigger: 'item'
                  },
                  legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    left: 'right',
                    top: '50',
                  },
                  series: [
                    {
                      //name: '专利类型',
                      type: 'pie',
                      radius: '50%',
                      data: data,
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      },
                      label: {
                        formatter: '{b}：{c}: ({d}%)',
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
            //专利申请趋势分析
            if (name == '5-2') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = '申请年份';
              query.field_2_date1 = this.chart5211.toString();
              query.field_2_date2 = this.chart5212.toString();
              double_field_country_code_app_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.datalist;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '专利申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //专利类型分布分析
            if (name == '5-3') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = '申请类型';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_country_code_db_name(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var fmdata = res.data.fmdata;//[120, 132, 101, 134, 90, 230, 210];
                var syxxdata = res.data.syxxdata;//[220, 182, 191, 234, 290, 330, 310];
                var wgdata = res.data.wgdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '专利类型分布分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '发明',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: fmdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '实用新型',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: syxxdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '外观',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wgdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //专利有效性分析
            if (name == '5-4') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = '主法律状态';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_country_code_main_law_status(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var yqdata = res.data.yqdata;//[120, 132, 101, 134, 90, 230, 210];
                var wqdata = res.data.wqdata;//[220, 182, 191, 234, 290, 330, 310];
                var szdata = res.data.szdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '专利有效性分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '有权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: yqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '审中',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: szdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '无权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //有效专利类型分布分析
            if (name == '5-5') {
              var query = {};
              query.id = localStorage.getItem('search');
              //return;//无此接口
              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = '申请类型';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              //alert(JSON.stringify(query));
              double_field_country_code_main_law_status_ls(query).then((res) => {
                //alert(JSON.stringify(res));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var fmdata = res.data.fmdata;//[120, 132, 101, 134, 90, 230, 210];
                var syxxdata = res.data.syxxdata;//[220, 182, 191, 234, 290, 330, 310];
                var wgdata = res.data.wgdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: '有效专利类型分布分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '发明',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: fmdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '实用新型',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: syxxdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '外观',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wgdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //专利公开趋势分析
            if (name == '5-6') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = '公开年份';
              query.field_2_date1 = this.chart5611.toString();
              query.field_2_date2 = this.chart5612.toString();
              double_field_country_code_open_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.datalist;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: '专利公开趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //专利技术构成分析
            if (name == '5-7') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = '国省代码';
              query.field_1_num1 = 0;
              query.field_1_num2 = 34;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart5711 - 1;
              query.field_2_num2 = this.chart5712 - 1;
              double_field_country_code_main_ipc_class(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.ydata;
                var xdata = res.data.xdata;
                var max = 0;//res.data.max;
                var data11 = res.data.datalist;
                var data22 = [];
                for (var i = 0; i < ydata.length; i++) {
                  for (var j = 0; j < data11[i].length; j++) {
                    data22.push([i, j, data11[i][j]]);
                  }
                }
                data11 = data22;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
                });
                for (var i = 0; i < data11.length; i++) {
                  for (var j = 0; j < data11[i].length; j++) {
                    if (max < data11[i][j]) { max = data11[i][j];}
                  }
                }
                var option = {
                  title: {
                    text: '专利技术构成分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 省市：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //IPC技术构成分析
            if (name == '6-1') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = 'IPC小类';
              query.field_1_num1 = this.chart6111 - 1;
              query.field_1_num2 = this.chart6112 - 1;
              query.field_2 = 'IPC大组';
              query.field_2_num1 = this.chart6121 - 1;
              query.field_2_num2 = this.chart6122 - 1;
              double_field_main_ipc_class_and_large_group(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.yqdata;
                var xdata = res.data.xdata;
                var datalist = res.data.datalist;
                var data = [];
                for (var i = 0; i < ydata.length; i++) {
                  var sub1 = [];
                  for (var j = 0; j < xdata[i].length; j++) {
                    sub1.push({ name: xdata[i][j], value: datalist[i][j] });
                  }
                  var item1 = { name: ydata[i], children: sub1 };
                  data.push(item1);
                }
                var option = {
                  title: {
                    text: 'IPC技术构成分析',
                    left: 'center'
                  },
                  toolbox: {
                    feature: {
                      saveAsImage: {},
                      dataView: { //数据视图
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt.series));
                          //var axisData = opt.xAxis[0].data; // 坐标数据
                          //var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>名称</td><td>名称</td><td>数量</td>'; // 表头
                          //xdata.forEach(function (item) {
                          //  tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          //});
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0; i < ydata.length; i++) {
                            try {
                              for (var j = 0; j < xdata[i].length; j++) {
                                tdBodys += '<tr>';
                                if (j == 0) {
                                  tdBodys += '<td rowspan="' + xdata[i].length + '">' + ydata[i] + '</td>';
                                  tdBodys += '<td>' + xdata[i][j] + '</td>';
                                  tdBodys += '<td>' + datalist[i][j] + '</td>';
                                }
                                else {
                                  tdBodys += '<td>' + xdata[i][j] + '</td>';
                                  tdBodys += '<td>' + datalist[i][j] + '</td>';
                                }
                                tdBodys += '</tr>';
                              }
                            }
                            catch (e) { alert(e); }
                          }
                          table += tdBodys;
                          tdBodys = '';
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
                  tooltip: {
                    position: 'top',
                    formatter: function (params) {
                      //alert(JSON.stringify(params.data));
                      return (
                        params.data.name + '：' + params.data.value
                      );
                    }
                  },
                  series: {
                    label: {
                      show: true,
                      formatter: '{b}：{c}'
                    },
                    type: 'sunburst',
                    data: data,
                    radius: [0, '95%'],
                    sort: undefined,
                    emphasis: {
                      focus: 'ancestor'
                    },
                    levels: [
                      {},
                      {
                        r0: '15%',
                        r: '35%',
                        itemStyle: {
                          borderWidth: 2
                        },
                        label: {
                          rotate: 'tangential'
                        }
                      },
                      {
                        r0: '35%',
                        r: '70%',
                        label: {
                          align: 'right'
                        }
                      },
                      {
                        r0: '70%',
                        r: '72%',
                        label: {
                          position: 'outside',
                          padding: 3,
                          silent: false
                        },
                        itemStyle: {
                          borderWidth: 3
                        }
                      }
                    ]
                  }
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //IPC技术申请趋势分析
            if (name == '6-2') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = 'IPC小类';
              query.field_1_num1 = this.chart6211 - 1;
              query.field_1_num2 = this.chart6212 - 1;
              query.field_2 = '申请年份';
              query.field_2_date1 = this.chart6221.toString();
              query.field_2_date2 = this.chart6222.toString();
              double_field_main_ipc_class_app_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.datalist;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: 'IPC技术申请趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //IPC技术公开趋势分析
            if (name == '6-3') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = 'IPC小类';
              query.field_1_num1 = this.chart6311 - 1;
              query.field_1_num2 = this.chart6312 - 1;
              query.field_2 = '公开年份';
              query.field_2_date1 = this.chart6321.toString();
              query.field_2_date2 = this.chart6322.toString();
              double_field_main_ipc_class_open_date(query).then((res) => {
                //alert(JSON.stringify(res));
                var legenddata = res.data.legenddata;
                var yeardata = res.data.yeardata;
                //每一子数组对应每一申请人，子组每一项对应每一年
                var xdata = res.data.datalist;
                var series1 = [];
                for (var i = 0; i < legenddata.length; i++) {
                  series1.push({
                    name: legenddata[i], type: 'line', data: xdata[i], label: {
                      formatter: '{c}',
                      show: true,
                      position: 'top'
                    }
                  });
                }
                var series = series1;
                var option = {
                  title: {
                    text: 'IPC技术公开趋势分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

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
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: yeardata
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
            //IPC申请人分析
            if (name == '6-4') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '主申请人';
              query.field_1_num1 = this.chart6421 - 1;
              query.field_1_num2 = this.chart6422 - 1;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart6411 - 1;
              query.field_2_num2 = this.chart6412 - 1;
              double_field_main_ipc_class_first_applicant(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.ydata;
                var xdata = res.data.xdata;
                var max = res.data.max;
                var data11 = res.data.data;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
                });
                var option = {
                  title: {
                    text: 'IPC申请人分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 申请人：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //IPC发明人分析
            if (name == '6-5') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '主发明人';
              query.field_1_num1 = this.chart6521-1;
              query.field_1_num2 = this.chart6522-1;
              query.field_2 = 'IPC小类';
              query.field_2_num1 = this.chart6511-1;
              query.field_2_num2 = this.chart6512 - 1;
              //alert(JSON.stringify(query));
              double_field_main_ipc_class_first_inventor(query).then((res) => {
                //alert(JSON.stringify(res));
                var ydata = res.data.ydata;
                var xdata = res.data.xdata;
                var max = res.data.max;
                var data11 = res.data.data;
                var data = data11.map(function (item) {
                  return [item[1], item[0], item[2] || '-'];
                });
                var option = {
                  title: {
                    text: 'IPC发明人分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          //alert(JSON.stringify(opt));
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          xdata.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
                          var tdBodys = ''; // 表数据
                          for (var i = 0, l = ydata.length; i < l; i++) {
                            for (var j = 0; j < xdata.length; j++) {
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
                      return (
                        params.value[2] +
                        '， 分类号：' +
                        ydata[params.value[1]] +
                        '， 发明人：' +
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
                    min: 0,
                    max: max,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0'
                  },
                  series: [
                    {
                      type: 'heatmap',
                      data: data,
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
            //IPC专利有效性分析
            if (name == '6-6') {
              var query = {};
              query.id = localStorage.getItem('search');
              query.field_1 = 'IPC小类';
              query.field_1_num1 = this.chart6611 - 1;
              query.field_1_num2 = this.chart6612 - 1;
              query.field_2 = '主法律状态';
              query.field_2_date1 = '';
              query.field_2_date2 = '';
              double_field_main_ipc_class_main_law_status(query).then((res) => {
                //alert(JSON.stringify(res.data.legenddata));
                //图例
                var legenddata = res.data.legenddata;//['发明公开', '实用新型', '外观设计'];
                var xdata = res.data.xdata;//['申请人名称1', '申请人名称2', '申请人名称3', '申请人名称4', '申请人名称5', '申请人名称6', '申请人名称7'];
                var yqdata = res.data.yqdata;//[120, 132, 101, 134, 90, 230, 210];
                var wqdata = res.data.wqdata;//[220, 182, 191, 234, 290, 330, 310];
                var szdata = res.data.szdata;//[150, 232, 201, 154, 190, 330, 410];
                var option = {
                  title: {
                    text: 'IPC专利有效性分析',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          //alert(JSON.stringify(series[0].data));
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                    orient: 'horizontal',//horizontal  vertical
                    showTitle: true,

                  },
                  dataZoom: {
                    type: 'inside'
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    data: legenddata,
                    bottom: 20
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '60',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: xdata
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: '有权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: yqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '审中',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: szdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    },
                    {
                      name: '无权',
                      type: 'bar',
                      stack: 'Ad',
                      emphasis: {
                        focus: 'series'
                      },
                      data: wqdata,
                      label: {
                        formatter: '{a}：{c}',
                        show: true,
                        position: 'inside'
                      }
                    }
                  ]
                };
                myChart11.setOption(option);
                this.loading = false;
              });
            }
            //技术生命周期分析（申请人）
            if (name == '7-1') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '申请年份';
              query.field_1_date1 = this.chart7111.toString();
              query.field_1_date2 = this.chart7112.toString();
              query.field_2 = '主申请人';
              //alert(JSON.stringify(query));
              double_field_app_date_first_applicant(query).then((res) => {
                //alert(JSON.stringify(res));
                var names = res.data.xdata;
                //申请人数量和申请的专利数量
                var datalist = res.data.datalist;
                var data = [];
                for (var i = 0; i < names.length; i++) {
                  var item = [];
                  item.push(datalist[i][1]);
                  item.push(datalist[i][0]);
                  data.push(item);
                }
                datalist = data;
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请年份</td><td>申请人数量</td><td>专利申请数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                      data: datalist,
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
            }
            //技术生命周期分析（发明人）
            if (name == '7-2') {
              var query = {};
              query.id = localStorage.getItem('search');

              query.field_1 = '申请年份';
              query.field_1_date1 = this.chart7211.toString();
              query.field_1_date2 = this.chart7212.toString();
              query.field_2 = '主发明人';
              //alert(JSON.stringify(query));
              double_field_app_date_first_inventor(query).then((res) => {
                //alert(JSON.stringify(res));
                var names = res.data.xdata;
                //申请人数量和申请的专利数量
                var datalist = res.data.datalist;
                var data = [];
                for (var i = 0; i < names.length; i++) {
                  var item = [];
                  item.push(datalist[i][1]);
                  item.push(datalist[i][0]);
                  data.push(item);
                }
                datalist = data;
                var option = {
                  title: {
                    text: '生命周期分析（发明人）',
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td>申请年份</td><td>发明人数量</td><td>专利申请数量</td>'; // 表头
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                        '， 发明人数量：' +
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
                      data: datalist,
                      smooth: true,
                      label: {
                        formatter: function (params) { return (names[params.dataIndex] + '年\n专利：' + params.value[0] + '\n发明人' + params.value[1]) },
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
                      buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                      show: true,
                      optionToContent: function (opt) {
                        var axisData = opt.xAxis[0].data; // 坐标数据
                        var series = opt.series; // 折线图数据
                        var tdHeaders = '<td>' + tttile+'</td><td>数量</td>'; // 表头
                        //series.forEach(function (item) {
                        //	tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                        //});
                        var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
                        buttonColor: '#409eff', readOnly:true, lang:['数据视图', '关闭'],
                        show: true,
                        optionToContent: function (opt) {
                          var axisData = opt.xAxis[0].data; // 坐标数据
                          var series = opt.series; // 折线图数据
                          var tdHeaders = '<td></td>'; // 表头
                          series.forEach(function (item) {
                            tdHeaders += '<td style="padding:0px 2px;">' + item.name + '</td>'; //组装表头
                          });
                          var table = '<div class="datetable1" style="overflow-y:auto;height: 100%;width:100%;"><table style="text-align:center; border-collapse:collapse;margin:auto" border="1" ><tbody><tr>' + tdHeaders + '</tr>';
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
          //this.setpageshow('6-1');
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
  .datetable11 td {
    padding: 3px 5px;border:solid 1px #1492ff;
  }
  .datetable1 table tr td{
      padding:3px 5px;
  }
</style>
