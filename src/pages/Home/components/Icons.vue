<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-item" v-for="(iconList,index) of pages" :key="index">
        <div class="icon" v-for="item of iconList" :key="item.id">
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
    data() {
      return {
        swiperOption: {},
        iconList: [
          {
            id: '0001',
            imgUrl: require('../../../assets/images/nav/n1.png'),
            desc: '景点门票'
          },
          {
            id: '0002',
            imgUrl: require('../../../assets/images/nav/n2.png'),
            desc: '一日游'
          },
          {
            id: '0003',
            imgUrl: require('../../../assets/images/nav/n3.png'),
            desc: '成都必游'
          },
          {
            id: '0004',
            imgUrl: require('../../../assets/images/nav/n4.png'),
            desc: '川剧变脸'
          },
          {
            id: '0005',
            imgUrl: require('../../../assets/images/nav/n5.png'),
            desc: '嗨国庆'
          },
          {
            id: '0006',
            imgUrl: require('../../../assets/images/nav/n6.png'),
            desc: '稻城亚丁'
          },
          {
            id: '0007',
            imgUrl: require('../../../assets/images/nav/n7.png'),
            desc: '游乐场'
          },
          {
            id: '0008',
            imgUrl: require('../../../assets/images/nav/n8.png'),
            desc: '熊猫基地'
          },
          {
            id: '0009',
            imgUrl: require('../../../assets/images/nav/n9.png'),
            desc: '动植物园'
          },
          {
            id: '0010',
            imgUrl: require('../../../assets/images/nav/n10.png'),
            desc: '都江堰'
          }
        ]
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
