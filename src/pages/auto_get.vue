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
            自动提取关键词
          </td>
        </tr>
      </table>
    </div>
    <div style="width:100%;padding:10px 0"></div>
    <el-card style="width: 100%;margin: 0px auto;background:#FFF" shadow="never">
      <el-row>
        <div style="
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
          ">
          <div>
            <span>关键词个数</span>
            &nbsp;&nbsp;
            <el-input v-model="form.keywords_limit"
                      style="width: 350px" title="输入您要从原文中提取的关键词个数，您要提取的关键词个数不能超过原文长度"></el-input>
          </div>
          <!-- <span style="margin-left: 20px;">摘要长度</span> -->
          <!-- <el-input v-model="form.sentences_limit" style="width: 150px;"></el-input> -->
          <div>
            <el-button @click="toSearch('form')" size="small" type="primary">
              到表格检索
            </el-button>
            <el-button @click="toSearch('high')"
                       size="small"
                       type="primary"
                       style="margin-left: 0 20px">
              到高级检索
            </el-button>
          </div>
        </div>
      </el-row>
      <el-input v-model="form.text"
                style="margin-top: 10px"
                type="textarea"
                :rows="10"
                placeholder="
1.在此输入框中输入原文。(您可以随意拷贝一段文字到此输入框中)。
2.在 '关键词个数' 输入框中输入您要从原文中提取的关键词个数，您要提取的关键词个数不能超过原文长度。
3.点击'提取'按钮，进行提取。
4.提取后，您可以直接点击'到表格检索'或者是'到高级检索'按钮，系统会自动跳转到表格检索界面或者是高级检索界面进行检索">
      </el-input>
      <div style="margin-top: 10px">
        <el-button type="primary" @click="onSubmit">提取</el-button>
        <el-button @click="form = {}">清空</el-button>
      </div>
      <div style="text-align: left" v-if="result.keywords_count">
        <div style="margin-top: 10px">
          <p>
            关键词数目：<span style="color: #1492ff">{{result.keywords_count}}</span>
          </p>
          <el-tag style="margin: 5px" v-for="item in result.keywords">
            {{item}}
          </el-tag>
        </div>
        <div style="margin-top: 10px;display:none">
          <p>
            关键句数目:<span style="color: #1492ff">{{result.sentences_count}}</span>
          </p>
          <ul style="list-style:none">
            <li v-for="item in result.sentences">{{ item }}</li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { keywords } from "../api/search.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      result: {},
      form: {},
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      if (this.form.keywords_limit == '' || this.form.keywords_limit == undefined) { alert("请输入关键词个数！"); return; }
      if (this.form.text == '' || this.form.text == undefined) { alert("请输入原文！"); return; }
      this.form.keywords_limit = parseInt(this.form.keywords_limit);
      //   this.form.sentences_limit = parseInt(this.form.sentences_limit);
      keywords(this.form).then((res) => {
        var fff = [];
        //alert(JSON.stringify(res))
        res.keywords.forEach((item1) => {
          if (item1 != ' ' && item1 != '' ) {
            fff.push(item1);
          }
        });
        this.result = res;
        this.result.keywords = fff;
        this.result.keywords_count = fff.length;
        console.log(res);
      });
    },
    toSearch(id) {
      var expr = "";
      this.result.keywords.forEach((item) => {
        if (expr == "") {
          expr = item;
        } else {
          expr = expr + " or " + item;
        }
      });
      if (id == "high") {
        this.$router.push({
          path: "/high-search",
          query: {
            expr: "TI=(" + expr + ") OR" + " AB=(" + expr + ") OR"+ " DES=(" + expr + ")",
          },
        });
      }
      if (id == "form") {
        this.$router.push({
          path: "/form-search",
          query: {
            ALL: expr,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px 0;
  /*width: 80%;*/
  margin: 0 auto;
}
</style>
