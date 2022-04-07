<template>
	<div class="header" style="overflow:hidden">
    <div class="logo">
      <!--<p style="padding-right: 20px;cursor:default">{{type==3?company_name:'上海市'}}知识产权（专利信息）公共服务平台检索系统</p>
  <p style="padding:0 10px;"><a href="https://61.129.3.162:2002/wasWeb/index.jsp" style="text-decoration: none; color: #ffffff; ">首页</a></p>
  <p style="padding:0 10px;" v-for="(item,index) in list" :key="index" @click="toPath(item.path)">{{item.name}}</p>-->
      <span style="white-space:nowrap">{{type==3?company_name:'上海市'}}知识产权信息服务平台</span>
      <span style="white-space:nowrap;font-size:14px;"><a href="https://www.shanghaiip.cn/" style="text-decoration: none; color: #ffffff; ">首页</a></span>
      <el-dropdown @command="handleCommandm">
        <span class="el-dropdown-link" style="white-space:nowrap">
          <span style="padding:0;margin:0" @click="toPath('/home')">检索</span><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home"><span style="color: #606266; ">简单检索</span></el-dropdown-item>
          <el-dropdown-item command="form-search"><span style="color: #606266; ">表格检索</span></el-dropdown-item>
          <el-dropdown-item command="high-search"><span style="color: #606266; ">高级检索</span></el-dropdown-item>
          <el-dropdown-item command="legal-search"><span style="color: #606266; ">法律状态</span></el-dropdown-item>
          <el-dropdown-item command="ipc"><span style="color: #606266; ">行业检索</span></el-dropdown-item>
          <el-dropdown-item command="ipc2"><span style="color: #606266; ">外观分类</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;" @click="toPath('/auto_get')">自动提取关键词</span>
      <!--<span style="padding:0;margin:0">
        <span id="drsjspan" style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;" @click="toPath('/upload')">导入数据</span>
      </span>-->
      <span style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;" @click="toPath('/mysql')">公共专利数据库</span>
      <span style="white-space: nowrap; font-size: 14px; color: #ffffff;cursor:pointer;" @click="toPath('/search_list')">检索记录</span>
      <span style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;" @click="toPath('/statistics')">技术统计分析</span>
    </div>
		<div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <!--<div class="btn-fullscreen" @click="handleFullScreen">
    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
      <i class="el-icon-rank"></i>
    </el-tooltip>
  </div>-->
        <!-- 用户头像 -->
        <div class="user-avator">
          <!--<img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">-->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link" id="headerusername">{{username11}}</span>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item command="user">历史检索记录</el-dropdown-item>
      <el-dropdown-item command="user">专题库管理</el-dropdown-item>-->
            <!--<el-dropdown-item command="user">个人中心</el-dropdown-item>-->
            <el-dropdown-item v-if="type==1||type==2||type==3||type==4" command="usercollect">我的收藏</el-dropdown-item>
            <el-dropdown-item v-if="type==4" command="upload">导入数据</el-dropdown-item>
            <!--<el-dropdown-item v-if="type!=0" command="yujing_list">我的预警</el-dropdown-item>-->
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-if="type!=0" style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;margin-left:10px;display:none" @click="toPath('/yujing_list')">我的预警</span>
        <span style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer;margin-left:10px" @click="toPath('/help')">帮助中心</span>
        <span style="white-space: nowrap; font-size: 14px; color: #ffffff; cursor: pointer; margin-left: 10px" @click="toPath('/datarange')">数据范围</span>
      </div>
      <div class="miniMenu">
        <el-dropdown>
          <span class="el-dropdown-link">
            站点目录<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="homelink">
              <a href="https://www.shanghaiip.cn/">首页</a>
            </el-dropdown-item>
            <el-dropdown-item  v-for="(item,index) in list" :key="index"><span @click="toPath(item.path)">{{item.name}}</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
		</div>

	</div>
</template>
<script>
export default {
  data() {
    return {
      company_name: localStorage.getItem("company_name"),
      type: localStorage.getItem("type"),
      username11: localStorage.getItem("username") == null ? 'guest' : localStorage.getItem("username"),
      collapse: false,
      fullscreen: false,
      name: "guest",
      message: 0,
      dialogFormVisible: false,
      list: [
        {
          name: "简单检索",
          path: "/home",
        },
        {
          name: "表格检索",
          path: "/form-search",
        },
        {
          name: "高级检索",
          path: "/high-search",
        },
        {
          name: "法律状态",
          path: "/legal-search",
        },
        {
          name: "行业检索",
          path: "/ipc",
        },
        {
          name: "外观分类",
          path: "/ipc2",
        },
        {
          name: "检索记录",
          path: "/search_list",
        },
        {
          name: "自动提取",
          path: "/auto_get",
        },
        {
          name: "导入数据",
          path: "/upload",
        },
        {
          name: "公共专利数据库",
          path: "/mysql",
        },
        {
          name: "技术统计分析",
          path: "/statistics",
        },
        {
          name: "我的收藏",
          path: "/usercollect",
        },
        {
          name: "我的预警",
          path: "/yujing_list",
        },
      ],
      form: {
        username: "",
        old_password: "",
        new_password: "",
        again_password: "",
      },
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("username");
      return username ? username : this.name;
    },
    // ...mapGetters('dailog',{
    //   isShow:'isShow'
    // })
  },
    mounted() {
    if (localStorage.getItem("type") != "4") {
      this.list.splice(8, 1);
      var obj1 = document.getElementById('drsjspan');
      //obj1.parentNode.removeChild(obj1);
      obj1.style.display = 'none';
    }
  },
  methods: {
    toPath(path) {
      this.$router.push(path);
    },
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("name");
        localStorage.removeItem("username");
        localStorage.removeItem("company_name");
        localStorage.setItem("type", 0);
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        this.$message.success("退出成功");
        //this.$router.push("/login");
        location.href = 'https://www.shanghaiip.cn/';
      } else if (command == "user") {
        //this.form.username = localStorage.getItem("name");
        //this.dialogFormVisible = true;
        this.$router.push('/user');
      } else if (command == "upload") {
        this.$router.push('/upload');
      } else if (command == "usercollect") {
        this.$router.push('/usercollect');
      } else if (command == "yujing_list") {
        this.$router.push('/yujing_list');
      }
    },
    handleCommandm(command) {
      //alert(command)
      this.toPath('/' + command + '');
    },
    submit() {
      if (this.form.new_password != this.form.again_password)
        this.$message.error("前后密码不一致");
      else if (this.form.new_password.length < 6)
        this.$message.error("密码不能少于六位");
      else {
        update_password(this.form).then((data) => {
          console.log(data);
          if (data.code == 0) {
            this.$message.success(data.msg);
            this.$message.warning("请重新登录");
            this.dialogFormVisible = false;
            localStorage.removeItem("name");
            localStorage.removeItem("id");
            localStorage.removeItem("token");
            this.$router.push("/login");
          } else this.$message.error(data.msg);
        });
      }
    },
    // ...mapActions('dailog',[
    //   'hideDailog',
    //   'showDailog'
    // ]),
    // 侧边栏折叠
    // collapseChage() {
    //   this.$router.push('/form-list');
    // },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    showDailog1() {
      alert(12);
    },
  },
};
</script>
<style scoped>
  .header {
    background: #2e74ba;
    /*position: fixed;*/
    box-sizing: border-box;
    height: 60px;
    font-size: 22px;
    color: #fff;
    overflow-y: hidden;
  }

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 60px;
}

  .header .logo {
    float: left;
    display: flex;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: medium;
  }
  .header .logo span{
    padding:0 10px;
  }
  
.miniMenu {
  display: flex;
  margin-left: 20px;
}
.homelink > a {
  text-decoration: none;
  color: #606266;
}
.homelink:hover > a {
  color: #66b1ff;
}
  @media screen and (min-width: 1150px) {
    .miniMenu {
      display: none;
    }

    .header .logo {
      display: block;
    }
  }
@media screen and (max-width: 1150px) {
  .header .logo > span:not(:first-child) {
    display: none;
  }
  .header .logo > div:not(:first-child) {
    display: none;
  }
}

.header-right {
  float: right;
  padding-right: 50px;
  display: flex;
  align-items: center;
}

.header-user-con {
  display: flex;
  height: 60px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
