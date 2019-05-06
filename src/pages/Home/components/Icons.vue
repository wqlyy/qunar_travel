<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-item" v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      iconList: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/varibles";
  @import "../../../assets/styles/mixin";

  .icons {
    margin-top: .1rem;
    /deep/ .swiper-container {
      height: 0;
      padding-bottom: 50%;
    }
    .icon {
      overflow: hidden;
      height: 0;
      float: left;
      width: 25%;
      padding-bottom: 25%;
      position: relative;
      &-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        img {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      &-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        height: .44rem;
        line-height: .44rem;
        color: $darkTextColor;
        @include ellipsis;
      }
    }
  }
</style>
