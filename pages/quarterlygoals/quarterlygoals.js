const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({
  data: {
    tabs: [{
      id: 1,
      name: '第一季度'
    },
    {
      id: 2,
      name: '第二季度'
    },
    {
      id: 3,
      name: '第三季度'
    },
    {
      id: 4,
      name: '第四季度'
    }
    ],
    table: [{
        id: 1,
        name: '工作指标',
        children: [{
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '工作指标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
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
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '健康计划',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
            type: '其他目标',
            year: new Date().getFullYear()
          },
          {
            complete: false,
            content: '',
            importanceLevel: '本季度反省',
            aimMeasures: '',
            quarter: '',
            quarterOrMonthFlag: 'quarter',
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
        type: '本季度创新与收获'
      }
    ],
    changeIndex: 1
  },
  onLoad() {
    this.getUserQuarter()
    this.getUserSummary()
  },

  // tab栏切换
  changeTab(e){
    let {value}=e.currentTarget.dataset
    this.setData({
      changeIndex:value
    })
    this.getUserQuarter()
    this.getUserSummary()
  },

  // 更新季度总结
  async handleReason(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {changeIndex}=this.data
    let data = {
      content: value,
      quarter: changeIndex,
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year: new Date().getFullYear()
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    if(res.data.statusCode==200){
      this.getUserSummary()
    }else{
      wx.showToast({
        title:'更新失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 更新完成状态
  async handleComplete(e){
    let {info}=e.currentTarget.dataset
    let {changeIndex}=this.data
    let data = {
      complete: !info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      quarter: changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
    }
    // 有ID才能选择打勾
    if (info.id) {
      data.id = info.id
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateOrInsertAirms',
        data
      })
      if(res.data.statusCode==200){
        this.getUserQuarter()
      }else{
        wx.showToast({
          title:'更新失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }
  },

  // 更新方法和措施
  async handleMeasures(e,value2){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {changeIndex}=this.data
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: value,
      type: info.type,
      quarter: changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if(res.data.statusCode==200){
      this.getUserQuarter()
    }else{
      wx.showToast({
        title:'更新失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 更新目标内容
  async handleContent(e,value2){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {changeIndex}=this.data
    let data = {
      complete: info.complete,
      content: value,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      quarter: changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if(res.data.statusCode==200){
      this.getUserQuarter()
    }else{
      wx.showToast({
        title:'更新失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  //更新类别信息 
  async handleLevel(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {changeIndex}=this.data
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: value,
      aimMeasures: info.aimMeasures,
      type: info.type,
      quarter: changeIndex,
      userId: wx.getStorageSync('userID'),
      year: info.year
    }
    if (info.id) {
      data.id = info.id
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    if(res.data.statusCode==200){
      this.getUserQuarter()
    }else{
      wx.showToast({
        title:'更新失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取用户季度总结
  async getUserSummary(){
    let {changeIndex}=this.data
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data: {
        quarter: changeIndex,
        userid: wx.getStorageSync('userID'),
        year: new Date().getFullYear()
      }
    })
    if(res.data.statusCode==200&&res.data.result){
      // 初始化数据
      let {reasonArr}=this.data
      reasonArr= [{
          content: '',
          type: '未完成目标的障碍和原因'
        },
        {
          content: '',
          type: '客服障碍的对策和方法'
        },
        {
          content: '',
          type: '本季度创新与收获'
        }
      ]
      let {result}=res.data
      result.forEach(v=>{
        for (let i = 0; i < reasonArr.length; i++) {
          if (v.type == reasonArr[i].type) {
            reasonArr[i] = v
          }
        }
      })
      this.setData({
        reasonArr
      })
    }else{
      wx.showToast({
        title:'获取季度总结失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取用户季度信息
  async getUserQuarter(){
    let {changeIndex}=this.data
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/findAimsByCondition',
      data: {
        quarter: changeIndex,
        userId: wx.getStorageSync('userID'),
        year: new Date().getFullYear()
      }
    })
    if(res.data.statusCode==200&&res.data.otherTarget&&res.data.workIndex){
      // 更新页面数据之前先还原初始数据
      let {table}=this.data
      table= [{
          id: 1,
          name: '工作指标',
          children: [{
              complete: false,
              content: '',
              importanceLevel: '',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '工作指标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '工作指标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '工作指标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '工作指标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
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
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '其他目标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '健康计划',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '其他目标',
              year: new Date().getFullYear()
            },
            {
              complete: false,
              content: '',
              importanceLevel: '本季度反省',
              aimMeasures: '',
              quarter: '',
              quarterOrMonthFlag: 'quarter',
              type: '其他目标',
              year: new Date().getFullYear()
            },
          ]
        }
      ]
      let {otherTarget,workIndex}=res.data
       workIndex.forEach((v, i) => {
          table[0].children[i]=v
          table[0].children.length = 5
        });
      otherTarget.forEach((v, i) => {
        if(v.importanceLevel=='学习计划'){
          table[1].children[0]=v
        }else if(v.importanceLevel=='健康计划'){
          table[1].children[1]=v
        }else if(v.importanceLevel=='本季度反省'){
          table[1].children[2]=v
        }
        table[1].children.length = 3
      });
      this.setData({
        table
      })
    }else{
      wx.showToast({
        title:'获取季度信息失败,请重试',
        icon:'none',
        duration:500
      })
    }
  }
})