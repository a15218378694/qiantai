<template>
  <div>
    <div class="goods_det">
      <div class="con">
        <img class="back" @click="back" src="../assets/img/mall/商品详情_slices/Group@2x.png" alt="">
        <img v-if="!isCollect" class="collect" src="../assets/img/mall/商品详情_slices/收藏@2x.png" alt="">
        <img v-else class="collect" src="../assets/img/mall/商品详情_slices/收藏2@2x.png" alt="">
        <img class="shopCart" src="../assets/img/mall/商品详情_slices/购物车@2x.png" alt="">
      </div>

      <div class="header_img">
        <!-- proDetails.detailsImageAdd -->
        <img v-lazy="proDetails.detailsImageAdd" alt="">
      </div>

      <div class="goods_det_det">
        <div class="goods_tit">
          {{proDetails.title}}
        </div>

        <div class="item_price">
          <span class="ground_price">拼团：
            <span class="mod_ground_price">￥</span>{{proDetails.offering_price}}</span>
          <span class="old_price">原价：
            <span class="mod_old_price">￥</span>{{proDetails.original_price}}</span>
        </div>

        <div class="ground_play">
          <div class="tit">
            <span class="play_tit">拼团玩法</span>
            <span class="fanli">(拼团返利 ￥2,000~￥5,000)</span>
            <span class="play_det">玩法详情
              <span>></span>
            </span>
          </div>

          <div class="ground_process">
            <div class="one process">
              <span class="left">
                <img src="../assets/img/mall/商品详情_slices/Group 4@2x.png" alt="">
              </span>
              <span class="right">
                <p>选择商品</p>
                <p>付款开团/参团</p>
              </span>
            </div>
            <div class="two process">
              <span class="left">
                <img src="../assets/img/mall/商品详情_slices/Group 41@2x.png" alt="">
              </span>
              <span class="right">
                <p>邀请并等待</p>
                <p>好友支付参团</p>
              </span>
            </div>
            <div class="three process">
              <span class="left">
                <img src="../assets/img/mall/商品详情_slices/Group 42@2x.png" alt="">
              </span>
              <span class="right">
                <p>数量购完</p>
                <p>即可拼成</p>
              </span>

            </div>
          </div>
        </div>

      </div>

      <div class="grounding">
        <div class="top">
          <div class="left">
            <div class="leftImg"></div>
          </div>
          <div class="center">正在拼团</div>
          <div class="right">
            <router-link to="moreGround">查看更多</router-link>
          </div>
        </div>
        <ground-item :groundInfo="groundInfo" :clock="clock"></ground-item>

      </div>

      <div class="goods_det1">
        <div class="top">
          <div class="left">
            <div class="leftImg"></div>
          </div>
          <div class="center">商品详情</div>
        </div>
        <div class="bot_det">
          <!-- proDetails.productDesc -->

          <img src="../assets/img/mall/商品详情_slices/收藏2@2x.png" alt="">
          <div class="loadMore">
            <button>加载更多</button>
          </div>
        </div>

      </div>

      <div class="hot_goods">
        <div class="top">
          <div class="left">
            <div class="leftImg"></div>
          </div>
          <div class="center">热门商品</div>
        </div>
        <shop-item :hotGoods="proDetails.recProducts"></shop-item>
      </div>

      <div class="goods_con">
        <div class="kefu">客服</div>
        <button class="ground_buy" @click="isShowEven('拼团',2)">
          <p class="ground_pri">￥1</p>
          <p class="groundBtn">发起拼团</p>
        </button>
        <button class="alone_buy" @click="isShowEven('单价',1)">
          <p class="alone_pri">￥4.5</p>
          <p class="aloneBtn">单价购买</p>
        </button>
      </div>

      <div class="goods_guige" v-show="isShow">
        <div class="one">
          <div class="left">
            <img src="../assets/img/mall/guige/3934756966_1131286789.400x400@3x.png" alt="">
          </div>
          <div class="cen">
            <div class="tit">LED灯箱灯条 拉布卡布软膜…</div>
            <div class="pinGround">
              {{buyType}}：￥
              <span>4.3</span>
            </div>
          </div>
          <img class="close" @click="isShowEven('close')" src="../assets/img/mall/guige/关闭@3x.png" alt="">
        </div>

        <!-- <template v-for="(guigesObj, keys,indexss) in guigess">
          <div class="two" :key="indexss">
            <div class="guigeType">{{keys}}</div>
            <template v-for="(guigeObj,guigeIndex) in guigesObj.items">
              <button :key="guigeIndex" class="guigeTypeItem" :class="[guiges.curIndex == guigeIndex ? guigeTypeItemActive : '']" @click="checkGuige(guigeIndex,guigeObj,guigesObj.curIndex)">{{guigeObj.guigeItem}}</button>
            </template>
          </div>
        </template> -->

        <div class="needNum">
          <span>需要数量：</span>
          <input type="text" placeholder="输入数量（1万起）">
          <img v-if="ver > 3" src="../assets/img/mall/guige/提示@3x.png" alt="">
        </div>

        <div class="needNum" v-if="ver <= 3">
          <span>买家留言：</span>
          <input class="liuyan" type="text" placeholder="点击填写买家留言">
        </div>

        <div class="res" v-if="ver > 3">
          <span class="resGuiges">
            <template v-for="(item,index) in checkedGuige">
              <span class="resGuigeItem" :key="index">{{item}}</span>
            </template>
            <img src="../assets/img/mall/guige/Group 23@3x.png" alt="">
          </span>
          <button>添加所选</button>
        </div>

        <div class="sure">
          <!-- <button class="addCart" @click="addCart(goodsId)">加入购物车</button> -->
          <button class="goOrder">确定下单</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import http from "../utils/http";
import api from "../utils/api";
import axios from "axios";
import util from "../utils/util";
import shopItem from "../components/shopItem.vue";

import groundItem from "../components/groundItem.vue";

export default {
  name: "name",
  data: function() {
    return {
      isCollect: false,
      isShow: false,
      buyType: "",
      ver: 4,
      proDetails: {},
      groundInfo: [],
      clock: [],
      checkedGuige: [],
      guigess: {}
    };
  },

  mounted() {
    this.goodsId = this.$route.query.goodsId;

    this.fetchGoodsDet();
    this.fetchGroundItem(); //拿到团购列表商品中的第一项
  },
  components: {
    shopItem,
    groundItem
  },
  methods: {
    isShowEven(buyTypeTit, buy_way) {
      this.isShow = !this.isShow;
      if (buyTypeTit == "close") {
        return;
      }
      this.buyType = buyTypeTit;
      this.fetchGuigeDet(buy_way);
    },
    fetchGuigeDet: async function(buy_way) {
      let params = {
        id: 3,
        buy_way: 1
      };
      const res = await http.get(api.pro, params);
      if (res.data) {
        this.guigess = res.data;
      }
    },
    back() {
      this.$router.go(-1);
    },
    fetchGoodsDet: async function() {
      await http.get(api.pageviews, { id: this.goodsId });

      let params = {
        id: this.goodsId
      };
      const res = await http.get(api.details, params);
      if (res.data) {
        this.proDetails = res.data.proDetails;
      }
    },
    fetchGroundItem: async function() {
      let params = {};
      const res = await http.get(api.groupbooking, params);
      if (res.data) {
        this.groundInfo = res.data.gbookingMessage.splice(0, 1);
        var timeArr = [];
        for (var i = 0; i < this.groundInfo.length; i++) {
          timeArr[i] =
            this.groundInfo[i].statime / 1000 +
            this.groundInfo[i].limtime / 1000;
        }
        this.clock = util.countdownMore(timeArr, this);
      }
    },
    checkGuige(guigeIndex, guigeObj, curIndex) {
      curIndex = guigeIndex;
      this.checkedGuige = [];
      this.checkedGuige.push();
    },
    addCart: async function() {
      let params = [
        {
          pid: "3",
          title: "LED灯箱",
          colour1: "黄色",
          offering_price: "4.5",
          colour2: "白色",
          sizes1: "9cm",
          image: "null",
          sizes2: "6cm",
          powers1: "20w",
          powers2: "60w",
          buynum1: "1000",
          buynum2: "2000",
          buyway: "1",
          cart_num: "2"
        }
      ];
      const res = await http.post(api.addPro, params);
      if (res.data) {
        this.product = res.data.product;
      }
    }
  }
};
</script>

<style scoped lang="less">
.goods_det {
  height: 1.4rem;

  .con {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.3rem;
    .back {
      width: 0.8rem;
      height: 0.8rem;
      float: left;
    }
    .shopCart {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.3rem;
      float: right;
    }
    .collect {
      width: 0.8rem;
      height: 0.8rem;
      float: right;
    }
  }

  .header_img {
    img {
      width: 7.5rem;
      height: 7.5rem;
    }
  }

  .goods_det_det {
    font-size: 0.24rem;
    padding: 0.4rem;
    padding-top: 0.2rem;
    text-align: left;
    background-color: #fff;
    .goods_tit {
      font-size: 0.48rem;
      width: 6.7rem;
      text-align: left;
      background-color: #fff;
    }
    .item_price {
      background-color: #fff;
      height: 0.9rem;
      line-height: 0.9rem;
      .ground_price {
        color: #ff6d00;
        .mod_ground_price {
          font-size: 0.12rem;
        }
      }

      .old_price {
        text-decoration: line-through;
        padding-left: 0.1rem;
        font-size: 0.12rem;
        color: #9e9fa1;
        .mod_old_price {
        }
      }
    }
    .ground_play {
      background-color: #fefaf1;
      width: 6.7rem;
      height: 1.64rem;
      padding: 0 0.2rem;
      .tit {
        height: 0.7rem;
        line-height: 0.7rem;
        .play_tit {
        }
        .fanli {
          margin: 0 0.6rem 0 0.2rem;
          color: #f59044;
        }
        .play_det {
          color: #9e9fa1;
          span {
          }
        }
      }

      .ground_process {
        display: flex;
        color: #9e9fa1;
        .process {
          display: flex;
          .left {
            position: relative;
            img {
              position: absolute;
              width: 0.28rem;
              height: 0.28rem;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-left: 0.4rem;
            padding-right: 0.3rem;
            p {
              flex: 1;
            }
          }
        }
      }
    }
  }

  .grounding {
    padding: 0 0.4rem;
    background-color: #fff;
    margin-top: 0.1rem;
    .top {
      overflow: hidden;
      height: 0.98rem;
      line-height: 0.98rem;
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
        a {
          color: #9e9fa1;
        }
      }
    }
    .bot {
      padding: 0.2rem 0;
      display: flex;
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
          }
          .num {
            color: #9e9fa1;
            font-size: 0.26rem;
          }
        }
        .bott {
          color: #9e9fa1;
          .kill_time {
            color: #ff6d00;
            margin: 0 0.1rem;
          }
          .kucun {
            color: #ff6d00;
            margin: 0 0.1rem;
          }
        }
      }
      .rightt {
        padding: 0.095rem 0;
        .goGround {
          border: 0.01rem solid #42bd56 !important;
          color: #42bd56;
          width: 1.2rem;
          height: 0.58rem;
          line-height: 0.58rem;
          text-align: center;
          border-radius: 0.15rem;
        }
      }
    }
  }
  .goods_det1 {
    background-color: #fff;
    .top {
      overflow: hidden;
      height: 0.98rem;
      line-height: 0.98rem;

      padding-left: 0.4rem;
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
    }
    .bot_det {
      text-align: center;
      .loadMore {
        width: 100%;
        button {
          width: 2.45rem;
          height: 0.64rem;
          margin: 0 auto;
          line-height: 0.64rem;
          color: #fff;
          background-color: #42bd56;
          border-radius: 0.3rem;
        }
      }
    }
  }

  .hot_goods {
    .top {
      background-color: #fff;
      overflow: hidden;
      height: 0.98rem;
      line-height: 0.98rem;

      padding-left: 0.4rem;
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
    }
    .hot_items {
      overflow: hidden;
      margin-bottom: 1.02rem;
      .hot_goods_item {
        width: 50%;
        float: left;
        img {
          width: 3.45rem;
          height: 3.56rem;
        }
        .tit_item {
          text-align: left;
          padding: 0.2rem;
          width: 100%;
          h3 {
            font-size: 0.26rem;
            width: 3.05rem;
          }
          .item_price {
            .ground_price {
              color: #ff6d00;
              .mod_ground_price {
                font-size: 0.12rem;
              }
            }

            .old_price {
              text-decoration: line-through;
              padding-left: 0.1rem;
              font-size: 0.12rem;
              .mod_old_price {
              }
            }
          }
        }
      }
    }
  }

  .goods_con {
    position: fixed;
    bottom: 0;
    color: #7cc688;
    padding-left: 2.82rem;
    overflow: hidden;
    background-color: #fff;
    text-align: center;
    .kefu {
      position: absolute;
      width: 1.19rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      left: 0.28rem;
      top: 0.21rem;
      border: 1px solid #42bd56;
    }
    .ground_buy {
      width: 2.34rem;
      height: 1.02rem;
      padding: 0.07rem 0;
      background-color: #42bd56;
      color: #fff;
      float: right;
      .ground_pri {
      }
      .groundBtn,
      .aloneBtn {
      }
    }
    .alone_buy {
      width: 2.34rem;
      height: 1.02rem;
      padding: 0.07rem 0;
      background-color: #e1f3e2;
      float: right;

      .alone_pri {
      }
      .btn {
      }
    }
  }

  .goods_guige {
    text-align: left;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 3;
    background-color: #fff;
    .one {
      height: 1.6rem;
      position: relative;
      padding: 0.25rem 0.9rem 0.4rem 2.08rem;
      .left {
        position: absolute;
        left: 0.3rem;
        top: -0.3rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      .cen {
        .tit {
          font-size: 0.32rem;
          width: 4.31rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 0.14rem;
          color: rgba(79, 80, 84, 1);
        }
        .pinGround {
          color: #ff6d00;
          font-size: 0.2rem;
          span {
            font-size: 0.3rem;
          }
        }
      }
      .close {
        box-sizing: content-box !important;
        position: absolute;
        padding: 0.3rem;
        right: 0;
        top: 0;
        width: 0.4rem;
        height: 0.4rem;
      }
    }

    .two {
      text-align: left;
      color: rgba(130, 130, 132, 1);
      padding: 0.32rem;
      padding-bottom: 0;
      .guigeType {
        font-size: 0.28rem;
        margin-bottom: 0.15rem;
      }
      .guigeTypeItem {
        font-size: 0.26rem;
        border-radius: 0.05rem;
        border: 0.01rem solid #f0f0f0;
        width: 1.2rem;
        height: 0.6rem;
        line-height: 0.6rem;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 0.2rem;
      }
      .guigeTypeItemActive {
        color: #42bd56;
        border: 0.01rem solid #42bd56;
      }
    }

    // &:last-child {
    //   padding-bottom: 0.32rem;
    // }

    .needNum {
      margin-top: 0.32rem;
      height: 1.06rem;
      padding: 0.16rem 0.3rem;
      border: 0.01rem solid #f0f0f0;
      position: relative;
      span {
        color: #828284;
      }
      input {
        width: 4.44rem;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.1rem;
        border-radius: 0.03rem;
        color: #828284;
      }
      .liuyan {
        border: none;
      }
      img {
        width: 0.36rem;
        height: 0.36rem;
        position: absolute;
        right: 0.3rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .res {
      padding: 0.3rem;
      .resGuiges {
        width: 1.6rem;
        height: 0.5rem;
        position: relative;
        margin: 0.5rem 0.3rem 0.5rem 0;
        background-color: #4f5054;
        color: #fff;
        font-size: 0.2rem;
        padding-left: 0.03rem;
        .resGuigeItem {
          margin-right: 0.03rem;
        }
        img {
          width: 0.2rem;
          height: 0.2rem;
          position: absolute;
          right: 0;
          top: 0;
          transform: translate(50%, -50%);
        }
      }
      button {
        font-size: 0.26rem;
        width: 1.4rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #ffffff;
        background-color: #42bd56;
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
  }
}
</style>
