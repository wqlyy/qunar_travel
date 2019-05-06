<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="swiper-item" :key="item.id" v-for="item of swiperList">
        <a href="#">
          <img :src="item.imgUrl" alt="" />
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: require('../../../assets/images/banner/s1.jpg')
        },
        {
          id: '0002',
          imgUrl: require('../../../assets/images/banner/s2.jpg')
        },
        {
          id: '0003',
          imgUrl: require('../../../assets/images/banner/s3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 26.6666%;//相对于宽度的宽高比
  background-color: #eee;
  /deep/ .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .swiper-item{
    img{
      width: 100%;
    }
  }
}

</style>
