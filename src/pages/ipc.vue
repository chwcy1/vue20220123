<template>
	<div class="home" style="max-width:1100px;margin:auto">
		<div style="font-size: 20px; padding: 10px 0; font-weight: normal; border-bottom: dashed 1px #DCDFE6">
			<table style="width:100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="1" style="padding-top:3px;padding-right:7px">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
							<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
						</svg>
					</td>
					<td valign="top">
						行业检索
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<el-card style="width: 100%;margin: 0px auto;background:#FFF" shadow="never">
			<div style="display: flex;">
				<el-input v-model="input" placeholder="输入内容" clearable @keyup.enter.native="get_name"></el-input>
				<el-button @click="get_name()" size="medium" type="primary" style="width:105px;margin-left:10px">查   询</el-button>
			</div>
			<div style="display: flex;margin: 10px auto;">
				<div style="text-align: left;width: 60%;margin-top: 15px;">
					<el-radio v-model="radio" label="1">输入分类号查询含义</el-radio>
					<el-radio v-model="radio" label="2">输入关键词查询分类号</el-radio>
				</div>
				<div style="text-align: right;width: 40%;">
					<el-button @click="toSearch('form')" size="small" type="primary" style="width: 100px; margin-left: 10px">
						到表格检索
					</el-button>
					<el-button @click="toSearch('high')" size="small" type="primary" style="width: 100px; margin-left: 10px">
						到高级检索
					</el-button>
				</div>
			</div>
			<el-tree ref="tree" :check-strictly="true" :data="all" :props="props" :load="loadNode" lazy show-checkbox>
				<div style="display: flex;" class="custom-tree-node" slot-scope="{ node,data }">
					<div style="width: 100px;">
						{{node.label}}
					</div>
					<!--<div>{{ data.title }}({{data.collection}})</div>-->
					<div :title="data.title">{{ data.title }}</div>
				</div>
			</el-tree>
		</el-card>
		<div style="width:100%;padding:10px 0"></div>
		<el-card id="card" style="width: 100%; margin: 0px auto; background: #FFF" v-if="show" shadow="never">
			<el-table v-loading="load" :data="tableData" style="width: 100%">
				<el-table-column prop="code" label="当前分类名" width="180">
				</el-table-column>
				<el-table-column prop="title" label="当前分类文本">
				</el-table-column>
				<el-table-column prop="collection" label="父分类名" width="180">
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button type="text" @click="getCode(scope.row.code)">检索</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<script>
	import {
		ipc,
		ipc_by_title,
		ipc_by_code,
		search
	} from '../api/search.js'
	export default {
		data() {
			return {
				show: false,
				load: false,
				first: true,
				tableData: [],
				radio: '1',
				list: [],
				all: [],
				input: '',
				props: {
					label: 'code',
					isLeaf: 'isLeaf',
        },
        username: localStorage.getItem("username"),
			}
		},
		created() {
			var query = {}
			// ipc/wg
			query.type = 'ipc'
			query.coll = ''
			ipc(query).then(res => {
				res.ipcs.forEach(item=>{
					item.isLeaf = !item.has_child
				})
				this.all = res.ipcs
				this.first = false;
			})
		},
		methods: {
			get_name() {
				this.show = true
				this.load = true
				var query = {}
				query.type = 'ipc'
				if(this.radio=='2'){
					query.title = this.input
					ipc_by_title(query).then(res => {
						this.tableData = res.ipcs
						this.load = false
						document.getElementById('card').scrollIntoView(true);
					})
				}
				else{
					query.code = this.input
					ipc_by_code(query).then(res => {
						this.tableData = res.ipcs
						this.load = false
						document.getElementById('card').scrollIntoView(true);
					})
				}
			},
			loadNode(node, resolve) {
				if (!this.first) {
					var query = {}
					// ipc/wg
					query.type = 'ipc'
					query.coll = node.label
					ipc(query).then(res => {
						res.ipcs.forEach(item=>{
							item.isLeaf = !item.has_child
						})
						return resolve(res.ipcs);
					})
				}
			},
			getCode(code) {
				var query = {}
				// query.expr = Base64.encode(this.expr)
				query.expr = 'SIC=' + code
				query.is_cross_language = false
				query.is_include_synonym = false
				query.is_include_company = false
        query.countries = 'FM,SYXX,FMSQ'
        if (this.username != null && this.username != 'guest') {
          query.username = this.username;
        }
        query.analysis = false;
				console.log(query)

				search(query).then(res => {
					console.log(res)
					if (res) {
						var history = localStorage.getItem('history')
						if (history)
							localStorage.setItem('history', history + '#' + query.expr + '@' + query.countries)
						else
							localStorage.setItem('history', query.expr + '@' + query.countries)
						localStorage.setItem('isnew', 1)
						localStorage.setItem('search', res.msg)
            localStorage.setItem('expr', query.expr)
            localStorage.setItem("countries", query.countries);
						//this.$message.success(res.msg)
						this.$router.push('/search-result')
					}
				})
			},
			toSearch(id) {
				var ipc = this.$refs.tree.getCheckedNodes()
				console.log(ipc)
				var expr = ''
				ipc.forEach(item => {
					console.log(item.code)
					if (expr == '') {
						expr = item.code
					} else {
						expr = expr + ' or ' + item.code
					}
				})
				if (id == "high") {
					this.$router.push({
						path: '/high-search',
						query: {
							expr: 'SIC=(' + expr + ')'
						}
					})
				}
				if (id == "form") {
					this.$router.push({
						path: '/form-search',
						query: {
							/*IPC:'('+ expr+')'*/
              IPC: expr
						}
					})
				}
			},
		}
	}
</script>

<style scoped>
	.home {
		text-align: left;
		padding: 20px;
		font-size: 14px;
	}
</style>
