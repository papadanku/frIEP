
function asrsMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == "ASRS Table") {
    const rangeArray = [
      'B18:E18',
      'B20:E22',
      'B24:E24',
      'B26:E33'
    ];

    for (const range of rangeArray) {
      let selectedCells = spreadsheet.getRange(range);

      // Find-Replace Slightly Elevated scores
      findAndReplace(selectedCells, '(6[0-4])', '$1*');

      // Find-Replace Elevated scores
      findAndReplace(selectedCells, '(6[5-9])', '$1**');

      // Find-Replace Very Elevated scores
      findAndReplace(selectedCells, '(\\d{3,}|[7-9]\\d)', '$1***');
    }
  }
}
