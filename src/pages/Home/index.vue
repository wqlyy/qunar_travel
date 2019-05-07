<template>
  <div>
    <home-header/>
    <home-swiper :swiperList="swiperList"/>
    <home-icons :iconList="iconList"/>
    <home-recommend :recommendList="recommendList"/>
    <home-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import Ajax from '../../Util/Ajax'
  import {mapState} from 'vuex'

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
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        Ajax.get('/home?city=' + this.city).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        this.swiperList = res.swiperList
        this.iconList = res.iconList
        this.recommendList = res.recommendList
        this.weekendList = res.weekendList
        console.log(res)
      }
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
      console.log('activated')
    }
  }
</script>

<style scoped>

</style>
