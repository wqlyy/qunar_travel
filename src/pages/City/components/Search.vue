<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style scoped lang="scss">
@import "../../../assets/styles/varibles";
.search{
  height: .72rem;
  background-color: $bgColor;
  padding: 0 .1rem;
  &-input{
    width: 100%;
    padding: 0 .15rem;
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
  }
}
</style>
