//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    animationData: {},
    cardInfoList: [{
     
      cardInfo: {
        cardTitle: '情人节快乐！',
        cardInfoMes: ['趟过爱情河，心中多婆娑。', '翻越爱情山座座，奔赴爱的暖窝。', '面对百态生活，爱情来斟酌。']
      }
    }]
  },
  //事件处理函数
  slidethis: function(e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation= animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function() {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  buythis: function(e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({
      url: '../detail/detail'
    });
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
  }
});
