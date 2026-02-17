
/** @OnlyCurrentDoc */

/**
 * Applies marking rules to the EDDT (Emotional Disturbance Decision Tree) characteristic scores.
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} spreadsheet The active sheet object.
 * @param {string} characteristicScoreRange The A1 notation of the range to process.
 */
function eddtMarkCharacteristicScores(spreadsheet, characteristicScoreRange) {
  // Define the rules for marking EDDT characteristic scores.
  const characteristicRules = [
    { min: 80,  max: Infinity,  suffix: '***' },
    { min: 70,  max: 79,        suffix: '**'  },
    { min: 60,  max: 69,        suffix: '*'   }
  ];

  // Fetch characteristic scores
  let characteristicCells = spreadsheet.getRange(characteristicScoreRange);
  findAndReplace(characteristicCells, characteristicRules);
}

/**
 * Main function to process scores for the EDDT.
 * This function runs only on the "EDDT" sheet. It calls the helper function to apply scoring rules to the characteristic scores.
 */
function eddtMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();
  const activeSheet = spreadsheet.getActiveSheet();

  if (sheetName == 'EDDT') {
    const characteristicScoreRange = 'B26:D30';
    eddtMarkCharacteristicScores(activeSheet, characteristicScoreRange);
  }
}
