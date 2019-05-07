<template>
  <div>
    <detail-banner/>
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'

  export default {
    name: "index",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        list: [{
          "title": "成人票",
          "children": [{
            "title": "成人三馆联票",
            "children": [{
              "title": "成人三馆联票 - 某一连锁店销售"
            }]
          }, {
            "title": "成人五馆联票"
          }]
        }, {
          "title": "学生票"
        }, {
          "title": "儿童票"
        }, {
          "title": "特惠票"
        }]
      }
    },
    mounted() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped lang="scss">
  .content {
    height: 50rem;
  }
</style>
