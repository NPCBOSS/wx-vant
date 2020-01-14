// components/ht-button/index.js
const computedBehavior = require('miniprogram-computed');

Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      value: 'circular'
    },
    type: {
      type: String,
      value: 'default'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    sum:{}
  },

  /**
   * 监听数据变化
   */
  watch: {
    'props': function (props) {
   
      this.setData({
        sum: JSON.stringify(props)
      })
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('ss, ' + this.props);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
