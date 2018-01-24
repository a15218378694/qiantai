<template>
  <div>
    <div class="shopCartPage">

      <nav-header>
        <span slot="header">购物车</span>
      </nav-header>

      <div class="shopCartGoods">
        <template v-for="(item,index) in shopCartGoods">
          <v-touch :key="index" v-bind:pan-options="{ direction: 'horizontal', threshold: 100 }" v-on:swipeleft="onSwipeLeft(item)" v-on:swiperight="onSwipeRight(item)" class="goodsItemInfo">
            <div class="infoDet" v-on:click.stop="toGoodsDet">
              <div class="left">
                <img v-if="!item.isSelected" v-on:click.stop="selected(item)" class="sel" src="../assets/img/shopCart/购物车_slices/Oval@2x.png" alt="">
                <img v-else v-on:click.stop="selected(item)" class="sel" src="../assets/img/shopCart/购物车_slices/勾选@2x.png" alt="">
                <img src="../assets/img/订单详情_slices/3934756966_1131286789.400x400@3x.png" alt="">
              </div>
              <div class="right">
                <div class="one">{{item.goodsName}}</div>
                <div class="two">款式：黄色 20cm 20W</div>
                <div class="three">
                  <div class="pri">
                    <span class="priType">原价：</span>
                    <span>￥</span>
                    <span>{{item.oldPrice}}</span>
                  </div>
                  <div class="num">x122</div>
                </div>
                <div class="closeDel" :class="{'tranShow': item.isTranShow}">
                  <span class="del" @click.stop="delGood(item)">删除</span>
                </div>
              </div>
            </div>
          </v-touch>
        </template>
      </div>

      <div class="goPay">
        <span class="left">
          <span class="heji">合计：</span>
          <span class="xiushi">￥</span>
          <span class="totPri">{{totalPrice}}</span>
        </span>
        <span class="right" @click="goPayPri">
          <button>立即支付</button>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import api from "../utils/api";
import http from "../utils/http";

import navHeader from "@/components/navHeader.vue";
var VueTouch = require("vue-touch");
Vue.use(VueTouch, { name: "v-touch" });
export default {
  data: function() {
    return {
      totalPrice: 0,
      shopCartGoods: [
        {
          goodsName: 123,
          isSelected: false,
          oldPrice: 3,
          isTranShow: false
        },
        {
          goodsName: 123,
          isSelected: false,
          oldPrice: 6,
          isTranShow: false
        }
      ]
    };
  },
  mounted() {
    this.comTot();
    this.fetchShopCart()
  },
  computed: {},
  methods: {
    goPayPri() {},
    onSwipeLeft(item) {
      item.isTranShow = true;
    },
    onSwipeRight(item) {
      item.isTranShow = false;
    },
    toGoodsDet() {
      this.$router.push({ path: "goodsDetail" });
    },
    selected(item) {
      item.isSelected = !item.isSelected;
      this.comTot();
    },
    comTot() {
      this.totalPrice = 0;
      this.shopCartGoods.forEach((v, i) => {
        if (v.isSelected) {
          this.totalPrice += v.oldPrice;
        }
      });
    },
    fetchShopCart: async function() {
      const res = await http.get(api.showPro);
      if (res.data) {
        // this.shopCartGoods = res.data
      }
    }
  },
  components: {
    navHeader
  }
};
</script>

<style scoped lang="less">
.shopCartPage {
  .goodsItemInfo {
    text-align: left;
    padding: 0.3rem 0.27rem 0.33rem 0.8rem;
    background-color: #fff;
    position: relative;

    .infoDet {
      overflow: hidden;

      .left {
        float: left;
        margin-right: 0.1rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
        .sel {
          position: absolute;
          left: 0.02rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0.76rem;
          height: 0.76rem;
          padding: 0.2rem;
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

        .closeDel {
          position: absolute;
          top: 0.3rem;
          right: 0;
          transform: translateX(110%);
          background-color: #aaa;
          width: 1.3rem;
          height: 1.6rem;
          transition: transform 0.2s;
          .del {
            width: 1.3rem;
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .close {
            position: absolute;
            right: 0;
            top: 0;
            width: 0.5rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
          }
        }

        .tranShow {
          transform: translateX(0);
        }
      }
    }
  }

  .goPay {
    background-color: #fff;
    height: 1.02rem;
    line-height: 1.02rem;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    font-size: 0.3rem;
    .left {
      float: left;
      width: 4.86rem;
      text-align: right;
      margin-right: 0.3rem;
      .totPri {
        color: rgba(255, 109, 0, 1);
      }
    }
    .right {
      float: right;
      button {
        width: 2.34rem;
        height: 1.02rem;
        background-color: #42bd56;
        color: #fff;
      }
    }
  }
}
</style>