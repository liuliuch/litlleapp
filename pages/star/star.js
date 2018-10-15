// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    fatedata:[],
    luckyobject:[],
    index:5,
    array: [
      '摩羯座 12月22 - 01月19日',
      '水瓶座 01月20 - 02月18日',
      '双鱼座 02月19 - 03月20日',
      '白羊座 03月21 - 04月20日',
      '金牛座 04月21 - 05月20日',
      '双子座 05月21 - 06月21日',
      '巨蟹座 06月22 - 07月22日',
      '狮子座 07月23 - 08月22日',
      '处女座 08月23 - 09月22日',
      '天秤座 09月23 - 10月23日',
      '天蝎座 10月24 - 11月22日',
      '射手座 11月23 - 12月21日'
    ],
    objectArray: [{
        id: 0,
        name: '摩羯座',
        img:'/images/star/mojiezuo.jpg'
      },
      {
        id: 1,
        name: '水瓶座',
        img: '/images/star/shuipingzuo.jpg'
      },
      {
        id: 2,
        name: '双鱼座',
        img: '/images/star/shuangyuzuo.jpg'
      },
      {
        id: 3,
        name: '白羊座',
        img: '/images/star/baiyangzuo.jpg'
      },
      {
        id: 4,
        name: '金牛座',
        img: '/images/star/jinniuzuo.jpg'
      },
      {
        id: 5,
        name: '双子座',
        img: '/images/star/shuangzizuo.jpg'
      },
      {
        id: 6,
        name: '巨蟹座',
        img: '/images/star/juxiezuo.jpg'
      },
      {
        id: 7,
        name: '狮子座',
        img: '/images/star/shizizuo.jpg'
      },
      {
        id: 8,
        name: '处女座',
        img: '/images/star/chunvzuo.jpg'
      },
      {
        id: 9,
        name: '天秤座',
        img: '/images/star/tianchengzuo.jpg'
      },
      {
        id: 10,
        name: '天蝎座',
        img: '/images/star/tianxiezuo.jpg'
      },
      {
        id: 11,
        name: '射手座',
        img: '/images/star/sheshouzuo.jpg'
      }
    ],
  },
  getStar:function(){
    var that = this;
    wx.request({
      url: 'https://api.shenjian.io/constellation/today',
      data: {
        appid:'3f06d05c896ec25f1382c40ef26a8ecd',
        constellation: this.data.objectArray[this.data.index]["name"]
      },
      success(res){
        wx.showToast({
          title: ''+res.data.reason,
        })
        let fatedata = res.data.data.fate_data
        fatedata.forEach((item) => {
          item.value = parseInt(item.value.substr(0, 1))
        })
        that.setData({
          info: res.data.data,
          fatedata: fatedata,
          luckyobject: res.data.data.lucky_object

        })
        //let info=res.data.data
        console.log(that.data.info)
        console.log(that.data.fatedata)

      }
    })
  },
  bindPickerChange: function(e) {
    var that= this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log('获取的值为', this.data.objectArray[e.detail.value]["name"])
    that.setData({
      index: e.detail.value
    })
    this.getStar()
  },

  
  onLoad: function(options) {
    this.getStar()
  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function() {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})