<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button">
          <div class="button-item">
            <div class="button-content">成都</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button">
          <div class="button-item">
            <div class="button-content">北京</div>
          </div>
          <div class="button-item">
            <div class="button-content">北京</div>
          </div>
          <div class="button-item">
            <div class="button-content">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "list",
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
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
