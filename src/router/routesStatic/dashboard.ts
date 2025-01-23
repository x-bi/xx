 export const routes = {
  order:1,
  routes: [
    {
      name: 'dashboard4',
      path: '/dashboard',
      title: '仪表盘12',
      requiresAuth: true,
      icon: 'icon-park-outline:analysis',
      menuType: 'dir',
      componentPath: null,
      id: '1',
      pid: null,
    },
    {
      name: 'workbench',
      path: '/dashboard/workbench',
      title: '工作台',
      requiresAuth: true,
      icon: 'icon-park-outline:alarm',
      pinTab: true,
      menuType: 'page',
      componentPath: '/dashboard/workbench/index.vue',
      id: '1-1',
      pid: '1',
    },
    {
      name: 'monitor',
      path: '/dashboard/monitor',
      title: '监控页',
      requiresAuth: true,
      icon: 'icon-park-outline:anchor',
      menuType: 'page',
      componentPath: '/dashboard/monitor/index.vue',
      id: '1-2',
      pid: '1',
    },
  ]
 }
