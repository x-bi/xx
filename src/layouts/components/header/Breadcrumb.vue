<script setup lang="ts">
import { clone } from 'radash';


const router = useRouter()
const route = useRoute()
const routes = computed(() => {
  return clone(route.matched).splice(1)
})

</script>

<template>
  <TransitionGroup name="list" tag="ul"  class="p-b-15px z-999 m-l-16px m-t-1px  p-t-20px bg" style="display: flex; ">
    <n-el v-for="(item,i) in routes" :key="item.path" tag="li" style="
            color: var(--text-color-2);
            transition: 0.3s var(--cubic-bezier-ease-in-out);
          " class="flex-center  cursor-pointer split" @click="router.push(item.path)">
      <!-- 面包屑图标 -->
      <!-- <nova-icon :icon="item.meta.icon" /> -->
      <span  class="whitespace-nowrap">{{ item.meta.title}}</span><span v-if="i !== routes.length-1">&nbsp;/&nbsp;</span>
    </n-el>
  </TransitionGroup>
</template>

<style lang="scss">
.bg{
 background-color: #FAFAFC;
 width: 100%;
 height: 22px;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>
