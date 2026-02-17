
/** @OnlyCurrentDoc */

/**
 * @deprecated This function is obsolete and uses an old method of finding and replacing.
 * The logic has been integrated directly into vnlMain using the new rules-based findAndReplace function from core.gs.
 */
function vnlMarkScores(spreadsheet, cellRange, moderatelyLowSearch, lowSearch) {
  let cells = spreadsheet.getRange(cellRange);

  // Moderately Low
  findAndReplace(cells, moderatelyLowSearch, '$1*');

  // Low
  findAndReplace(cells, lowSearch, '$1**');
}

/**
 * Main function to process scores for the Vineland 3.
 * This function runs only on the "Vineland 3 · Comprehensive" sheet. It defines and applies separate scoring rules for Composite, Subdomain, and Maladaptive scales to their respective ranges.
 */
function vnlMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == 'Vineland 3 · Comprehensive') {
    // Process Composite scores
    const compositeRules = [
      { min: 20, max: 70, suffix: '**'  },
      { min: 71, max: 85, suffix: '*'   }
    ];

    let compositeCells = spreadsheet.getRange('B14:C18');
    findAndReplace(compositeCells, compositeRules);

    // Process Subdomain scores
    const subdomainRules = [
      { min: 1,  max: 9,  suffix: '**' },
      { min: 10, max: 12, suffix: '*'  }
    ];

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
