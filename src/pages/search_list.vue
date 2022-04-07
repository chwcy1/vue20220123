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
						检索记录
					</td>
				</tr>
			</table>
		</div>
		<div style="width:100%;padding:10px 0"></div>
		<el-tabs type="border-card">
			<el-tab-pane label="检索记录">
				<div v-if="type==1||type==2||type==3||type==4" style="width: 100%;text-align: right;margin-bottom: 10px;">
					<!--<el-button @click="delAll(0)">删除本页记录</el-button>-->
					<el-button @click="delAll(2)">删除该用户所有记录</el-button>
				</div>
				<el-table :data="tableDataUsercn" style="width: 100%">
					<!-- 					<el-table-column prop="id" label="检索号" width="180">
					</el-table-column> -->
					<el-table-column prop="expression" label="检索式">
						<template slot-scope="scope">
							<span style="color:#0094ff;cursor:pointer" @click="getsearchlist(scope.row.id)">{{scope.row.expression}}</span>
						</template>
					</el-table-column>
					<el-table-column prop="countries" label="专利库" width="200">
					</el-table-column>
					<el-table-column prop="is_cross_language" label="中英文检索" width="90">
						<template slot-scope="scope">
							{{scope.row.is_cross_language?"是":"否"}}
						</template>
					</el-table-column>
					<!--<el-table-column prop="is_include_company" label="企业名关联检索" width="80" style="display:none">
					<template slot-scope="scope">
						{{scope.row.is_include_company?"是":"否"}}
					</template>
				</el-table-column>-->
					<el-table-column prop="is_include_synonym" label="概念检索" width="80">
						<template slot-scope="scope">
							{{scope.row.is_include_synonym?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column v-if="type==1||type==2||type==3||type==4" label="操作" width="100">
						<template slot-scope="scope">
							<!--<el-button type="primary" size="small" icon="el-icon-edit" @click="nodequery=true;cscoperow=scope.row.id;form.id=scope.row.id" circle title="绑定到专题库节点"></el-button>-->
							<el-button type="danger" size="small" @click="del2(scope.row.id,0)" icon="el-icon-delete" circle title="删除"></el-button>
							<!--<el-button type="text" style="color: orange;" icon="el-icon-s-help"
						@click="toCharts('screen1',scope.row.id)">圆盘图分析</el-button>-->
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane v-if="type==4" label="游客检索记录">
				<div style="width: 100%;text-align: right;margin-bottom: 10px;">
					<!--<el-button @click="delAll(1)">删除本页记录</el-button>-->
					<el-button @click="delAll(3)">删除该用户所有记录</el-button>
				</div>
				<el-table :data="tableDatacn" style="width: 100%">
					<!-- 					<el-table-column prop="id" label="检索号" width="180">
				</el-table-column> -->
					<el-table-column prop="expression" label="检索式">
						<template slot-scope="scope">
							<span style="color:#0094ff;">{{scope.row.expression}}</span>
						</template>
					</el-table-column>
					<el-table-column prop="countries" label="专利库" width="180">
					</el-table-column>
					<el-table-column prop="is_cross_language" label="中英文检索" width="90">
						<template slot-scope="scope">
							{{scope.row.is_cross_language?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column prop="is_include_synonym" label="概念检索" width="80">
						<template slot-scope="scope">
							{{scope.row.is_include_synonym?"是":"否"}}
						</template>
					</el-table-column>
					<el-table-column label="操作" width="60">
						<template slot-scope="scope">
							<el-button type="danger" size="small" @click="del2(scope.row.id,1)" icon="el-icon-delete" circle title="删除"></el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>


		<el-dialog class="editztk" title="绑定到专题库节点" :visible.sync="nodequery" width="700px" style="text-align:left">
			<table v-loading="loading" style="width: 100%; height: 100%" border="0" cellspacing="0" cellpadding="0">
				<tr style="display:none">
					<td height="1" style="padding-bottom:5px;">
						<el-select v-model="dbmodel" placeholder="请选择" style="width:100%" @change="dbchange">
							<el-option v-for="item in dblist"
												 :key="item.topic.name"
												 :label="item.topic.name"
												 :value="item.topic.name">
							</el-option>
						</el-select>
					</td>
				</tr>
				<tr>
					<td>
						<div style="height:100%;overflow-x:hidden" class="wrapper">
							<el-tree ref="tree" :props="props" :check-strictly="true" :data="data" :load="loadNode" @node-click="nodeclick" lazy :highlight-current="showtree">
								<div :title="node.label" style="display: flex;font-size:12px" class="custom-tree-node" slot-scope="{ node, data }">
									<div>
										{{ node.label }}
									</div>
								</div>
							</el-tree>
						</div>
					</td>
				</tr>
			</table>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" size="mini" icon="el-icon-edit" @click="updatedb">绑定检索式到选中的节点</el-button>
			</span>
		</el-dialog>


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

	</div>
</template>

<script>
	import {
		topic_create,
		history_list,
		history_del,
		history_del_all,
		topic_list,
    dbedit
	} from '../api/user.js'
  import {
    search,
    search_result
  } from '../api/search.js'
  import { allcountryfl2cn, allcountrycn2fl } from "../assets/country.js";
	export default {
		data() {
			return {
        tableData: [],//
        tableDatacn: [],//
        tableDataUser: [],//个人检索记录
        tableDataUsercn: [],//个人检索记录
				show: false,
				formLabelWidth: '80px',
				form: {
					is_private: true
				},
				type: localStorage.getItem("type"),
				nodequery: false,
        dbmodel:'',
        dblist: [],
        data: [],
        props: {
          label: "name",
          isLeaf: "isLeaf",
				},
				selectname: '',
        first: 1,
				loading: false,
				showtree: true,
				selectnode: null,
        cscoperow: '',
        allcountryfl2cn: [],
        allcountrycn2fl: [],
			}
		},
		mounted() {
      this.getAll();//游客库
			this.getUserAll();//个人库

		},
		methods: {
			//个人
      getUserAll() {
        var query = {};
        query.type = 'self';
				query.limit = 20;
				var username = localStorage.getItem("username");
        var usertype = localStorage.getItem("type");
        //query.username = localStorage.getItem("username") == null ? 'guest' : localStorage.getItem("username");
				//alert(usertype);
				if (usertype == null || usertype == 0 || usertype == '0') {
					query.type = 'guest';
				}
				else {
          query.username = username;
				}
				history_list(query).then(res => {
					//alert(JSON.stringify(res));
					this.tableDataUsercn = [];
					this.tableDataUser = res.records;
					this.tableDataUser.forEach(item => {
						var item11 = item;
						item11.countries = this.getcncountry(item11.countries);
						this.tableDataUsercn.push(item11);
					});
					//alert(JSON.stringify(this.tableDataUser[0]));
				})
			},
			///游客
      getAll() {
        var query = {};
        query.type = 'guest';
        query.limit = 20;
				history_list(query).then(res => {
					this.tableData = res.records;
					this.tableDatacn = [];
					this.tableData.forEach(item => {
            var item11 = item;
            item11.countries = this.getcncountry(item11.countries);
            this.tableDatacn.push(item11);
          });
        })
        return;
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
			// 删除一条
			del2(id,t) {
        if (window.confirm('你确定要删除该条信息吗？')) {
          var query = {}
          query.id = id
          history_del(query).then(res => {
            if (res.success) {
							this.$message.success('删除成功');
							if (t == 0) {
								this.getUserAll()
							}
							if (t == 1) {
                this.getAll()
              }
            }
            else {
              this.$message.error('系统异常')
            }
          })
        } else {

        }
				
			},
			// 删除全部
			delAll(id) {
        if (window.confirm('你确定要删除该用户所有检索吗？')) {
          if (id == 2) {
            var query = {}
            query.username = localStorage.getItem("username");
            history_del_all(query).then(res => {
              if (res.success) {
                this.$message.success('删除成功')
                this.getUserAll()
              }
              else {
                this.$message.error('系统异常')
              }
            })
          }
          else if (id == 3) {
            var query = {}
            //query.username = localStorage.getItem("username")
            query.username = 'guest';
            history_del_all(query).then(res => {
              if (res.success) {
                this.$message.success('删除成功')
                this.getAll()
              }
              else {
                this.$message.error('系统异常')
              }
            })
          }
        } else {
          
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
			getsearchlist(id) {
				var sitem = this.tableDataUser.filter(item => item.id == id);
				if (sitem.length == 0) {

				} else {
					//alert(JSON.stringify(sitem)); return;
					var query = {};
          query.expr = sitem[0].expression;
          query.is_cross_language = sitem[0].is_cross_language;
          query.is_include_synonym = sitem[0].is_include_synonym;
					query.is_include_company = false;
          query.countries = this.getflcountry(sitem[0].countries);
          query.analysis = false;
          //alert(JSON.stringify(query)); return;
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
				}
			},
			dbchange(data) {
				//alert(JSON.stringify(data));
				this.selectname = data;
			},
      loadNode(node, resolve) {
        var query = {};
				if (this.first == 1) {
          query.path = '/';
          this.first = 2;
        }
				else if (this.first == 2) {
					var ss = '';
					try { ss = node.data.path.substr(node.data.path.length - 1); } catch (e) { }
					if (ss == '/') {
						query.path = node.data.path + node.data.name;
					}
					else {
            query.path = node.data.path + '/' + node.data.name;
					}
        }
        if (this.type == 4) {
          query.is_private = false;
        }
        else {
          query.is_private = true;
				}
				this.loading = true;
				//alert(JSON.stringify(query)); 
        topic_list(query).then((res) => {
					if (res && res.topics && res.topics.length > 0) {
						if (query.path = '/') {
							var topic11 = [];
							res.topics.forEach(item => {
                if (this.type == 4) {
									if (item.topic.name == '物联网' || item.topic.name == '智能家居系统CN' || item.topic.name == '智能电网用户端能源管理' || item.topic.name == '中国竹专利数据库'
										|| item.topic.name == '上海公开和授权专利' || item.topic.name == '电气机械及器材制造业' || item.topic.name == '石油化工 CN' || item.topic.name == '石油化工 EN'
                    || item.topic.name == '飞机制造业' || item.topic.name == '非金属矿物' || item.topic.name == '化学原料与化学制品' || item.topic.name == '设施农业与生态农业') {
                    topic11.push(item);
									}
								}
								else {
                  topic11.push(item);
								}
							});
              res.topics = topic11;
              //alert(JSON.stringify(topic11))
						}
            this.loading = false;
            return resolve(res.topics.map((item) => item.topic));
          } else {
            this.loading = false;
            return resolve([]);
          }
          this.loading = false;
        });
			},
			updatedb() {
        //alert(this.cscoperow);
        var sitem = this.tableDataUser.filter(item => item.id == this.cscoperow);
        if (sitem.length == 0) {
					alert('未获取到检索记录！');
        } else {
          //alert(JSON.stringify(sitem)); return;
					var query = {};
          query.id = this.selectnode.id;
          query.is_private = this.selectnode.is_private;
          var edit = {};

          edit.expr = sitem[0].expression;
          edit.is_cross_language = sitem[0].is_cross_language;
          edit.is_include_synonym = sitem[0].is_include_synonym;
          edit.is_include_company = false;
          edit.countries = this.getflcountry(sitem[0].countries);
          query.edit = edit;
					this.loading = true;
					//alert(JSON.stringify(query)); return;
          dbedit(query).then(res => {
            //alert(JSON.stringify(res));
            this.loading = false;
						if (res.success) {
							this.$message('绑定成功！');
              this.nodequery = false;
              //location.reload();
            }
            else {
              if (res.code != undefined) {
                this.$message(res.msg);
              }
              else {
                this.$message('未修改成功！');
              }
            }
          });
				}
				return;
				//alert(JSON.stringify(this.cscoperow)); return;
				var query = {};
				query.id = this.selectnode.id;
        query.is_private = this.selectnode.is_private;
				var edit = {};
        edit.expr = this.selectnode.
        query.edit = edit;
        this.loading = true;
        //alert(JSON.stringify(query));
        dbedit(query).then(res => {
          //alert(JSON.stringify(res));
          this.loading = false;
          if (res.success) {
            this.newdbmsg.name = name;
            location.reload();
          }
          else {
            if (res.code != undefined) {
              this.$message(res.msg);
            }
            else {
              this.$message('未修改成功！');
            }
          }
        });
			},
      nodeclick(node) {
        //alert(JSON.stringify(node))
				this.selectnode = node;
			},
			getcncountry(c) {
				var carr = c.split(',');
				var cnname = [];
				carr.forEach(item => {
          var fffitem = allcountryfl2cn.filter(ssitem => ssitem.name == item);
          if (fffitem.length == 0) { cnname.push(item); }
          else {
            cnname.push(fffitem[0].value);
          }
				});
				return cnname.join(',');
      },
      getflcountry(c) {
        var carr = c.split(',');
        var cnname = [];
        carr.forEach(item => {
          var fffitem = allcountrycn2fl.filter(ssitem => ssitem.name == item);
          if (fffitem.length == 0) { cnname.push(item); }
          else {
            cnname.push(fffitem[0].value);
          }
        });
        return cnname.join(',');
      },
		}
	}
</script>

<style scoped>
	.home {
		padding: 20px;
		width: 80%;
		margin: 0 auto;
	}
  .editztk >>> .el-dialog__body {
    padding-top:0px;
		padding-bottom:10px;
    height:60vh;
  }
</style>
