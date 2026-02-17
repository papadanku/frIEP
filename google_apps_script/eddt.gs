
/** @OnlyCurrentDoc */

function eddtMarkCharacteristicScores(spreadsheet, characteristicScoreRange) {
  const characteristicRules = [
    { min: 80,  max: Infinity,  suffix: '***' },
    { min: 70,  max: 79,        suffix: '**'  },
    { min: 60,  max: 69,        suffix: '*'   }
  ];

  // Fetch characteristic scores
  let characteristicCells = spreadsheet.getRange(characteristicScoreRange);
  findAndReplace(characteristicCells, characteristicRules);
}

function eddtMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();
  const activeSheet = spreadsheet.getActiveSheet();

  if (sheetName == 'EDDT') {
    const characteristicScoreRange = 'B26:D30';
    eddtMarkCharacteristicScores(activeSheet, characteristicScoreRange);
  }
}
