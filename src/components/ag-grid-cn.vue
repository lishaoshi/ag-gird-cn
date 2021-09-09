<template>
    <ag-grid-vue
        row-selection="multiple"
        class="flex-grow-1 flex-shrink-1 ag-theme-balham"
        style="width: 100%; height: 100%;"
        :modules="modules"
        :column-defs="columns"
        :default-col-group-def="defaultColGroupDef"
        :default-col-def="defaultColDef"
        :column-types="columnTypes"
        :row-data="value"
        :framework-components="frameworkComponents"
        :locale-text="agGirdLocal"
        :row-height="rowHeight"
        :enable-fill-handle="true"
        :dom-layout="domLayout"
        :header-height="headerHeight"
        :class="{
            'ag-grid--border': border
        }"
        :rowBuffer="rowBuffer"
        :masterDetail="masterDetail"
        :detailCellRendererParams="detailCellRendererParams"
        :detailRowHeight="detailRowHeight"
        :detailRowAutoHeight="detailRowAutoHeight"
        :isRowMaster="isRowMaster"
        :excel-styles="mergedExcelStyles"
        :defaultExcelExportParams="defaultExcelExportParams"
        @grid-ready="onGridReady"
        @column-moved="columnMoved"
        @filter-modified="filterModified"
        @cellClicked="cellClicked"
        @cellDoubleClicked="cellDoubleClicked"
        @cellEditingStarted="cellEditingStarted"
        @cellEditingStopped="cellEditingStopped"
        @cellFocused="cellFocused"
        @rowClicked="rowClicked"
        @rowDoubleClicked="rowDoubleClicked"
        @filterChanged="filterChanged"
    >
    </ag-grid-vue>
</template>

<script>
import { AgGridVue } from '@ag-grid-community/vue'
import { AllModules } from '@ag-grid-enterprise/all-modules'
import { agGirdLocal } from '@/utils/reset-ag-grid-local.js'
import { LicenseManager } from '@ag-grid-enterprise/core'
LicenseManager.setLicenseKey(`CompanyName=Shenzhen Huitongguan Network Technology Co., Ltd,LicensedGroup=Shenzhen Huitongguan Network Technology Co., Ltd,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-017061,ExpiryDate=5_July_2022_[v2]_MTY1Njk3NTYwMDAwMA==7d62b8378360a3402254d4cd22f59109`)

export default {
    name: 'AgGridCn',
    components: {
        AgGridVue
    },
    props: {
        value: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        defaultColGroupDef: {
            type: Object,
            default: () => {}
        },
        defaultColDef: {
            type: Object,
            default: () => {
                return {
                    resizable: false,
                    flex: 1
                }
            }
        },
        columnTypes: {
            type: Object,
            default: () => {}
        },
        frameworkComponents: {
            type: Object,
            default: () => {}
        },
        rowHeight: {
            type: [Number, String],
            default: 30
        },
        domLayout: {
            type: String,
            default: 'autoHeight'
        },
        headerHeight: {
            type: [Number, String],
            default: 25
        },
        border: {
            type: Boolean,
            default: false
        },
        masterDetail: {
            type: Boolean,
            default: false
        },
        detailCellRendererParams: {
            type: Object,
            default: () => null
        },
        detailRowHeight: {
            type: Number,
            default: 300
        },
        detailRowAutoHeight: {
            type: Boolean,
            default: false
        },
        isRowMaster: {
            type: Function,
            default: null
        },
        rowBuffer: {
            type: Number,
            default: 10
        },
        excelStyles: {
            type: Object,
            default: null
        }
    },
    watch: {
        frameworkComponents() {
            // debugger
        }
    },
    data() {
        return {
            agGirdLocal,
            columnDefs: null,
            rowData: null,
            modules: AllModules,
            mergedExcelStyles: null,
            defaultExcelExportParams: null
        }
    },
    methods: {
        onGridReady(even) {
          this.$emit('gridReady', even)
        },
        columnMoved(event) {
            this.$emit('columnMoved', event)
        },
        filterModified(params) {
            this.$emit('filterModified', params)
        },
        cellClicked(params) {
            this.$emit('cellClicked', params)
        },
        cellDoubleClicked(params) {
            this.$emit('cellDoubleClicked', params)
        },
        cellEditingStarted(params) {
            this.$emit('cellEditingStarted', params)
        },
        cellEditingStopped(params) {
            this.$emit('cellEditingStopped', params)
        },
        cellFocused(params) {
            this.$emit('cellEditingStopped', params)
        },
        rowClicked(params) {
            this.$emit('rowClicked', params)
        },
        rowDoubleClicked(params) {
            this.$emit('rowDoubleClicked', params)
        },
        filterChanged(params) {
            this.$emit('filterChanged', params)
        }
    },
    beforeMount() {
        this.defaultExcelExportParams = {
            processCellCallback: params => {
               if(!params.value) {
                   return ' '
               }
               return params.value
            }
        }
      this.mergedExcelStyles = [
        {
            id: 'cell',
            alignment: { horizontal: 'Center' },
            borders: {
            borderBottom: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderLeft: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderRight: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderTop: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            }
            }
        }, {
            id: 'header',
            alignment: { horizontal: 'Center' },
            interior: {
            color: '#DAEEF3',
            pattern: 'Solid'
            },
            borders: {
            borderBottom: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderLeft: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderRight: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            },
            borderTop: {
                color: '#000000', lineStyle: 'Continuous', weight: 1
            }
            }
        }, {
            id: 'title',
            alignment: { horizontal: 'Center' },
            font: {
            bold: true,
            size: 14
            }
        }
      ]
      if(this.excelStyles) {
        this.mergedExcelStyles = this.excelStyles
      }
    }

}
</script>

