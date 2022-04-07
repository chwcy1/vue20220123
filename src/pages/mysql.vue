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
          <td valign="top" align="left">
            专利数据库
          </td>
        </tr>
      </table>
    </div>
    <div style="width:100%;padding:10px 0"></div>
    <div style="width:100%">
      <template v-if="type==4">
        <el-form :model="formcreat">
          <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <el-form-item label="" style="display:none">
                  <el-input v-model="formcreat.id"></el-input>
                </el-form-item>
                <el-form-item label="" style="display:none">
                  <el-input v-model="formcreat.path"></el-input>
                </el-form-item>
                <el-form-item label="" style="display:none">
                  <el-switch v-model="formcreat.is_private" active-text="私有" inactive-text="共有"></el-switch>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="formcreat.name" autocomplete="off" placeholder="请输入专题库名称,不可出现'/'" @input="changeinput($event)"></el-input>
                </el-form-item>
              </td>
              <td width="1" style="padding-left:10px">
                <el-form-item>
                  <el-button type="primary" round @click="creatggdb()">创建专题库</el-button>
                </el-form-item>
              </td>
            </tr>
          </table>
        </el-form>
      </template>
    </div>
    <el-tabs type="border-card" style="box-shadow:none;">
      <el-tab-pane label="公共专利数据库"  v-loading="loading">
        <div v-for="(item,index) in alltop2">
          <!--<template v-if="item.topic.name=='物联网'||item.topic.name=='智能家居系统CN'||
            item.topic.name=='智能电网用户端能源管理'||item.topic.name=='中国竹专利数据库'||
            item.topic.name=='上海公开和授权专利'||item.topic.name=='电气机械及器材制造业'||
            item.topic.name=='石油化工 CN'||item.topic.name=='石油化工 EN'||item.topic.name=='飞机制造业'||
            item.topic.name=='非金属矿物'||item.topic.name=='化学原料与化学制品'||item.topic.name=='设施农业与生态农业'">-->

          <template>
            <table class="ztkitem" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <template>
                  <td v-if="item.cover_path &&　item.cover_path.length>0" class="ztkname" @click="getInquery(item.topic)"
                      :style="{background: 'url('+baseURL + '/res?path=' + item.cover_path +') no-repeat right center' }">
                    {{item.topic.name}}
                  </td>
                  <td v-else class="ztkname" @click="getInquery(item.topic)"
                      :style="{background: 'url('+require('../assets/ztkbgimg.png')+') no-repeat right center' }">
                    {{item.topic.name}}
                  </td>
                </template>
              </tr>
              <tr>
                <td v-if="type==4" class="ztkbtn">
                  <template v-if="item.topic.is_open==true">
                    <span style="float: left; margin-left:5px;color:#00a148">公开</span>
                  </template>
                  <template v-else>
                    <span style="float: left; margin-left:5px;color:#999">非公开</span>
                  </template>
                  <!--<span style="float: left; cursor: pointer;margin-left:5px" @click="getInquery(item.topic)">浏览</span>-->
                  <template>
                    <span style="color: #ff6a00; float: right; margin-right: 5px; cursor: pointer" @click="delquery(item.topic)">删除</span>
                    <span style="color: #1da1f2; float: right; margin-right: 5px; cursor: pointer" @click="editquery(item.topic)">编辑</span>
                  </template>
                </td>
              </tr>
            </table>
          </template>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="type==5" label="暂存库" v-loading="loading1" style="display:none">
        <div v-for="(item,index) in alltop">
          <table class="ztkitem" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <template>
                <td v-if="item.cover_path &&　item.cover_path.length>0" class="ztkname"
                    :style="{background: 'url('+require(item.cover_path)+') no-repeat right center' }">
                  {{item.topic.name}}
                </td>
                <td v-else class="ztkname" @click="getInquery(item.topic)"
                    :style="{background: 'url('+require('../assets/ztkbgimg.png')+') no-repeat right center' }">
                  {{item.topic.name}}
                </td>
              </template>
            </tr>
            <tr>
              <td class="ztkbtn">
                <span style="color: #ff6a00; float: right; margin-right: 5px; cursor: pointer" @click="delquery(item.topic)">删除</span>
                <span style="color: #1da1f2; float: right; margin-right: 5px; cursor: pointer" @click="editquery(item.topic)">编辑</span>
                <span style="color: #1da1f2; float: right; margin-right: 5px; cursor: pointer" @click="savezck(item.topic)">保存</span>
              </td>
            </tr>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane v-else-if="type==1||type==2||type==3" :label="mysqlTitle1" v-loading="loading1">
          <template v-if="type==1||type==3">
            <el-form :model="formcreat">
              <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <el-form-item label="" style="display:none">
                      <el-input v-model="formcreat.id"></el-input>
                    </el-form-item>
                    <el-form-item label="" style="display:none">
                      <el-input v-model="formcreat.path"></el-input>
                    </el-form-item>
                    <el-form-item label="" style="display:none">
                      <el-switch v-model="formcreat.is_private" active-text="私有" inactive-text="共有"></el-switch>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input v-model="formcreat.name" autocomplete="off" placeholder="请输入专题库名称,不可出现'/'" @input="changeinput($event)"></el-input>
                    </el-form-item>
                  </td>
                  <td width="1" style="padding-left:10px">
                    <el-form-item>
                      <el-button type="primary" round @click="creatggdb()">创建专题库</el-button>
                    </el-form-item>
                  </td>
                </tr>
              </table>
            </el-form>
          </template>
        <div v-for="(item,index) in alltop">
          <table class="ztkitem" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <template>
                <td v-if="item.cover_path &&　item.cover_path.length>0" class="ztkname" @click="getInquery(item.topic)"
                    :style="{background: 'url('+require(item.cover_path)+') no-repeat right center' }">
                  {{item.topic.name}}
                </td>
                <td v-else class="ztkname" @click="getInquery(item.topic)"
                    :style="{background: 'url('+require('../assets/ztkbgimg.png')+') no-repeat right center' }">
                  {{item.topic.name}}
                </td>
              </template>
            </tr>
            <template v-if="type==1||type==3">
              <tr>
                <td class="ztkbtn">
                  <!--<span style="float: left; cursor: pointer;margin-left:5px" @click="getInquery(item.topic)">浏览</span>-->
                  <span style="color: #ff6a00; float: right; margin-right: 5px; cursor: pointer" @click="delquery(item.topic)">删除</span>
                  <span style="color: #1da1f2; float: right; margin-right: 5px; cursor: pointer" @click="editquery(item.topic)">编辑</span>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog class="editztk" title="编辑专题库信息" :visible.sync="dialogVisible" width="700px">
      <div style="height:100%;overflow-x:hidden" class="wrapper">

      </div>
    </el-dialog>
    <div style="display:none">
      <p class="title">公共专利数据库</p>
      <el-tree ref="tree" :data="all2" :props="props" :load="loadNode2" children="topic" lazy style="display: block">
        <div style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
          <div style="flex: 0 20%; text-align: left">{{ node.label }}</div>
          <div style=" flex: 0 60%; text-align: left; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; word-break: break-all; padding-right: 50px; box-sizing: border-box; ">
            {{ data.expression }}
          </div>
          <el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 2)">
            查看详情
          </el-button>
        </div>
      </el-tree>
      <p class="title" v-if="type === '1'">{{ mysqlTitle }}</p>
      <el-tree ref="tree" v-if="type === '1'" :data="all" :props="props" :load="loadNode" children="topic" lazy>
        <div style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
          <div style="flex: 0 20%; text-align: left">
            {{ node.label }}
          </div>
          <div style="flex: 0 60%; text-align: left">{{ data.expression }}</div>
          <el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 1)">
            查看详情
          </el-button>
        </div>
      </el-tree>
      <p class="title" v-if="type === '2' || type === '3'">{{ mysqlTitle }}</p>
      <el-tree ref="tree"
               v-if="type === '2' || type === '3'"
               :data="all"
               :props="props"
               :load="loadNode"
               children="topic"
               lazy>
        <div style="display: flex; width: calc(100% - 24px)" class="custom-tree-node" slot-scope="{ node, data }">
          <div style="flex: 0 20%; text-align: left">
            {{ node.label }}
          </div>
          <div style="flex: 0 60%; text-align: left">{{ data.expression }}</div>
          <el-button style="text-align: right; flex: 0 20%" size="mini" type="text" @click.stop="show(data, 1)">
            查看详情
          </el-button>
        </div>
      </el-tree>

      <el-dialog title="提示" :visible.sync="see" width="30%" center>
        <p class="list_data">
          路径：{{ detail.path == "/" ? detail.path : detail.path + "/"}}{{ detail.name }}
        </p>
        <p class="list_data">创建人：{{ detail.owner }}</p>
        <p class="list_data">类型：{{ detail.is_private ? "私有" : "共有" }}</p>
        <p class="list_data">
          数据库：<el-tag v-for="(item, index) in detail.db" style="margin-right: 10px" :key="index">{{ item }}</el-tag>
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
  </div>
</template>

<script>
  import {
    baseURL
  } from '../api/base.js'
  import { topic_create, topic_createtext, topic_list, topic_del, save_temp } from "../api/user.js";
import { search, search_result } from "../api/search.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      baseURL: baseURL,
      first: true,
      is_private: 1,
      list: [],
      all: [],
      all2: [],
      alltop: [],
      alltop2: [],
      detail: {},
      see: false,
      props: {
        label: "name",
      },
      formcreat: { name: '', is_private: true, id: 'a', path: '/' },
      dialogVisible: false,
      newdbmsg: null,
      loading: false,
      loading1: false,
      mysqlTitle1: '',// 
    };
  },
    mounted() {
      this.loading = true;
      this.loading1 = true;
    var query = {};
      query.path = "/";
      query.userType = this.type;
      query.userCode = this.username;
      if (this.type == 2) {
        query.is_open = true;
      }
    if (this.type == 4) {
      query.is_private = false;
      //query.is_temp = true;
    }
    else {
      query.is_private = true;
      }
      this.mysqlTitle1 = this.type === "1" ? "个人专利数据库" : (this.type === "2" || this.type === "3" ? "企业专利数据库" : "");

    var query2 = {};
    query2.path = "/";
      query2.is_private = false;
      query2.is_open = true;
      query2.userType = this.type;
      query2.userCode = this.username;
    console.log(typeof localStorage.getItem("type"));
    console.log(localStorage.getItem("type"));
    //alert(JSON.stringify(query2));
      //公共库
    topic_list(query2).then((res) => {
      //alert(JSON.stringify(res));
      this.all2 = res.topics.map((item) => item.topic);
      this.alltop2 = res.topics;
      //alert(JSON.stringify(res.topics[0].cover_path));
      console.log(this.all2);
      this.first = false;
      this.loading = false;
    });
      //个人库
      topic_list(query).then((res) => {
      //alert(JSON.stringify(res));
      this.all = res ? res.topics.map((item) => item.topic) : [];
      this.alltop = res ? res.topics : [];
      console.log(this.all);
      this.first = false;
      this.loading1 = false;
    });
  },
  computed: {
    mysqlTitle: function () {
      // 显示个人专利数据库的时候 应该是type=1  企业专利数据库应该是type=2或者3,type=0或者4 都是只显示公共专利数据库
      return localStorage.getItem("type") === "1"
        ? "个人专利数据库/可深加工数据库"
        : localStorage.getItem("type") === "2" ||
          localStorage.getItem("type") === "3"
        ? "企业专利数据库/可深加工数据库"
        : localStorage.getItem("type") === "0" ||
          localStorage.getItem("type") === "4"
        ? "公共专利数据库"
        : "";
    },
    type: function () {
      return localStorage.getItem("type");
    },
    username: function () {
      return localStorage.getItem("username");
    },
  },
  methods: {
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
    getInquery(topic) {
      localStorage.setItem("topicname", topic.name);
      localStorage.setItem("topicis_private", topic.is_private?'1':'0');
      this.$router.push("/mysql-result");
      return;
      var query = {};
      query.expr = topic.expression;
      query.is_cross_language = topic.is_cross_language;
      query.is_include_synonym = topic.is_include_synonym;
      query.is_include_company = false;
      query.countries = topic.db.join(",");
      query.analysis = false;
      //alert(JSON.stringify(topic)); return;
      search(query).then((res) => {
        localStorage.setItem("topicname", topic.name);
        localStorage.setItem("search", res.msg);
        localStorage.setItem("expr", query.expr);
        localStorage.setItem("countries", query.countries);
        // this.$message.success(res.id);
        this.$router.push("/mysql-result");
      });
    },
    delquery(topic) {
      if (window.confirm('你确定要删除该数据库吗？')) {
        var query = {};
        query.userType = this.type;
        query.userCode = this.username;
        query.path = topic.path;
        query.name = topic.name;
        query.force = true;
        if (this.type != 4) {
          query.is_private = true;
          topic_del(query).then((res) => {
            console.log(res);
            this.$message.success("已成功删除" + res.delete_count + "个数据库");
            this.see = false;
            location.reload();
          });
        } else {
          //alert(JSON.stringify(query))
          query.is_private = false;
          query.is_temp = false;
          topic_del(query).then((res) => {
            console.log(res);
            this.$message.success("已成功删除" + res.delete_count + "个数据库");
            this.see = false;
            location.reload();
          });
        }
      }
      else {

      }
    },
    savezck(topic) {
      var query = {};
      query.id = topic.id;
      save_temp(query).then((res) => {
        if (window.confirm('你确定要保存该数据库吗？')) {
          if (res.success) {
            location.reload();
          } else {
            alert('操作错误！');
          }
        }
        else {

        }
      });
    },
    del() {
      var query = {};
      query.userType = this.type;
      query.userCode = this.username;
      query.path = this.detail.path;
      query.name = this.detail.name;
      query.force = true;
      if (this.type != 4) {
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
          node.data.path === "/"
            ? "/" + node.data.name
            : node.data.path + "/" + node.data.name;
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
          node.data.path === "/"
            ? "/" + node.data.name
            : node.data.path + "/" + node.data.name;
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
    creatggdb() {
      this.formcreat.name = this.formcreat.name.trim();
      if (this.formcreat.name == '') {
        alert('专题库名称不能为空！');
        return;
      }
      var query = {};
      query.name = this.formcreat.name;
      query.expr = '';
      query.countries = '';
      query.cover_id = '';
      query.path = '/';
      if (this.type == 4) { query.is_private = false; }
      else { query.is_private = true;}
      //query.is_private = true;
      query.userType = this.type;
      query.userCode = this.username;
      query.is_temp = true;
      //var query11 = query;
      this.newdbmsg = query;
      //this.formcreat.name = JSON.stringify(query);
      //alert(JSON.stringify(query));
      topic_createtext(query).then(res => {
        if (res.success == true) {
          this.showmessagebox1('创建成功，是否编辑该专题库信息？')//this.$message.success("创建成功！")
        } else {
          if (res.code != undefined) {
            this.showmessagebox('创建错误', res.msg);
          }
          else {
            this.showmessagebox('创建错误', '一些异常导致了错误，请修改名称或路径重试！');//this.$message.success(red.msg);
          }
        }
      })
    },
    showmessagebox(t, c) {
      this.$alert(c, t, {
        confirmButtonText: '确定',
        callback: action => {
          
        }
      });
    },
    showmessagebox1(t, c) {
      this.$confirm(c,t, {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        //确定
        localStorage.setItem("newdbmsg", JSON.stringify(this.newdbmsg));
        this.$router.push('/mysqledit')
      }).catch(() => {
        location.reload();
      });
    },
    editquery(topic) {
      var query = {};
      query.name = topic.name;
      query.expr = '';
      query.countries = '';
      query.cover_id = '';
      query.path = '/';
      query.is_private = topic.is_private;
      query.is_temp = topic.is_temp;
      try { query.id = topic.id; } catch (e) { }
      this.newdbmsg = query;
      //alert(JSON.stringify(topic));
      localStorage.setItem("newdbmsg", JSON.stringify(this.newdbmsg));
      this.$router.push('/mysqledit')
    },
    changeinput(e) {
      this.$forceUpdate();
      try {
        //this.testupdate.$forceUpdate();
      }
      catch (e) { alert(e);}
    },
  },
};
</script>

<style scoped>
  .editztk >>> .el-dialog__body {
    padding-top:0px;
    height:60vh;
  }
  .ztkitem {
    float: left;
    margin: 7px;
  }
    .ztkitem .ztkname {
      text-align:center;font-size:18px;color:#1da1f2;
      height:100px;width:252px;font-weight:bold;
      cursor:pointer;border-radius:5px;
    }
    .ztkitem .ztkbtn {
      height: 35px;
      font-size: 14px;
    }
  .home {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
  }
.title {
  text-align: left;
  padding-left: 0px;
  font-size: 17px;
  margin-top: 30px;
  font-weight: bold;
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
