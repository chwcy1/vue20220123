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
					<td valign="top">
						表格检索
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<el-card style="width: 100%;margin: 0 auto;background:#FFF" shadow="never">
			<!--区域选择-->
			<div style="padding:10px;position:relative">
				<span @click="countrymore" style="position:absolute;right:0;top:90px;font-size:14px;color:#0094ff;font-weight:bold;cursor:pointer">
		<span ref="countrymore">展开</span>
		<span ref="countrymoreico">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -3 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>
		</span>
	</span>
	<el-checkbox :indeterminate="isIndeterminateall" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
	<el-checkbox :indeterminate="isIndeterminatecn" v-model="checkAllcn" @change="handleCheckAllChange1">中国数据</el-checkbox>
	<el-checkbox :indeterminate="isIndeterminategw" v-model="checkAllgw" @change="handleCheckAllChange2">国外数据</el-checkbox>
	<div style="width:100%;padding:5px 0"></div>
				<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country">
		<el-checkbox v-for="item in datacn" :key="item.value" :label="item.value" style="padding: 2px 0; display: block;width:16.6%">
			{{item.name}}
		</el-checkbox>
	</el-checkbox-group>
				<!--<el-checkbox :indeterminate="isIndeterminate"
										 v-model="checkAll"
										 @change="handleCheckAllChange"
										 style="line-height: 30px;position:absolute;right:0;bottom:7px">全选</el-checkbox>
				<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country1">
					<el-checkbox v-for="item in dataguowaitest" :key="item.value" :label="item.value" style="padding:2px 0">
						{{item.name}}
					</el-checkbox>
				</el-checkbox-group>-->
				<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="countrygw">
		<el-checkbox v-for="item in dataguowai" :key="item.value" :label="item.value" style="padding: 2px 0; display: block; width: 16.6%">
			{{item.name}}
		</el-checkbox>
	</el-checkbox-group>

				<div id="CTyazhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						亚洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country1">
						<el-checkbox v-for="item in data1" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>
				<div id="CTouzhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						欧洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country2">
						<el-checkbox v-for="item in data2" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>
				<div id="CTbeimeizhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						北美洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country3">
						<el-checkbox v-for="item in data3" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>
				<div id="CTnanmeizhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						南美洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country4">
						<el-checkbox v-for="item in data4" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>
				<div id="CTdayangzhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						大洋洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country5">
						<el-checkbox v-for="item in data5" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>
				<div id="CTfeizhou" class="CTother" style="width:100%;display:none;">
					<div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
						非洲
					</div>
					<el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country6">
						<el-checkbox v-for="item in data6" :key="item.value" :label="item.value" style="padding:2px 0">
							{{item.name}}
						</el-checkbox>
					</el-checkbox-group>
				</div>

			</div>
			<div style="width:100%;padding:10px 0"></div>

			<el-form size="medium" class="search" ref="form" :model="form" label-width="80px">
				<el-form-item label="申请日期">
					<!--<el-date-picker value-format="yyyyMMdd" v-model="form.AD" type="daterange" range-separator="至"
										start-placeholder="开始日期" end-placeholder="结束日期"> @input="changeinput($event)"
		</el-date-picker>-->
					<el-input v-model="form.AD" style="width:47%" placeholder="例如：20130105 或 201301 或 2013" maxlength="8" @input="changeinput($event)"
										title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" @keyup.enter.native="submit"></el-input>
					<span style="font-size:12px">至</span>
					<el-input v-model="form.AD2" style="width:48%;float:right" placeholder="例如：20130105 或 201301 或 2013" maxlength="8" @input="changeinput($event)"
										title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="公开日期">
					<!--<el-date-picker value-format="yyyyMMdd" v-model="form.PD" type="daterange" range-separator="至"
										start-placeholder="开始日期" end-placeholder="结束日期">
		</el-date-picker>-->
					<el-input v-model="form.PD" style="width:47%" placeholder="例如：20130105 或 201301 或 2013" maxlength="8" @input="changeinput($event)"
										title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" @keyup.enter.native="submit"></el-input>
					<span style="font-size:12px">至</span>
					<el-input v-model="form.PD2" style="width:48%;float:right" placeholder="例如：20130105 或 201301 或 2013" maxlength="8" @input="changeinput($event)"
										title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="申 请 号">
					<el-input v-model="form.AN" placeholder="例如:CN98803865.X" @input="changeinput($event)"
										title="输入示例：
1、完整的申请号：CN201410302384.2 或 201410302384.2
2、申请号中部分字符：201410302
3、可使用逻辑运算符：CN201410302384.2 OR CN201230530623.1" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="公 开 号">
					<el-input v-model="form.PNM" placeholder="例如:CN1251683A" @input="changeinput($event)"
										title="输入示例：
1、完整的公开号：CN102852505A 或 102852505A
2、公开号中部分字符：10285250
3、可使用逻辑运算符：CN102852505A OR CN1251683A" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="专利名称">
					<el-input v-model="form.TI" placeholder="例如:计算机" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="摘 要">
					<el-input v-model="form.AB" placeholder="例如:计算机" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="主分类号">
					<el-input v-model="form.PIC" placeholder="例如:G11C11/34" @input="changeinput($event)"
										title="输入示例：
1、完整的分类号：G11C11/34
2、分类号中部分字符：G11C11
3、可使用逻辑运算符：G11C11/34 OR E21B43/013" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<!-- 				<el-form-item label="分 类 号">
		<el-input v-model="form.SIC"></el-input>
	</el-form-item> -->
				<el-form-item label="分 类 号">
					<el-input v-model="form.IPC" placeholder="例如:G11C11/34" @input="changeinput($event)"
										title="输入示例：
1、完整的分类号：G11C11/34
2、分类号中部分字符：G11C11
3、可使用逻辑运算符：G11C11/34 OR E21B43/013
4、可使用逻辑运算符：G11C11/34 AND E21B43/013" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="申 请 人">
					<el-input v-model="form.PA" placeholder="例如:华为" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“华为”和“公司”，输入：华为 AND 公司
2、内容中需要包含“华为”或者“公司”，输入：华为 OR 公司" @keyup.enter.native="submit" style="width:90%"></el-input>
					<el-tag class="el-icon-search" effect="dark" style="cursor:pointer" @click="searchapplicant"></el-tag>
					<el-dialog title="搜索申请人" :visible.sync="dialogVisibleApp" width="630px">
						<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="padding:0 0 10px 0"><el-input v-model="appsearchinput" placeholder="请输入企业名称，例如：华为" size="small" @input="changeinput($event)"></el-input></td>
								<td width="10" align="right" style="padding:0 0 10px 10px"><el-button type="primary" round size="small" @click="searchapplist">搜&nbsp;&nbsp;索</el-button></td>
							</tr>
						</table>
						<div v-loading="apploading" style="height:320px;overflow-x:hidden;padding:0 2px 0 10px;border:solid 1px #dedede" class="wrapper">
							<el-checkbox-group v-model="AppcheckList" style="display: grid;grid-template-columns: repeat(1,1fr);width: 100%;text-align: left;margin:auto;padding:0">
								<el-checkbox v-for="appitem in allappsearch" :key="appitem" :label="appitem" style="padding: 2px 0; display: block;width:100%">
									{{appitem}}
								</el-checkbox>
							</el-checkbox-group>
						</div>
						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="searchAppok" size="small">确 定</el-button>
						</span>
					</el-dialog>
				</el-form-item>
				<el-form-item label="发 明 人">
					<el-input v-model="form.IN" placeholder="例如:丁水波" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“华为”和“公司”，输入：华为 AND 公司
2、内容中需要包含“华为”或者“公司”，输入：华为 OR 公司" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="主 权 项">
					<el-input v-model="form.FCL" placeholder="例如:计算机" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="地 址">
					<el-input v-model="form.ADDR" placeholder="例如:辽宁省鞍山市" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“辽宁省”和“鞍山市”，输入：辽宁省 AND 鞍山市
2、内容中需要包含“辽宁省”或者“鞍山市”，输入：辽宁省 OR 鞍山市" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="优 先 权">
					<el-input v-model="form.PR" placeholder="例如:20100210 JP 2010-027963" @input="changeinput($event)"
										title="输入示例：
1、分类号中部分字符：2010-027963
2、可使用逻辑运算符：2010-027963 OR 20100210
3、可使用逻辑运算符：2010-027963 AND 20100210" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="代 理 人">
					<el-input v-model="form.AGT" placeholder="例如:李恩庆" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“李恩庆”和“王会卿”，输入：李恩庆 AND 王会卿
2、内容中需要包含“李恩庆”或者“王会卿”，输入：李恩庆 OR 王会卿" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="代理机构">
					<el-input v-model="form.AGC" placeholder="例如:上海专利商标事务所" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“上海专利”和“事务所”，输入：上海专利 AND 事务所
2、内容中需要包含“上海专利”或者“事务所”，输入：上海专利 OR 事务所" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<!-- 				<el-form-item label="范畴分类">
		<el-input v-model="form.ALL" disabled></el-input>
	</el-form-item> -->
				<el-form-item label="国省代码">
					<el-input v-model="form.CO" placeholder="例如:上海;31" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 OR 运算符连接
内容中需要包含“上海”或者“江苏”，输入：上海 OR 江苏" @keyup.enter.native="submit" style="width:90%"></el-input>
					<el-tag class="el-icon-search" effect="dark" style="cursor:pointer" @click="searchco"></el-tag>
					<el-dialog title="选择国省代码" :visible.sync="dialogVisible" width="730px">
						<div style="max-height:320px;overflow-x:hidden;padding:0" class="wrapper">
							<el-checkbox-group v-model="COcheckList" style="display: grid;grid-template-columns: repeat(2,1fr);width: 100%;text-align: left;margin:auto;padding:0">
								<el-checkbox v-for="coitem in allcountrycode1" :key="coitem" :label="coitem" style="padding: 2px 0; display: block;width:49.9%">
									{{coitem}}
								</el-checkbox>
							</el-checkbox-group>
						</div>
						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="searchcook" size="small">确 定</el-button>
						</span>
					</el-dialog>
				</el-form-item>
				<!--<el-form-item label="说 明 书">
						<el-input v-model="form.DES" placeholder="例如:计算机" @input="changeinput($event)"
											title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
	1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
	2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图"  @keyup.enter.native="submit"></el-input>
					</el-form-item>-->
				<el-form-item label="关 键 词">
					<el-input v-model="form.ALL" placeholder="例如:计算机" @input="changeinput($event)"
										title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" @keyup.enter.native="submit"></el-input>
				</el-form-item>
				<el-form-item label="邮 编">
					<el-input v-model="form.PC" placeholder="例如:200063" @keyup.enter.native="submit" @input="changeinput($event)"></el-input>
				</el-form-item>
				<!-- 				<el-form-item label="关键词">
		<el-input v-model="form.ALL" placeholder="例如打发大水发散第三方"></el-input>
	</el-form-item> -->
			</el-form>
			<div style="padding:5px 0 15px 80px">
				<el-checkbox-group v-model="checkList">
					<el-tooltip placement="top">
						<div slot="content">例如:输入汽车，则检索中自动关联car等关键词</div>
						<el-checkbox label="中英文检索"></el-checkbox>
					</el-tooltip>
					<el-tooltip placement="top">
						<div slot="content">例如:输入pc，则检索中自动关联computer等关键词</div>
						<el-checkbox label="概念检索"></el-checkbox>
					</el-tooltip>
					<el-tooltip placement="top" style="display:none">
						<div slot="content">例如:输入长江大学，则检索中自动关联汉江石油学院、湖北农学院等关键词</div>
						<el-checkbox label="企业名称关联检索"></el-checkbox>
					</el-tooltip>
				</el-checkbox-group>
			</div>
			<div style="text-align: center;">
				<el-button type="primary" @click="submit">检索</el-button>
				<el-button @click="reloadall">清空</el-button>
			</div>
		</el-card>
		
		<div style="padding:15px 0;margin:auto;background:#dedede;font-size:12px;margin-top:30px;color:#555;text-align:center;display:none">
			主办单位：上海市知识产权局&nbsp;&nbsp;运行维护：上海市知识产权服务中心 未经许可不得复制&nbsp;&nbsp;
			ICP备案编号：<a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank" style="color:#555;text-decoration:none">沪ICP备06033126号</a>
		</div>
	</div>
</template>

<script>
	import {
		search,
		search_result,
    company_synonym
	} from '../api/search.js'
	import {
		data,
		data1,
		data2,
		data3,
		data4,
		data5,
    data6,
    datacn,
    //dataouzhou,
    //databeimeizhou,
    //datadayangzhou,
    //datayazhou
		dataguowai,
    allcountrycode,
    dataguowaitest,
	} from '../assets/country.js'
	export default {
		data() {
			return {
				show: 0,
				select: '',
				activeName: 'first',
				form: {
					IPC: '',
					ALL: '',
					DES:'',
					AB:'',
					TI:'',
				},
				apploading: false,
        appsearchinput:'',
				checkList: [],
        country: ["FM", "SYXX", "WG"],
        country1: [],
        country2: [],
        country3: [],
        country4: [],
        country5: [],
        country6: [],
        countrygw: [],
        countrygwtest: [],
				COcheckList: [],
        AppcheckList:[],
				dialogVisible: false,
				dialogVisibleApp: false,
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				data: data,
				data1: data1,
				data2: data2,
				data3: data3,
				data4: data4,
				data5: data5,
        data6: data6,
        datacn: datacn,
    //    dataouzhou: dataouzhou,
    //    databeimeizhou: databeimeizhou,
    //    datadayangzhou: datadayangzhou,
				//datayazhou: datayazhou,
        dataguowai: dataguowai,
        dataguowaitest: dataguowaitest,
				allcountrycode1: allcountrycode,
        allappsearch: [],
        username: localStorage.getItem("username"),
			}
		},
		mounted() {
			if (this.$route.query.IPC) {
				this.form.IPC = this.$route.query.IPC
			}
			if (this.$route.query.ALL) {
				this.form.ALL = this.$route.query.ALL
				//this.form.AB = this.$route.query.ALL
				//this.form.DES = this.$route.query.ALL
			}
		},
    methods: {
      changeinput(e) {
        this.$forceUpdate();
      },
      reloadall() {
        location.reload();
      },
			handleCheckAllChange(val) {
        let arrayPush = [];
        this.datacn.forEach(item => {
          arrayPush.push(item.value);
        });
				this.country = val ? arrayPush : [];

        arrayPush = [];
        this.dataguowai.forEach(item => {
          arrayPush.push(item.value);
        });
				this.countrygw = val ? arrayPush : [];

        arrayPush = [];
        this.data1.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country1 = val ? arrayPush : [];

        arrayPush = [];
        this.data2.forEach(item => {
          arrayPush.push(item.value);
        });
				this.country2 = val ? arrayPush : [];
        arrayPush = [];
        this.data3.forEach(item => {
          arrayPush.push(item.value);
        });
				this.country3 = val ? arrayPush : [];
        arrayPush = [];
        this.data4.forEach(item => {
          arrayPush.push(item.value);
        });
				this.country4 = val ? arrayPush : [];
        arrayPush = [];
        this.data5.forEach(item => {
          arrayPush.push(item.value);
        });
				this.country5 = val ? arrayPush : [];
        arrayPush = [];
        this.data6.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country6 = val ? arrayPush : [];
      },
			handleCheckAllChange1(val) {
				let arrayPush = [];
				this.datacn.forEach(item => {
					arrayPush.push(item.value);
				});
        this.country = val ? arrayPush: [];
      },
			handleCheckAllChange2(val) {
        let arrayPush = [];
        this.dataguowai.forEach(item => {
          arrayPush.push(item.value);
        });
        this.countrygw = val ? arrayPush : [];

        arrayPush = [];
        this.data1.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country1 = val ? arrayPush : [];

        arrayPush = [];
        this.data2.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country2 = val ? arrayPush : [];
        arrayPush = [];
        this.data3.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country3 = val ? arrayPush : [];
        arrayPush = [];
        this.data4.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country4 = val ? arrayPush : [];
        arrayPush = [];
        this.data5.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country5 = val ? arrayPush : [];
        arrayPush = [];
        this.data6.forEach(item => {
          arrayPush.push(item.value);
        });
        this.country6 = val ? arrayPush : [];
      },
			countrymore() {
				var t = this.$refs.countrymore.innerText;
				if (t == "展开") {
          document.getElementById("CTyazhou").style.display = "block";
          document.getElementById("CTouzhou").style.display = "block";
          document.getElementById("CTbeimeizhou").style.display = "block";
          document.getElementById("CTnanmeizhou").style.display = "block";
          document.getElementById("CTdayangzhou").style.display = "block";
          document.getElementById("CTfeizhou").style.display = "block";
					this.$refs.countrymore.innerText = "收起";
          this.$refs.countrymoreico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 -3 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /></svg >';
				}
        else {
          document.getElementById("CTyazhou").style.display = "none";
          document.getElementById("CTouzhou").style.display = "none";
          document.getElementById("CTbeimeizhou").style.display = "none";
          document.getElementById("CTnanmeizhou").style.display = "none";
          document.getElementById("CTdayangzhou").style.display = "none";
          document.getElementById("CTfeizhou").style.display = "none";
          this.$refs.countrymore.innerText = "展开";
          this.$refs.countrymoreico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -3 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>';
				}
			},
			changeCountry() {
				// this.checkList = []
				switch (this.select) {
					case '':
            this.show = 0;
						break;
					case '亚洲':
						this.show = 1;
						break;
					case '欧洲':
						this.show = 2;
						break;
					case '北美洲及中美洲':
						this.show = 3;
						break;
					case '南美洲':
						this.show = 4;
						break;
					case '大洋洲':
						this.show = 5;
						break;
					case '非洲':
						this.show = 6;
						break;
				}
			},
			getDetail(data) {
				this.$router.push({
					path: '/detail',
					query: data
				})
			},
			submit() {
				var expr = ''
				console.log(this.form)
        var ad1 = this.form['AD'] == undefined ? "" : this.form['AD'];
        var ad2 = this.form['AD2'] == undefined ? "" : this.form['AD2'];
        var pd1 = this.form['PD'] == undefined ? "" : this.form['PD'];
        var pd2 = this.form['PD2'] == undefined ? "" : this.form['PD2'];
        if (ad1 == "" && ad2 != "") { ad1 = ad2; ad2 = ""; }
				if (pd1 == "" && pd2 != "") { pd1 = pd2; pd2 = ""; }
				if (ad1 != '') {
					const result = /^\d+$/.test(ad1);
					if (!result) {
						alert("日期格式为4位、6位、8位数字，请正确填写！");
						return;
					}
					if (ad2 != "") {
						const result2 = /^\d+$/.test(ad2);
						if (!result2) {
							alert("日期格式为4位、6位、8位数字，请正确填写！");
							return;
						}
						if (ad1.length != ad2.length) {
							alert("起始日期格式与结束日期格式不一致，请修正后重新检索！");
							return;
						}
						expr = 'AD=(' + ad1 + ' TO ' + ad2 + ')';
					}
					else {
						expr = 'AD=(' + ad1 + ')';
					}
				}
				if (pd1 != '') {
					const resultp = /^\d+$/.test(pd1);
					if (!resultp) {
						alert("日期格式为4位、6位、8位数字，请正确填写！");
						return;
					}
					if (pd2 != "") {
						const resultp2 = /^\d+$/.test(pd2);
						if (!resultp2) {
							alert("日期格式为4位、6位、8位数字，请正确填写！");
							return;
						}
						if (pd1.length != pd2.length) {
							alert("起始日期格式与结束日期格式不一致，请修正后重新检索！");
							return;
						}
						if (expr == '') {
							expr = 'PD=(' + pd1 + ' TO ' + pd2 + ')';
						}
						else {
							expr = expr + ' AND ' + 'PD=(' + pd1 + ' TO ' + pd2 + ')';
						}
					}
					else {
						if (expr == '') {
							expr = 'PD=(' + pd1 + ')';
						}
						else {
							expr = expr + ' AND ' + 'PD=(' + pd1 + ')';
						}
					}
				}
				for (let index in this.form) {
          if (index == 'AD2' || index == 'AD' || index == 'PD' || index == 'PD2') { continue; }
          if (index == 'AD' || index == 'PD') {
						//this.form[index] = '(' + this.form[index][0] + ' to ' + this.form[index][1] + ')'
					}
          if (this.form[index] != '') {
            if (index == 'DES') {
              if (expr == '') {
                expr = 'AB' + '=(' + this.form[index] + ')'
              } else {
                expr = expr + ' AND AB=(' + this.form[index] + ')'
              }
						}
            else if (index == 'IPC') {
              if (expr == '') {
                expr = 'SIC' + '=(' + this.form[index] + ')'
              } else {
                expr = expr + ' AND SIC=(' + this.form[index] + ')'
              }
            }
						else {
              if (expr == '') {
                expr = index + '=(' + this.form[index] + ')'
              } else {
                expr = expr + ' AND ' + index + '=(' + this.form[index] + ')'
              }
						}
					}
				}
        //alert(JSON.stringify(expr)); return;
				console.log(expr)
				var query = {}
				query.expr = expr
				query.is_cross_language = false
				query.is_include_synonym = false
        query.is_include_company = false
        if (this.username != null && this.username != 'guest') {
          query.username = this.username;
        }
				this.checkList.forEach(item => {
					switch (item) {
						case "中英文检索":
							query.is_cross_language = true
							break
						case "概念检索":
							query.is_include_synonym = true
							break
						case "企业名称关联检索":
							query.is_include_company = true
							break
					}
				})
        query.countries = this.country.concat(this.countrygw).concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).join(',');
        console.log(query.countries)
        if (query.expr == '') {
          alert('请输入检索内容！'); return;
				}
				query.analysis = false;
        //alert(query.expr);return;
				search(query).then(res => {
					console.log(res)
					if (res) {
						var history = localStorage.getItem('history')
						if (history)
							localStorage.setItem('history', history + '#' + query.expr + '@' + query.countries)
						else
							localStorage.setItem('history', query.expr + '@' + query.countries)
						localStorage.setItem('isnew', 1)
						localStorage.setItem('countries', query.countries)
						localStorage.setItem('search', res.msg)
						localStorage.setItem('expr', query.expr)
						// this.$message.success(res.id)
						this.$router.push('/search-result')
					}
				})
			},
			///选择申请人
      searchapplicant() {
        this.appsearchinput = '';
				this.allappsearch = [];
				this.AppcheckList = [];
        this.dialogVisibleApp = true;
      },
			searchAppok() {
        if (this.AppcheckList.length > 0) {
					var nncolist = [];
          this.AppcheckList.forEach(item => {
						nncolist.push(item);
					});
					this.form.PA = nncolist.join(' OR ');
				}
				else { this.form.PA = ''; }
				this.dialogVisibleApp = false;
			},
			searchapplist() {
				this.apploading = false;
				this.appsearchinput = this.appsearchinput.trim();
				if (this.appsearchinput.length == 0) {
					alert('请输入搜索内容！');
					return;
				}
				this.apploading = true;
				var queyapp = {};
				queyapp.text = this.appsearchinput;
				company_synonym(queyapp).then(res => {
					try { if (res.count == 0) { alert('未查找到符合条件单位内容'); } } catch (e) { }
					this.allappsearch = res.keys;
					this.apploading = false;
				});
			},
			///选择国省代码
			searchco() {
				this.allcountrycode1 = allcountrycode;
        this.COcheckList = [];
        this.dialogVisible = true;
			},
			searchcook() {
				if (this.COcheckList.length > 0) {
					var nncolist = [];
					this.COcheckList.forEach(item => {
						var kk = item.split(';');
						nncolist.push(kk[0]);
					});
          this.form.CO = nncolist.join(' OR ');
				}
        else { this.form.CO = ''; }
        this.dialogVisible = false;
			},
		}
	}
</script>

<style scoped>
  .search >>> .el-dialog__body {
    padding-top: 5px;
    padding-bottom: 10px;
  }
	.home {
    text-align: left;
    padding: 20px;
  }

	.myInput {
		width: 60%;
		float: right;
		margin-right: 10%;
	}

	.search {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
		margin-bottom: 10px;
	}
</style>
<style scoped>
	.el-form-item {
		margin: 0px !important;
	}
</style>
