<template>
  <ag-grid-cn
    class="ag-group"
    v-model="data"
    :columns="columns"
    :masterDetail="true"
    :detailCellRendererParams="detailCellRendererParams"
    :isRowMaster="isRowMaster"
    @gridReady="onGridReady"
  ></ag-grid-cn>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      data: [],
      detailCellRendererParams: {}
    }
  },
  beforeMount() {
    this.columns = [
      {
        field: 'name',
        cellRenderer: 'agGroupCellRenderer',
        
      },
      { field: 'account' },
      { field: 'calls' },
      {
        field: 'minutes',
        valueFormatter: "x.toLocaleString() + 'm'",
      },
    ];

    this.detailCellRendererParams = {
      detailGridOptions: {
        rowSelection: 'multiple',
        enableRangeSelection: true,
        paginationAutoPageSize: true,
        columnDefs: [
          {
            field: 'callId',
            checkboxSelection: true,
          },
          { field: 'direction' },
          {
            field: 'number',
            minWidth: 150,
          },
          {
            field: 'duration',
            valueFormatter: "x.toLocaleString() + 's'",
          },
          {
            field: 'switchCode',
            minWidth: 150,
          },
        ],
        defaultColDef: {
          sortable: false,
          flex: 1,
        },
      },
      getDetailRowData: (params) => {
        params.successCallback(params.data.callRecords);
      },
    };
  },
  methods: {
     onGridReady(params) {
       debugger
      const updateData = (data) => {
        this.data = data;
      };

      fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    },
    isRowMaster(params) {
      return params.callRecords.length > 20
    }
  }
}
</script>

<style lang="scss">
.ag-group {
  &.ag-theme-alpine{
    background: red;
      .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {
          height: 30px !important;
    }
  }
}

</style>