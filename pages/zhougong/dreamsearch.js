// pages/zhougong/dreamsearch.js
const config = getApp().globalData.config
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    dreamlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  getdreamlist(searchKey) {
    wx.showNavigationBarLoading();
    wx.request({
      url: `${config.getdreamlist}`,
      data: {
        keyword: searchKey,
        page: this.data.page,
        key: 'a970bba5b2ca460dbcfafefab51e10b3',
        rows: 10
      },
      success: (res) => {
        let reponse = res.data
        if (reponse.error_code === 0) {
          let list = reponse.result

          console.log(list[0]);
          
          wx.hideNavigationBarLoading();
          

          if (!utils.isEmptyObject(list)) {
            let page = this.data.page + 1
            this.setData({
              page,
              dreamlist:this.data.dreamlist.concat(list),
            })
          }
        } else {
          wx.showToast({ title: response.reason + "" })
        }
      },
    })
  },
  onLoad: function (options) {
    var searchKey = options.key;
    this.searchKey = searchKey;
    this.getdreamlist(searchKey);
    console.log(this.data.dreamlist)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    getdreamlist()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  
})
  