<template>
        <div class="infoDet">
          <div class="left">
            <img src="../assets/img/订单详情_slices/3934756966_1131286789.400x400@3x.png" alt="">
          </div>
          <div class="right">
            <div class="one">LED灯箱灯条 拉布卡布软布软布软布软膜</div>
            <div class="two">款式：黄色 20cm 20W</div>
            <div class="three">
              <div class="pri">
                <span class="priType">原价：</span>
                <span>￥</span>
                <span>4.5</span>
              </div>
              <div class="num">x122</div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style scoped lang="less">
    .infoDet {
      overflow: hidden;

      .left {
        float: left;
        margin-right: 0.1rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      .right {
        float: left;
        .one {
          width: 4.31rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.3rem;
        }
        .two {
          margin: 0.22rem 0;
          color: rgba(158, 159, 161, 1);
          font-size: 0.24rem;
        }
        .three {
          overflow: hidden;

          .pri {
            float: left;
            color: rgba(255, 109, 0, 1);
            span {
              font-size: 0.3rem;
            }
            .priType {
              font-size: 0.2rem;
            }
          }
          .num {
            float: right;
            font-size: 0.26rem;
            padding-top: 0.04rem;
          }
        }
      }
    }
</style>