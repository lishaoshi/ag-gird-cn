
import AgfridCn from './components/ag-grid-cn'
import PrintButton from './pdfPrint/print-button'
import './style/index.scss'


const components = [
  AgfridCn
]

const  install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
export {
  PrintButton
}
export default {
  install,
  AgfridCn
}

