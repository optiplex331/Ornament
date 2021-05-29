// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },

   /**
   * 解决自定义tabbar延迟跳转的BUG
   * 
   * @param {*} context 上下文环境
   * @param {number} index 对应tab的index
   */
  tabbarRefresh(context, index) {
    if(typeof context.getTabBar === 'function' && context.getTabBar()) {
      context.getTabBar().setData({
        selected: index
      });
    }
  }
})
