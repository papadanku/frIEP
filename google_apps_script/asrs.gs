
/** @OnlyCurrentDoc */

function asrsMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == "ASRS Table") {
    let asrsCells = spreadsheet.getRange('B18:E33');

    const asrsRules = [
      { min: 70, max: Infinity, suffix: "***" },
      { min: 65, max: 69,       suffix: "**"  },
      { min: 60, max: 64,       suffix: "*"   }
    ];

    findAndReplace(asrsCells, asrsRules);
  }
}
