<template>
  <el-button @click="printHandler">打印</el-button>
</template>
<script>
  import printDoc from './printDoc'
  export default {
    name: "PrintButton",
    props: {
      gridApi:{
        type:Object,
        default: null
      },
      columnApi:{
        type:Object,
        default: null
      },
      headerColor: {
        type:String,
        default: '#f8f8f8'
      },
      innerBorderColor: {
        type:String,
        default: '#dde2eb'
      },
      outerBorderColor: {
        type:String,
        default: '#babfc7'
      },
      pageSize: {
        type: [Object, String],
        default: 'A4'
      },
      oritentation: {
        type:String,
        default: 'landscape'
      },
      showPageCount: {
        type:Boolean,
        default: true
      },
      headerHeight: {
        type:Number,
        default: 25
      },
      rowHeight: {
        type:Number,
        default: 15
      },
      oddBackColor: {
        type:String,
        default: '#ffffff'
      },
      evenBackColor: {
        type:String,
        default: '#ffffff'
      },
      cellFormatting: {
        type:Boolean,
        default: true
      },
      columnAsLinks: {
        type:Boolean,
        default: true
      },
      onlySelectedRow: {
        type:Boolean,
        default: false
      },
      headerContent: {
        type:Object,
        default: null
      },
      footerContent: {
        type:Object,
        default: null
      },
      hBorderWidth: {
        type:Number,
        default: 1
      },
      vBorderWidth: {
        type:Number,
        default: 1
      }
    },
    methods: {
      printHandler() {
        const printParams = {
          PDF_HEADER_COLOR: this.headerColor,
          PDF_INNER_BORDER_COLOR: this.innerBorderColor,
          PDF_OUTER_BORDER_COLOR: this.outerBorderColor,
          PDF_PAGE_ORITENTATION: this.oritentation,
          PDF_WITH_FOOTER_PAGE_COUNT: this.showPageCount,
          PDF_HEADER_HEIGHT: this.headerHeight,
          PDF_ROW_HEIGHT: this.rowHeight,
          PDF_ODD_BKG_COLOR: this.oddBackColor,
          PDF_EVEN_BKG_COLOR: this.evenBackColor,
          PDF_WITH_CELL_FORMATTING: this.cellFormatting,
          PDF_WITH_COLUMNS_AS_LINKS: this.columnAsLinks,
          PDF_SELECTED_ROWS_ONLY: this.onlySelectedRow,
          PDF_HEADER: this.headerContent,
          PDF_FOOTER: this.footerContent,
          PDF_PAGE_SIZE: this.pageSize,
          PDF_BORDER_H_WIDTH: this.hBorderWidth,
          PDF_BORDER_V_WIDTH: this.vBorderWidth
        }
        printDoc(printParams, this.gridApi, this.columnApi)
      }
    }
  }
</script>
