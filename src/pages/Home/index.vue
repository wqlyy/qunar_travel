<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>Test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: "index",
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
