const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({
  data: {
      table: [{
        id: 1,
        name: '工作指标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            month: '',
            type: '工作指标',
            year: new Date().getFullYear()
          },
        ]
      },
      {
        id: 2,
        name: '其他目标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '学习计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '健康计划',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '本季度反省',
            aimMeasures: '',
            month: '',
            type: '其他目标',
            year: new Date().getFullYear()
          },
        ]
      }
    ],
    reasonArr: [{
        content: '',
        type: '未完成目标的障碍和原因'
      },
      {
        content: '',
        type: '客服障碍的对策和方法'
      },
      {
        content: '',
        type: '本月份创新与收获'
      }
    ],
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})