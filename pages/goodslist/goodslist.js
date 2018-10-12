// pages/goodslist/goodslist.js
const config = getApp().globalData.config
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslistinfo:[],
    noResult: false,
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.init()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.reload()
  },
  //下拉刷新

  reload(reload) {
    this.setData({
      noResult: false,
      page: 1,
    })
    this.init(reload)
  },
  init(reload) {
    this.getGoodslist(reload)
  },
  // 获取商品
  getGoodslist(reload) {
    if (reload) {
      this.setData({
        page: 1
      })
    }
    wx.request({
      // url: `${config.getgoodslist}`,
      // data: {
      //   page: this.data.page,
      //   sort: 2,
      //   app_key: 'NCtx8w85',
      //   v: '1.0',
      //   cat: 4,
      //   'new':1
      // },
      url: `${config.localhost}`,
      data: {
        page: this.data.page,
        cat: 0,
      },
      success: (res) => {
        let reponse = res.data
        if (reponse.er_code === 10000) {
          let list = reponse.data.list
          console.log(list[0])
          
          if (!utils.isEmptyObject(list)) {
            let page = this.data.page + 1
            this.setData({
              page,
              goodslistinfo: reload ? list : this.data.goodslistinfo.concat(list),
            })
          }
        } else {
            wx.showToast({title: data.msg+""})
        }
      },
      fail: () => {
        wx.showToast({
          title: '网路开小差，请稍后再试',
          icon: 'none',
        })
      },
      complete: () => {
        wx.stopPullDownRefresh()
      },
    })
  },
  onReachBottom() {
    if (!this.data.goodslistinfo.length || !this.data.noResult) {
      this.getGoodslist()
    }
  },
  onShareAppMessage(res) {
    return {}
  },
})







//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })