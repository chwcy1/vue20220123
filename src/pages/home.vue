<template>
  <div class="home">
    <div class="bg">
      <h1 style="color: #409eff; padding-top: 10px;text-align:center">
        {{ type == 3 ? company_name : "上海市" }}知识产权专利检索分析平台
      </h1>
      <div style="margin: 20px auto 5px auto; width:900px;text-align:left;overflow:hidden;white-space:normal;position:relative">
        <el-checkbox :indeterminate="isIndeterminate"
                     v-model="checkAll"
                     @change="handleCheckAllChange"
                     style="line-height: 30px;position:absolute;right:0;bottom:0">全选</el-checkbox>
        <el-checkbox-group @change="handleCheckedCitiesChange"
                           style="line-height: 20px;"
                           v-model="country">
          <!--<el-checkbox style="width:150px"
                     v-show="show == 0"
                     v-for="item in datatestcn"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <br />
        <el-checkbox style="width:150px"
                     v-show="show == 0"
                     v-for="item in datatestfl"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>-->
          <el-checkbox style="width:150px"
                       v-show="show == 0"
                       v-for="item in data"
                       :key="item.value"
                       :label="item.value">
            {{ item.name }}
          </el-checkbox>
          <!--<el-checkbox v-show="show == 1"
                     v-for="item in data1"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <el-checkbox v-show="show == 2"
                     v-for="item in data2"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <el-checkbox v-show="show == 3"
                     v-for="item in data3"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <el-checkbox v-show="show == 4"
                     v-for="item in data4"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <el-checkbox v-show="show == 5"
                     v-for="item in data5"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>
        <el-checkbox v-show="show == 6"
                     v-for="item in data6"
                     :key="item.value"
                     :label="item.value">
          {{ item.name }}
        </el-checkbox>-->
        </el-checkbox-group>
      </div>
      <form>
        <div style="width:900px; margin: 0 auto 0 auto">
          <div style="">
            <div style="padding: 5px 0">
              <el-input placeholder="例如：CN201410302384.2" v-model="input2" @input="changeinput($event)"
                        title="输入示例：
1、完整的申请号或公开号：CN201410302384.2 或 201410302384.2
2、申请号或公开号中部分字符：201410302
3、可使用逻辑运算符：CN201410302384.2 OR CN201230530623.1" clearable @keyup.enter.native="submit">
                <template slot="prepend">
                  申请号/公开号&ensp;&ensp;&ensp;
                </template>
              </el-input>
            </div>
            <div style="text-align: left; padding: 5px 0 ;white-space:nowrap;overflow:hidden">
              <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="1">
                    <el-select v-model="type3" slot="prepend" @blur="blurselect" @change="changeselect" ref="selectAppType" style="width:152px">
                      <el-option label="公告日" value="PD="></el-option>
                      <el-option label="申请日" value="AD="></el-option>
                    </el-select>
                  </td>
                  <td>
                    <el-input placeholder="例如：20130105 或 201301 或 2013" @input="changeinput($event)" v-model="input3" maxlength="8"
                              show-word-limit style="width:347px"
                              title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" clearable @keyup.enter.native="submit">
                    </el-input>
                  </td>
                  <td width="1" align="center" style="font-size:14px">
                    至
                  </td>
                  <td align="right">
                    <el-input placeholder="例如：20150105 或 201501 或 2015" @input="changeinput($event)" v-model="input4" maxlength="8" show-word-limit style="width:347px;float:right"
                              title="输入日期由年（4位）、月（2位）、日（2位）组成
1、已知日期为2013年01月18日，应输入：20130118
2、已知日期为2013年01月，应输入：201301
3、已知日期为2013年，应输入：2013" clearable @keyup.enter.native="submit">
                    </el-input>
                  </td>
                </tr>
              </table>
            </div>
            <div style="padding: 5px 0">
              <el-input placeholder="例如：华为" v-model="input1" @input="changeinput($event)"
                        title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“华为”和“公司”，输入：华为 AND 公司
2、内容中需要包含“华为”或者“公司”，输入：华为 OR 公司" clearable @keyup.enter.native="submit">
                <template slot="prepend">
                  申请人/发明人&ensp;&ensp;&ensp;
                </template>
              </el-input>
            </div>
            <div style="padding: 5px 0">
              <el-input placeholder="例如：计算机" v-model="input" @input="changeinput($event)"
                        title="可输入一个或多个关键词，关键词之间用 AND 或 OR 运算符连接
1、内容中需要同时包含“计算机”和“构图”，输入：计算机 AND 构图
2、内容中需要包含“计算机”或者“构图”，输入：计算机 OR 构图" clearable @keyup.enter.native="submit">
                <template slot="prepend">
                  关键词&emsp;&emsp;&emsp;&emsp;&emsp;
                </template>
              </el-input>
            </div>
          </div>
          <div style="margin-top: 20px">
            <el-button type="primary" @click="submit">检索</el-button>
            <el-button @click="resetForm">清空</el-button>
          </div>
        </div>
      </form>
    </div>
    <div style="width:100%;background:#FFF">
      <div class="list">
        <div v-for="(item, index) in myFunction"
             :key="index"
             class="block point"
             @click="toPath(item.path)">
          <el-image :src="item.src"></el-image>
          <p class="demonstration">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div style="width: 100%; min-width: 900px; position: fixed; bottom: 0;z-index:-1">
      <div style="padding:15px 0;min-width:900px;max-width:1100px;margin:auto;background:#dedede;font-size:12px;margin-top:30px;color:#555;">
        主办单位：上海市知识产权局&nbsp;&nbsp;运行维护：上海市知识产权服务中心 未经许可不得复制&nbsp;&nbsp;
        ICP备案编号：<a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank" style="color: #555; text-decoration: none">沪ICP备06033126号</a>
      </div>
    </div>
    <!--<div style="width:800px;">
      {{tttmsg}}
    </div>-->
  </div>
</template>

<script>
import { login, register } from "../api/user.js";
import { search, search_result } from "../api/search.js";
import {
    data,
    datatestcn,
    datatestfl,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
} from "../assets/country.js";
const jwt = require("jsonwebtoken");
export default {
  name: "HelloWorld",
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      form: [],
      show: 0,
      type1: "IN=",
      type2: "PNM=",
      type3: "PD=",
      company_name: localStorage.getItem("company_name"),
      type: localStorage.getItem("type"),
      username: localStorage.getItem("username"),
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      select: "",
      country: ["FM", "SYXX", "WG"],
      checkList: [],
      myFunction: [
        {
          path: "legal-search",
          name: "法律状态检索",
          src: require("../assets/home1.png"),
        },
        {
          path: "ipc",
          name: "IPC分类检索",
          src: require("../assets/home2.png"),
        },
        {
          path: "ipc2",
          name: "外观分类检索",
          src: require("../assets/home3.png"),
        },
      ],
      data: data,
      datatestcn: datatestcn,
      datatestfl: datatestfl,
      data1: data1,
      data2: data2,
      data3: data3,
      data4: data4,
      data5: data5,
      data6: data6,
      tttmsg:"", 
    };
  },
  mounted() {
    // "Type": 0,  //游客  只能看公共库  展示检索记录
    // "Type": 1,  //显示公共库，个人库创建删除操作   个人检索记录删除操作
    // "Type": 2,  //可以看到公共库和企业库   个人检索记录删除操作
    // "Type": 3,  //可以显示公共库和企业库，并且要把companyName渲染到页面的大标题，换成XXX检索平台   个人检索记录删除操作。   可以创建、发布企业库，只能让2、3看到。
    // "Type": 4,  //管理员，可以创建删除公共库、暂存库，   个人检索记录、游客检索记录删除操作

    ///*  正式发布需要注释

    var data = {
      //Username: "type1",
      //Type: 1,
      //CompanyName: "某某某公司",
      Username: "guest",
      Type: 0,
      CompanyName: "某某某公司",
    };
    if (this.$route.query.type) {
      switch (this.$route.query.type) {
        case '0': data.Type = 1; data.Username = 'guest'; break;
        case '1': data.Type = 1; data.Username = 'type1'; break;
        case '2': data.Type = 2; data.Username = 'type2'; break;
        case '3': data.Type = 3; data.Username = 'type3'; break;
        case '4': data.Type = 4; data.Username = 'type4'; break;
      }
    }
    //alert(JSON.stringify(data));
    register(data).then((res) => {
      //alert(JSON.stringify(res));
      localStorage.setItem("token", res.token);
      var data = jwt.decode(res.token);
      localStorage.setItem("company_name", data.company_name);
      localStorage.setItem("username", data.username);
      localStorage.setItem("type", data.type ? data.type : 0);
    });

    //*/


    if (this.$route.query.b64OriginData) {
      //alert(3);
      var query = this.$route.query;
      console.log(this.$route.query);
      //alert(JSON.stringify(query));
      //this.tttmsg = JSON.stringify(query);
      login(query).then((res) => {
        //alert(JSON.stringify(res));
        //alert(JSON.stringify(res.token));
        localStorage.setItem("token", res.token);
        var data = jwt.decode(res.token);
        //alert(JSON.stringify(data));
        localStorage.setItem("company_name", data.company_name);
        localStorage.setItem("username", data.username);
        localStorage.setItem("type", data.type ? data.type : 0);
        try { document.getElementById('headerusername').innerText = data.username; } catch (e) { }
        location.href = '/search/#/?ts=123456';
        setTimeout(() => {
          if (this.$route.query.ts) {
            location.reload();
          }
        }, 500);
        //try { this.toPath('/home'); } catch (e) { }
        //this.router.push("/home");
      });
      function blurselect1() {
        //alert(11);
      }
    }
    else if (this.$route.query.b64OriginData == undefined) {
      //alert(localStorage.getItem("username"));
      var uuname = 'type1';
      if (localStorage.getItem("username") == undefined || localStorage.getItem("username") == null || localStorage.getItem("username") == '' || localStorage.getItem("username") == 'guest') {
        //alert(2);
        var dataguest = {
          //Username: uuname,
          //Type: 1,
          //CompanyName: "游客",
          Username: "guest",
          Type: 0,
          CompanyName: "游客",
        };
        register(dataguest).then((res) => {
          localStorage.setItem("token", res.token);
          var data = jwt.decode(res.token);
          localStorage.setItem("company_name", data.company_name);
          localStorage.setItem("username", data.username);
          localStorage.setItem("type", data.type ? data.type : 0);
          //try { document.getElementById('headerusername').innerText = data.username; } catch (e) { }
          //location.href = '/search/#/?ts=123456';
          //setTimeout(() => { location.reload(); }, 10);
        });
      }
    }

    if (localStorage.getItem("username") != '' && localStorage.getItem("username") != undefined && document.getElementById('headerusername').innerText != localStorage.getItem("username")) {
      document.getElementById('headerusername').innerText = localStorage.getItem("username");
    }
    if (localStorage.getItem("username") == '' || localStorage.getItem("username") == undefined) {
      document.getElementById('headerusername').innerText = 'guest';
    }
  },
    methods: {
      //不用
      //setlocalStorage() {
      //  const signSetItem = localStorage.setItem;
      //  localStorage.setItem = function (key, val) {
      //    let setEvent = new Event('setItemEvent');
      //    setEvent.key = key;
      //    setEvent.newValue = val;
      //    window.dispatchEvent(setEvent);
      //    signSetItem.apply(this, arguments);
      //  }
      //},
      changeselect(e) {
        
      },
      blurselect() {
        //this.$refs.selectAppType.handleClose();
        let _this = this;
        setTimeout(function () { _this.$refs.selectAppType.handleClose(); this.input3.fours();}, 50);
      },
      blurselect1() {
        //alert(1);
        this.$refs.selectAppType.handleClose();
      },
      changeinput(e) {
        this.$forceUpdate();
      },
    resetForm() {
      this.input = "";
      this.input1 = "";
      this.input2 = "";
      this.input3 = "";
      this.input4 = "";
      this.type1 = "IN=";
      this.type2 = "PNM=";
      this.type3 = "PD=";
      this.country = ["FM", "SYXX", "WG"];
    },
    handleCheckAllChange(val) {
      console.log(val);
      this.country = val
        ? [
            "FM",
            "SYXX",
            "WG",
            "FMSQ",
            "TW",
            "HK",
            "JP",
            "WO",
            "EP",
            "RU",
            "GB",
            "FR",
            "DE",
            "US11",
            "US7",
            "USD",
            "AU",
          ]
        : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange() {
      console.log(this.country);
      let checkedCount = this.country.length;
      this.checkAll =
        checkedCount ===
        this.data.length +
          this.data1.length +
          this.data2.length +
          this.data3.length +
          this.data4.length +
          this.data5.length +
          this.data6.length;
      this.isIndeterminate =
        checkedCount > 0 &&
        checkedCount <
          this.data.length +
            this.data1.length +
            this.data2.length +
            this.data3.length +
            this.data4.length +
            this.data5.length +
            this.data6.length;
    },
    changeCountry() {
      // this.checkList = []
      switch (this.select) {
        case "":
          this.show = 0;
          break;
        case "亚洲":
          this.show = 1;
          break;
        case "欧洲":
          this.show = 2;
          break;
        case "北美洲及中美洲":
          this.show = 3;
          break;
        case "南美洲":
          this.show = 4;
          break;
        case "大洋洲":
          this.show = 5;
          break;
        case "非洲":
          this.show = 6;
          break;
      }
    },
    toPath(path) {
      this.$router.push(path);
    },
      submit() {
      console.log(this.checkList);
      var query = {};
      query.expr = "";
      if (this.input != "") {
        if (query.expr == "") {
          query.expr = "ALL=(" + this.input + ")";
          //query.expr = "TI=(" + this.input + ")" + " OR AB=(" + this.input + ")" + " OR FCL=(" + this.input + ")";
        } else {
          query.expr = "(" + query.expr + ")" + " AND "  + "ALL=(" + this.input + ")";
          //query.expr = "(" + query.expr + ")" + " AND " + "(" + "TI=(" + this.input + ")" + " OR AB=(" + this.input + ")" + ")";
        }
      }
      if (this.input1 != "") {
        if (query.expr == "") {
          //query.expr = this.type1 + this.input1;
          query.expr = "PA=(" + this.input1 + ")" + " OR IN=(" + this.input1 + ")";
        } else {
          //query.expr = query.expr + " AND (" + this.type1 + this.input1 + ")";
          query.expr = "(" + query.expr + ")" + " AND (" + "PA=(" + this.input1 + ")" + " OR IN=(" + this.input1 + ")" + ")";
        }
      }
      if (this.input2 != "") {
        if (query.expr == "") {
          //query.expr = this.type2 + this.input2;
          query.expr = "PNM=(" + this.input2 + ")" + " OR AN=(" + this.input2 + ")";
        } else {
          //query.expr = query.expr + " AND (" + this.type2 + this.input2+")";
          query.expr = "(" + query.expr + ")" + " AND (" + "PNM=(" + this.input2 + ")" + " OR AN=(" + this.input2 + ")" + ")";
        }
      }
      //if (this.input3 != "") {
      //  if (query.expr == "") {
      //    query.expr = this.type3 + this.input3;
      //  } else {
      //    query.expr = query.expr + " AND (" + this.type3 + this.input3+")";
      //  }
      //}
      if (this.input4 == undefined || this.input4 == "undefined" ) { this.input4 = "";}
      if (this.input3 != "" || this.input4 != "") {
        //alert(this.input3 + "|" + this.input4)
        var d1 = this.input3;
        var d2 = this.input4;
        if (d1 == "" && d2 != "") { d1 = d2; d2 = ""; }
        const result = /^\d+$/.test(d1);
        if (!result) {
          alert("日期格式为4位、6位、8位数字，请正确填写！");
          return;
        }
        if (d2 != "") {
          const result2 = /^\d+$/.test(d2);
          if (!result2) {
            alert("日期格式为4位、6位、8位数字，请正确填写！");
            return;
          }
          if (d1.length != d2.length) {
            alert("起始日期格式与结束日期格式不一致，请修正后重新检索！");
            return;
          }
          const result1 = /^\d+$/.test(d2);
          if (!result1) {
            alert("日期格式为4位、6位、8位数字，请正确填写！");
            return;
          }
          if (query.expr == "") {
            query.expr = this.type3 + "(" + d1 + " TO " + d2 + ")";
          } else {
            query.expr = "(" + query.expr + ")" + " AND (" + this.type3 + "(" + d1 + " TO " + d2 + ")" + ")";
          }
        }
        else {
          if (query.expr == "") {
            query.expr = this.type3 + d1;
          } else {
            query.expr = "(" + query.expr + ")" + " AND (" + this.type3 + d1 + ")";
          }
        }
        //if (query.expr == "") {
        //  query.expr = this.type3 + this.input3;
        //} else {
        //  query.expr = query.expr + " AND (" + this.type3 + this.input3 + ")";
        //}
      }
      query.is_cross_language = false;
      query.is_include_synonym = false;
        query.is_include_company = false;
        if (this.username != null && this.username != 'guest') {
          query.username = this.username;
        }
        query.countries = this.country.join(",");
        if (query.expr == '') {
          alert('请输入检索内容！'); return;
        }
        query.analysis = false;
      console.log(query);
        localStorage.setItem("expr", query.expr);
        //alert(JSON.stringify(query)); return;
        search(query).then((res) => {
          //alert(JSON.stringify(res));
        console.log(res);
        if (res) {
          var history = localStorage.getItem("history");
          if (history)
            localStorage.setItem(
              "history",
              history + "#" + query.expr + "@" + query.countries
            );
          else
            localStorage.setItem("history", query.expr + "@" + query.countries);
          localStorage.setItem("isnew", 1);
          localStorage.setItem("countries", query.countries);
          localStorage.setItem("search", res.msg);
          // this.$message.success(res.id);
          this.$router.push("/search-result");
        }
      });
    },
    }
  };
    
</script>

<style>
.el-select .el-input {
  /*width: 130px;*/
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-input-group__append,
.el-input-group__prepend {
  /*background-color: #409eff;*/
}
</style>
<style scoped>
.home {
  /*text-align: center;*/
}

.bg {
  background-image: url(../assets/bg.png);
  padding: 40px 0;
}

.list {
  min-width:900px;
  max-width:1100px;
  margin:auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-top:20px;
}

.block {
  background-color: #dedede;
}

.demonstration {
  padding:7px 0 10px 0
}
</style>
