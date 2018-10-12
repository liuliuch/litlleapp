// pages/goodslist/goodslist.js
const config = getApp().globalData.config
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dreamlist:[],
    noResult: false,
    page: 1,
    inputvalue:'',
    hot:['梦见蛇','梦见河流','梦见回家','梦见死人','梦见出轨','梦见鬼']
  },
  onLoad: function () {
  },

  getkeyword: function (e) {
    this.setData({
      inputvalue: e.detail.value
    })
  },
  
  // 获取梦数据列表
  getdreamlist(e) {
    wx.navigateTo({
      url: './dreamsearch?key=' + this.data.inputvalue,
    })
  },
  onClickHot: function (event) {
    var item = event.target.dataset.item;
    var searchKey = item;
    wx.navigateTo({
      url: './dreamsearch?key=' + searchKey,
    })
    
  },
})



//   getdreamlist(e) {  
//       success: function(res) {},
//       fail: function(res) {},
//       complete: function(res) {},
//     })



//     wx.request({
//       url: `${config.getdreamlist}`,
//       data: {
//         page: this.data.page,
//         rows: 10,
//         keyword: this.data.inputvalue,
//         key:'a970bba5b2ca460dbcfafefab51e10b3',
//         format: true

//       },
//       success: (res) => {
//         let response = res.data
//         if (response.error_code === 0) {
//           let dreamlist = response.result;
//           // dreamlist:this.data.dreamlist.concat(list);
//           console.log(JSON.stringify(dreamlist[0])+"")
//           console.log(dreamlist[0].content + "")
//           console.log(dreamlist[0].type + "");

          

          
//           // if (!utils.isEmptyObject(list)) {
//           //   let page = this.data.page + 1
//           //   this.setData({
//           //     page,
//           //     dreamlist: list
//           //   })
//           // }
//         } else {
//           wx.showToast({ title: response.reason + "" })
//         }
//       },
//       fail: () => {
//         wx.showToast({
//           title: '网路开小差，请稍后再试',
//           icon: 'none',
//         })
//       },
//     })
//   },
//   onShareAppMessage(res) {
//     return {}
//   },
// })







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