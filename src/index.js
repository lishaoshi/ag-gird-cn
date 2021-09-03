
import AgfridCn from './components/ag-grid-cn'

import './style/index.scss'


const components = [
  AgfridCn
]

const  install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

export default {
  install,
  AgfridCn
}

