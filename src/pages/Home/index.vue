<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import Ajax from '../../Util/Ajax'

  export default {
    name: "index",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted() {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        Ajax.get('/home').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        this.city = res.city.length > 3 ? res.city.slice(0, 3) : res.city
        this.swiperList = res.swiperList
        this.iconList = res.iconList
        this.recommendList = res.recommendList
        this.weekendList = res.weekendList
        console.log(res)
      }
    }
  }
</script>

<style scoped>

</style>
