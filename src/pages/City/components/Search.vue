<template>
  <div class="search">
    <div>
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom no-result" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "search",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)
    },
    computed: {
      hasNoData() {
        return !this.list.length
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let key in this.cities) {
            this.cities[key].forEach(value => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    methods: {
      handleCityClick(city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/varibles";

  .search {
    height: .72rem;
    background-color: $bgColor;
    padding: 0 .1rem;
    &-input {
      width: 100%;
      padding: 0 .15rem;
      box-sizing: border-box;
      height: .62rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
    &-content{
      position: absolute;
      top:1.58rem;
      left:0;
      right:0;
      bottom: 0;
      overflow: hidden;
      z-index: 1;
      background-color: #eee;
      .no-result{
        text-align: center;
      }
    }
    &-item{
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background-color: #fff;
    }
  }
</style>
