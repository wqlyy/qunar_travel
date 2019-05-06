<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="weekend-item-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      weekendList: Array
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixin";
  .weekend{
    &-title{
      line-height: .8rem;
      background-color: #eee;
      text-indent: .2rem;
    }
    &-item{
      .img-wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 37.09%;
        img{
          width: 100%;
        }
      }
      &-info{
        flex: 1;
        padding: .1rem;
        min-width: 0;
        .title{
          line-height: .54rem;
          font-size: .32rem;
          @include ellipsis;
        }
        .desc{
          line-height: .4rem;
          color: #ccc;
          @include ellipsis;
        }
      }
    }
  }
</style>
