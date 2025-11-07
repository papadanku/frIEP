
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

  if (sheetName == "Vineland 3 · Comprehensive") {
    // Domain
    vnlMarkScores(spreadsheet, 'B14:C18', '(7[1-9]|8[0-5])', '(70|[2-6]\\d)');

    // Subdomain
    vnlMarkScores(spreadsheet, 'B20:C32', '(1[0-2])', '(\\d)');

    // Maladaptive
    vnlMarkScores(spreadsheet, 'B34:C35','(20|1[8-9])', '(2[1-4])');
  }
}
