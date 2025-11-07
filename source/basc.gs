/** @OnlyCurrentDoc */

function bascProcessCells(spreadsheet, scaleRange, validitiyRange, pasteScales, pasteValidity) {
  // Start processing the scale scores
  let scaleValues = spreadsheet.getRange(scaleRange);
  spreadsheet.getRange(pasteScales).activate();

  // Move scale scores from the copy box to the target table
  scaleValues.copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);
  scaleValues.clearContent();

  // Start processing the validity scores
  let validityValues = spreadsheet.getRange(validitiyRange);
  spreadsheet.getRange(pasteValidity).activate();

  // Move validity scores from the copy box to the target table
  validityValues.copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);
  validityValues.clearContent();
}

function bascMarkScores(spreadsheet, contentScaleRange, adaptiveScaleRange) {
  // Process Content scales
  let contentCells = spreadsheet.getRange(contentScaleRange);

  // Find-Replace At-Risk scores (Use ^ and $ for full cell match)
  // Matches exactly 60 through 69
  findAndReplace(contentCells, '(6\\d)', '$1*');

  // Find-Replace Clinically Significant scores (Use ^ and $ for full cell match)
  // Matches 100+ (\d{3,}) or 70-99 ([7-9]\d)
  findAndReplace(contentCells, '(\\d{3,}|[7-9]\\d)', '$1**');

  // Process Adaptive scales
  let adaptiveCells = spreadsheet.getRange(adaptiveScaleRange);

  // Find-Replace At-Risk scores (Use ^ and $)
  // Matches exactly 40 or 30 through 39
  findAndReplace(adaptiveCells, '(40|3\\d)', '$1*');

  // Find-Replace Clinically Significant scores (Use ^ and $)
  // Matches exactly 30 or 0-29
  findAndReplace(adaptiveCells, '(30|[0-2]\\d)', '$1**');
}

function bascMain() {
  // Initialize sheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  switch (sheetName) {
    case "BASC-3 · Multi-Rater · TRS":
      bascProcessCells(spreadsheet, 'G27:Z30', 'G33:I36', 'B18', 'B40');
      bascMarkScores(spreadsheet, 'B18:E31', 'B32:E37');
      break;
    case "BASC-3 · Multi-Rater · TRS & PRS":
      bascProcessCells(spreadsheet, 'G26:AA29', 'G32:I35', 'B18', 'B41');
      bascMarkScores(spreadsheet, 'B18:E31', 'B32:E38');
      break;
    case "BASC-3 · Preschool · Multi-Rater · TRS & PRS":
      bascProcessCells(spreadsheet, 'G26:V29', 'G32:I35', 'B18', 'B36');
      bascMarkScores(spreadsheet, 'B18:E28', 'B29:E33');
      break;
    case "BASC-3 · SRS":
      bascProcessCells(spreadsheet, 'D21:X21', 'D24:H24', 'B13', 'B36');
      bascMarkScores(spreadsheet, 'B13:B28', 'B29:B33');
      break;
    case "BASC-3 Table · SRS · Child":
      bascProcessCells(spreadsheet, 'D21:V21', 'D24:H24', 'B13', 'B34');
      bascMarkScores(spreadsheet, 'B13:B26', 'B27:B31');
      break;
  }
};