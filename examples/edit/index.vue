<template>
    <div class="page">
        <ag-grid-cn
            v-model="rowData"
            :columns="columnDefs"
            :defaultColGroupDef="defaultColGroupDef"
            :columnTypes="columnTypes"
            :frameworkComponents="frameworkComponents"
            :rowBuffer="0"
            rowHeight="30"
            domLayout="normal"
            @gridReady="onGridReady"
            @cellEditingStarted="cellEditingStarted"
        ></ag-grid-cn>
    </div>
</template>

<script>
import AgGridCn from '@/components/ag-grid-cn'
import { Button } from 'element-ui'
import Operation from '../operation'
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
                cellClass: 'rowSort',
                filter: false,
                width: 70,
                suppressMenu: true,
                valueGetter: (params) => {
                    return `${params.node.rowIndex + 1}`
                }
            },
            {
                headerName: '船次号',
                width: 120,
                field: 'voyageNo',
                editable: true
            },
            {
                headerName: 'IMO号',
                field: 'imo'
            },
            {
                headerName: '英文船名',
                field: 'shipName',
                width: 150
            },
            {
                headerName: '中文船名',
                field: 'shipNameCh'
            },
            {
                headerName: '船代名称',
                field: 'agency'
            },
            {
                headerName: '进口航次',
                field: 'impVoyno',
                filter: 'agTextColumnFilter',
            },
            {
                headerName: '创建时间',
                field: 'createdAt'
            },
            {
                headerName: '预计抵达时间',
                field: 'estimateArrivalDate'
            },
            {
                headerName: '截关时间',
                field: 'cutoffDate'
            },
            {
                headerName: '发布状态',
                field: 'shipStatus'
            },
            {
                headerName: '舱单平台',
                field: 'dataPlatCode'
            },
            {
                headerName: '码头',
                field: 'location'
            },
            {
                headerName: '操作',
                filter: false,
                editable: false,
                checkboxSelection: false,
                menuTabs: 'columnsMenuTab',
                cellRenderer: 'elbutton',
                pinned: 'right'
            }
        ];

        this.defaultColGroupDef = { marryChildren: true };
        this.frameworkComponents = {
            elbutton: Operation
        };

         this.columnTypes = {
            // numberColumn: {
            //     filter: 'agNumberColumnFilter',
            // },
            // medalColumn: {
            //     columnGroupShow: 'open',
            //     filter: true,
            // },
            // nonEditableColumn: { editable: false },
            // dateColumn: {
            //     filter: 'agDateColumnFilter',
            //     filterParams: {
            //         comparator: (filterLocalDateAtMidnight, cellValue) => {
            //             var dateParts = cellValue.split('/');
            //             var day = Number(dateParts[0]);
            //             var month = Number(dateParts[1]) - 1;
            //             var year = Number(dateParts[2]);
            //             var cellDate = new Date(year, month, day);
            //             if (cellDate < filterLocalDateAtMidnight) {
            //             return -1;
            //             } else if (cellDate > filterLocalDateAtMidnight) {
            //             return 1;
            //             } else {
            //             return 0;
            //             }
            //         },
            //     },
            // },
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
            this.gridApi = even.api
             const updateData = (data) => {
                this.rowData = data;
            };

            setTimeout(_ => {
                const data = {"result":[{"id":"1904","shipName": null,"shipNameCh":null,"agencyNameEng":null,"agency":"俊励","voyageNo":"0GX1HE1MA","imo":"UN9532771","location":"YICT","shipStatus":"PUBLISH","impVoyno":"0GX1HE1MAI","dischargePort":null,"estimateArrivalDate":1627585200000,"cutoffDate":1627498800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1905","shipName":"HAI BANG DA 318","shipNameCh":"海邦达318","agencyNameEng":null,"agency":"俊励","voyageNo":"E303","imo":"413496740","location":"YICT","shipStatus":"PUBLISH","impVoyno":"E302","dischargePort":null,"estimateArrivalDate":1626706800000,"cutoffDate":1626620400000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1906","shipName":"MSC ANS","shipNameCh":"地中海安思","agencyNameEng":null,"agency":"中外运","voyageNo":"UX130A","imo":"UN9282261","location":"YICT","shipStatus":"PUBLISH","impVoyno":"XA125A","dischargePort":null,"estimateArrivalDate":1627167600000,"cutoffDate":1627081200000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1907","shipName":"ZIM SAVANNAH","shipNameCh":"以星萨凡纳","agencyNameEng":null,"agency":"招商","voyageNo":"6E","imo":"UN9250971","location":"YICT","shipStatus":"PUBLISH","impVoyno":"6EI","dischargePort":null,"estimateArrivalDate":1627074000000,"cutoffDate":1626987600000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1908","shipName":"BREMEN","shipNameCh":"奥芬不来梅","agencyNameEng":null,"agency":"中外运","voyageNo":"UL129E","imo":"UN9450387","location":"YICT","shipStatus":"PUBLISH","impVoyno":"UL129","dischargePort":null,"estimateArrivalDate":1626955200000,"cutoffDate":1626868800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1909","shipName":"MSC DILETTA","shipNameCh":"地中海迪蕾塔","agencyNameEng":null,"agency":"中外运","voyageNo":"QG128W","imo":"UN9897004","location":"YICT","shipStatus":"PUBLISH","impVoyno":"QG128WI","dischargePort":null,"estimateArrivalDate":1627025400000,"cutoffDate":1626939000000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1910","shipName":"EVER LAWFUL","shipNameCh":"长正轮","agencyNameEng":null,"agency":"联代","voyageNo":"0533045E","imo":"UN9595498","location":"YICT","shipStatus":"PUBLISH","impVoyno":"W0522","dischargePort":null,"estimateArrivalDate":1627279200000,"cutoffDate":1627192800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1911","shipName":"CMA CGM SORBONNE","shipNameCh":"达飞索邦","agencyNameEng":null,"agency":"俊励","voyageNo":"0FL9XW1MA","imo":"UN9839210","location":"YICT","shipStatus":"PUBLISH","impVoyno":"0FL9XW1MAI","dischargePort":null,"estimateArrivalDate":1627372800000,"cutoffDate":1627286400000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1912","shipName":"CMA CGM PEGASUS","shipNameCh":"达飞飞马","agencyNameEng":null,"agency":"俊励","voyageNo":"0TUIJE1MA","imo":"UN9399210","location":"YICT","shipStatus":"CANCEL","impVoyno":"0TUIJE1MAI","dischargePort":null,"estimateArrivalDate":1627369200000,"cutoffDate":1627282800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null},{"id":"1913","shipName":"CMA CGM MEXICO","shipNameCh":"达飞墨西哥","agencyNameEng":null,"agency":"俊励","voyageNo":"0TUJXS1MA","imo":"UN9839911","location":"YICT","shipStatus":"PUBLISH","impVoyno":"0TUJXS1MAI","dischargePort":null,"estimateArrivalDate":1627333200000,"cutoffDate":1627246800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null}],"totalCount":1990,"pageNo":1,"pageSize":10}
                
                let result = data.result
                result = result.concat(data.result)
                result = result.concat(data.result)
                result = result.concat(data.result)
                result = result.concat(data.result)
                result = result.concat(data.result)
               // result = result.concat(data.result)
               // result = result.concat(data.result)
               // result = result.concat(data.result)
               // result = result.concat(result)
                result = result.concat(result)
                
                this.rowData = result
                },
                20
            )
        },
        filterModified() {
            // this.gridApi.setRowData([{"id":"1904","shipName":"APL TURKEY","shipNameCh":"美总土耳其","agencyNameEng":null,"agency":"俊励","voyageNo":"0GX1HE1MA","imo":"UN9532771","location":"YICT","shipStatus":"PUBLISH","impVoyno":"0GX1HE1MAI","dischargePort":null,"estimateArrivalDate":1627585200000,"cutoffDate":1627498800000,"dataPlatCode":"SASASZ","createdAt":1626717655000,"createdBy":"SYSTEM","lastUpdatedAt":null,"lastUpdatedBy":null}])
        },
        cellEditingStarted(params) {
            this.gridApi.stopEditing()
        }
    }

}
</script>

<style>
.page {
    height: 100vh;
}
</style>