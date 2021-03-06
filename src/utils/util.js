export default {
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
  },

  dateformat(micro_second) {
    // 秒数
    var second = Math.floor(micro_second / 1000);
    // 小时位
    var hr = Math.floor(second / 3600);

    // 分钟位
    var min = Math.floor((second - hr * 3600) / 60);  

    // 秒位
    var sec = second - hr * 3600 - min * 60; // equal to => var sec = second % 60;

    // 毫秒位，保留2位
    var micro_sec = Math.floor((micro_second % 1000) / 10);

    return [hr, min, sec].map(this.formatNumber);
  },

  countdown(total_micro_second) {
    if (total_micro_second <= 0 || isNaN(total_micro_second)) {
      this.clock = [0, 0, 0].map(this.formatNumber);
      if (this.timer != undefined) {
        clearTimeout(this.timer);
      }
      // timeout则跳出递归
      return;
    } else {
      // 渲染倒计时时钟
      this.clock = this.dateformat(total_micro_second);
    }

    this.timer = setTimeout(() => {
      // 放在最后--
      total_micro_second -= 1000;
      this.countdown(total_micro_second);
    }, 1000);
  },

  remove_array(array, index) {
    for (var i = 0; i < array.length; i++) {
      var temp = array[i];
      if (!isNaN(index)) {
        temp = i;
      }
      if (temp == index) {
        for (var j = i; j < array.length; j++) {
          array[j] = array[j + 1];
        }
        array.length = array.length - 1;
      }
    }
    return array;
  },

  //格式化多个时间戳
  countdownMore(timeArr, that) {
    // 清除定时器
    if (this.timer) {
      clearTimeout(this.timer);
    }
    var times = [];
    timeArr.map(function(v, i) {
      times[i] = (v - new Date().getTime() / 1000) * 1000;
    });
    this.countdowns(that, times);
  },

  /**
   *多个定时器
   */
  countdowns(that, total_micro_seconds) {
    var clock = [];
    for (var i = 0; i < total_micro_seconds.length; i++) {
      var total_micro_second = total_micro_seconds[i];
      if (total_micro_second <= 0 || isNaN(total_micro_second)) {
        clock[i] = [0, 0, 0].map(this.formatNumber);
        // if (that.timer != undefined) {
        //   total_micro_seconds = this.remove_array(total_micro_seconds, i);
        // }
        // timeout则跳出递归
        continue;
      } else {
        clock[i] = this.dateformat(total_micro_second);
      }
    }

    that.clock = clock;

    if (total_micro_seconds.length < 1) {
      if (that.timer != undefined) {
        clearTimeout(that.timer);
      }
    }
    var intervalTime = 1000;
    that.timer = setTimeout(() => {
      var temp_array = [];
      for (var i = 0; i < total_micro_seconds.length; i++) {
        var total_micro_second = total_micro_seconds[i] - 1000;
        temp_array[i] = total_micro_second;
      }
      this.countdowns(that, temp_array);
    }, intervalTime);
  },

  //分页 上拉加载更多
  loadMore(that,callb) {
    if (that.page >= that.totalPage) {
      that.loading = false;
      that.busy = true;
      return;
    }
    that.page++;
    callb(that);
  },
};
