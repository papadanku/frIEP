
/** @OnlyCurrentDoc */

function connersMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == "Conners 4 Table") {
    // Process Conners scales
    const connersRules = [
      { min: 70, max: Infinity, suffix: "***" },
      { min: 65, max: 69,       suffix: "**"  },
      { min: 60, max: 64,       suffix: "*"   }
    ];

    let contentCells = spreadsheet.getRange('B18:E33');
    findAndReplace(contentCells, connersRules);
  }
}
