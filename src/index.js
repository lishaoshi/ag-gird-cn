
import AgfridCn from './components/ag-grid-cn'

import './style/index.scss'

import { LicenseManager } from '@ag-grid-enterprise/core'
LicenseManager.setLicenseKey(`CompanyName=Shenzhen Huitongguan Network Technology Co., Ltd,LicensedGroup=Shenzhen Huitongguan Network Technology Co., Ltd,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-017061,ExpiryDate=5_July_2022_[v2]_MTY1Njk3NTYwMDAwMA==7d62b8378360a3402254d4cd22f59109`)



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

