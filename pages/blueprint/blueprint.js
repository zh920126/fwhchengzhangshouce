const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      name: '人生蓝图一'
    },
    {
      name: '人生蓝图2'
    },
    {
      name: '人生蓝图3'
    },
    ],
    arr: [{
        type: '事业'
      },
      {
        type: '财富'
      },
      {
        type: '家庭生活'
      },
      {
        type: '学习成长'
      },
      {
        type: '人际关系'
      },
      {
        type: '健康计划'
      }
    ],
    array: [{
        type: '事业'
      },
      {
        type: '财富'
      },
      {
        type: '家庭生活'
      },
      {
        type: '学习成长'
      },
      {
        type: '人际关系'
      },
      {
        type: '健康计划'
      }
    ],
    cate: [{
        name: ''
      },
      {
        name: '类别'
      },
      {
        name: '序号'
      },
      {
        name: '目标内容'
      },
      {
        name: '方法和措施'
      },
      {
        name: '起止时间'
      },
      {
        name: '完成打勾'
      },
    ],
    cateList: [{
        name: '事业(工作)目标',
        children: [{
            parentType: '事业(工作)目标',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 5,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 6,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 7,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '事业(工作)目标',
            count: 8,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
      {
        name: '财富目标',
        children: [{
            parentType: '财富目标',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '财富目标',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '财富目标',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '财富目标',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
      {
        name: '家庭生活',
        children: [{
            parentType: '家庭生活',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '家庭生活',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '家庭生活',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '家庭生活',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
      {
        name: '学习成长',
        children: [{
            parentType: '学习成长',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '学习成长',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '学习成长',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '学习成长',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
      {
        name: '人际关系',
        children: [{
            parentType: '人际关系',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '人际关系',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '人际关系',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '人际关系',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
      {
        name: '健康计划',
        children: [{
            parentType: '健康计划',
            count: 1,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '健康计划',
            count: 2,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '健康计划',
            count: 3,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          },
          {
            parentType: '健康计划',
            count: 4,
            type: '',
            content: '',
            measures: '',
            startTime: '',
            complete: false
          }
        ]
      },
    ],
    changeIndex: 0,
    completionTime: 3
  },

  // 蓝图1数据更新
  async handleUpdate3(e) {
    // 从event当中获取参数
    let {index} = e.currentTarget.dataset
    let {value} = e.detail
    let {arr}=this.data
    let data = {
      completionTime: 3,
      type: arr[index].type,
      content: value,
      userid: wx.getStorageSync('userID')
    }
    if (arr[index].id) {
      data.id = arr[index].id
    }
    console.log(data)
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateBlueprint',
      data
    })
    console.log(res)
    // 更新成功之后，需要重新获取数据进行页面渲染
    if (res.data.statusCode == 200) {
      this.getUserBlPrint()
    } else {
      uni.showToast({
        title: '更新失败,请重试',
        duration: 500,
        icon: 'none'
      })
    }
  },

  // 进入页面就获取蓝图1的数据
  async getUserBlPrint() {
    let data = {
      completionTime: 3,
      userid: wx.getStorageSync('userID')
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/queryBlueprint',
      data
    })
    if (res.data.message == '查询成功' && res.data.result.content) {
      let userBluePrint = res.data.result.content
      let {arr}=this.data
      // 创建对象进行数据筛选
      userBluePrint.forEach(v => {
        if (v.type == '事业') {
          arr[0] = v
        }
        if (v.type == '财富') {
          arr[1] = v
        }
        if (v.type == '家庭生活') {
          arr[2] = v
        }
        if (v.type == '学习成长') {
          arr[3] = v
        }
        if (v.type == '人际关系') {
          arr[4] = v
        }
        if (v.type == '健康计划') {
          arr[5] = v
        }
      })
      this.setData({
        arr
      })
    } else {
      uni.showToast({
        title: '获取人生蓝图1数据失败,请重试',
        duration: 500,
        icon: 'none'
      })
    }
  },
  onLoad: function (options) {
    this.getUserBlPrint()
  },
})