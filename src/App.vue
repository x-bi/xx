<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const enva = import.meta.env

const docEle = ref(document.documentElement)
if(enva.VITE_COMPRESS_COLORWEAK === 'Y'){
  docEle.value.classList.toggle('color-weak')
}
if(enva.VITE_COMPRESS_GRAY === 'Y'){
  docEle.value.classList.toggle('gray-mode')
}

import themeConfig from '@/styles/theme.json'
const theme = themeConfig as GlobalThemeOverrides
import { dateZhCN, zhCN } from 'naive-ui'


</script>

<template>
  <n-config-provider
    class="wh-full" inline-theme-disabled
     :theme-overrides="theme" :locale="zhCN" :date-locale="dateZhCN"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
