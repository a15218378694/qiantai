<template>
  <div>
    <div class="groundDetPage">
      <nav-header>
        <span class="orderDetTit" slot="header">拼团详情</span>
      </nav-header>

      <ground-step>
        <img class="step" slot="step1" src="../assets/img/拼团详情-未参团_slices/Group 4@3x.png" alt="">
        <img v-if="groundStatus === 1" class="step" slot="step2" src="../assets/img/拼团详情-未参团_slices/Group 41@3x.png" alt="">
      </ground-step>

      <div class="fanliBox bgcWhite">
        <div class="left">
          <img src="../assets/img/拼团详情-未参团_slices/3934756966_1131286789.400x400@3x.png" alt="">
        </div>
        <div class="right">
          <div class="tit">LED灯箱灯条 拉布卡布软膜拉布卡布软膜拉布卡布软膜</div>
          <div class="item_price">
            <span class="ground_price">拼团：
              <span class="mod_ground_price">￥</span>
              <span class="gro_num">4.3</span>
            </span>
          </div>
          <table cellspacing="0">
            <tr>
              <th></th>
              <th>团长</th>
              <th>营长</th>
              <th>排长</th>
            </tr>
            <tr>
              <td>数量</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>返利</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="detTit">
        <a href="javascript:;">查看订单详情</a>
      </div>

      <div class="killBox bgcWhite">
        <div class="one">
          <img src="" alt=""> 已开团，离拼成还剩
          <span>32</span> 条
        </div>
        <div class="two">
          剩
          <span>{{clock[0]}}</span>:
          <span>{{clock[1]}}</span>:
          <span>{{clock[2]}}</span>自动结束
        </div>
        <div class="three">
          快去邀请好友参团吧！
          <a href="javascript:;">玩法详情</a>
        </div>
      </div>

      <div class="entryGround">
        <div class="top">
          <div class="left">
            <div class="leftImg"></div>
          </div>
          <div class="center">参团人数：10人</div>
          <div class="right">
            剩余库存：
            <span>32.4k</span>条
          </div>
        </div>
        <div class="bot">
          <div class="leftt">
            <img src="../assets/img/mall/商品详情_slices/象涂-商家版@2x.png" alt="">
          </div>
          <div class="centerr">
            <div class="topp">
              <span class="com">欧格星科技</span>
              <span class="num">团长</span>
            </div>
            <div class="bott">
              动态时间 开团
            </div>
          </div>

        </div>
        <div class="bot">
          <div class="leftt">
            <img src="../assets/img/mall/商品详情_slices/象涂-商家版@2x.png" alt="">
          </div>
          <div class="centerr">
            <div class="topp">
              <span class="com">欧格星科技</span>
              <span class="num">团长</span>
            </div>
            <div class="bott">
              动态时间 开团
            </div>
          </div>

        </div>
        <div class="bot">
          <div class="leftt">
            <img src="../assets/img/mall/商品详情_slices/象涂-商家版@2x.png" alt="">
          </div>
          <div class="centerr">
            <div class="topp">
              <span class="com">欧格星科技</span>
              <span class="num">团长</span>
            </div>
            <div class="bott">
              动态时间 开团
            </div>
          </div>

        </div>
      </div>

      <div class="sure">
        <button class="addCart">立即参与</button>
        <button class="goOrder">立即分享</button>
      </div>

    </div>

  </div>
</template>

<script>
import NavHeader from "../components/navHeader.vue";
import GroundStep from "../components/groundStep.vue";
import util from "../utils/util";
export default {
  name: "name",

  data: function() {
    return {
      clock: [],
      groundStatus: 1,
      timer: ""
    };
  },
  mounted() {
    util.countdown(1000000);
    this.changeStatus();
    this.getGroudDet();
  },
  methods: {
    changeStatus() {
      this.groundStatus = this.$route.query.groundStatus;
    },
    getGroudDet: async function() {
      let params = {};
      const res = await http.get(api.finishpay, params);
      if (res.data) {
        this.goodsTypes = res.data.productModel;
      }
    }
  },
  components: {
    NavHeader,
    GroundStep
  }
};
</script>

<style scoped lang="less" >
.groundDetPage {
  .fanliBox {
    padding: 0.3rem;
    overflow: hidden;
    border-bottom: 0.01rem solid #f0f0f0;

    .left {
      float: left;
      margin-right: 0.2rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
    .right {
      float: left;
      .tit {
        width: 4.63rem;
        font-size: 0.3rem;
        color: rgba(79, 80, 84, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      table {
        width: 4.78rem;
        border: 0.01rem solid #dadada;
        th {
          text-align: center;
          background-color: #42bd56;
          color: #fff;
          font-size: 0.24rem;
        }

        td {
          font-size: 0.22rem;
          color: rgba(158, 159, 161, 1);
          border: 0.01rem solid #dadada;
        }
      }
    }
  }

  .detTit {
    height: 0.74rem;
    line-height: 0.74rem;
    color: #9297a3;
    margin-bottom: 0.1rem;
    background-color: #fff;
    text-align: center;
  }

  .killBox {
    padding: 0.21rem 0;
    margin-bottom: 0.01rem;
    text-align: center;
    .one {
      height: 0.6rem;
      line-height: 0.6rem;
      color: rgba(79, 80, 84, 1);
      font-size: 0.3rem;
      img {
      }
      span {
        color: #ff5400;
      }
    }
    .two {
      height: 0.51rem;
      line-height: 0.51rem;
      color: rgba(79, 80, 84, 1);
      font-size: 0.28rem;
      span {
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        width: 0.4rem;
        height: 0.4rem;
        background: rgba(153, 152, 153, 1);
        border-radius: 0.05rem;
      }
    }
    .three {
      height: 0.46rem;
      line-height: 0.46rem;
      a {
        text-decoration: underline;
        color: #59b9e1;
      }
    }
  }
  .entryGround {
    padding: 0 0.4rem;
    background-color: #fff;
    margin-top: 0.1rem;
    .top {
      overflow: hidden;
      height: 0.98rem;
      line-height: 0.98rem;
      border-bottom: 0.01rem solid #f0f0f0;

      .left {
        float: left;
        position: relative;
        width: 0.26rem;
        height: 100%;
        .leftImg {
          width: 0.26rem;
          height: 0.26rem;
          background-color: #000;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .center {
        float: left;
        padding-left: 0.36rem;
      }
      .right {
        float: right;
        span {
          color: #ff6d00;
        }
      }
    }
    .bot {
      padding: 0.2rem 0;
      display: flex;
      border-bottom: 0.01rem solid #f0f0f0;

      .leftt {
        img {
          width: 0.9rem;
          height: 0.9rem;
          margin-right: 0.15rem;
        }
      }
      .centerr {
        flex: 1;
        display: flex;
        flex-flow: wrap;
        flex-direction: column;
        text-align: left;
        .topp {
          text-align: left;
          .com {
            padding-right: 0.15rem;
            font-size: 0.3rem;
            color: rgba(79, 80, 84, 1);
          }
          .num {
            font-size: 0.22rem;
            text-align: center;
            color: rgba(255, 255, 255, 1);
            background-color: #4f5054;
            font-size: 0.26rem;
            display: inline-block;
            vertical-align: middle;
            width: 0.86rem;
            height: 0.42rem;
            line-height: 0.42rem;
            border-radius: 0.05rem;
          }
        }
        .bott {
          color: rgba(79, 80, 84, 1);
          font-size: 0.26rem;
        }
      }
    }
  }

  .sure {
    height: 1.02rem;
    line-height: 1.02rem;
    display: flex;
    font-size: 0.3rem;
    .addCart {
      flex: 1;
      background-color: #e1f3e2;
      color: #7cc688;
    }
    .goOrder {
      flex: 1;
      background-color: #42bd56;
      color: #fff;
    }
  }

  .item_price {
    margin-bottom: 0.14rem;
    text-align: left;
    .ground_price {
      font-size: 0.2rem;
      color: #ff6d00;
      .mod_ground_price {
      }
    }

    .gro_num {
      font-size: 0.3rem;
    }
  }
}
</style>