
/** @OnlyCurrentDoc */

/**
 * Main function to process scores for the ASRS (Autism Spectrum Rating Scales).
 * This function runs only on the "ASRS Table" sheet.
 * It defines scoring rules and applies them to a specific range.
 */
function asrsMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == 'ASRS Table') {
    let asrsCells = spreadsheet.getRange('B18:E33');

    // Define the rules for marking ASRS scores.
    const asrsRules = [
      { min: 70, max: Infinity, suffix: '***' },
      { min: 65, max: 69,       suffix: '**'  },
      { min: 60, max: 64,       suffix: '*'   }
    ];

    findAndReplace(asrsCells, asrsRules);
  }
}
