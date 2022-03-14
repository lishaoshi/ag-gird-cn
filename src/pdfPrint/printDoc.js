import getDocDefinition from './docDefinition'

function printDoc(printParams, gridApi, columnApi) {
  const docDefinition = getDocDefinition(printParams, gridApi, columnApi)
  docDefinition.defaultStyle = { font: 'SimSun'}
  import('pdfmake/build/pdfmake').then(pdfMake=>{
    pdfMake.fonts = {
      SimSun: { // TODO CDN IMPORT http://lib.yunbaoguan.cn/
        normal: 'https://sr.yunbaoguan.cn/download/externals/fonts/SimSun.ttf',
        bold: 'https://sr.yunbaoguan.cn/download/externals/fonts/SimSun.ttf',
        italics: 'https://sr.yunbaoguan.cn/download/externals/fonts/SimSun.ttf',
        bolditalics: 'https://sr.yunbaoguan.cn/download/externals/fonts/SimSun.ttf'
      }
    };
    pdfMake.createPdf(docDefinition,null,pdfMake.fonts).download()
  });
}

export default printDoc