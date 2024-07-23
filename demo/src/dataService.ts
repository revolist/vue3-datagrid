import type { ColumnProp, ColumnRegular } from '@revolist/vue3-datagrid';

function generateHeader(index: number) {
  const asciiFirstLetter = 65;
  const lettersCount = 26;
  let div = index + 1;
  let label = '';
  let pos: number;
  while (div > 0) {
    pos = (div - 1) % lettersCount;
    label = String.fromCharCode(asciiFirstLetter + pos) + label;
    div = parseInt(((div - pos) / lettersCount).toString(), 10);
  }
  return label.toLowerCase();
}

function naturalSort(prop: ColumnProp, a: any, b: any) {
  return a[prop].localeCompare(b[prop], 'en', { numeric: true });
}

export function generateFakeDataObject(
  rowsNumber: number,
  colsNumber: number,
  cellTemplate: any,
  headerTemplate: any,
  editorName: string
) {
  const result: any[] = [];
  const columns: ColumnRegular[] = [];
  const all = colsNumber * rowsNumber;
  for (let j = 0; j < all; j++) {
    let col = j % colsNumber;
    let row = (j / colsNumber) | 0;
    if (!result[row]) {
      result[row] = {};
    }
    if (!columns[col]) {
      columns[col] = {
        name: generateHeader(col),
        prop: col,
        sortable: true,
        cellCompare: col % 2 == 0 ? naturalSort : undefined,
      };
      // set editor for first column
      if (col === 0) {
        columns[col].name = `Custom`;
        columns[col].size = 300;
        columns[col].columnTemplate = headerTemplate;
        columns[col].cellTemplate = cellTemplate;
        columns[col].editor = editorName;
      }
    }
    result[row][col] = row + ':' + col;
  }
  let headers = Object.keys(columns).map(k => columns[parseInt(k, 10)]);
  return {
    source: result,
    headers,
  };
}
