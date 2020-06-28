const app = getApp();
import regeneratorRuntime from '../../lib/runtime';
//Page Object
Page({
  data: {
    userDream: [{
      name: '人生蓝图',
      url: '/pages/blueprint/blueprint'
    },
    {
      name: '季度目标',
      url: '/pages/quarterlygoals/quarterlygoals'
    },
    {
      name: '月度目标',
      url: '/pages/monthygoals/monthygoals'
    },
    {
      name: '周目标',
      url: '/pages/weekgoals/weekgoals'
    }
  ],
  userMsg:{},
  userInfo:{},
  },
  // 获取用户授权
  async handleGetUserInfo(e){
    console.log(e)
    if(e.detail.errMsg.includes('ok')){
      let {encryptedData,iv,signature,userInfo}=e.detail
      this.setData({
        userMsg:userInfo
      })
      try{
        // 发起登录请求获取code
        let code=await this.userLogin()
        console.log(code);
        // 获取openid
        let res=await this.getUserOpenid(code)
        console.log(res);
        // 将用户的唯一标识存起来
        wx.setStorageSync('userID',res.data.openid)
        // 将用户信息存储到本地
        wx.setStorageSync('userMsg',userInfo)
      }catch(error){
        wx.showToast({
          title:'登录失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }
  },

  // 获取用户的openId
  getUserOpenid(code){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:`https://api.weixin.qq.com/sns/jscode2session?appid=wx316e402fbca1c4fb&secret=d4358b7320c9452581e1fa94b88b5e36&js_code=${code}&grant_type=authorization_code`,
        success(res) {
          resolve(res)
        }
      })
    })
  },

  // 微信登录
  userLogin(){
    return new Promise((resolve, reject) => {
       wx.login({
         success: result => {
           resolve(result.code);
         }
       });
     });
   },

  //更新用户邮箱
  async handleUserEmail(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    if(wx.getStorageSync('userID')){
        let data={
          address:info.address,
          email:value,
          mobile:info.mobile,
          name:info.name,
          qqNumber:info.qqNumber,
          userid:wx.getStorageSync('userID'),
          wechatNumber:info.wechatNumber
        }
        let res=await app.myAxios({
          method:'post',
          url:'/anonymous/updateUserInfo',
          data
        })
        if(res.data.statusCode===200){
          let {userInfo}=this.data
          delete data.userid
          // 更新视图
          this.setData({
            userInfo:data
          })
      }else{
        wx.showToast({
          title:'请输入正确的11位手机号',
          icon:'none',
          duration:500
        })
      }
    }else{
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:500
      })
    }
  },

  //更新用户微信号
  async handleUserWechat(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    if(wx.getStorageSync('userID')){
        let data={
          address:info.address,
          email:info.email,
          mobile:info.mobile,
          name:info.name,
          qqNumber:info.qqNumber,
          userid:wx.getStorageSync('userID'),
          wechatNumber:value
        }
        let res=await app.myAxios({
          method:'post',
          url:'/anonymous/updateUserInfo',
          data
        })
        if(res.data.statusCode===200){
          let {userInfo}=this.data
          delete data.userid
          // 更新视图
          this.setData({
            userInfo:data
          })
      }else{
        wx.showToast({
          title:'请输入正确的11位手机号',
          icon:'none',
          duration:500
        })
      }
    }else{
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:500
      })
    }
  },

  //更新用户QQ号
  async handleUserQQ(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    if(wx.getStorageSync('userID')){
        let data={
          address:info.address,
          email:info.email,
          mobile:info.mobile,
          name:info.name,
          qqNumber:value,
          userid:wx.getStorageSync('userID'),
          wechatNumber:info.wechatNumber
        }
        let res=await app.myAxios({
          method:'post',
          url:'/anonymous/updateUserInfo',
          data
        })
        if(res.data.statusCode===200){
          let {userInfo}=this.data
          delete data.userid
          // 更新视图
          this.setData({
            userInfo:data
          })
      }else{
        wx.showToast({
          title:'请输入正确的11位手机号',
          icon:'none',
          duration:500
        })
      }
    }else{
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:500
      })
    }
  },

  // 更新用户手机号
  async handleUserPhone(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    if(wx.getStorageSync('userID')){
      if((/^1[3456789]\d{9}$/.test(value))){
        let data={
          address:info.address,
          email:info.email,
          mobile:+value,
          name:info.name,
          qqNumber:info.qqNumber,
          userid:wx.getStorageSync('userID'),
          wechatNumber:info.wechatNumber
        }
        let res=await app.myAxios({
          method:'post',
          url:'/anonymous/updateUserInfo',
          data
        })
        if(res.data.statusCode===200){
          let {userInfo}=this.data
          delete data.userid
          // 更新视图
          this.setData({
            userInfo:data
          })
        }else{
          wx.showToast({
            title:'更新失败,请重试',
            icon:'none',
            duration:500
          })
        }
      }else{
        wx.showToast({
          title:'请输入正确的11位手机号',
          icon:'none',
          duration:500
        })
      }
    }else{
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:500
      })
    }
  },
  
  // 更新用户地址
  async handleUserAddress(e){
    let {value}=e.detail
    let {info}=e.currentTarget.dataset
    if(wx.getStorageSync('userID')){
      let data={
        address:value,
        email:info.email,
        mobile:info.mobile,
        name:info.name,
        qqNumber:info.qqNumber,
        userid:wx.getStorageSync('userID'),
        wechatNumber:info.wechatNumber
      }
      let res=await app.myAxios({
        method:'post',
        url:'/anonymous/updateUserInfo',
        data
      })
      if(res.data.statusCode===200){
        let {userInfo}=this.data
        delete data.userid
        // 更新视图
        this.setData({
          userInfo:data
        })
      }else{
        wx.showToast({
          title:'更新失败,请重试',
          icon:'none',
          duration:500
        })
      }
    }else{
      wx.showToast({
        title:'请登录',
        icon:'none',
        duration:500
      })
    }
  },

  // 获取用户信息
  async getUserInfo(){
    let res= await app.myAxios({
      method:'post',
      url:'/anonymous/queryUserInfo',
      data:{
        userid:wx.getStorageSync('userID')
      }
    })
    if(res.statusCode==200&&res.data){
      this.setData({
        userInfo:res.data
      })

    }else{
      wx.showToast({
        title:'获取用户信息失败,请重试',
        icon:'none',
        duration:500
      })
    }
  },
  // 路由跳转
  goToelsePage(v){
    // 如果用户登录成功才可以跳转
    if(wx.getStorageSync('userID')){
      wx.navigateTo({
        url:v
      })
    }else{
      wx.showToast({
        title:'请先登录',
        icon:'none',
        duration:500
      })
    }
  },
  //options(Object)
  onLoad: function(options){
  },
  onShow: function(){
    this.getUserInfo()
    if(wx.getStorageSync('userMsg')){
      this.setData({
        userMsg:wx.getStorageSync('userMsg')||{}
      })
    }
  }
});