<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button">
          <div class="button-item">
            <div class="button-content">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button">
          <div
            class="button-item"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button-content">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"  @click="handleCityClick(city.name)" v-for="city of item" :key="city.id">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "list",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
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
.list{
  position: absolute;
  overflow: hidden;
  top:1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  .area{
    .border-topbottom{
      &::after{
        border-color: #ccc;
      }
      &::before{
        border-color: #ccc;
      }
    }
    .title{
      line-height: .54rem;
      background-color: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }
    .button{
      padding: .1rem .6rem .1rem .1rem;
      overflow: hidden;
      &-item{
        width: 33.33%;
        float: left;
      }
      &-content{
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .item-list{
      .border-bottom{
        &::before{
          border-color: #ccc;
        }
      }
      .item{
        line-height: .76rem;
        padding-left: .2rem;
      }
    }
  }
}
</style>
