const docEle = ref(document.documentElement)

const { isFullscreen, toggle } = useFullscreen(docEle)



export const useAppStore = defineStore('app-store', {
  state: () => {
    return {
      collapsed: false,// 侧边栏收缩
      loadFlag: true,
      showSetting: false,
      contentFullScreen: false,
    }
  },
  getters: {

    fullScreen() {
      return isFullscreen.value
    },
  },
  actions: {



    /* 切换侧边栏收缩 */
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
    /* 切换全屏 */
    toggleFullScreen() {
      toggle()
    },
    /**
     * @description: 页面内容重载
     * @param {number} delay - 延迟毫秒数
     * @return {*}
     */
    async reloadPage(delay = 600) {
      this.loadFlag = false
      await nextTick()
      if (delay) {
        setTimeout(() => {
          this.loadFlag = true
        }, delay)
      }
      else {
        this.loadFlag = true
      }
    },


  },
  persist: {
    storage: localStorage,
  },
})
