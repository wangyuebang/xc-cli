<template>
    <div id="details">
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </div>

</template>

<script>
  import Vue from 'vue';
  import { Cell, CellGroup } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);

  export default {
    name: "details",
  }
</script>

<style scoped>

</style>