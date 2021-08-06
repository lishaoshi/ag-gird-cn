import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'
import APP from './app.vue'
import "../node_modules/@ag-grid-community/core/dist/styles/ag-grid.css";
import "../node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import "../style/reset-ag.scss"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/style/index.scss'
import AgGridCn from '@/components/ag-grid-cn.vue'


Vue.use(ElementUI, { size: 'mini', stripe: true })

Vue.use(VueRouter)

Vue.component('AgGridCn', AgGridCn)


const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(APP)
})