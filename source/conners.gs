
function connersMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == "Conners 4 Table") {
    const rangeArray = [
      'B18:E23',
      'B25:E26',
      'B28:E33'
    ];

    for (const range of rangeArray) {
      let selectedCells = spreadsheet.getRange(range);

      // Find-Replace Slightly Elevated scores
      findAndReplace(selectedCells, '(6[0-4])', '$1*');

      // Find-Replace Elevated scores
      findAndReplace(selectedCells, '(6[5-9])', '$1**');

      // Find-Replace Very Elevated scores
      findAndReplace(selectedCells, '([7-9]\\d|\\d{3,})', '$1***');
    }
  }
}
