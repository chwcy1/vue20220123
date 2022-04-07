<template>
	<div class="home">
		<el-card>
			<div class="search">
				<div>
					<span>国家和地区</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div>
					<span>公告/申请日</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div>
					<span>年份</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div>
					<span>时间</span>
					<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
				</div>
			</div>
			<div>
				<div class="search">
					<span>发明人/专利权人(Author/Assignee)</span>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
				</div>
				<div class="search">
					<span>题目/文摘(Abstract/Title)</span>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
				</div>
				<div class="search">
					<span>说明书全文(FullText)</span>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
				</div>
				<div class="search">
					<span>专利号/申请号/优先权号(Patent Number)</span>
					<el-input v-model="input" placeholder="请输入内容"></el-input>
					<div style="text-align: center;">
						<el-button type="primary">检索</el-button>
						<el-button>清空</el-button>
					</div>
				</div>
			</div>
		</el-card>


		<el-card style="margin-top: 40px;">
			<div v-for="(item,index) in list" :key="index">
				<div style="display: flex;">
					<el-checkbox></el-checkbox>
					<p @click="getDetail(item)" style="font-weight: 600;color: #409EFF;margin-left: 5px;">{{index+1}}.{{item.name}}</p>
				</div>
				<p style="font-weight: 600;">申请号：{{item.id}} 申请日期：{{item.time}} 公开号：{{item.id2}}</p>
				<p style="font-weight: 600;">申请人：{{item.people}}发明人：{{item.people2}}</p>
				<div style="display: flex;margin-top: 10px;">
					<p style="flex: 5;">文摘：{{item.detail}}</p>
					<el-image style="flex: 2;width: 100px; height: 100px" :src="item.picture" fit="contain"></el-image>
				</div>
				<el-divider></el-divider>
			</div>
		</el-card>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checkList: [],
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
				list: [{
					id: 'CN201730276490',
					id2: 'CN304620698',
					time: '2019.03.05',
					name: '自动消解系统装置(DS-72)',
					people: '广州格丹纳仪器有限公司;广东省测试分析研究所（中国广州分析测试中心）',
					people2: '罗国浪;张冠文;洪生文;陈云;倪树标;黎国标',
					detail: '1．本外观设计产品的名称：自动消解系统装置(DS‑72)。2．本外观设计产品的用途：本外观设计产品用于食品、医药、农业、林业、环保、化工和生化等领域以对土壤、植株、种子、矿石等化学分析关的样品消解处理。3．本外观设计产品的设计要点：在于产品的整体外形结构。4．最能表明本外观设计设计要点的图片或照片：主视图。',
					picture: require('../assets/index.png')
				},
				{
					id: 'CN201730276490',
					id2: 'CN304620698',
					time: '2019.03.05',
					name: '自动消解系统装置(DS-72)',
					people: '广州格丹纳仪器有限公司;广东省测试分析研究所（中国广州分析测试中心）',
					people2: '罗国浪;张冠文;洪生文;陈云;倪树标;黎国标',
					detail: '1．本外观设计产品的名称：自动消解系统装置(DS‑72)。2．本外观设计产品的用途：本外观设计产品用于食品、医药、农业、林业、环保、化工和生化等领域以对土壤、植株、种子、矿石等化学分析关的样品消解处理。3．本外观设计产品的设计要点：在于产品的整体外形结构。4．最能表明本外观设计设计要点的图片或照片：主视图。',
					picture: require('../assets/index.png')
				},
				{
					id: 'CN201730276490',
					id2: 'CN304620698',
					time: '2019.03.05',
					name: '自动消解系统装置(DS-72)',
					people: '广州格丹纳仪器有限公司;广东省测试分析研究所（中国广州分析测试中心）',
					people2: '罗国浪;张冠文;洪生文;陈云;倪树标;黎国标',
					detail: '1．本外观设计产品的名称：自动消解系统装置(DS‑72)。2．本外观设计产品的用途：本外观设计产品用于食品、医药、农业、林业、环保、化工和生化等领域以对土壤、植株、种子、矿石等化学分析关的样品消解处理。3．本外观设计产品的设计要点：在于产品的整体外形结构。4．最能表明本外观设计设计要点的图片或照片：主视图。',
					picture: require('../assets/index.png')
				},
				{
					id: 'CN201730276490',
					id2: 'CN304620698',
					time: '2019.03.05',
					name: '自动消解系统装置(DS-72)',
					people: '广州格丹纳仪器有限公司;广东省测试分析研究所（中国广州分析测试中心）',
					people2: '罗国浪;张冠文;洪生文;陈云;倪树标;黎国标',
					detail: '1．本外观设计产品的名称：自动消解系统装置(DS‑72)。2．本外观设计产品的用途：本外观设计产品用于食品、医药、农业、林业、环保、化工和生化等领域以对土壤、植株、种子、矿石等化学分析关的样品消解处理。3．本外观设计产品的设计要点：在于产品的整体外形结构。4．最能表明本外观设计设计要点的图片或照片：主视图。',
					picture: require('../assets/index.png')
				},
				{
					id: 'CN201730276490',
					id2: 'CN304620698',
					time: '2019.03.05',
					name: '自动消解系统装置(DS-72)',
					people: '广州格丹纳仪器有限公司;广东省测试分析研究所（中国广州分析测试中心）',
					people2: '罗国浪;张冠文;洪生文;陈云;倪树标;黎国标',
					detail: '1．本外观设计产品的名称：自动消解系统装置(DS‑72)。2．本外观设计产品的用途：本外观设计产品用于食品、医药、农业、林业、环保、化工和生化等领域以对土壤、植株、种子、矿石等化学分析关的样品消解处理。3．本外观设计产品的设计要点：在于产品的整体外形结构。4．最能表明本外观设计设计要点的图片或照片：主视图。',
					picture: require('../assets/index.png')
				}]
			}
		},
		mounted() {},
		methods: {
			getDetail(data){
				this.$router.push({
					path: '/detail',
					query: data
				})
			}
		}
	}
</script>

<style scoped>
	.home {
		text-align: left;
		padding: 20px;
	}

	.search {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-bottom: 10px;
	}
</style>
