import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import enUS from '../../locales/en_US.json'
import zhCN from '../../locales/zh_CN.json'


export const i18n = createI18n({
  legacy: false,
  locale: 'zhCN', // 默认显示语言
  fallbackLocale: 'zhCN',
  messages: {
    zhCN,
    enUS,
  },
  // 缺失国际化键警告
  // missingWarn: false,

  // 缺失回退内容警告
  fallbackWarn: false,
})

export function install(app: App) {
  app.use(i18n)
}
