<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input"><i class="iconfont">&#xe632;</i>输入城市/景点/游戏主题</div>
    <router-link to="/city">
      <div class="header-right">{{city}}<i class="iconfont">&#xe64a;</i></div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/varibles";
  @import "../../../assets/styles/mixin";

  .header{
    display: flex;
    line-height: $headerHeight;
    background-color: $bgColor;
    color: #fff;
    &-left{
      width: .64rem;
      float: left;
      i{
        display: block;
        text-align: center;
        font-size: .4rem;
      }
    }
    &-input{
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      background-color: #fff;
      border-radius: .1rem;
      color: #ccc;
      padding-left: .2rem;
    }
    &-right{
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
      i{
        font-size: .24rem;
        margin-left: .04rem;
      }
    }
  }
</style>
