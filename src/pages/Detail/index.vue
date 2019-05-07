<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"/>
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
  import Ajax from '../../Util/Ajax'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        lastId: '',
        sightName: '',
        bannerImg: '',
        list: [],
        gallaryImgs: []
      }
    },
    mounted() {
      // this.getDetailInfo()
    },
    methods: {
      getDetailInfo() {
        let id = this.$route.params.id
        Ajax.get('/info', {
          params: {id}
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res) {
        this.sightName = res.sightName
        this.bannerImg = res.bannerImg
        this.list = res.categoryList
        this.gallaryImgs = res.gallaryImgs
        console.log(res)
      }
    },
    activated() {
      this.getDetailInfo()
    }
  }
</script>

<style scoped lang="scss">
  .content {
    height: 50rem;
  }
</style>
