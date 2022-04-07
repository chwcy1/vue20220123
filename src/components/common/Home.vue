<template>
    <el-container style="height:100vh">
      <el-header style="padding:0;height:60px;overflow:hidden"><v-head class="head"></v-head></el-header>
      <el-main style="padding:0" class="wrapper">
        <div class="content-box" :class="{'content-collapse':collapse}">
          <div class="content">
            <transition name="move" mode="out-in">
              <keep-alive :include="tagsList">
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
    
    <!-- <v-sidebar></v-sidebar> -->
    
</template>

<script>
    import vHead from "./Header.vue";
    import vSidebar from "./Sidebar.vue";

    export default {
        data() {
            return {
                tagsList: [],
                collapse: false,
                form: {
                    oldpwd: '',
                    newpwd1: '',
                    newpwd2: ''
                },
                formSubmitMessage: {
                    oldpwd: '原密码不能为空',
                    newpwd1: '新密码不能为空',
                    newpwd2: '确认密码不能为空',
                },
                formLabelWidth: '120px',
            };
        },
        components: {
            vHead,
            vSidebar,
        },
        methods: {
            updatePwd() {
                if (this.$checkFormObjectMessage(this.form, this.formSubmitMessage)) {
                    if (this.form.newpwd1 !== this.form.newpwd2) {
                        this.$message.warning("两次密码不一致")
                        return
                    }
                    if (this.form.oldpwd === this.form.newpwd2) {
                        this.$message.warning("不能修改相同的密码")
                        return
                    }
                    let url = localStorage.getItem('ms_username') === 'admin' ? '/core-admin/updatePwd' : '/stu-info/own/password'
                    updatePwd(url, {
                        oldpwd: this.form.oldpwd,
                        newpwd: this.form.newpwd2
                    }).then(() => {
                        this.$message.success("修改成功")
                        localStorage.removeItem('ms_username')
                        this.$store.dispatch('dailog/hideDailog')
                        this.$router.push("/login");
                    })

                }
            },
        }
    };
</script>
<style lang="css">
  .wrapper{
    overflow-y: auto;
    height: 100%;
  }
  .head{
    width: 100%;
    z-index: 20;
  }
  .content{
    /* padding: 20px; */
    /*margin-top: 60px;*/
    /* margin-left: 220px; */
    text-align: center;
  }
  .wrapper::-webkit-scrollbar {/*滚动条整体样式*/
      width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
  }
  .wrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
  }
  .wrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
      border-radius: 0;
      background: rgba(255, 255, 255, 0.1);
  }
</style>
