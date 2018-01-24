<template>
  <div class="typeDetPage">
    <nav-header>
      <span class="orderDetTit" slot="header">{{typeText}}</span>
    </nav-header>

    <div class="hot_goods_tit bgcWhite">
      <div class="left">
        <span></span>热门商品
      </div>
      <div class="right">
        <span class="right_item" :class="{ activeType: typeIndex == 0 }" @click="typeIndex = 0">综合</span>
        <span class="right_item" :class="{ activeType: typeIndex == 1 }" @click="typeIndex = 1">销量</span>
        <span class="right_item" :class="{ activeType: typeIndex == 2 }" @click="typeIndex = 2">商品</span>
        <span class="right_item" :class="{ activeType: typeIndex == 3 }" @click="typeIndex = 3">价格
          <img class="sortImg" src="../assets/img/mall/Group 4_slices (1)/Group 4@2x.png">
        </span>
      </div>
    </div>
    <shop-item :hotGoods="product"></shop-item>

  </div>
</template>

<script>
import Vue from "vue";
import http from "../utils/http";
import api from "../utils/api";
import axios from "axios";
import navHeader from "../components/navHeader.vue";
import shopItem from "../components/shopItem.vue";

export default {
  name: "name",
  data: function() {
    return {
      typeText: "",
      imgUrl: "",
      typeIndex: 0,
      product: []
    };
  },
  mounted() {
    this.typeText = this.$route.query.typeText;
    this.cid = this.$route.query.id;
    this.imgUrl = this.$route.query.imgUrl;
    this.fetchTypeDet();
  },
  methods: {
    fetchTypeDet: async function() {
      let params = {
        cid: this.cid,
        groups: 1,
        sort: 2
      };
      const res = await http.post(api.module, params);
      if (res.data) {
        this.product = res.data.product;
      }
    }
  },
  components: {
    navHeader,
    shopItem
  }
};
</script>

<style scoped lang="less">
.hot_goods_tit {
  display: flex;
  height: 0.98rem;
  line-height: 0.98rem;
  padding: 0 0.33rem;
  margin-bottom: 0.2rem;
  .left {
    flex: 1;
    text-align: left;
    padding-left: 0.32rem;
    span {
      display: inline-block;
      width: 0.26rem;
      height: 0.26rem;
      background: rgba(79, 80, 84, 1);
      margin-right: 0.1rem;
    }
  }
  .right {
    flex: 1;
    position: relative;
    .right_item {
      color: rgba(203, 203, 203, 1);
      font-size: 0.26rem;
      width: 0.53rem;
      height: 0.37rem;
      padding-right: 0.15rem;
      .sortImg {
        width: 0.08rem;
        height: 0.22rem;
        position: absolute;
        top: 55%;
        transform: translate(0.15rem, -50%);
        // padding-left: 0.1rem;
      }
    }

    .right_item:last-child {
      padding-right: 0;
    }

    .activeType {
      color: #42bd56;
    }
  }
}
</style>