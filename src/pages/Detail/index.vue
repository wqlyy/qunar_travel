<template>
  <div>
    <detail-banner/>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  export default {
    name: "index",
    components: {
      DetailBanner
    },
    mounted() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped lang="scss">

</style>
