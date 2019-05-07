<template>
  <div>
    <detail-banner/>
    <detail-header/>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  export default {
    name: "index",
    components: {
      DetailBanner,
      DetailHeader
    },
    mounted() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped lang="scss">
.content{
  height: 50rem;
}
</style>
