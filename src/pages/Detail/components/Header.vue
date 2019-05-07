<template>
  <div class="detail-header">
    <router-link v-show="showAbs" to="/" tag="div" class="detail-header-abs">
      <i class="iconfont">&#xe624;</i>
    </router-link>
    <div :style="opacityStyle" v-show="!showAbs" class="detail-header-fixed">
      <router-link to="/" tag="i" class="iconfont">&#xe624;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail-header",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        let top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/varibles";

  .detail-header {
    &-abs {
      position: absolute;
      left: .1rem;
      top: .1rem;
      width: .8rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      border-radius: .4rem;
      background-color: rgba(0, 0, 0, .8);
      i {
        color: #fff;
        font-size: .4rem;
      }
    }
    &-fixed {
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      background-color: $bgColor;
      font-size: .32rem;
      i {
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        font-size: .4rem;
        color: #fff;
      }
    }
  }
</style>
