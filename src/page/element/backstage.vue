<template>
    <el-container style="height: 1000px; border: 1px solid #eee">
        <el-header>
            <div>
                <img width="60px" src="@/assets/img/list/001.png" alt="">
                <span >fish后台</span>
            </div>
            <el-button type="danger">退出</el-button>
        </el-header>
        <el-container>
            <!--侧边栏菜单-->
            <el-aside :width="isCollapse ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <el-menu background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :collapse = "isCollapse"
                         :collapse-transition="isTransition">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="1-1">选项1</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="2-1">选项1</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: "backstage",
    data(){
      return {
        isCollapse: false,
        isTransition: false,
      }
    },
    methods:{
      toggleCollapse(){
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>

<style scoped>
    .toggle-button{
        background-color: #5b636c;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

    .el-header{
        background-color: #545c64;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        font-size: 20px;
    }

    .el-header > div {
        display: flex;
        align-items: center;
    }

    .el-aside{
        background-color: #545c64;
    }
    .el-main{
        background-color: #ffffff;
    }
</style>