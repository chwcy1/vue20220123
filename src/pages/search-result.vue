<template>
  <div class="home" id="thishomediv">
    <el-container>
      <el-aside id="pageleftcard" width="220px" style="padding:10px 0 0 10px" class="wrapper">
        <el-container>
          <el-header style="height:30px;text-align:left;padding:0 10px 0 0">
            <span style="font-size:16px;padding-top:3px">自定义筛选</span>
            <span style="float:right"><el-button @click="searchAgain('list')" type="primary" size="mini" style="padding:3px 5px">筛选</el-button></span>
          </el-header>
          <el-main style="padding:0" class="wrapper slistch">
            <el-tree ref="tree" :props="props" :check-strictly="true" :data="data" :load="loadNode" lazy show-checkbox>
              <div :title="node.label" style="display: flex;font-size:12px" class="custom-tree-node" slot-scope="{ node, data }">
                <div>
                  {{ node.label }}
                </div>
                <div v-if="data.count" style="float: right; font-size: 12px; line-height: 20px">
                  ({{ data.count }})
                </div>
              </div>
            </el-tree>
            <!--不用-->
            <el-collapse v-loading="loading" v-model="activeNames" style="padding-right:10px;display:none" @change="handleChange">
              <el-collapse-item title="已选择的国家和地区" name="COUN" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="公开年份" name="PD" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="申请年份" name="AD" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主申请人" name="PPA" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主发明人" name="PIN" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主分类部" name="PIC1" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主分类大类" name="PIC2" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主分类小类" name="PIC3" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主分类大组" name="PIC4" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="主分类小组" name="PIC5" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="外观分类" name="PIC" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="代理机构" name="AGC" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="代理人" name="AGT" style="text-indent:10px">

              </el-collapse-item>
              <el-collapse-item title="法律状态" name="LS" style="text-indent:10px">

              </el-collapse-item>
            </el-collapse>
          </el-main>
        </el-container>
      </el-aside>
      <el-main style="padding: 0;">
        <el-container>
          <el-aside style="width:7px;overflow:hidden;background:#E1E1E1;text-align:center;vertical-align:middle;padding:0;margin:0;">
            <table id="mousepull" style="width: 100%; height: 100%; cursor: w-resize;" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td style="padding: 0; margin: 0; ">
                  <div style="margin-left:-4px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </div>
                </td>
              </tr>
            </table>
          </el-aside>
          <el-container>
            <el-header style="text-align: left;padding:0 10px;box-shadow:0 0 10px 0 #E1E1E1;height:84px">
              <el-input style="display:none" size="small" placeholder="" v-model="expr"></el-input>
              <el-row style="margin-top: 10px">
                <el-input style="width: 50%" size="small" placeholder="" v-model="expragain1" class="input-with-select" @input="changeinput($event)">
                  <el-select v-model="selectagain" slot="prepend" placeholder="" style="width:130px;">
                    <el-option label="公开(公告)号" value="PNM"></el-option>
                    <el-option label="申请号" value="AN"></el-option>
                    <el-option label="申请人" value="PA"></el-option>
                    <el-option label="发明人" value="IN"></el-option>
                    <el-option label="名称" value="TI"></el-option>
                    <el-option label="摘要" value="AB"></el-option>
                    <el-option label="申请日" value="AD"></el-option>
                    <el-option label="公开(公告)日" value="PD"></el-option>
                    <el-option label="主分类号" value="PIC"></el-option>
                    <el-option label="分类号" value="SIC"></el-option>
                    <el-option label="国省代码" value="CO"></el-option>
                  </el-select>
                </el-input>
                <el-button @click="searchAgain('sagain')" size="small" style="" type="primary" icon="el-icon-search">
                  二次检索
                </el-button>
                <el-button @click="searchAgain()" size="small" style="" type="primary" icon="el-icon-search">
                  重新检索
                </el-button>
                <!-- <el-button size="small" type="primary">重新检索</el-button> -->
                <el-button size="small" @click="toCharts('screen1')" icon="el-icon-s-data">检索结果分析</el-button>
                <!--<el-button size="small" @click="toCharts('screen2')">柱状图分析</el-button>-->
              </el-row>
              <el-row style="padding-top: 5px">
                <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="1" style="white-space:nowrap;padding:0 10px 0 0;display:none">
                      <el-switch v-model="ascending" active-text="升序" inactive-text="降序" @change="ascendingChange"></el-switch>
                    </td>
                    <td width="1" style="padding: 0 10px 0 0">
                      <el-checkbox v-model="checkAll" @change="getAll" border size="mini">全选</el-checkbox>
                      <!--<el-button size="mini" type="primary" icon="el-icon-edit" @click="getAll()">全选</el-button>-->
                    </td>
                    <td width="1" style="white-space: nowrap; padding: 0 10px 0 0">
                      <el-dropdown @command="handleCommand">
                        <el-button size="mini" type="primary">
                          {{ mySort ? mySort : "相关性排序" }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item command="相关性排序">相关性排序</el-dropdown-item>
                          <el-dropdown-item command="申请日降序">申请日降序</el-dropdown-item>
                          <el-dropdown-item command="申请日升序">申请日升序</el-dropdown-item>
                          <el-dropdown-item command="公开日降序">公开日降序</el-dropdown-item>
                          <el-dropdown-item command="公开日升序">公开日升序</el-dropdown-item>
                          <el-dropdown-item command="申请人降序">申请人降序</el-dropdown-item>
                          <el-dropdown-item command="申请人升序">申请人升序</el-dropdown-item>
                          <el-dropdown-item command="主分类号降序">主分类号降序</el-dropdown-item>
                          <el-dropdown-item command="主分类号升序">主分类号升序</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </td>
                    <td width="1" style="padding: 0 10px 0 0">
                      <el-button size="mini" type="primary" icon="el-icon-download" @click="getOut()">导出</el-button>
                    </td>
                    <td width="1">
                      <el-button size="mini" type="primary" icon="el-icon-folder-add" @click="getsave()">收藏</el-button>
                    </td>
                    <td width="1" style="padding-left:10px;display:none">
                      <el-button size="mini" type="primary" icon="el-icon-bell" @click="yujing()">预警</el-button>
                    </td>
                    <td>
                      <div style="white-space:normal;height:30px;font-size:14px;overflow:hidden;width:98%;line-height:200%;">
                        <span style="padding-left:10px; font-size: 14px;padding-right:10px">检索到 {{ total_hits }} 条</span>
                        <span style="height: 30px; overflow: hidden; color: #409eff" :title="expr">检索式：{{expr}}</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </el-row>
            </el-header>

            <el-main v-loading="loading" style="display: flex;padding:0px;margin-top:10px;background:#FFF ">
              <el-container v-if="total_hits>0" style="background:#FFF">
                <el-aside style="width: 47%; padding: 0; border-right: solid 1px #EEE">
                  <el-container style="background:#FFF">
                    <el-main style="padding:0 5px" class="wrapper">
                      <el-card style=" margin-top: 0px; text-align: left;  overflow-y: auto;padding:0;border:0" shadow="never">
                        <!--<div style="height: 80vh" class="wrapper point">-->
                        <div @click="getDetail(item)" v-for="(item, index) in list.result" :key="index" style="padding:5px 0;border-bottom:dashed 1px #E1E1E1">
                          <!--<el-divider></el-divider>-->
                          <div style="display: flex;padding:5px 0 10px 0">
                            <el-checkbox v-model="app_no_list" :label="filterHtml(item.app_no)" :label2="filterHtml(item.open_no)" style="width:16px;overflow:hidden"></el-checkbox>
                            <p style="font-weight: bold; color: #409eff; margin-left: 5px;font-size:15px">
                              {{ index + 1 + (page-1)*size }}&nbsp;
                              <template v-if="item.db=='发明授权' ||item.db=='FMSQ'">
                                <span style="color:#e6a23c;font-weight:bold;font-size:14px">[发明授权]</span>
                              </template>
                              <template v-else-if="item.app_type!=null &&　item.app_type.length>1">
                                <span style="color:#e6a23c;font-weight:bold;font-size:14px">[{{ item.app_type }}]</span>
                              </template>
                              <span v-html="item.title"></span>
                            </p>
                            <template v-if="judgels(item.main_law_status,'有权')">
                              <el-tag type="success" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
                            </template>
                            <template v-if="judgels(item.main_law_status,'无权')">
                              <el-tag type="danger" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
                            </template>
                            <template v-if="judgels(item.main_law_status,'审中')">
                              <el-tag type="warning" effect="dark" style="margin-left:5px;" size="mini">{{item.main_law_status}}</el-tag>
                            </template>
                          </div>
                          <p style="font-weight: normal; font-size: 14px; line-height: 150%">
                            <span style="color:forestgreen">申请号：</span><span v-html="item.app_no"></span><!--{{ item.app_no }}-->&nbsp;&nbsp;
                            <span style="color:forestgreen">申请日：</span>{{item.app_date}}&nbsp;&nbsp;
                            <span style="color:forestgreen">公开公告号：</span><span v-html="item.open_no"></span>&nbsp;&nbsp;
                            <span style="color:forestgreen">公开公告日：</span>{{item.open_date}}
                          </p>
                          <p style="font-weight: normal; font-size: 14px; line-height: 150% ">
                            <span style="color:#e6a23c">申请人：</span>
                            <!--<span style="" :key="tag" v-for="tag in item.applicant"><template v-if="tag.length>0"><span v-html="tag"></span>;</template></span>-->
                            <span v-html="item.applicant"></span>
                            &nbsp;&nbsp;
                            <span style="color:#e6a23c">发明人：</span>
                            <!--<span style="" :key="tag" v-for="tag in item.inventor">
                          <template v-if="tag.length>0">
                            <span v-html="tag"></span>;
                          </template></span>-->
                            <span v-html="item.inventor"></span>
                          </p>
                          <div style="display: flex; margin-top: 5px;line-height:150%">
                            <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="padding:0;margin:0;" valign="top">
                                  <p style="flex: 5; font-size: 14px">
                                    文摘：<span v-html="item.abstract">; </span>
                                  </p>
                                </td>
                                <td style="padding:0;margin:0;" width="1" valign="middle">
                                  <el-image v-if="item.ab_img_path" @click="showbigimg(baseURL + '/res?path=' + item.ab_img_path[0])"
                                            style="flex: 2; width: 200px; max-height: 180px;margin:0 0 0 5px"
                                            :src="baseURL + '/res?path=' + item.ab_img_path[0]"
                                            fit="contain" :preview-src-list="zyftsrcList">
                                    <div slot="error" class="image-solt">
                                      <el-image @click="showbigimg226(item.app_no,item.open_date,item.db)"
                                                style="flex: 2; width: 200px; max-height: 180px; margin: 0 0 0 5px; "
                                                :src="'http://221.194.47.226:8066/Home/SHadsimg1?no=' + encodeURIComponent(shasra(filterHtml(item.app_no))) + '&date=' + encodeURIComponent(shasra(filterHtml(item.open_date))) + '&db=' + encodeURIComponent(shasra(filterHtml(item.db)))"
                                                fit="contain" :preview-src-list="zyftsrcList">
                                      </el-image>
                                    </div>
                                  </el-image>
                                  <el-image v-else-if="item.wg_img_path" @click="showbigimg(baseURL + '/res?path=' + item.wg_img_path[0])"
                                            style="flex: 2; width: 200px; max-height: 180px; margin: 0 0 0 5px "
                                            :src="baseURL + '/res?path=' + item.wg_img_path[0]"
                                            fit="contain" :preview-src-list="zyftsrcList">
                                    <div slot="error" class="image-solt">
                                      <el-image @click="showbigimg226(item.app_no,item.open_date,item.db)"
                                                style="flex: 2; width: 200px; max-height: 180px; margin: 0 0 0 5px; "
                                                :src="'http://221.194.47.226:8066/Home/SHadsimg1?no=' + encodeURIComponent(shasra(filterHtml(item.app_no))) + '&date=' + encodeURIComponent(shasra(filterHtml(item.open_date))) + '&db=' + encodeURIComponent(shasra(filterHtml(item.db)))"
                                                fit="contain" :preview-src-list="zyftsrcList">
                                      </el-image>
                                    </div>
                                  </el-image>
                                  <el-image v-else @click="showbigimg226(item.app_no,item.open_date,item.db)"
                                            style="flex: 2; width: 200px; max-height: 180px; margin: 0 0 0 5px; "
                                            :src="'http://221.194.47.226:8066/Home/SHadsimg1?no=' + encodeURIComponent(shasra(filterHtml(item.app_no))) + '&date=' + encodeURIComponent(shasra(filterHtml(item.open_date))) + '&db=' + encodeURIComponent(shasra(filterHtml(item.db)))"
                                            fit="contain" :preview-src-list="zyftsrcList">
                                  </el-image>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <!--</div>-->
                      </el-card>
                    </el-main>
                    <el-footer style="padding:5px 0 0 0;height:40px;overflow:hidden;">
                      <el-pagination ref="sresultpage1" id="sresultpage" @size-change="sizeChange"
                                     @current-change="updateCurrent"
                                     :page-size="size"
                                     layout="prev, pager, next"
                                     :total="total_hits">
                      </el-pagination>
                      <!--<el-pagination @size-change="sizeChange"
                                   @current-change="updateCurrent"
                                   :page-sizes="[20, 50, 100, 200]"
                                   :page-size="size"
                                   layout=" prev, pager, next, jumper"
                                   :total="total_hits">
                    </el-pagination>-->
                      <!--<el-pagination @size-change="sizeChange"
                                   @current-change="updateCurrent"
                                   :page-sizes="[20, 50, 100, 200]"
                                   :page-size="size"
                                   layout=" sizes, prev, pager, next, jumper"
                                   :total="total_hits">
                    </el-pagination>-->
                    </el-footer>
                  </el-container>
                </el-aside>
                <el-main class="wrapper" style="padding:0 0px;border-left:solid 1px #EEE">
                  <el-card style="margin-top: 0px;  overflow-y: auto;border:0" shadow="never" id="ipditalmsgcsrd">
                    <p style="font-weight: normal; color: #409eff; margin-left: 0px;font-size:18px;padding:10px 0">
                      <span v-html="detail.title"></span>
                    </p>
                    <template v-if="detail.db.toUpperCase()=='FM'|| detail.db.toUpperCase()=='WG' || detail.db.toUpperCase()=='SYXX' || detail.db.toUpperCase()=='FMSQ'">
                      <span v-if="detail.pdf_path"
                            @click="toPdf(detail.pdf_path)"
                            style="color: #e6a23c; margin-left: 5px; font-size: 13px"
                            class="point">
                        查看全文
                      </span>
                      <span v-else
                            @click="toPdf226(detail.app_no,detail.open_date,detail.db)"
                            style="color: #e6a23c; margin-left: 5px; font-size: 13px;"
                            class="point">
                        查看全文
                      </span>
                      <!--<span
        @click="toPdf226(detail.app_no,detail.open_date,detail.db)"
        style="color: #e6a23c; margin-left: 5px; font-size: 13px;"
        class="point">
    查看全文
  </span>-->
                    </template>
                    <table class="ipmessageone" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">申请号：</td>
                        <td><span v-html="detail.app_no"></span></td>
                        <!--<td><div v-html="detail.app_no"></div></td>-->
                        <td style="white-space:nowrap;text-align:right;" width="1">申请日：</td>
                        <td>{{ detail.app_date }}</td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right" width="1">公开(公告)号：</td>
                        <td><span v-html="detail.open_no"></span></td>
                        <td style="white-space:nowrap;text-align:right" width="1">公开(公告)日：</td>
                        <td>{{ detail.open_date }}</td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">申请人：</td>
                        <td colspan="3">
                          <!--<span style="" :key="tag" v-for="tag in detail.applicant"><template v-if="tag.length>0"><span v-html="tag"></span>;</template></span>-->
                          <span v-html="detail.applicant"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">发明人：</td>
                        <td colspan="3">
                          <!--<span style="" :key="tag" v-for="tag in detail.inventor"><template v-if="tag.length>0"><span v-html="tag"></span>;</template></span>-->
                          <span v-html="detail.inventor"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">联系地址：</td>
                        <td colspan="3"><span v-html="detail.applicant_address"></span></td><!--detail.current_applicant_address-->
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">主分类号：</td>
                        <td colspan="3"><span v-html="detail.main_ipc"></span></td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">分类号：</td>
                        <td colspan="3">
                          <!--<span style="" :key="tag" v-for="tag in detail.ipc"><template v-if="tag.length>0"><span v-html="tag"></span>; </template></span>-->
                          <span v-html="strreplace(detail.ipc)"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">国省代码：</td>
                        <td colspan="3"><span v-html="detail.country_code"></span></td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">代理机构：</td>
                        <td colspan="3">
                          <!--<span style="" :key="tag" v-for="tag in detail.agent_organ"><span v-html="tag"></span>;</span>-->
                          <span v-html="detail.agent_organ"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">代理人：</td>
                        <td colspan="3">
                          <!--<span style="" :key="tag" v-for="tag in detail.agent"><span v-html="tag"></span>;</span>-->
                          <span v-html="detail.agent"></span>
                        </td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">国际申请：</td>
                        <td colspan="3"><span v-html="detail.i_application"></span></td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">国际公布：</td>
                        <td colspan="3"><span v-html="detail.i_publication"></span></td>
                      </tr>
                      <tr>
                        <td style="white-space:nowrap;text-align:right;" width="1">进入国家日期：</td>
                        <td colspan="3"><span v-html="detail.date_entry"></span></td>
                      </tr>
                      <tr>
                        <td colspan="4" style="text-align:left">
                          <div style="width:100%;padding:5px 0">摘要：</div>
                          <div><span v-html="detail.abstract"></span></div>
                        </td>
                      </tr>
                      <template v-if="detail.app_type!='外观设计'">
                        <tr>
                          <td colspan="4" style="text-align:left">
                            <div style="width:100%;padding:5px 0">主权项：</div>
                            <!--<div>{{ detail.first_claim }}</div>-->
                            <div style="line-height:150%" v-html="detail.first_claim"></div>
                          </td>
                        </tr>
                      </template>
                      <template v-if="detail.db =='FM' ||detail.db =='FMSQ' ||detail.db =='SYXX' ||detail.db =='WG'">
                        <tr>
                          <td colspan="4" style="line-height:200%">
                            <div style="width: 100%; height: 30px;">
                              <ul style="list-style:none">
                                <li style="float:left;font-size:14px;font-weight:bold">法律状态：</li>
                                <li style="float:right"><el-button type="primary" size="mini" plain @click="showflzt($event)">查看</el-button></li>
                              </ul>
                            </div>
                            <el-timeline>
                              <el-timeline-item v-for="item in legallist" placement="top">
                                <el-card shadow="never">
                                  <el-row>
                                    <el-col :span="12">
                                      <span style="font-weight:bold">法律状态公告日：</span>{{item.lawdate}}
                                    </el-col>
                                    <el-col :span="12">
                                      <span style="font-weight:bold">法律状态类型：</span>{{item.lawtype}}
                                    </el-col>
                                  </el-row>
                                  <el-row>
                                    <span style="font-weight:bold">法律状态信息：</span>
                                    <p v-html="item.note"></p>
                                  </el-row>
                                </el-card>
                              </el-timeline-item>
                            </el-timeline>
                          </td>
                        </tr>
                      </template>
                      <template v-if="detail.app_type!='外观设计' && (detail.db =='FM' ||detail.db =='FMSQ' ||detail.db =='SYXX' ||detail.db =='WG' )">
                        
                        <tr>
                          <td colspan="4">
                            <div style="width:100%;height:30px;">
                              <ul style="list-style:none">
                                <li style="float:left;font-size:14px;font-weight:bold">代码化全文：</li>
                                <li style="float:right"><el-button type="primary" size="mini" plain @click="showftext($event)">查看</el-button></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <template v-if="showfulltext">
                          <tr>
                            <td colspan="4" style="text-align:left">
                              <div style="width:100%;padding:5px 0">权利要求：</div>
                              <div style="line-height:150%" v-html="fulltext.claim"></div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="4" style="text-align:left">
                              <div style="width:100%;padding:5px 0">说明书：</div>
                              <div style="line-height:150%" v-html="fulltext.description"></div>
                            </td>
                          </tr>
                        </template>
                      </template>
                    </table>
                    <!-- 							<div style="width: 100%;text-align: center;margin-top: 10px;">
                    <el-button type="primary">打印</el-button>
                    <el-button>返回</el-button>
                  </div> -->
                  </el-card>
                </el-main>
              </el-container>
              <div v-else-if="!loading" style="width:100%">
                <div style="padding:50px 0;width:60%;margin:auto;text-align:left">
                  <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="1" style="padding:0 10px 0 0" height="50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ff6a00" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z" />
                        </svg>
                      </td>
                      <td>
                        <p style="font-size:20px;">抱歉，没有检索到任何数据。</p>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" style="line-height:200%;font-size:16px;white-space:nowrap">
                        <p>请您查看以下几点：</p>
                        1. 请查看关键词是否有误<br />
                        2. 请尝试缩减关键词内容，去掉一些字词<br />
                        3. 请查看逻辑关系是否正确<br />
                        4. 请查看关键词中是否有特殊含义的字符如小括号：()，逻辑词：and,or,not,to等
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div v-else-if="list.code" style="width:100%">
                <div style="padding:50px 0;width:60%;margin:auto;text-align:left">
                  <table style="width:100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="1" style="padding:0 10px 0 0" height="50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ff6a00" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z" />
                        </svg>
                      </td>
                      <td>
                        <p style="font-size:20px;">{{list.msg}}</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
    <!--<el-slider v-model="value3" :show-tooltip="false" style="position:absolute;z-index:9999;top:50%;width:100%" max="1000"></el-slider>-->

    <el-dialog title="请输入验证码继续浏览！"
               :visible.sync="dialogVisible"
               width="300px">
      <table border="0" cellspacing="0" cellpadding="0" style="margin:auto">
        <tr>
          <td style="padding:0 3px" valign="top">
            <img :src="vcodeurl" style="height:40px;width:100%;border:0" @click="getvcode()" alt="点击刷新验证码" />
          </td>
          <td width="50%" style="padding:0 3px" valign="top">
            <el-input v-model="inputvcode" placeholder="请输入内容" @input="changeinput($event)"></el-input>
          </td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="updateSearch()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { baseURL } from "../api/base.js";
  import {
    search,
    search_result,
    statistic,
    download_text,
    fav_list_add,
    getvcodemsg,
    fav_list,
    getftflztmsg,
  } from "../api/search.js";
  import {
    search_ftlegal,
  } from "../api/search226.js";
  import axios from "axios";
  import { allcountryfl2cn, allcountrycn2fl } from "../assets/country.js";
  import { Main } from "element-ui";
  import { decryptDes, encryptCBC } from '../api/rssha.js';
  let Base64 = require("js-base64").Base64;
  export default {
    data() {
      return {
        baseURL: baseURL,
        countries: [],
        allcountryfl2cn: [],
        allcountrycn2fl: [],
        first: 1,
        data: [],
        props: {
          label: "name",
          isLeaf: "isLeaf",
        },
        expr: localStorage.getItem("expr"),
        ascending: false,
        checkList: [],
        app_no_list: [],
        pdf_list: [],
        mySort: "",
        size: 20,
        page: "1",
        loading: false,
        list: {
          result: [],
          return_hits: 0,
          total_hits: 0,
        },
        detail: {},
        picture: require("../assets/index.png"),
        selectagain: "PNM",
        zyftsrcList: [],
        activeNames: ['COUN'],
        total_hits: 0,
        legallist: [],
        fulltext: {},
        showfulltext: false,
        totlepage: 1,
        vcodeurl: null,
        dialogVisible: false,
        vcodeuuid: '',
        username: localStorage.getItem("username"),
      };
    },
    mounted() {
      try {
        document.getElementById("thishomediv").style.height = (document.body.clientHeight - 60) + '.px';
      } catch (e) { }
      try {
        window.onresize = () => {
          document.getElementById("thishomediv").style.height = (document.body.clientHeight - 60) + '.px';
        }
      } catch (e) { }
      this.loading = true;
      var id = localStorage.getItem("search");
      var isnew = localStorage.getItem("isnew");
      var query = {};
      query.id = id;
      console.log(query);
      search_result(query).then((res) => {

        console.log(res);
        this.list = res;
        this.loading = false;
        if (isnew == 1) {
          var history = localStorage.getItem("history");
          localStorage.setItem(
            "history",
            history + "@" + res.total_hits + "@" + query.id
          );
          localStorage.setItem("isnew", 0);
        }
        this.detail = this.list.result[0];
        //alert(JSON.stringify(this.detail.db));
        try {
          if (this.detail.agent_organ.length == 1 && this.detail.agent_organ[0] == '') {
            this.detail.agent_organ = [];
          }
          if (this.detail.agent.length == 1 && this.detail.agent[0] == '') {
            this.detail.agent = [];
          }
        }
        catch (e) { }
        this.showfulltext = false;
        //this.legallist = this.list.result[0].raw_law_stats;
        //this.fulltext.claim = this.list.result[0].claim;
        //this.fulltext.description = this.list.result[0].description;
        this.zyftsrcList = [''];
        this.total_hits = this.list.total_hits;
        //alert(this.total_hits);
        this.settotlepage();
      });
      console.log(localStorage.getItem("expr"));
      this.dragControllerDiv();
      this.lastli();
    },
    methods: {
      strreplace(s1) {
        return s1.split(';').join('; ');
      },
      changeinput(e) {
        this.$forceUpdate();
      },
      filterHtml(val) {
        //alert(val);
        return val.replace(/<[^>]+>/g, '');//去除文字的<...></...>标签
      },
      handleChange: function (val) {
        //console.log(val);
        //alert(this.activeNames[val[val.length - 1]]);
      },
      dragControllerDiv: function () {
        var resize = document.getElementById('mousepull');
        var pageleftcard = document.getElementById('pageleftcard');
        resize.onmousedown = function (ev) {
          var ev = ev || event;
          var x1 = ev.clientX;
          var l = resize.offsetLeft;
          document.onmousemove = function (ev) {
            var ev = ev || event;
            var x2 = ev.clientX;
            var x = x2 - x1;
            var ls = x + l;
            if (ls < 100) { ls = 100; }
            pageleftcard.style.width = ls + 'px';
          }
          document.onmouseup = function (ev) {
            document.onmousemove = null;
          }
        }
      },
      showbigimg(imgurl) {
        //alert(imgurl)
        this.zyftsrcList = [imgurl];
      },
      showbigimg226(no, date, db) {
        //alert(imgurl)
        try {
          no = this.filterHtml(no);
          date = this.filterHtml(date);
          db = this.filterHtml(db);
        } catch (e) { }
        this.zyftsrcList = ["http://221.194.47.226:8066/Home/SHadsimg1?no=" + encodeURIComponent(this.shasra(no)) + "&date=" + encodeURIComponent(this.shasra(date)) + "&db=" + encodeURIComponent(this.shasra(db))];
      },
      errorimg(no, date, db,thisevent) {
        try {
          no = this.filterHtml(no);
        } catch (e) { }
        //alert(JSON.stringify(thisevent));
      },
      judgels(t, t1) {
        if (t == t1) { return true; }
        return false;
      },
      getOut() {
        var query = {};
        query.id = localStorage.getItem("search");
        query.app_no = this.app_no_list;
        query.with_fulltext = false;
        if (this.app_no_list.length == 0) {
          alert('请选择需要导出的专利！');
          return;
        }
        //alert(query.app_no);
        //return;
        this.loading = true;
        axios({
          method: "post",
          url: this.baseURL + "/res/export_excel",
          data: query
        }).then((res) => {
          console.log(res.data);
          const link = document.createElement("a");
          // res = "\ufeff" + res
          let blob = new Blob([res.data], {
            type: "application/zip,charset=UTF-8",
          });
          link.style.display = "none";
          //link.href = URL.createObjectURL(blob);
          link.href = this.baseURL + "/common/download/?delete=false&fileName=" + res.data.msg;
          const timestr = this.gettimestr();
          link.download = timestr + ".xlsx"; //下载的文件名
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          this.loading = false;
        });
        //this.pdf_list.forEach((item) => {
        //  this.toPdf(item);
        //});
      },
      getsave() {
        var query = {};
        var records = [];
        this.app_no_list.forEach(itemsave => {
          this.list.result.forEach(itemlist => {
            if (itemsave == this.filterHtml(itemlist.app_no)) {
              records.push({ "app_no": itemsave, "country": itemlist.db, "open_no": itemlist.open_no });
            }
          });
        });
        //alert(JSON.stringify(records)); return;
        if (records.length == 0) {
          alert('请选择需要收藏的专利！');
          return;
        }
        query.records = records;
        query.username = this.username;
        //alert(query.app_no);
        //return;
        //alert(JSON.stringify(query)); return;
        this.loading = true;
        fav_list_add(query).then((res) => {
          //alert(JSON.stringify(res));
          this.loading = false;
          if (res.success) {
            this.$message.success('操作成功');
          }
          if (res.code != undefined) {
            alert(res.msg);
          }
        });
        return;
        axios({
          method: "post",
          url: this.baseURL + "/patent/fav_list_add",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: query,
        }).then((res) => {
          this.loading = false;
        });
      },
      gettimestr() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const month1 = (month < 10) ? ("0" + month) : month;
        const day1 = (day < 10) ? ("0" + day) : day;
        const hour1 = (hour < 10) ? ("0" + hour) : hour;
        const minute1 = (minute < 10) ? ("0" + minute) : minute;
        const second1 = (second < 10) ? ("0" + second) : second;
        return year + '' + month1 + '' + day1 + '' + hour1 + '' + minute1 + '' + second1;
      },
      changeinput(e) {
        this.$forceUpdate();
      },
      getAll(val) {
        if (val) {
          this.list.result.forEach((item) => {
            if (this.app_no_list.indexOf(item.app_no) == -1) {
              this.app_no_list.push(item.app_no);
            }
            if (this.pdf_list.indexOf(item.pdf_path) == -1) {
              this.pdf_list.push(item.pdf_path);
            }
          });
        }
        else {
          this.app_no_list = [];
          this.pdf_list = [];
        }
        console.log(this.app_no_list);
      },
      loadNode(node, resolve) {
        if (this.first == 1) {
          var data = [
            {
              name: "已选择的国家和地区",
              value: "COUN",
            },
            {
              name: "公开年份",
              value: "PD",
            },
            {
              name: "申请年份",
              value: "AD",
            },
            {
              name: "主申请人",
              value: "PPA",
            },
            {
              name: "主发明人",
              value: "PIN",
            },
            {
              name: "主分类部",
              value: "PIC1",
            },
            {
              name: "主分类大类",
              value: "PIC2",
            },
            {
              name: "主分类小类",
              value: "PIC3",
            },
            {
              name: "主分类大组",
              value: "PIC4",
            },
            {
              name: "主分类小组",
              value: "PIC5",
            },
            {
              name: "外观分类",
              value: "PIC",
            },
            {
              name: "代理机构",
              value: "AGC",
            },
            {
              name: "代理人",
              value: "AGT",
            },
            {
              name: "法律状态",
              value: "LS",
            },
          ];
          this.first = 2;
          return resolve(data);
        } else if (this.first == 2) {
          var query = {};
          query.id = localStorage.getItem("search");
          query.field = node.label;
          if (node.label == '已选择的国家和地区') { query.field = "专利库"; }
          query.size = 20;
          if (node.label == '申请年份' || node.label == '公开年份' || node.label == '已选择的国家和地区' || node.label == '专利库'
            || node.label == '法律状态' || node.label == '主分类部') { query.size = 100; }
          var nn = 1;
          //alert(JSON.stringify(query));
          statistic(query).then((res) => {
            if (res.categories) {
              var sss = [];
              //alert(JSON.stringify(res.categories));
              res.categories.forEach((item) => {
                //alert(JSON.stringify(item));
                item.isLeaf = true;
                item.type = node.label;
                item.value = node.data.value;
                if (item.name.length > 0) {
                  if (item.count > 0) {
                    if (node.label == '主分类部') {
                      if (item.name.length == 1 && (item.name == 'A' || item.name == 'B' || item.name == 'C'
                        || item.name == 'D' || item.name == 'E' || item.name == 'F' || item.name == 'G' || item.name == 'H')) {
                        sss.push(item);
                      }
                    }
                    else if (node.label == '法律状态') {
                      if (item.name != '解析失败') {
                        sss.push(item);
                      }
                    }
                    else if (node.label == '专利库' || node.label == '已选择的国家和地区') {
                      var fffitem = allcountryfl2cn.filter(ssitem => ssitem.name == item.name);
                      if (fffitem.length == 0) { sss.push(item); }
                      else {
                        item.name = fffitem[0].value;
                        sss.push(item);
                      }
                    }
                    else {
                      sss.push(item);
                    }
                  } else { }
                }
              });
              if (node.label == '申请年份' || node.label == '公开年份') {
                sss = sss.sort(s => s.name).reverse();
              }
              // console.log(res.categories);
              if (node.label == '专利库' || node.label == '已选择的国家和地区') {
                var sss1 = []; 
                allcountrycn2fl.forEach((item11111) => {
                  var fffitem = sss.find(ddd => ddd.name == item11111.name);
                  if (fffitem && fffitem != undefined) {
                    sss1.push(fffitem);
                  }
                });
                sss = sss1;
              }
              return resolve(sss);
            } else {
              return resolve([]);
            }
          });
        }
      },
      // 二次搜索
      searchAgain(type) {
        var query = {};
        if (this.username != null && this.username != 'guest') {
          query.username = this.username;
        }
        // type=='list'是从左侧进行二次检索的
        if (type == "list") {
          query.is_left = true;
          var list = this.$refs.tree.getCheckedNodes();
          console.log(list);
          var expr = "";
          // 将数据进行合并,同类型数据处理成result里面的参数中
          var result = {
            COUN: [],
            PD: [],
            AD: [],
            PPA: [],
            PIN: [],
            PIC1: [],
            PIC2: [],
            PIC3: [],
            PIC4: [],
            PIC5: [],
            PIC: [],
            AGC: [],
            AGT: [],
            LS: [],
          };
          list.forEach((item) => {
            result[item.value].push(item.name);
          });
          console.log(result);
          // 对合并的数据进行检索式转化,转化规则如下:同类型的用OR 不同类型的用 AND
          for (let index in result) {
            // 国家的直接放入countries参数中
            if (index == "COUN") {
              this.countries = result[index];
            }
            else if (index == "AGC") {
              // 获取同类型用OR的表达式
              var set = "";
              result[index].forEach((item) => {
                item = item.replace('(', '（');
                item = item.replace(')', '）');
                try {
                  var itemarr = item.split(' ');
                  item = itemarr[0];
                }
                catch (e) { }
                if (set == "") {
                  set = item;
                } else {
                  set = set + " OR " + item;
                }
              });
              // 如果本类型的有数据,用AND合并到expr中,注意:expr是最后的数据
              if (set != "") {
                expr = expr + " AND " + index + '=(' + set + ')';
                // if(expr==''){
                // 	expr = index + '=(' + set + ')'
                // }
                // else {
                // 	expr = expr + ' AND ' + index + '=(' + set + ')'
                // }
              }
            }
            else if (index == "LS") {
              var set = "";
              result[index].forEach((item) => {
                if (set == "") {
                  set = item;
                } else {
                  set = set + " OR " + item;
                }
              });
              if (set != "") {
                expr = expr + " AND " + 'LP' + '=(' + set + ')';
              }
            }
            else {
              // 获取同类型用OR的表达式
              var set = "";
              result[index].forEach((item) => {
                if (set == "") {
                  set = item;
                } else {
                  set = set + " OR " + item;
                }
              });
              // 如果本类型的有数据,用AND合并到expr中,注意:expr是最后的数据
              if (set != "") {
                expr = expr + " AND " + index + '=(' + set + ')';
                // if(expr==''){
                // 	expr = index + '=(' + set + ')'
                // }
                // else {
                // 	expr = expr + ' AND ' + index + '=(' + set + ')'
                // }
              }
            }
          }
          query.expr = "(" + this.expr + ")" + expr;
        }
        else if (type == "sagain") {
          var kkk = '';
          if (typeof (this.expragain1) == "undefined") { }
          else { kkk = this.expragain1; }
          if (kkk == '') {
            query.expr = this.expr;
          }
          else {
            var expr = this.selectagain + "=(" + kkk + ")";
            query.expr = "(" + this.expr + ") AND " + expr;
          }
        }
        else {
          var kkk = '';
          if (typeof (this.expragain1) == "undefined") { }
          else { kkk = this.expragain1; }
          if (kkk == '') {
            query.expr = this.expr;
          }
          else {
            var expr = this.selectagain + "=(" + this.expragain1 + ")";
            query.expr = expr;
          }
          //query.expr = this.expr;
        }
        //alert(query.expr);
        //return;
        query.is_cross_language = false;
        query.is_include_synonym = false;
        query.is_include_company = false;
        this.checkList.forEach((item) => {
          switch (item) {
            case "中英文检索":
              query.is_cross_language = true;
              break;
            case "同义词检索":
              query.is_include_synonym = true;
              break;
            case "企业名称关联检索":
              query.is_include_company = true;
              break;
          }
        });
        //如果筛选专利库，
        if (this.countries.length > 0) {
          var nnncountry = [];
          this.countries.forEach(item11 => {
            var fffitem = allcountrycn2fl.filter(ssitem => ssitem.name == item11);
            //alert(fffitem)
            if (fffitem.length == 0) { nnncountry.push(item11); }
            else {
              item11 = fffitem[0].value;
              nnncountry.push(item11);
            }
          });
          query.countries = nnncountry.join(',');// localStorage.getItem("countries");
        }
        else {//不筛选专利库，采用原专利库列表
          query.countries = localStorage.getItem("countries");
        }
        query.analysis = false;
        //alert(JSON.stringify(query));
        //return;
        console.log(query.countries);

        //alert(query.countries);
        //return;
        //alert(JSON.stringify(query));
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
            localStorage.setItem("search", res.msg);
            localStorage.setItem("expr", query.expr);
            localStorage.setItem("countries", query.countries);
            this.$message.success("检索中");
            location.reload();
          }
        });
      },
      // 升序降序修改
      ascendingChange() {
        //this.page = 1;
        //alert(this.$refs.sresultpage1.currentPage);
        this.updateSearch();
      },
      // 排序修改
      handleCommand(command) {
        this.mySort = command;
        //this.page = 1;
        //this.$refs.sresultpage1.currentPage = 1;
        this.updateSearch();
      },
      toPdf(pdf) {
        window.open(this.baseURL + "/res?path=" + pdf[0]);
      },
      toPdf226(no, date, db) {
        //this.shasra(no); return;
        //alert(encodeURIComponent(this.shasra(no)));  return;
        try {
          no = this.filterHtml(no);
          date = this.filterHtml(date);
        } catch (e) { }
        window.open("http://221.194.47.226:8066/Home/showfile1?no=" + encodeURIComponent(this.shasra(no)) + "&date=" + encodeURIComponent(this.shasra(date)) + "&db=" + encodeURIComponent(this.shasra(db)));
      },
      toCharts(url) {
        this.$router.push(url);
      },
      getDetail(data) {
        this.detail = data;
        //alert(this.detail.applicant);
        try {
          if (this.detail.agent_organ.length == 1 && this.detail.agent_organ[0] == '') {
            this.detail.agent_organ = [];
          }
          if (this.detail.agent.length == 1 && this.detail.agent[0] == '') {
            this.detail.agent = [];
          }
        }
        catch (e) { }
        this.legallist = [];
        this.fulltext = {};
        this.showfulltext = false;
        //this.legallist = data.raw_law_stats;
        //this.fulltext.claim = data.claim;
        //this.fulltext.description = data.description;
        ipditalmsgcsrd.scrollIntoView();
      },
      // 更新size
      sizeChange(size) {
        this.size = size;
        //this.page = 1;
        this.updateSearch();
      },
      // 更新页码
      updateCurrent(page) {
        this.page = page;
        if (page < 10) {
          this.updateSearch();
        }
        else {
          this.getvcode();
        }
      },
      getvcode() {
        this.inputvcode = '';
        var query = {};
        getvcodemsg(query).then((res) => {
          this.vcodeurl = 'data:image/png;base64,' + res.img;
          this.vcodeuuid = res.uuid;
          this.dialogVisible = true;
        });
      },
      base64ImgtoFile(dataurl, filename = 'file') {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let suffix = mime.split('/')[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], `${filename}.${suffix}`, {
          type: mime
        })
      },
      updateSearch() {
        this.loading = true;
        this.legallist = [];
        this.fulltext = {};
        this.showfulltext = false;
        this.list = [];
        //this.detail = {};
        //return;
        var id = localStorage.getItem("search");
        var query = {};
        query.code = this.inputvcode;
        query.uuid = this.vcodeuuid;
        query.id = id;
        var mysortstr = this.mySort;
        if (mysortstr.indexOf('升序') >= 0) {
          mysortstr = mysortstr.replace('升序', '');
          query.ascending = true;
        }
        else {
          mysortstr = mysortstr.replace('降序', '');
          query.ascending = false;
        }
        if (mysortstr == '相关性') { mysortstr = ''; }
        query.sort = mysortstr;
        //this.page = 1;
        //query.sort = this.mySort;
        //query.ascending = this.ascending;
        query.size = this.size;
        query.from = (this.page - 1) * this.size + 1;
        //alert(query.sort + '|' + query.ascending);
        //return;
        console.log(query);
        this.list = {};
        //this.detail = {};
        //alert(JSON.stringify(query));
        search_result(query).then((res) => {
          //alert(JSON.stringify(res));
          try {
            if (res.code == 500 && res.msg == '验证码错误') {
              alert(res.msg);
              this.getvcode();
              this.loading = false;
              return;
            } else {
              this.dialogVisible = false;
            }
          }
          catch (e) { }
          console.log(res);
          this.list = res;
          this.detail = this.list.result[0];
          try {
            if (this.detail.agent_organ.length == 1 && this.detail.agent_organ[0] == '') {
              this.detail.agent_organ = [];
            }
            if (this.detail.agent.length == 1 && this.detail.agent[0] == '') {
              this.detail.agent = [];
            }
          }
          catch (e) { }
          this.loading = false;
          //if (query.from == 1) {
          //  this.total_hits = res.total_hits;
          //}
          this.legallist = [];
          this.fulltext = {};
          this.showfulltext = false;
          this.settotlepage();
          //this.legallist = this.list.result[0].raw_law_stats;
          //this.fulltext.claim = this.list.result[0].claim;
          //this.fulltext.description = this.list.result[0].description;
        });
      },
      showflzt(obj) {
        //alert(this.detail.app_no);
        var query = {};
        query.type = '3';
        var nohtmlno = this.detail.app_no_encrypt;
        try {
          nohtmlno = this.filterHtml(nohtmlno);
        } catch (e) { }
        query.AppNo = nohtmlno;
        try {
          //alert(JSON.stringify(query));
        }
        catch (e) { alert(e); }
        getftflztmsg(query).then((res) => {
          this.legallist = res.data.data;
        });
        return;
        search_ftlegal(query.type, query.AppNo).then((res) => {
          //alert(JSON.stringify(res));
          this.legallist = res.data.data;
        });
      },
      showftext(obj) {
        var query = {};
        query.type = this.detail.db;
        if (this.detail.db == 'fmsq') {
          query.type = '1';
        }
        else {
          query.type = '2';
        }
        var nohtmlno = this.detail.app_no_encrypt;
        try {
          nohtmlno = this.filterHtml(nohtmlno);
        } catch (e) { }
        query.AppNo = nohtmlno;
        try {
          //alert(JSON.stringify(query));
        }
        catch (e) { alert(e); }
        this.showfulltext = true;
        getftflztmsg(query).then((res) => {
          this.legallist = res.data.data;
        });
        return;
        search_ftlegal(query.type, query.AppNo).then((res) => {
          //try { alert(JSON.stringify(res.data.data)); } catch (e) { alert(e);}
          try {
            this.fulltext = res.data.data[0];
          }
          catch (e) { }
        });
      },
      settotlepage() {
        var tttpage = Math.ceil(this.total_hits / 20);//this.totlepage
        if (this.page < 5) {
          if (tttpage > 7) { tttpage = 7; }
        }
        else {
          if (tttpage > this.page + 3) { tttpage = this.page + 3; }
        }
        this.totlepage = tttpage;
      },
      shasra(sss) {
        //alert(sss);
        try {
          //alert(encryptCBC('CN202110931156.1'));
          var ssssss = encryptCBC(sss);
          return ssssss;
          //alert(ssssss);
          //alert(decryptDes(ssssss));
        }
        catch (e) { alert(e); }
      },
      yujing() {
        alert('您已经成功添加检索式预警！预警频率为【每周】更新。');
      },
    },
  };
</script>
<style>
  html,
  body,
  #app,
  .home,
  .el-container {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .el-container {
    direction: vertical;
  }

  .el-select .el-input {
    /*width: 130px;*/
  }

  .slistch > .el-tree > .el-tree-node > .el-tree-node__content .el-checkbox {
    display: none;
  }

  .el-collapse-item__header {
    height: 30px;
    line-height: 30px;
    background: #E1E1E1;
  }

  .el-slider__runway {
    height: 0px;
  }

  .el-slider__bar {
    height: 0px;
  }

  .ipmessageone {
    width: 95%;
    margin-top: 15px;
    font-size: 14px;
    text-align: left;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
  }

    .ipmessageone td {
      padding: 7px 5px;
      border-bottom: solid 1px #EEE
    }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-input-group__append,
  .el-input-group__prepend {
    /*background-color: #409eff;*/
  }

  .el-card__body {
    padding: 5px 1px 5px 10px;
  }


</style>
<style scoped>

  .form {
    width: 100%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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

  .wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .wrapper::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }

  .wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    border-radius: 0;
    background: rgba(255, 255, 255, 0.1);
  }

  .my-tooltip {
    padding: 2px 3px;
    border-radius: 3px;
    font-size: 10px;
    line-height: 1.6;
    background: pink !important;
  }
</style>


