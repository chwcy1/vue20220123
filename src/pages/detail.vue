<template>
	<div class="home">
		<el-card>
			<div class="form">
				<div class="formTitle">申请号：</div>
				<div class="formDeatail">&#12288;{{detail.id}}</div>
				<div class="formTitle">公开号：</div>
				<div class="formDeatail">&#12288;{{detail.id2}}</div>
				<div class="formTitle">专利名称：</div>
				<div class="formDeatail">&#12288;{{detail.name}}</div>
				<div class="formTitle">申请人：</div>
				<div class="formDeatail">&#12288;{{detail.people}}</div>
				<div class="formTitle">发明人：</div>
				<div class="formDeatail">&#12288;{{detail.people2}}</div>
				<div class="formTitle">代理机构：</div>
				<div class="formDeatail">&#12288;广州市越秀区哲力专利商标事务所(普通合伙) 44288</div>
				<div class="formTitle">代理人：</div>
				<div class="formDeatail">&#12288;徐朝荣;马簪</div>
				<div class="formTitle">联系地址：</div>
				<div class="formDeatail">&#12288;510000 广东省广州市越秀区先烈中路83号凯城华庭大厦八楼801房</div>
				<div class="formTitle">公开/公告日期：</div>
				<div class="formDeatail">&#12288;{{detail.time}}</div>
				<div class="formTitle">申请日：</div>
				<div class="formDeatail">&#12288;{{detail.time}}</div>
				<div class="formTitle">申请国家：</div>
				<div class="formDeatail">&#12288;CN</div>
				<div class="formTitle">主分类号：</div>
				<div class="formDeatail">&#12288;24-01(11)</div>
				<div class="formTitle">分类号：</div>
				<div class="formDeatail">&#12288;24-01(11)</div>
				<div class="formTitle">文摘：</div>
				<div class="formDeatail">&#12288;{{detail.detail}}</div>
				<div class="formTitle">国家/省市：</div>
				<div class="formDeatail">&#12288;44</div>
				<div class="formTitle">邮编：</div>
				<div class="formDeatail">&#12288;510000</div>
			</div>
			<div style="width: 100%;text-align: center;margin-top: 10px;">
				<el-button type="primary">打印</el-button>
				<el-button @click="back">返回</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				detail: {}
			}
		},
		mounted() {
			this.detail = this.$route.query
		},
		methods: {
			back() {
				this.$router.push('simple')
			}
		}
	}
</script>

<style scoped>
	.home {
		padding: 20px;
	}
	.form {
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(5,1fr);
	}
	.formTitle {
		border: 1px solid #000000;
		padding: 10px 0;
	}
	.formDeatail {
		border: 1px solid #000000;
		grid-column: 2/6;
		text-align: left;
		padding: 10px 10px;
	}
</style>
