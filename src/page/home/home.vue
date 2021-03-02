<template>
  <div id="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-tabs v-model="active" sticky>
          <van-tab :title="'精选 '">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="215">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" width="300"  height="202.5"/>
              </van-swipe-item>
            </van-swipe>

            <van-grid :border="false" >
              <van-grid-item icon="photo-o" text="文字" >
                <van-image src="src/assets/img/icon/01.png" width="30"/>
                  <p class="font-css">行政</p>
               </van-grid-item>
              <van-grid-item icon="photo-o" text="文字" >
                <van-image src="src/assets/img/icon/04.png" width="30"/>
                <p class="font-css">学习</p>
              </van-grid-item>
              <van-grid-item icon="photo-o" text="文字">
                <van-image src="src/assets/img/icon/qyjs.png" width="30"/>
                <p class="font-css">技术</p>
              </van-grid-item>
              <van-grid-item icon="photo-o" text="文字">
                <van-image src="src/assets/img/icon/sjbw.png" width="30"/>
                <p class="font-css">问题</p>
              </van-grid-item>
            </van-grid>
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
              <van-grid :column-num="2">
                <van-grid-item v-for="(image, index) in images2" :key="index" icon="photo-o" text="图片" to="/details" >
                  <van-image
                          width="10rem"
                          height="10rem"
                          fit="contain"
                          :src="image.name"
                  />
                </van-grid-item>
              </van-grid>
            </van-list>
          </van-tab>
          <van-tab :title="'直播 '">
            内容
          </van-tab>
          <van-tab :title="'短视频 '">
            内容
          </van-tab>
          <van-tab :title="'买家秀 '">
            内容
          </van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o">聊天</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
  import Vue from "vue";
  import { Swipe, SwipeItem, Lazyload, Search, Grid, GridItem, Icon, Tab, Tabs, List, Cell, Image as VanImage, Tabbar, TabbarItem } from 'vant';

  Vue.use(Tab).use(Tabs).use(Icon)
     .use(Swipe).use(SwipeItem).use(Lazyload)
     .use(Search).use(Grid).use(GridItem)
     .use(List).use(Cell).use(VanImage)
     .use(Tabbar).use(TabbarItem);

  export default {
    name: "home",
    data() {
      return {
        value: '',
        active: 0,
        list: [],
        loading: false,
        finished: false,
        images2: [
          {name:"src/assets/img/list/001.png"},
          {name:"src/assets/img/list/002.png"},
          {name:"src/assets/img/list/003.png"},
          {name:"src/assets/img/list/004.png"},
          {name:"src/assets/img/list/005.png"},
          {name:"src/assets/img/list/006.png"},
          {name:"src/assets/img/list/007.png"},
          {name:"src/assets/img/list/008.png"},
          {name:"src/assets/img/list/009.png"},
          {name:"src/assets/img/list/010.png"},
          {name:"src/assets/img/list/011.png"},
          {name:"src/assets/img/list/012.png"},
          {name:"src/assets/img/list/013.png"},
          {name:"src/assets/img/list/014.png"},
          {name:"src/assets/img/list/015.png"},
          {name:"src/assets/img/list/016.png"}
        ],
        images: [
          require("@/assets/img/fish.png"),
          require("@/assets/img/fishShow.png"),
          require("@/assets/img/girl.png"),
          require("@/assets/img/girlFish.png")
        ],

      };
    },
    methods: {
      onLoad() {
        let limg = this.images2;
        // 异步更新数据
        // // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          for (let i = 0; i < limg.length; i++) {
            this.list.push("name",limg[i].name);
          }
          // console.log(this.list)
          // 加载状态结束
          this.loading = false;

          //数据全部加载完成
          if (this.list.length >= 16) {
            this.finished = true;
          }
        }, 1000);
      },
    }
};
</script>
<style>
  .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #f7f7f7;
}
  .font-css{
    font-size: 10px;
    color: #646566;
  }
</style>