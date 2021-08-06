// const files = require.context('')

export default [
  {
    path: '',
    component: () => import('../examples/index.vue')
  },
  {
    path: '/edit',
    component: () => import('../examples/edit/index')
  },
  {
    path: '/group',
    component: () => import('./group/index.vue')
  }
]