
/** @OnlyCurrentDoc */

function vnlMarkScores(spreadsheet, cellRange, moderatelyLowSearch, lowSearch) {
  let cells = spreadsheet.getRange(cellRange);

  // Moderately Low
  findAndReplace(cells, moderatelyLowSearch, '$1*');

  // Low
  findAndReplace(cells, lowSearch, '$1**');
}

function vnlMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == 'Vineland 3 · Comprehensive') {
    // Process Composite scores
    const compositeRules = [
      { min: 20, max: 70, suffix: '**'  },
      { min: 71, max: 85, suffix: '*'   }
    ]

    let compositeCells = spreadsheet.getRange('B14:C18');
    findAndReplace(compositeCells, compositeRules);

    // Process Subdomain scores
    const subdomainRules = [
      { min: 1,  max: 9,  suffix: '**' },
      { min: 10, max: 12, suffix: '*'  }
    ]

    let subdomainCells = spreadsheet.getRange('B20:C32');
    findAndReplace(subdomainCells, subdomainRules);

    // Process Maladaptive scores
    const maladaptiveRules = [
      { min: 21, max: 24, suffix: '**' },
      { min: 18, max: 20, suffix: '*'  }
    ];

    let maladaptiveCells = spreadsheet.getRange('B34:C35');
    findAndReplace(maladaptiveCells, maladaptiveRules);
  }
}
