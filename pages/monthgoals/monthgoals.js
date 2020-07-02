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
    this.getUserQuarter()
    this.getUserSummary()
  },

  // 自选时间
  bindDateChange(e){
    let {value}=e.detail
    let {month,year}=this.data
    month=new Date(value).getMonth()+1
    year=new Date(value).getFullYear()
    this.setData({
      month,year
    })
    this.getUserQuarter()
    this.getUserSummary()
  },

  // 上月
  handleLastMonth(){
    let {month,year}=this.data
    if(month-1==0){
      month=12
      year--
    }else{
      month--
    }
    this.setData({
      month,year
    })
    this.getUserQuarter()
    this.getUserSummary()
},

  //下月
  handleNextMonth(){
    let {month,year}=this.data
    if(month+1==13){
      month=1
      year++
    }else{
      month++
    }
    this.setData({
      month,year
    })
    this.getUserQuarter()
    this.getUserSummary()
  },

  // 更新月度总结
  async handleReason(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {month,year}=this.data
    let data = {
      content: value,
      month,
      type: info.type,
      userid: wx.getStorageSync('userID'),
      year
    }
    if (info.id) {
      data.id = info.id
    }
    this.updateMsg(data)
  },

  // 更新完成状态
  async handleComplete(e){
    let {info}=e.currentTarget.dataset
    let {month,year}=this.data
    let data = {
      complete: !info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month,
      userId: wx.getStorageSync('userID'),
      year
    }
    // 有ID才能选择打勾
    if (info.id) {
      data.id = info.id
      this.updateMsg(data)
    }
  },

  // 更新目标内容
  async handleContent(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {month,year}=this.data
    let data = {
      complete: info.complete,
      content: value,
      importanceLevel: info.importanceLevel,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month,
      userId: wx.getStorageSync('userID'),
      year
    }
    if (info.id) {
      data.id = info.id
    }
    this.updateMsg(data)
  },

  // 更新方法和措施
  async handleMeasures(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {month,year}=this.data
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: info.importanceLevel,
      aimMeasures: value,
      type: info.type,
      month,
      userId: wx.getStorageSync('userID'),
      year
    }
    if (info.id) {
      data.id = info.id
    }
    this.updateMsg(data)
  },

  //更新类别信息
  async handleLevel(e){
    let {info}=e.currentTarget.dataset
    let {value} =e.detail
    let {month,year}=this.data
    let data = {
      complete: info.complete,
      content: info.content,
      importanceLevel: value,
      aimMeasures: info.aimMeasures,
      type: info.type,
      month,
      userId: wx.getStorageSync('userID'),
      year
    }
    if (info.id) {
      data.id = info.id
    }
    this.updateMsg(data)
  },

  // 更新数据
  async updateMsg(data){
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/updateOrInsertAirms',
      data
    })
    console.log(data);
    console.log(res);
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

  // 获取用户月度信息
  async getUserQuarter(){
    let {month,year}=this.data
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/findAimsByCondition',
      data: {
        month,
        userId: wx.getStorageSync('userID'),
        year
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
        }else{
          table[1].children.push(v)
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
  },

  // 获取用户月度总结
  async getUserSummary(){
    let {month,year}=this.data
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data: {
        month,
        userid: wx.getStorageSync('userID'),
        year
      }
    })
    if(res.data.statusCode==200&&res.data.result){
      let {reasonArr}=this.data
      // 初始化数据
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
        title:'获取月总结失败,请重试',
        icon:'none',
        duration:500
      })
    }
  }
})