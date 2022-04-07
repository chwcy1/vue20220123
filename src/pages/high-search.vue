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
            高级检索
          </td>
        </tr>
      </table>
    </div>
    <div style="width:100%;padding:10px 0"></div>
    <el-card style="width: 100%;margin: 0 auto;background:#FFF" shadow="never">
      <div class="search">
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

        <div style="display: flex">
          <!--<p>检索表达式：</p>-->
          <el-input ref="inputVal"
                    class="myInput"
                    type="textarea"
                    rows="5"
                    :autosize="{ minRows: 5 }"
                    placeholder=""
                    v-model="expr">
          </el-input>
        </div>
        <div style="margin-top: 10px">
          <!--<span>逻辑关系符：</span>-->
          <el-tooltip :content="tag.tip"
                      placement="top"
                      style="margin: 0 5px"
                      :key="tag"
                      v-for="tag in relation">
            <el-tag size="small" style="cursor:pointer" @click="putIn(tag.title)">
              {{ tag.title }}
            </el-tag>
          </el-tooltip>
        </div>
        <div style="margin-top: 10px">
          <div class="charList">
            <div style="text-align: left; margin: 5px"
                 v-for="(item, index) in char_list"
                 @click="putIn(item.value)"
                 :key="index">
              <el-tag size="medium" style="cursor:pointer;width:90%" type="info">
                {{ item.name }}
              </el-tag>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 10px 10px 10px 5px">
        <el-checkbox-group v-model="checkList">
          <el-tooltip placement="top">
            <div slot="content">例如:输入汽车，则检索中自动关联car等关键词</div>
            <el-checkbox label="中英文检索"></el-checkbox>
          </el-tooltip>
          <el-tooltip placement="top">
            <div slot="content">
              例如:输入pc，则检索中自动关联computer等关键词
            </div>
            <el-checkbox label="概念检索"></el-checkbox>
          </el-tooltip>
          <el-tooltip placement="top" style="display:none">
            <div slot="content">
              例如:输入长江大学，则检索中自动关联汉江石油学院、湖北农学院等关键词
            </div>
            <el-checkbox label="企业名称关联检索"></el-checkbox>
          </el-tooltip>
        </el-checkbox-group>
      </div>
      <div style="border: 1px solid #dcdfe6;border-radius: 5px;color: #666;padding: 10px;font-size: 14px; line-height:200%">
        <h4 style="text-align: center; font-size: 16px;color:#0094ff">注意事项</h4>
        <ul>
          <li>
            检索字段内各检索词之间可进行AND、OR、NOT等运算，使用时AND、OR、NOT大写或小写均支持。
          </li>
          <li>
            专利名称、申请人、发明人、代理人、代理机构等文本字段可输入所知的完整专利名称或者申请人等，也可选用合适的关键字进行模糊搜索。
          </li>
          <li>
            检索字段内容如果有括号，例如PA=某某（上海）有限公司，检索请用中文括号检索。
          </li>
          <li>
            摘要、主权项、关键字字段等应尽量选用合适的关键字，以免检索出过多无关文献。
          </li>
          <li>
            时间检索示例：AD=19880401 AD=(2020 to 2021) AD=(202001 to 202102) AD=(20200203 to 20210405)
          </li>
          <li>
            主分类号示例: PIC=(A01 or A01B or A01C)
          </li>
          <li>
            法律状态类别：审定授权、部分无效、公开发明、实质审查、避重放弃、主动放弃、视为放弃、未缴年费、驳回、全部无效、期满终止、主动撤回、视为撤回
          </li>
        </ul>
      </div>
      <div style="width: 100%; text-align: center;padding:20px 0 0 0">
        <el-button type="primary" @click="submit">检索</el-button>
        <el-button @click="cleartext">清空</el-button>
      </div>
    </el-card>

    <el-card style="margin-top: 40px" v-if="show">
      <div v-for="(item, index) in list" :key="index">
        <div style="display: flex">
          <el-checkbox></el-checkbox>
          <p @click="getDetail(item)"
             style="font-weight: 600; color: #409eff; margin-left: 5px">
            {{ index + 1 }}.{{ item.name }}
          </p>
        </div>
        <p style="font-weight: 600">
          申请号：{{ item.id }} 申请日期：{{ item.time }} 公开号：{{ item.id2 }}
        </p>
        <p style="font-weight: 600">
          申请人：{{ item.people }}发明人：{{ item.people2 }}
        </p>
        <div style="display: flex; margin-top: 10px">
          <p style="flex: 5">文摘：{{ item.detail }}</p>
          <el-image style="flex: 2; width: 100px; height: 100px"
                    :src="item.picture"
                    fit="contain"></el-image>
        </div>
        <el-divider></el-divider>
      </div>
    </el-card>
  </div>
</template>

<script>
import { search, search_result } from "../api/search.js";
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
    dataguowai
} from "../assets/country.js";
let Base64 = require("js-base64").Base64;
export default {
  name: "HelloWorld",
  data() {
    return {
      checkList: [],
      country: ["FM", "SYXX", "WG"],
      country1: [],
      country2: [],
      country3: [],
      country4: [],
      country5: [],
      country6: [],
      countrygw: [],
      select: "",
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
      expr: "",
      show: false,
      char_list: [
        {
          name: "申请日期 AD",
          value: "AD=",
        },
        {
          name: "公开日期 PD",
          value: "PD=",
        },
        {
          name: "申请号 AN",
          value: "AN=",
        },
        {
          name: "公开号 PNM",
          value: "PNM=",
        },
        {
          name: "专利名称 TI",
          value: "TI=",
        },
        {
          name: "摘要 AB",
          value: "AB=",
        },
        {
          name: "主分类号 PIC",
          value: "PIC=",
        },
        {
          name: "分类号 SIC",
          value: "SIC=",
        },
        {
          name: "申请人 PA",
          value: "PA=",
        },
        {
          name: "发明人 IN",
          value: "IN=",
        },
        {
          name: "主权项 FCL",
          value: "FCL=",
        },
        {
          name: "地址 ADDR",
          value: "ADDR=",
        },
        {
          name: "优先权 PR",
          value: "PR=",
        },
        {
          name: "国省代码 CO",
          value: "CO=",
        },
        {
          name: "代理人 AGT",
          value: "AGT=",
        },
        {
          name: "代理机构 AGC",
          value: "AGC=",
        },
        {
          name: "法律状态 LS",
          value: "LS=",
        },
        {
          /*name: "名称、摘要、主权项 ALL",*/
          name: "关键词 ALL",
          value: "ALL=",
        },
      ],
      relation: [
        {
          tip: "'与'，必须同时满足AND运算符联结的检索词（字段检索条件）",
          title: "AND",
        },
        {
          tip: "'或'，必须至少满足OR运算符联结的检索词（字段检索条件）中的一个",
          title: "OR",
        },
        {
          tip: "'非'，只出现前一个而不出现后一个检索词（字段检索条件）",
          title: "NOT",
        },
        {
          tip: "通配符 >=0个字符",
          title: "*",
        },
        {
          tip: "(",
          title: "(",
        },
        {
          tip: ")",
          title: ")",
        },
        {
          tip: "匹配1个任意字符",
          title: "？",
        },
        {
          tip: "A(N)B→位置运算符 表示AB or BA ,A B代表为两个单词",
          title: "(N)",
        },
        {
          tip: "日期段的范围，例如：PD=（2001 To 2005）",
          title: "TO",
        },
      ],
      username: localStorage.getItem("username"),
    };
  },
  mounted() {
    if (this.$route.query.expr) {
      this.expr = this.$route.query.expr;
    }
  },
    methods: {
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
        this.country = val ? arrayPush : [];
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
      cleartext() {
        this.expr = '';
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
    submit() {
      var query = {};
      // query.expr = Base64.encode(this.expr)
      query.expr = this.expr;
      try {
        var kkk1 = query.expr.split(' ').join('');
        while (kkk1.substring(0, 1) == " " || kkk1.substring(0, 1) == "(" || kkk1.substring(0, 1) == "（") {
          kkk1 = kkk1.substring(1,);
        }
        //query.expr = query.expr.trim();
        var haskeyname = false;
        var kkk = kkk1.toUpperCase();
        this.char_list.forEach((item) => {
          if (kkk.indexOf(item.value) == 0) {
            haskeyname = true;
          }
        });
        if (!haskeyname) {
          query.expr = 'ALL=(' + query.expr + ')';
        }
      }
      catch (e) { }
      //alert(query.expr); return;
      query.is_cross_language = false;
      query.is_include_synonym = false;
      query.is_include_company = false;
      this.checkList.forEach((item) => {
        switch (item) {
          case "中英文检索":
            query.is_cross_language = true;
            break;
          case "概念检索":
            query.is_include_synonym = true;
            break;
          case "企业名称关联检索":
            query.is_include_company = true;
            break;
        }
      });
      query.countries = this.country.concat(this.countrygw).concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).join(',');
      console.log(query);
      if (query.expr == '') {
        alert('请输入检索内容！'); return;
      }
      //alert(JSON.stringify(query)); return;
      //return;
      if (this.username != null && this.username != 'guest') {
        query.username = this.username;
      }
      query.analysis = false;
      search(query).then((res) => {
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
          localStorage.setItem("expr", query.expr);
          // this.$message.success(res.id);
          this.$router.push("/search-result");
        }
      });
    },
      putIn(value) {
        var value1 = value;
        switch (value) {
          case 'AND':
          case 'OR':
          case 'NOT':
          case 'TO': value1 = ' ' + value + ' '; break;
          default: value1 = value; break;
        }
        this.expr = this.expr + value1;
      //if (this.expr == "") {
      //  this.expr = this.expr + ' ' + value + ' ';
      //} else {
      //  this.expr = this.expr + ' ' + value + ' ';
      //}
      //然后调用focus方法
      this.$nextTick(() => {
        this.$refs.inputVal.focus();
      });
    },
    getDetail(data) {
      this.$router.push({
        path: "/detail",
        query: data,
      });
    },
  },
};
</script>

<style scoped>
.home {
  text-align: left;
  padding: 20px;
}
  ul {
    list-style:none;
  }
  .myInput {
    width: 100%;
    font-size: 14px;
  }

.search {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.charList {
  /* margin-left: 90px; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
