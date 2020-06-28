const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
Page({
  data: {
    weekDays:['周','天'],
    weekPerformance: [{
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      },
      {
        content: '',
        type: '目标完成情况',
      }
    ],
    reason: [{
        content: '',
        type: '未完成目标的原因及障碍'
      },
      {
        content: '',
        type: '未完成目标的原因及障碍'
      },
      {
        content: '',
        type: '未完成目标的原因及障碍'
      }
    ],
    service: [{
        content: '',
        type: '克服障碍的对策和方法'
      },
      {
        content: '',
        type: '克服障碍的对策和方法'
      },
      {
        content: '',
        type: '克服障碍的对策和方法'
      },
    ],
    harvest: [{
        content: '',
        type: '本周创新与收获'
      },
      {
        content: '',
        type: '本周创新与收获'
      },
      {
        content: '',
        type: '本周创新与收获'
      },
    ],
    weeklyPlan: [{
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },	{
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      },
      {
        content: '',
        type: '本周目标',
        complete: false
      }
    ],
    otherPlan: [{
        type: '学习计划',
        content: '',
        complete: false
      },
      {
        type: '健康计划',
        content: '',
        complete: false
      },
      {
        type: '本周反省',
        content: '',
        complete: false
      }
    ],
    shareArray:[
          {
            type:'1',
            content:''
          },
          {
            type:'2',
            content:''
          },
          {
            type:'3',
            content:''
          },
        ],
    weekDate:[
      {
        name:'周一',
        type:1
      },{
        name:'周二',
        type:2
      },{
        name:'周三',
        type:3
      },{
        name:'周四',
        type:4
      },{
        name:'周五',
        type:5
      },{
        name:'周六',
        type:6
      },{
        name:'周日',
        type:7
      },
    ],
    todayThings:[
          {
            index:1,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:2,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:3,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:4,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:5,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:6,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:7,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:8,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:9,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:10,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:11,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:12,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:13,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:14,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:15,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:16,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          },
          {
            index:17,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          }, {
            index:17,
            complete:false,
            time:'',
            parentType:'今日事项',
            type:'',
            content:''
          }
        ],
    todaySummary:[
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      },
      {
        parentType:'今日总结',
        content:''
      }
    ],
    week: 0,
    year: new Date().getFullYear(),
    month:0,
    days:0,
    time: new Date().getTime(),
    changeIndex:1,
    whichDay:1
  },
  onLoad: function (options) {
    this.getWeek()
    this.getWeeklySummary()
    this.getWeeklyTarget()
    this.getSharePlan()
  },

  // 切换周--天
  async handleChangeTab(e){
    let {index}=e.currentTarget.dataset
    this.setData({
      changeIndex:index
    })
    if(index==0){
      this.getWeeklyTarget()
      this.getWeeklySummary()
      this.getSharePlan()
    }else{
      this.getDateNow()
      this.getDayPlan()
    }
  },

  // 更新日目标完成状态
  async handleComplete2(e){
    let {info}=e.currentTarget.dataset
    let {year,week,whichDay}=this.data
    let data={
      complete:!info.complete,
      content:info.content,
      parentType:info.parentType,
      type:info.type,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+week,
      year:+year,
      whichDay:+whichDay
    }
    if(info.id){
      data.id=info.id
      let res=await app.myAxios({
        method:'post',
        url:'/anonymous/updateDayPlan',
        data
      })
      // console.log(res)
      if(res.data.statusCode==200){
        this.getDayPlan()
      }else{
        wx.showToast({
          title:'更新数据失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }
  },

  // 更新日内容
  async handleUpdateContent(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week,whichDay}=this.data
    let data={
      complete:info.complete,
      content:value,
      parentType:info.parentType,
      type:info.type,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+week,
      year:+year,
      whichDay:+whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.data.statusCode==200){
      this.getDayPlan()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 日计划选择时间
  async bindDateChange(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week,whichDay}=this.data
    let data={
      complete:info.complete,
      content:info.content,
      parentType:info.parentType,
      type:info.type,
      time:value,
      userId:wx.getStorageSync('userID'),
      week:+week,
      year:+year,
      whichDay:+whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.data.statusCode==200){
      this.getDayPlan()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 更新日计划分类
  async handleChangeType(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week,whichDay}=this.data
     let data={
      complete:info.complete,
      content:info.content,
      parentType:info.parentType,
      type:value,
      time:info.time,
      userId:wx.getStorageSync('userID'),
      week:+week,
      year:+year,
      whichDay:+whichDay
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateDayPlan',
      data
    })
    if(res.data.statusCode==200){
      this.getDayPlan()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 下一周
  handleNextWeek(){
    let{week,year,time,changeIndex}=this.data
    if (week + 1 === 53) {
      week = 1
      year++
    }else{
      week++
    }
    time=time+60*60*24*7*1000
    this.setData({
      week,year,time
    })
    if(changeIndex==0){
      this.getWeeklyTarget()
      this.getWeeklySummary()
      this.getSharePlan()
    }else{
      this.getDayPlan()
    }
    this.getDateNow()
},

  // 上一周
  handleLastWeek(){
    let{week,year,time,changeIndex}=this.data
    if (week - 1 === 0) {
      week = 52
      year--
    }else{
      week--
    }
    time=time-60*60*24*7*1000
    this.setData({
      week,year,time
    })
    if(changeIndex==0){
      this.getWeeklyTarget()
      this.getWeeklySummary()
      this.getSharePlan()
    }else{
      this.getDayPlan()
    }
    this.getDateNow()
  },

  // 分享数据更新
  async handleShare(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data={
      content:value,
      type:info.type,
      timeSign:+('' + year + week),
      userid:wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res= await app.myAxios({
      method:'post',
      url:'/anonymous/updateShare',
      data
    })
    if(res.data.statusCode==200){
      this.getSharePlan()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 其他目标完成状态更新
  async handleOtherComplete(e){
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    // console.log(info);
    let data = {
      complete: !info.complete,
      content: info.content,
      timeSign: +('' + year + week),
      type: info.type,
      userid: wx.getStorageSync('userID'),
      id:info.id
    }
    // 必须是里面已经填写了内容的才可以打勾
    if(info.id){
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateWeekPlan',
        data
      })
      let {weeklyPlan}=this.data
      weeklyPlan.forEach(v => {
        if (v.id === info.id) {
          v.complete = !v.complete
        }
      })
      this.setData({
        weeklyPlan
      })
      if(res.data.statusCode==200){
        this.getWeeklyTarget()
      }else{
        wx.showToast({
          title:'更新数据失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }
  },

  // 其他目标更新
  async handleOtherPlan(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data={
      complete: info.complete,
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateWeekPlan',
      data
    })
    if(res.data.statusCode==200){
      this.getWeeklyTarget()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 本周目标完成状态更新
  async handleComplete(e){
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data = {
      complete: !info.complete,
      content: info.content,
      timeSign: +('' + year + week),
      type: info.type,
      userid: wx.getStorageSync('userID'),
      id:info.id
    }
    // 必须是里面已经填写了内容的才可以打勾
    if(info.id){
      let res = await app.myAxios({
        method: 'post',
        url: '/anonymous/updateWeekPlan',
        data
      })
      if(res.data.statusCode==200){
        this.getWeeklyTarget()
      }else{
        wx.showToast({
          title:'更新数据失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }
  },

  // 本周目标更新
  async handleUpdatePlan(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data={
      complete: info.complete,
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateWeekPlan',
      data
    })
    console.log(data);
    console.log(res);
    if(res.data.statusCode==200){
      this.getWeeklyTarget()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 上周总结-本周创新与收获
  async handleHarvest(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data = {
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      year,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    if(res.data.statusCode==200){
      this.getWeeklySummary()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 上周总结-克服障碍的对策和方法
  async handleService(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data = {
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      year,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    if(res.data.statusCode==200){
      this.getWeeklySummary()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 上周总结-未完成目标的原因及障碍
  async handleReason(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data = {
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      year,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method: 'post',
      url: '/anonymous/updateSummarize',
      data
    })
    if(res.data.statusCode==200){
      this.getWeeklySummary()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 上周总结-目标完成情况
  async handleWeekPerformance(e){
    let {value} = e.detail
    let {info}=e.currentTarget.dataset
    let {year,week}=this.data
    let data = {
      content: value,
      timeSign: +('' + year + week),
      type: info.type,
      year,
      userid: wx.getStorageSync('userID')
    }
    if(info.id){
      data.id=info.id
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/updateSummarize',
      data
    })
    if(res.data.statusCode==200){
      this.getWeeklySummary()
    }else{
      wx.showToast({
        title:'更新数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
    
  },

  // 获取时间
  getDateNow(){
    // console.log(this.time)
    let {time,year,month,days,whichDay}=this.data
    let date=new Date(time)
    year=date.getFullYear()
    month=date.getMonth()+1
    days=date.getDate()
    whichDay=date.getDay()
    whichDay=whichDay===0?7:whichDay
    this.setData({
      year,
      month,
      days,
      whichDay
    })
  },

  // 时间转化为周数
  getWeek() {
    let {week,time}=this.data
    let date = new Date(time);
    let beginDate = new Date(date.getFullYear(), 0, 1);
    week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);
    this.setData({
      week
    })
  },

  // 获取分享数据
  async getSharePlan(){
    let {year,week}=this.data
    let data={
      timeSign: +('' + year + week),
      userid:wx.getStorageSync('userID')
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/queryShare',
      data
    })
    if(res.data.statusCode==200&&res.data.result){
      let {result}=res.data
      let {shareArray}=this.data
      shareArray=[
        {
          type:'1',
          content:''
        },
        {
          type:'2',
          content:''
        },
        {
          type:'3',
          content:''
        },
      ],
      result.forEach(v=>{
        shareArray.forEach((value,index)=>{
          if(v.type===value.type){
            shareArray[index]=v
          }
        })
      })
      this.setData({
        shareArray
      })
    }else{
      wx.showToast({
        title:'获取分享数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取周目标数据
  async getWeeklyTarget(){
    let {year,week}=this.data
    let data={
      timeSign: +('' + year + week),
      userid: wx.getStorageSync('userID')
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/queryWeekPlan',
      data
    })
    // console.log(res)
    if(res.data.statusCode==200&&res.data.result){
      // 初始化数据
      let {weeklyPlan,otherPlan}=this.data
      weeklyPlan= [{
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        },
        {
          content: '',
          type: '本周目标',
          complete: false
        }
      ],
      otherPlan= [{
          type: '学习计划',
          content: '',
          complete: false
        },
        {
          type: '健康计划',
          content: '',
          complete: false
        },
        {
          type: '本周反省',
          content: '',
          complete: false
        }
      ]
      let {result} =res.data
      result.forEach((v, i) => {
        if (v.type == '本周目标') {
          weeklyPlan[i] = v
          weeklyPlan.length = 18
        }
        otherPlan.forEach((value,index)=>{
          if(value.type==v.type){
            otherPlan[index]=v
          }
        })
      });
      this.setData({
        weeklyPlan,otherPlan
      })
      console.log(res);
      console.log(weeklyPlan);
      console.log(otherPlan);
    }else{
      wx.showToast({
        title:'获取数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取周总结数据
  async getWeeklySummary() {
    let {year,week}=this.data
    // 获取总结数据
    let data = {
      userid: wx.getStorageSync('userID'),
      timeSign: +('' + year + week),
      year
    }
    let res = await app.myAxios({
      method: 'post',
      url: '/anonymous/querySummarize',
      data
    })
    if (res.data.statusCode==200&&res.data.result) {
      let{result}=res.data
      // 数据还原
      let {weekPerformance,reason,service,harvest}=this.data
      weekPerformance = [{
          content: '',
          type: '目标完成情况',
        },
        {
          content: '',
          type: '目标完成情况',
        },
        {
          content: '',
          type: '目标完成情况',
        },
        {
          content: '',
          type: '目标完成情况',
        },
        {
          content: '',
          type: '目标完成情况',
        },
        {
          content: '',
          type: '目标完成情况',
        }
      ],
        
        reason = [{
            content: '',
            type: '未完成目标的原因及障碍'
          },
          {
            content: '',
            type: '未完成目标的原因及障碍'
          },
          {
            content: '',
            type: '未完成目标的原因及障碍'
          }
        ],
        service = [{
            content: '',
            type: '克服障碍的对策和方法'
          },
          {
            content: '',
            type: '克服障碍的对策和方法'
          },
          {
            content: '',
            type: '克服障碍的对策和方法'
          },
        ],
        harvest = [{
            content: '',
            type: '本周创新与收获'
          },
          {
            content: '',
            type: '本周创新与收获'
          },
          {
            content: '',
            type: '本周创新与收获'
          },
        ]
        let j=0;
        let k=0;
        let l=0;
        let g=0;
      for (let i = 0; i < result.length; i++) {
        if (result[i].type == '目标完成情况') {
          weekPerformance[j]=result[i]
            weekPerformance.length = 6
            j++
        }
        if (result[i].type == '未完成目标的原因及障碍') {
          reason[k]=result[i]
          reason.length = 3
          k++
        }
        if (result[i].type == '克服障碍的对策和方法') {
          service[l]=result[i]
          service.length = 3
            l++
        }
        if (result[i].type == '本周创新与收获') {
          harvest[g]=result[i]
            harvest.length = 3
            g++
        }
      }
      this.setData({
        weekPerformance,reason,service,harvest
      })
      
    }else{
      wx.showToast({
        title:'获取数据失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取日计划数据
  async getDayPlan(){
    let {week,whichDay,year}=this.data
    let data={
      userId:wx.getStorageSync('userID'),
      week:+week,
      whichDay:+whichDay,
      year:+year
    }
    let res=await app.myAxios({
      method:'post',
      url:'/anonymous/findAimsByConditionForDayPlan',
      data
    })
    console.log(data);
    console.log(res);
    if(res.data.statusCode==200&&res.data.result){
      let {result}=res.data
      // 数据初始化
      let {todayThings,todaySummary}=this.data
      todayThings=[
        {
          index:1,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:2,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:3,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:4,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:5,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:6,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:7,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:8,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:9,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:10,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:11,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:12,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:13,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:14,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:15,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:16,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },
        {
          index:17,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        },{
          index:18,
          complete:false,
          time:'',
          parentType:'今日事项',
          type:'',
          content:''
        }
      ],
      todaySummary=[
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        },
        {
          parentType:'今日总结',
          content:''
        }
      ]
      let j=0
      let k=0
        result.forEach((v,i) => {
          if(v.parentType==='今日事项'){
            todayThings[j]=v  
            todayThings.length=18
            j++
          }
          if(v.parentType==='今日总结'){
            todaySummary[k]=v
            todaySummary.length=18
            k++
          }
      })
      this.setData({
        todayThings,todaySummary
      })
    }else{
      wx.showToast({
        title:'获取日计划失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },
})