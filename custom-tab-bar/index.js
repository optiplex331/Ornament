// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [{
        pagePath: "/pages/discover/discover",
        iconPath: "/icons/discover.svg",
        selectedIconPath: "/icons/discover_active.svg",
        text: "Discover"
      }, {
        pagePath: "/pages/creation/creation",
        iconPath: "/icons/creation.svg",
        selectedIconPath: "/icons/creation_active.svg",
        text: "Creation"
      }, {
        pagePath: "/pages/box/box",
        iconPath: "/icons/box.svg",
        selectedIconPath: "/icons/box_active.svg",
        text: "Box"
      },
      {
        pagePath: "/pages/profile/profile",
        iconPath: "/icons/profile.svg",
        selectedIconPath: "/icons/profile_active.svg",
        text: "Profile"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({
        url
      });
      this.setData({
        selected: data.index
      });
    }
  }
})