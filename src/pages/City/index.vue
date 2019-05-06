<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :cities="cities" :hotCities="hotCities"/>
    <city-alphabet :cities="cities"/>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import Ajax from '../../Util/Ajax'

  export default {
    name: "index",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: []
      }
    },
    mounted() {
      this.getCityInfo()
    },
    methods: {
      getCityInfo() {
        Ajax.get('/city').then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
        this.cities = res.cities
        this.hotCities = res.hotCities
        console.log(res)
      }
    }
  }
</script>

<style scoped>

</style>
