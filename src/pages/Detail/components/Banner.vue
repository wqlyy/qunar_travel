<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-info-title">{{sightName}}</div>
        <div class="banner-info-number"><i class="iconfont">&#xe692;</i>43</div>
      </div>
    </div>
    <gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>

<script>
  import Gallary from '../../../components/Gallary'
  export default {
    name: "banner",
    components: {
      Gallary
    },
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleGallaryClose() {
        this.showGallary = false
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../../assets/styles/varibles";
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  img{
    width: 100%;
  }
  &-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8));
    &-title{
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    &-number{
      line-height: .32rem;
      height: .32rem;
      margin-top: .14rem;
      padding: 0 .3rem;
      font-size: .24rem;
      border-radius: .2rem;
      background-color: rgba(0,0,0,.8);
      i{
        font-size: .24rem;
        box-sizing: border-box;
        padding-right: .1rem;
      }
    }
  }
}
</style>
