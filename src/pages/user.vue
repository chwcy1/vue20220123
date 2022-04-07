<template>
	<div class="home">
		<el-breadcrumb style="font-size: 20px; margin: 20px 20px" separator="/">
			<el-breadcrumb-item :to="{ path: '/user' }">个人中心</el-breadcrumb-item>
			<el-breadcrumb-item>检索记录</el-breadcrumb-item>
		</el-breadcrumb>
		<el-tabs type="border-card">
			<el-tab-pane label="检索记录" v-if="type==4">
				<el-table :data="tableDataUser" style="width: 100%">
					<!-- 					<el-table-column prop="id" label="检索号" width="180">
							</el-table-column> -->
					<el-table-column prop="expression" label="检索式" width="380">
					</el-table-column>
					<el-table-column prop="countries" label="专利库" width="180">
					</el-table-column>
					<el-table-column prop="is_cross_language" label="中英文检索" width="80">
						<template slot-scope="scope">
							{{scope.row.is_cross_language?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column prop="is_include_company" label="企业名关联检索" width="80">
						<template slot-scope="scope">
							{{scope.row.is_include_company?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column prop="is_include_synonym" label="概念检索" width="80">
						<template slot-scope="scope">
							{{scope.row.is_include_synonym?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column label="操作" width="380">
						<template slot-scope="scope">
							<el-button type="text" style="color: red;" @click="del2(scope.row.id)"
								icon="el-icon-delete">
								删除</el-button>
							<el-button type="text" icon="el-icon-edit" @click="show=true;form.id=scope.row.id">创建专题库
							</el-button>
							<el-button type="text" style="color: orange;" icon="el-icon-s-help"
								@click="toCharts('screen1',scope.row.id)">圆盘图分析</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="游客检索记录">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="data0" label="序号" width="180">
					</el-table-column>
					<el-table-column prop="data1" label="检索式">
					</el-table-column>
					<el-table-column prop="data2" label="专利库" width="180">
					</el-table-column>
					<el-table-column prop="data3" label="数据量" width="180">
					</el-table-column>
					<el-table-column label="操作" width="480">
						<template slot-scope="scope">
							<el-button type="text" style="color: red;" @click="del(scope.row.data0)"
								icon="el-icon-delete">
								删除</el-button>
							<el-button type="text" icon="el-icon-edit" @click="show=true;form.id=scope.row.data4">创建专题库
							</el-button>
							<el-button type="text" style="color: orange;" icon="el-icon-s-help"
								@click="toCharts('screen1',scope.row.data4)">圆盘图分析</el-button>
							<el-button type="text" style="color: green;" icon="el-icon-s-data"
								@click="toCharts('screen2',scope.row.data4)">柱状图分析</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>


		<el-dialog title="创建专题库" :visible.sync="show">
			<el-form :model="form">
				<el-form-item label="检索id" :label-width="formLabelWidth">
					<el-input v-model="form.id" autocomplete="off" disabled></el-input>
				</el-form-item>
				<el-form-item label="名称" :label-width="formLabelWidth">
					<el-input placeholder="库名,不可出现'/'" v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="路径" :label-width="formLabelWidth">
					<el-input placeholder="'/'分隔的路径,顶级库为'/'" v-model="form.path" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="私有" :label-width="formLabelWidth">
					<el-switch v-model="form.is_private" active-text="私有" inactive-text="共有">
					</el-switch>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="show = false">取 消</el-button>
				<el-button type="primary" @click="submit()">确 定</el-button>
			</div>
		</el-dialog>
		
		<el-breadcrumb style="font-size: 20px; margin: 40px 20px 10px 20px" separator="/">
			<el-breadcrumb-item :to="{ path: '/user' }">个人中心</el-breadcrumb-item>
			<el-breadcrumb-item>专题库</el-breadcrumb-item>
		</el-breadcrumb>
		<el-tree ref="tree" :data="all2" :props="props" :load="loadNode2" children="topic" lazy style="display: block">
			<span style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
				<div style="flex: 0 20%; text-align: left">
					{{ node.label }}
				</div>
				<div style="
            flex: 0 60%;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            padding-right: 50px;
            box-sizing: border-box;
          ">
					{{ data.expression }}
				</div>
				<el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 2)">
					查看详情
				</el-button>
			</span>
		</el-tree>
		<p class="title" v-if="type === '1'">{{ mysqlTitle }}</p>
		<el-tree ref="tree" v-if="type === '1'" :data="all" :props="props" :load="loadNode" children="topic" lazy>
			<span style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
				<div style="flex: 0 20%; text-align: left">
					{{ node.label }}
				</div>
				<div style="flex: 0 60%; text-align: left">{{ data.expression }}</div>
				<el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 1)">
					查看详情
				</el-button>
			</span>
		</el-tree>
		<p class="title" v-if="type === '2' || type === '3'">{{ mysqlTitle }}</p>
		<el-tree ref="tree" v-if="type === '2' || type === '3'" :data="all" :props="props" :load="loadNode"
			children="topic" lazy>
			<span style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
				<div style="flex: 0 20%; text-align: left">
					{{ node.label }}
				</div>
				<div style="flex: 0 60%; text-align: left">{{ data.expression }}</div>
				<el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 1)">
					查看详情
				</el-button>
			</span>
		</el-tree>

		<el-dialog title="提示" :visible.sync="see" width="30%" center>
			<p class="list_data">
				路径：{{ detail.path == "/" ? detail.path : detail.path + "/"
        }}{{ detail.name }}
			</p>
			<p class="list_data">创建人：{{ detail.owner }}</p>
			<p class="list_data">类型：{{ detail.is_private ? "私有" : "共有" }}</p>
			<p class="list_data">
				数据库：<el-tag v-for="(item, index) in detail.db" style="margin-right: 10px" :key="index">{{ item }}
				</el-tag>
			</p>
			<p class="list_data">检索式：{{ detail.expression }}</p>
			<p class="list_data">是否是中英文检索：{{ detail.is_cross_language }}</p>
			<p class="list_data">
				是否是企业名称关联检索：{{ detail.is_include_company }}
			</p>
			<p class="list_data">是否是同义词检索：{{ detail.is_include_synonym }}</p>
			<span slot="footer" class="dialog-footer">
				<el-button type="danger" v-if="type === '4'" @click="del()">删 除</el-button>
				<el-button type="primary" @click="getIn()">进 入</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		topic_list,
		topic_del,
		topic_create,
		history_list,
		history_del,
		history_del_all
	} from "../api/user.js";
	import {
		search,
		search_result
	} from "../api/search.js";
	export default {
		name: "HelloWorld",
		data() {
			return {
				tableData: [],
				tableDataUser: [],
				show: false,
				formLabelWidth: '80px',
				form: {
					is_private: true
				},
				type: localStorage.getItem("type"),
				first: true,
				is_private: 1,
				list: [],
				all: [],
				all2: [],
				detail: {},
				see: false,
				props: {
					label: "name",
				},
			};
		},
		mounted() {
			this.getAll()
			this.getUserAll()
			var query = {};
			query.path = "/";
			query.is_private = true;

			var query2 = {};
			query2.path = "/";
			query2.is_private = false;
			console.log(typeof localStorage.getItem("type"));
			console.log(localStorage.getItem("type"));
			topic_list(query2).then((res) => {
				this.all2 = res.topics.map((item) => item.topic);
				console.log(this.all2);
				this.first = false;
			});
			topic_list(query).then((res) => {
				this.all = res ? res.topics.map((item) => item.topic) : [];
				console.log(this.all);
				this.first = false;
			});
		},
		computed: {
			mysqlTitle: function() {
				// 显示个人专利数据库的时候 应该是type=1  企业专利数据库应该是type=2或者3,type=0或者4 都是只显示公共专利数据库
				return localStorage.getItem("type") === "1" ?
					"个人专利数据库/可深加工数据库" :
					localStorage.getItem("type") === "2" ||
					localStorage.getItem("type") === "3" ?
					"企业专利数据库/可深加工数据库" :
					localStorage.getItem("type") === "0" ||
					localStorage.getItem("type") === "4" ?
					"公共专利数据库" :
					"";
			},
			type: function() {
				return localStorage.getItem("type");
			},
		},
		methods: {
			getUserAll(){
				history_list().then(res=>{
					this.tableDataUser = res.records
				})
			},
			// 删除一条
			del2(id){
				var query = {}
				query.id = id
				history_del(query).then(res=>{
					if(res.success){
						this.$message.success('删除成功')
						this.getUserAll()
					}
					else {
						this.$message.error('系统异常')
					}
				})
			},
			// 删除所有
			delAll(id){
				var query = {}
				query.username = localStorage.getItem("username")
				history_del_all(query).then(res=>{
					if(res.success){
						this.$message.success('删除成功')
						this.getUserAll()
					}
					else {
						this.$message.error('系统异常')
					}
				})
			},
			getAll() {
				var history = localStorage.getItem('history')
				if (history != '') {
					var list = history.split('#')
					list.forEach((item, index) => {
						var data = item.split('@')
						this.tableData.push({
							data0: index + 1,
							data1: data[0],
							data2: data[1],
							data3: data[2],
							data4: data[3],
						})
					})
				}
			},
			del(id) {
				var id = id - 1
				this.tableData.splice(id, 1)
				console.log(this.tableData)
				var history = ''
				for (var i = 0; i < this.tableData.length; i++) {
					if (i < this.tableData.length - 1)
						history = history + this.tableData[i].data1 + '@' + this.tableData[i].data2 + '@' + this.tableData[
							i].data3 + '@' + this.tableData[i].data4 + '#'
					else
						history = history + this.tableData[i].data1 + '@' + this.tableData[i].data2 + '@' + this.tableData[
							i].data3 + '@' + this.tableData[i].data4
				}
				console.log(history)
				localStorage.setItem('history', history)
				location.reload()
			},
			toCharts(url, id) {
				localStorage.setItem('search', id)
				this.$router.push(url)
			},
			submit() {
				topic_create(this.form).then(res => {
					console.log(res)
					if (res.success == true)
						this.$message.success("插入成功")
					this.show = false
				})
			},
			test() {
				console.log(typeof localStorage.getItem("type"));
			},
			getIn() {
				var query = {};
				query.expr = this.detail.expression;
				query.is_cross_language = this.detail.is_cross_language;
				query.is_include_synonym = this.detail.is_include_synonym;
				query.is_include_company = this.detail.is_include_company;
        query.countries = this.detail.db.join(",");
        query.analysis = false;
				search(query).then((res) => {
					localStorage.setItem("search", res.msg);
          localStorage.setItem("expr", query.expr);
          localStorage.setItem("countries", query.countries);
					// this.$message.success(res.id);
					this.$router.push("/search-result");
				});
			},
			del() {
				var query = {};
				query.path = this.detail.path;
				query.name = this.detail.name;
				query.force = true;
				if (this.is_private == 1) {
					query.is_private = true;
					topic_del(query).then((res) => {
						console.log(res);
						this.$message.success("已成功删除" + res.delete_count + "个数据库");
						this.see = false;
						location.reload();
					});
				} else {
					query.is_private = false;
					topic_del(query).then((res) => {
						console.log(res);
						this.$message.success("已成功删除" + res.delete_count + "个数据库");
						this.see = false;
						location.reload();
					});
				}
			},
			show(data, id) {
				this.detail = data;
				this.see = true;
				this.is_private = id;
			},
			loadNode(node, resolve) {
				if (!this.first) {
					console.log(node);
					var query = {};
					query.path =
						node.data.path === "/" ?
						"/" + node.data.name :
						node.data.path + "/" + node.data.name;
					query.is_private = true;
					topic_list(query).then((res) => {
						if (res) {
							return resolve(res.topics.map((item) => item.topic));
						} else {
							return resolve();
						}
					});
				}
			},
			loadNode2(node, resolve) {
				if (!this.first) {
					console.log(node);
					var query = {};
					query.path =
						node.data.path === "/" ?
						"/" + node.data.name :
						node.data.path + "/" + node.data.name;
					query.is_private = false;
					topic_list(query).then((res) => {
						if (res) {
							return resolve(res.topics.map((item) => item.topic));
						} else {
							return resolve([]);
						}
					});
				}
			},
		},
	};
</script>

<style scoped>
	.home {
		padding: 20px;
		width: 80%;
		margin: 0 auto;
	}

	.title {
		text-align: left;
		padding-left: 20px;
		font-size: 17px;
		margin-top: 30px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.list {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.card {
		margin-bottom: 15px;
		width: 250px;
		height: 90px;
		background-repeat: no-repeat;
		background-image: url(../assets/bg.png);
		background-size: cover;
		border-radius: 5px;
		line-height: 90px;
		font-weight: 600;
		color: #1da1f2;
	}

	.list_data {
		line-height: 20px;
		margin-top: 10px;
	}
</style>
