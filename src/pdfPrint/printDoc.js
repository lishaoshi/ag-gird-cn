import pdfMake from 'pdfmake/build/pdfmake'
import vfs from './vfs_fonts'
pdfMake.fonts = {
  song: {
    normal: 'song.ttf',
    bold: 'song.ttf',
    italics: 'song.ttf',
    bolditalics: 'song.ttf'
  }
};
import getDocDefinition from './docDefinition'

function printDoc(printParams, gridApi, columnApi) {
  const docDefinition = getDocDefinition(printParams, gridApi, columnApi)
  docDefinition.defaultStyle = { font: 'song'}
  pdfMake.createPdf(docDefinition,null,pdfMake.fonts,vfs).download()
}

export default printDoc