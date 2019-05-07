<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" alt="">
      <div class="banner-info">
        <div class="banner-info-title">国色天乡·陆地乐园</div>
        <div class="banner-info-number"><i class="iconfont">&#xe692;</i>43</div>
      </div>
    </div>
    <gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>

<script>
  import Gallary from '../../../components/Gallary'
  export default {
    name: "banner",
    components: {
      Gallary
    },
    data() {
      return {
        showGallary: false,
        imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
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
