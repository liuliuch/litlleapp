Page({
  data: {
    text: "This is page data."  //页面的初始数据
  },
  
  onLoad: function (options) {
    // Do some initialize when page load.监听页面加载

  },
  onReady: function () {
    // Do something when page ready.监听页面初次渲染完成

  },
  onShow: function () {
    // Do something when page show.监听页面显示

  },
  onHide: function () {
    // Do something when page hide.监听页面隐藏
  },
  onUnload: function () {
    // Do something when page close.监听页面卸载
  },
  onPullDownRefresh: function () {
    // Do something when pull down.监听用户下拉动作
  },
  onReachBottom: function () {
    // Do something when page reach bottom.页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // return custom share data when user share.用户点击右上角转发
  },
  onPageScroll: function () {
    // Do something when page scroll.页面滚动触发事件的处理函数
  },
  // onTabItemTap(item) {
  //   console.log(item.index)
  //   console.log(item.pagePath)  
  //   console.log(item.text)
  // },当前是 tab 页时，点击 tab 时触发
  // Event handler.

  // viewTap: function () {
  //   this.setData({
  //     text: 'Set some data for updating view.'
  //   }, function () {
  //     // this is setData callback
  //   })
  // },
  // customData: {
  //   hi: 'MINA'
  // }
})