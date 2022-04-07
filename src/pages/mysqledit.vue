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
            专题库管理
          </td>
        </tr>
      </table>
    </div>
    <div style="width:100%;padding:10px 0"></div>
    <el-tabs v-loading="loading" type="border-card" style="box-shadow:none;">
      <el-tab-pane label="编辑专题库信息">
        <table class="dbmessage" style="" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="150" align="right">专题库名称</td>
            <td colspan="3"><el-input v-model="dbname" placeholder=""></el-input></td>
          </tr>
          <tr>
            <td align="right">专题库背景图</td>
            <td width="1">
              <table class="ztkitem" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <template>
                    <td v-if="cover_path &&　cover_path.length>0" class="ztkname"
                        :style="{background: 'url('+baseURL + '/res?path=' + cover_path +') no-repeat right center' }">
                      {{dbname}}
                    </td>
                    <td v-else class="ztkname"
                        :style="{background: 'url('+require('../assets/ztkbgimg.png')+') no-repeat right center' }">
                      {{dbname}}
                    </td>
                  </template>
                </tr>
              </table>
            </td>
            <td align="left" class="upimgtd" width="1" style="white-space:nowrap">
              <el-upload ref="img11"
                         list-type="picture-card"
                         :action="actionurl1"
                         :on-preview="handlePictureCardPreview"
                         :on-success="onsuccess"
                         :on-error="onerror"
                         :limit="1"
                         :before-upload="beforeupload"
                         :headers="headers1"
                         name="img"
                         style="height:100px">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </td>
            <td align="left" style="font-size:14px">
              <span style="color:#808080">建议尺寸：<br />255px * 100px</span>
            </td>
          </tr>
          <template v-if="type==4 || type == 3">
            <tr>
              <td align="right">是否公开显示</td>
              <td colspan="3" align="left">
                <el-switch v-model="dbopen" active-text="公开" inactive-text="非公开"> </el-switch>
              </td>
            </tr>
          </template>
          <tr>
            <td colspan="4">
              <el-button type="primary" @click="editdbmag">保存修改</el-button>
            </td>
          </tr>
        </table>
        <div style="border-bottom:dashed 1px #DCDFE6;width:100%;height:0px;margin:10px 0;"></div>
        <table v-if="shownodetree" class="dbmessage" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="left">{{newdbmsg.name}} - 节点管理</td>
          </tr>
          <tr>
            <td align="left">
              <div class="wrapper" style="max-height:300px">
                <el-tree ref="tree" :props="props" :data="data" :load="loadNode" @node-click="nodeclick" lazy highlight-current="true"
                         default-expand-all="true" :expand-on-click-node="false">
                  <div :title="node.label" style="display: flex;font-size:12px" class="custom-tree-node" slot-scope="{ node, data }">
                    <div>
                      {{ node.label }}
                    </div>
                  </div>
                </el-tree>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td><el-input v-model="zjdmingch" placeholder="" size="small"></el-input></td>
                  <td width="1"><el-button type="primary" plain size="small" @click="nodeadd">添加子节点</el-button></td>
                  <td width="1"><el-button type="primary" plain size="small" @click="nodeedit">修改选中节点</el-button></td>
                  <td width="1"><el-button type="primary" plain size="small" @click="nodedel">删除选中节点</el-button></td>
                </tr>
              </table>
              <div style="width:100%;text-align:left;font-size:14px;padding:5px;color:#1da1f2">专利库：<span style="cursor:pointer" @click="showcountry">[选择专利库]</span></div>
              <div style="width: 100%; text-align: left; font-size: 14px; padding: 5px ">
                <!--{{querycountry}}-->
                <el-input type="textarea" v-model="querycountry"></el-input>
              </div>
              <div style="width: 100%; text-align: left; font-size: 14px; padding: 5px; color: #1da1f2 ">检索式：</div>
              <div style="width: 100%; text-align: left; font-size: 14px; padding: 5px ">
                <!--{{querystr}}-->
                <el-input type="textarea" v-model="querystr" :value="querystr"></el-input>
              </div>
              <div style="width: 100%; text-align: left; font-size: 14px; padding: 5px;display:none ">
                <span style="color: #1da1f2">中英文检索：</span>{{queryis_cross_language}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #1da1f2">概念检索：</span>{{queryis_include_synonym}}
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align:left;padding:5px 0 10px 15px">
              <el-checkbox-group v-model="checkList1">
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
            </td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" plain size="small" @click="editquery">保存修改</el-button>
              <el-button type="primary" plain size="small" @click="queryfromhis">从检索记录添加检索式</el-button>
              <el-button type="primary" plain size="small" @click="queryresult">查看检索结果</el-button>
            </td>
          </tr>
        </table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="选择专利库" style="text-align:left;" :visible.sync="dialogVisible">
      <div style="padding:10px;position:relative;max-height:500px;overflow-y:scroll">
        <el-checkbox :indeterminate="isIndeterminateall" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox :indeterminate="isIndeterminatecn" v-model="checkAllcn" @change="handleCheckAllChange1">中国数据</el-checkbox>
        <el-checkbox :indeterminate="isIndeterminategw" v-model="checkAllgw" @change="handleCheckAllChange2">国外数据</el-checkbox>
        <div style="width:100%;padding:5px 0"></div>
        <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country" @change="handleCheckitemChange">
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
        <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="countrygw" @change="handleCheckitemChange">
          <el-checkbox v-for="item in dataguowai" :key="item.value" :label="item.value" style="padding: 2px 0; display: block; width: 16.6%">
            {{item.name}}
          </el-checkbox>
        </el-checkbox-group>

        <div id="CTyazhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            亚洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country1" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data1" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div id="CTouzhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            欧洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country2" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data2" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div id="CTbeimeizhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            北美洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country3" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data3" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div id="CTnanmeizhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            南美洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country4" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data4" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div id="CTdayangzhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            大洋洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country5" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data5" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div id="CTfeizhou" class="CTother" style="width:100%;">
          <div style="font-size: 14px; padding: 10px 0 0 0; color: #0094ff;">
            非洲
          </div>
          <el-checkbox-group style="display: grid;grid-template-columns: repeat(6,1fr);width: 100%;text-align: left;margin:auto;padding:0" v-model="country6" @change="handleCheckitemChange">
            <el-checkbox v-for="item in data6" :key="item.value" :label="item.value" style="padding:2px 0">
              {{item.name}}
            </el-checkbox>
          </el-checkbox-group>
        </div>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="choosecountry">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="选择检索式" style="text-align:left;" :visible.sync="dialogVisible1">
      <div style="padding:10px;position:relative;max-height:500px;overflow-y:scroll">
        <el-table ref="hissearchkey" :data="tableDataUsercn" style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column prop="expression" label="检索式">
            <template slot-scope="scope">
              <!--<span style="color:#0094ff;cursor:pointer" @click="getsearchlist(scope.row.id)">{{scope.row.expression}}</span>-->
              {{scope.row.expression}}
            </template>
          </el-table-column>
          <el-table-column prop="countries" label="专利库" width="200">
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
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="choosesearchkey">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    baseURL
  } from '../api/base.js'
  import {
    topic_create, topic_createtext, topic_list, topic_del, save_temp, dbedit, upload_topic_cover,
    history_list, } from "../api/user.js";
  import {
    search,
		search_result,
    fav_list_add
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
        type: localStorage.getItem("type"),
        username: localStorage.getItem("username"),
        dialogImageUrl: '',
        dialogVisible: false,
				baseURL: baseURL,
				dbname: '',
        cover_path: '',
        uploaddata: new FormData(),
        newdbmsg: JSON.parse(localStorage.getItem("newdbmsg")),//同mysql的创建query
				dbmsg: null,//含id的数据库信息
        upimgid: '',
        uploadresult: '',
        first: 1,
        data: [],
        props: {
          label: "name",
          isLeaf: "isLeaf",
				},
        zjdmingch: '',
				loading: false,
        selectid: '',
        selectpath: '',
				selectname: '',
				shownodetree: false,
        headers1: { "Authorization": 'Bearer ' + localStorage.getItem("token") },
        showtree: true,
        querycountry: '',
        querystr: '',
        queryis_cross_language: '',
        queryis_include_synonym: '',
        queryis_include_company: '',
        actionurl1: baseURL + '/res/upload_topic_cover',
        dialogVisible: false,
        dialogVisible1: false,

        country: [],
        country1: [],
        country2: [],
        country3: [],
        country4: [],
        country5: [],
        country6: [],
        countrygw: [],
        countrygwtest: [],

        data: data,
        data1: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5,
        data6: data6,
        datacn: datacn,
        dataguowai: dataguowai,
        dataguowaitest: dataguowaitest,
        allcountrycode1: allcountrycode,

        dbopen: false,
        checkList1: [],
        tableDataUser: [],//个人检索记录
        tableDataUsercn: [],//个人检索记录
        currentRow: null,
        isIndeterminatecn: false,
        isIndeterminategw: false,
        checkAll: false,
        checkAllcn: false,
        checkAllgw: false,
			}
		},
		mounted() {
			//alert(JSON.stringify(localStorage.getItem("token")));
			var query = {};
      query.path = "/";
      query.userType = this.type;
      query.userCode = this.username;
      if (this.type == 4) {
        query.is_private = false;
        //query.is_temp = this.newdbmsg.is_temp;
      }
      else {
        query.is_private = true;
      }
      //query.is_open = true;
      //alert(JSON.stringify(query));
      topic_list(query).then((res) => {
        //alert(JSON.stringify(res));
				var alltop = res ? res.topics : [];
        alltop.forEach((item) => {
          //alert(item.topic.name + '|' + this.newdbmsg.name)
          if (item.topic.name == this.newdbmsg.name) {
            this.dbmsg = item;
					}
        });
        //alert(JSON.stringify(this.dbmsg));
				this.dbname = this.dbmsg.topic.name;
				this.selectid = this.dbmsg.topic.id;
				this.selectpath = this.dbmsg.topic.path;
        this.selectname = this.dbmsg.topic.name;
        this.querycountry = this.dbmsg.topic.db.join(',');
        this.querystr = this.dbmsg.topic.expression;
        //this.skey_key.value(this.dbmsg.topic.expression);
        this.queryis_cross_language = this.dbmsg.topic.is_cross_language ? "是" : "否";
        this.queryis_include_synonym = this.dbmsg.topic.is_include_synonym ? "是" : "否";
        this.queryis_include_company = this.dbmsg.topic.is_include_company ? "是" : "否";
        this.cover_path = this.dbmsg.cover_path;
        if (this.dbmsg.topic.is_open != true && this.dbmsg.topic.is_open != false) {
          this.dbmsg.topic.is_open = false;
        }
        this.dbopen = this.dbmsg.topic.is_open;
        //alert(this.dbmsg.topic.is_cross_language)
        if (this.dbmsg.topic.is_cross_language) {
          this.checkList1.push('中英文检索');
        }
        if (this.dbmsg.topic.is_include_synonym) {
          this.checkList1.push('概念检索');
        }
        //alert(JSON.stringify(this.checkList1));
      });
      if (this.type == 4) {
        this.shownodetree = true;// !this.newdbmsg.is_temp;
      };
      if (this.type == 1 || this.type == 2 || this.type == 3) {
        this.shownodetree = true;
      };
		},
    methods: {
      handleCheckitemChange() {
        this.setchechtop3();
      },
      setchechtop3() {
        try {
          var datas = this.datacn.concat(this.dataguowai).concat(this.data1).concat(this.data2).concat(this.data3).concat(this.data4).concat(this.data5).concat(this.data6);
          var countries = (this.country.concat(this.countrygw).concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).filter(function (n) { return n }));
          if (datas.length > countries.length) {
            this.checkAll = false;
          }
          else {
            this.checkAll = true;
          }
        }
        catch (e) { }
        try {
          var datas = this.datacn;
          var countries = (this.country.filter(function (n) { return n }));
          if (datas.length > countries.length) {
            this.checkAllcn = false;
          }
          else {
            this.checkAllcn = true;
          }
        }
        catch (e) { }
        try {
          var datas = this.dataguowai.concat(this.data1).concat(this.data2).concat(this.data3).concat(this.data4).concat(this.data5).concat(this.data6);
          var countries = (this.countrygw.concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).filter(function (n) { return n }));
          if (datas.length > countries.length) {
            this.checkAllgw = false;
          }
          else {
            this.checkAllgw = true;
          }
        }
        catch (e) { }
      },
			actionurl() {
        return this.baseURL + '/res/upload_topic_cover';
			},
			getimg() {
				let formData = new FormData();
        formData.append("img", this.$refs.img11.uploadFiles[0].raw);
			},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onSubmit1() {
        //alert(JSON.stringify(localStorage.getItem("token")))
        let formData = new FormData();
        formData.append("img", this.$refs.img11.uploadFiles[0].raw);
        //alert(JSON.stringify(formData));
        var that = this
        axios({
          method: "POST",
          url: this.baseURL + '/res/upload_topic_cover',
          data: formData,
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("token")
          }
        })
          .then(function (res) {
            console.log(res)
            that.$message.success("成功上传")
          })
          .catch(function (error) {
            try {
              //alert(JSON.stringify(error));
              that.$message.error(error.response.data.msg)
            }
            catch (e) { }
          })
      },
      beforeupload(file) {
        //this.onSubmit1();
        //return false;
        const isJPG = (file.type === 'image/jpeg' ? true : (file.type === 'image/png' ? true : (file.type === 'image/gif' ? true : false)));
        const isLt1M = file.size / 1024 / 1024 < 1
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG、PNG、GIF 格式!');
          return;
        }
        if (!isLt1M) {
          this.$message.error('上传图片大小不能超过 1MB!');
          return;
        }
        return isJPG && isLt1M;
			},
			onsuccess(res, file, fileList) { // 图片上传服务器后的回调
        //alert(JSON.stringify(res.id));
        try {
          if (res.id.length > 0) {
            this.$message.success("成功上传");
            this.upimgid = res.id;
            return;
            this.urlList(res, file, fileList);// 以方法的形式调用就可以了，每一张图片都会到这个方法里
          } else {
            this.upimgid = '';
            //this.delShowFile(file, fileList);
            this.$message.error(res.msg);
          }
        } catch (e) { this.upimgid = '';}
			},
      urlList(res, file1, fileList) { // 为了回显，保存服务器传回URL
        const { data, file } = res;
        const temp = JSON.parse(file);
        const time = this.getTime(new Date());
        const url = data.img_url[0];
        this.filesUpload(time, temp.name, url);
        this.delShowFile(file1, fileList);
			},
			onerror(res, file1, fileList) {
        //alert(JSON.stringify(res) + '|||||');
        //alert(this.uploaddata);
        //alert('上传错误' + JSON.stringify(res.status));
        this.$message.error('上传错误' + JSON.stringify(res.status));
        this.upimgid = '';
			},
      onchange(file1, fileList) {
        
			},
			loadNode(node, resolve) {
        var query = {};
        if (this.first == 1) {
          query.path = '/';// + this.newdbmsg.name;
          this.first = 2;
        }
        else if (this.first == 2) {
          //query.path = node.data.path + "/" + node.data.name;
          query.path = (node.data.path == '/' ? '' : node.data.path) + "/" + node.data.name;
        }
        //query.is_private = false;
        if (this.type == 4) {
          query.is_private = false;
          query.is_temp = this.newdbmsg.is_temp;
        }
        else {
          query.is_private = true;
        }
        query.userType = this.type;
        query.userCode = this.username;
        query.is_open = true;
        //alert(JSON.stringify(query));
        topic_list(query).then((res) => {
          //alert(JSON.stringify(res));
          if (res && res.topics && res.topics.length > 0) {
            if (query.path == '/') {
              var topics = [];
              res.topics.forEach((item) => {
                if (item.topic.name == this.newdbmsg.name) {
                  topics.push(item);
                }
              });
              return resolve(topics.map((item) => item.topic));
            }
            else {
              return resolve(res.topics.map((item) => item.topic));
            }
            return resolve(res.topics.map((item) => item.topic));
          } else {
            return resolve([]);
          }
        });
			},
      nodeclick(node) {
        //alert(JSON.stringify(node));
        this.selectid = node.id;
        this.selectpath = node.path;
        this.selectname = node.name;
        this.querycountry = node.db.join(',');
        this.querystr = node.expression;
        //alert(node.is_cross_language)
        //var kk1 = node.is_cross_language ? "是" : "否";
        //var kk2 = node.is_include_synonym ? "是" : "否";
        if (node.is_cross_language) {
          this.checkList1.push('中英文检索');
        }
        else {
          try { this.checkList1.splice('中英文检索'); } catch (e) {}
          
        }
        if (node.is_include_synonym) {
          this.checkList1.push('概念检索');
        }
        else {
          try { this.checkList1.splice('概念检索'); } catch (e) { }
        }
        //this.queryis_include_company = node.is_include_company ? "是" : "否";
        
			},
			editdbmag() {
				var name = this.dbname.trim();
				if (name == '') {
					alert('名称不能为空！'); return;
        }
        if (name.indexOf('/') >= 0) {
          alert('名称不符合规范！'); return;
        }
				var query = {};
        query.id = this.dbmsg.topic.id;
        query.is_private = this.dbmsg.topic.is_private;
        if (query.is_private == null) {
          if (this.type == 4) {
            query.is_private = false;
          }
          else {
            query.is_private = true;
          }
        }
        var edit = {};
        if (name != this.dbmsg.topic.name) {
          edit.name = name;//不需要path
        }
        edit.cover_id = this.upimgid;//
        //edit.name = this.dbmsg.topic.path + name;//不需要path
        query.edit = edit;
        query.is_open = this.dbopen;
        query.userType = parseInt(this.type);
        query.userCode = this.username;
        //alert(JSON.stringify(query));// return;
        this.loading = true;
        dbedit(query).then(res => {
          //alert(JSON.stringify(res));
					this.loading = false;
          if (res.code==200) {
            this.$message.success('修改成功！');
            try {
              this.newdbmsg.name = name;
              //localStorage.removeItem("newdbmsg");
              localStorage.setItem("newdbmsg", JSON.stringify(this.newdbmsg));
            } catch (e) { alert(e);}
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
			nodeadd() {
        this.zjdmingch = this.zjdmingch.trim();
        if (this.zjdmingch == '') {
          alert('名称不能为空！');
          return;
        }
        if (this.zjdmingch.indexOf('/') >= 0) {
          alert('名称不符合规范！'); return;
        }
        var query = {};
        query.name = this.zjdmingch;
        query.expr = '';
        query.countries = '';
        query.cover_id = '';
        query.userType = this.type;
        query.userCode = this.username;
        query.path = (this.selectpath == '/' ? '/' : this.selectpath + '/') + this.selectname;
        //query.is_private = true;
        query.is_open = true;
        if (this.type == 4) { query.is_private = false; }
				else { query.is_private = true; }
        //query.is_temp = this.newdbmsg.is_temp;
        //alert(JSON.stringify(query)); this.querystr = JSON.stringify(query); return;
        topic_createtext(query).then(res => {
          //alert(JSON.stringify(res)); this.querystr = JSON.stringify(res);
          if (res.success == true) {
            alert('操作成功');
            //if (query.is_private == false) {
            //  alert('添加成功，请到暂存库查看！');
            //} else {
            //  alert('添加成功');
            //}
            location.reload();
          } else {
            if (res.code != undefined) {
              alert(res.msg);
            }
            else {
              alert('一些异常导致了错误');//this.$message.success(red.msg);
            }
          }
        })
      },
      nodeedit() {
        var name = this.zjdmingch.trim();
        if (name == '') {
          alert('名称不能为空！'); return;
        }
        if (name.indexOf('/') >= 0) {
          alert('名称不符合规范！'); return;
        }
        var query = {};
        query.userType = this.type;
        query.userCode = this.username;
        query.id = this.selectid;
        query.is_private = this.dbmsg.topic.is_private;
        if (query.is_private == null) {
          if (this.type == 4) {
            query.is_private = false;
          }
          else {
            query.is_private = true;
          }
        }
        var edit = {};
        edit.name = name;//不需要path
        //edit.name = this.dbmsg.topic.path + name;//不需要path
        query.edit = edit;
        this.loading = true;
        //alert(JSON.stringify(query));
        dbedit(query).then(res => {
          //alert(JSON.stringify(res));
          this.loading = false;
          if (res.code == 200) {
            //this.newdbmsg.name = name;
            alert('操作成功');
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
      nodedel() {
        if (window.confirm('你确定要删除该节点及其子节点吗？')) {
          var query = {};
          query.path = this.selectpath;
          query.name = this.selectname;
          query.force = true;
          query.userType = this.type;
          query.userCode = this.username;
          //alert(JSON.stringify(query));
          if (this.dbmsg.topic.is_private == 1) {
            query.is_private = true;
            topic_del(query).then((res) => {
              //alert(JSON.stringify(res));
              if (res.code == 200) {
                alert('操作成功');
                location.reload();
              }
              else {
                alert(res.msg);
              }
            });
          } else {
            //alert(JSON.stringify(query))
            query.is_private = false;
            //query.is_temp = false;
            topic_del(query).then((res) => {
              //alert(JSON.stringify(res));
              if (res.code == 200) {
                alert('操作成功');
                location.reload();
              }
              else {
                alert(res.msg);
              }
            });
          }
        }
        else {

        }
      },
      editquery() {
        //alert(this.querystr);
        if (this.querycountry.trim() == '') { alert('请选择国家！'); return; }
        if (this.querystr.trim() == '') { alert('请填写检索式！'); return; }
        var query = {};
        query.userType = this.type;
        query.userCode = this.username;
        query.id = this.selectid;
        query.is_private = this.dbmsg.topic.is_private;
        if (query.is_private == null) {
          if (this.type == 4) {
            query.is_private = false;
          }
          else {
            query.is_private = true;
          }
        }
        var edit = {};
        edit.countries = this.querycountry;
        edit.expression = this.querystr;
        this.checkList1.forEach(item => {
          switch (item) {
            case "中英文检索":
              edit.is_cross_language = true
              break
            case "概念检索":
              edit.is_include_synonym = true
              break
          }
        })
        query.edit = edit;
        this.loading = true;
        //alert(JSON.stringify(query));
        dbedit(query).then(res => {
          //alert(JSON.stringify(res));
          this.loading = false;
          if (res.code == 200) {
            alert('操作成功');
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
      showcountry() {
        this.country = [];
        this.handleCheckAllChange(false);
        this.dialogVisible = true;
        var country11 = this.querycountry.split(',');
        if (this.querycountry == 'ALL' || this.querycountry == 'all') {
          this.handleCheckAllChange(true);
        }
        else {
          this.country = country11;
        }
        this.setchechtop3();
      },
      choosecountry() {
        this.dialogVisible = false;
        var countries = (this.country.concat(this.countrygw).concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).filter(function (n) { return n })).join(',');
        //alert((this.country.concat(this.countrygw).concat(this.country1).concat(this.country2).concat(this.country3).concat(this.country4).concat(this.country5).concat(this.country6).filter(function (n) { return n })).length);
        this.querycountry = countries;
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
        this.checkAllcn = val;
        this.checkAllgw = val;
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
        this.setchechtop3();
      },

      queryresult() {
        var query = {}
        query.expr = this.querystr;
        query.countries = this.querycountry;
        query.is_cross_language = false
        query.is_include_synonym = false
        query.is_include_company = false
        query.userType = this.type;
        query.userCode = this.username;
        this.checkList1.forEach(item => {
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
        });
        query.analysis = false;
        //alert(JSON.stringify(query));
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

            //this.$router.push('/search-result');

            const link = document.createElement("a");
            link.style.display = "none";
            link.href = "#/search-result";
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        })
      },

      queryfromhis() {
        this.tableDataUsercn = [];
        this.tableDataUser = [];
        this.dialogVisible1 = true;
        var query = {};
        query.type = 'self';
        query.limit = 20;
        query.username = this.username;
        //try { alert(JSON.stringify(query)); } catch (e) { alert(e);}
        history_list(query).then(res => {
          //alert(JSON.stringify(res));
          this.tableDataUsercn = [];
          this.tableDataUser = res.records;
          this.tableDataUser.forEach(item => {
            //alert(JSON.stringify(item));
            var item11 = item;
            //item11.countries = this.getcncountry(item11.countries);
            this.tableDataUsercn.push(item11);
          });
        })
      },
      choosesearchkey() {
        //alert(JSON.stringify(this.currentRow));
        this.querystr = this.currentRow.expression;
        this.querycountry = this.currentRow.countries;
        this.checkList1 = [];
        if (this.currentRow.is_cross_language) {
          this.checkList1.push('中英文检索');
        }
        if (this.currentRow.is_include_synonym) {
          this.checkList1.push('概念检索');
        }
        this.dialogVisible1 = false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
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
  .dbmessage {
    width: 90%;
    margin: auto
  }
  .dbmessage td{
    padding:5px;
  }

  .ztkitem {
    height: 100px;
    width: 252px;
  }

    .ztkitem .ztkname {
      text-align: center;
      font-size: 18px;
      color: #1da1f2;
      height: 100px;
      width: 252px;
      font-weight: bold;
      border-radius: 5px;
			white-space:nowrap;
    }
  .upimgtd >>> .el-upload--picture-card {
    width: 100px;
    height: 100px;
		line-height:100px;
  }
  .upimgtd >>> .el-upload-list--picture-card .el-upload-list__item {
    width: 252px;
    height: 100px;
  }
</style>
