<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="iconfont header-back">&#xe624;</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/varibles";
  .header{
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    font-size: .32rem;
    color: #fff;
    background: $bgColor;
    &-back{
      position: absolute;
      left: 0;
      top: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
