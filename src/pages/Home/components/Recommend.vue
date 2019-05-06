<template>
  <div class="recommend">
    <div class="recommend-title">热门榜单</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="recommend-item-info">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    props: {
      recommendList: Array
    }
  }
</script>

<style scoped lang="scss">
@import "../../../assets/styles/mixin";
.recommend{
  &-title{
    margin-top: .2rem;
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  &-item{
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .img-wrapper{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
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
      button{
        line-height: .44rem;
        background-color: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top: .16rem;
        color: #fff;
      }
    }
  }
}
</style>
