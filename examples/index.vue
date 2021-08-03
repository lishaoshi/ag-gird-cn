<template>
    <div class="page">
        <ag-grid-cn
            v-model="rowData"
            :columns="columnDefs"
            :default-col-def="defaultColDef"
            :defaultColGroupDef="defaultColGroupDef"
            :columnTypes="columnTypes"
            :frameworkComponents="frameworkComponents"
            :autoHeight="true"
            border
            domLayout="autoHeight"
            @gridRead="onGridReady"
        ></ag-grid-cn>
    </div>
</template>

<script>
import AgGridCn from '@/components/ag-grid-cn'
import { Button } from 'element-ui'
import Operation from './operation'
// console.log(Button)
export default {
    name: 'AgGrid',
    components: {
        AgGridCn,
        Button
    },
    data() {
        return {
            columnDefs: null,
            rowData: null,
            defaultColGroupDef: {
                marryChildren: false
            },
            defaultColDef: {},
            columnTypes: null,
            frameworkComponents: {}
        }
    },
    beforeMount() {
        this.columnDefs =[
            {
                headerName: '序号',
                filter: false,
                width: 70,
                suppressMenu: true,
                cellRenderer: (even) => {
                    return even.rowIndex
                }
            },
            {
                headerName: '18位社会信用代码',
                field: 'scc',
                type: 'numberFilter'
            },
            {
                headerName: '10位海关编码',
                field: 'code',
            },
            {
                headerName: '10位检验检疫代码',
                field: 'ciqCode',
                // type: 'rightAligned',
            },
            // {
            //     headerName: '企业中文名称',
            //     field: 'name',
            //     // type: 'rightAligned',
            // },
            // {
            //     headerName: '组织机构代码',
            //     field: 'orgCode',
            //     // type: 'rightAligned',
            // },
            // {
            //     headerName: '检验检疫中文名称',
            //     field: 'ciqName',
            //     // type: 'rightAligned',
            // },
            // {
            //     headerName: '创建人',
            //     field: 'createdBy',
            //     // type: 'rightAligned',
            // },
            // {
            //     headerName: '创建时间',
            //     field: 'createdAt',
            //     type: ['dateColumn', 'nonEditableColumn'],

            // },
            // {
            //     headerName: '修改人',
            //     field: 'updatedBy',
            // },
            // {
            //     headerName: '修改时间',
            //     field: 'updatedAt',
            //     type: ['dateColumn', 'nonEditableColumn'],
            // },
            // {
            //     headerName: '操作',
            //     filter: false,
            //     editable: false,
            //     checkboxSelection: false,
            //     menuTabs: 'columnsMenuTab',
            //     cellRenderer: 'elbutton',
            //     pinned: 'right'
            // }
        ];

        this.defaultColDef = {
            editable: true,
            floatingFilter: true,
            filter: 'agTextColumnFilter',
            resizable: true,
            cellStyle: { lineHeight: 30 + 'px' },
            resizable: true,
            flex: 1
        };

        this.defaultColGroupDef = { marryChildren: true };
        this.frameworkComponents = {
            elbutton: Operation
        };

         this.columnTypes = {
            numberColumn: {
                filter: 'agNumberColumnFilter',
            },
            medalColumn: {
                columnGroupShow: 'open',
                filter: true,
            },
            nonEditableColumn: { editable: false },
            dateColumn: {
                filter: 'agDateColumnFilter',
                filterParams: {
                    comparator: (filterLocalDateAtMidnight, cellValue) => {
                        var dateParts = cellValue.split('/');
                        var day = Number(dateParts[0]);
                        var month = Number(dateParts[1]) - 1;
                        var year = Number(dateParts[2]);
                        var cellDate = new Date(year, month, day);
                        if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                        } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                        } else {
                        return 0;
                        }
                    },
                },
            },
        };

        // this.rowData = [
        //     { make: 'Toyota', model: 'Celica', price: 35000 },
        //     { make: 'Ford', model: 'Mondeo', price: 32000 },
        //     { make: 'Porsche', model: 'Boxter', price: 72000 }
        // ];
    },
    methods: {
        onGridReady(even) {
            this.columnApi = even.columnApi
             const updateData = (data) => {
                this.rowData = data;
            };

            setTimeout(_ => {
                const data = {
                    "result":[
                        {
                            "id":"7dfbe549-5db0-45fd-aefa-eeebe1f18a03",
                            "scc":"555555555666666666",
                            "code":"5555566666",
                            "name":"5656企业123",
                            "ciqCode":"5555566666",
                            "ciqName":"检验检疫中文名称",
                            "orgCode":"566666666",
                            "ieEntNo":null,
                            "expiryDate":null,
                            "createdBy":"昵称ab",
                            "createdAt":1624957668000,
                            "updatedBy":"昵称ab",
                            "updatedAt":1624957921000
                        },
                        {
                            "id":"4338fa58-016c-4d8a-b431-4c8815a29f04",
                            "scc":"888888888999999999",
                            "code":"8888899999",
                            "name":"8989企业",
                            "ciqCode":"1234567890",
                            "ciqName":"1234567890",
                            "orgCode":"899999999",
                            "ieEntNo":null,
                            "expiryDate":null,
                            "createdBy":"昵称ab",
                            "createdAt":1624957588000,
                            "updatedBy":null,
                            "updatedAt":null
                        }
                    ],
                    "totalCount":2,
                    "pageNo":1,
                    "pageSize":10
                }
                this.rowData = data.result
                },
                2000
            )
        }
    }

}
</script>

<style>
.page {
    height: 100vh;
}
</style>