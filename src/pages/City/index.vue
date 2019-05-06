<template>
  <div>
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"/>
    <city-alphabet @change="handleLetterChange" :cities="cities"/>
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
        hotCities: [],
        letter: ''
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
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    }
  }
</script>

<style scoped>

</style>
