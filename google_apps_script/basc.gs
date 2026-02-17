
/** @OnlyCurrentDoc */

/**
 * Moves BASC-3 data from a source range to a destination range, transposes it, and then clears the source range.
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet The active spreadsheet object.
 * @param {string} scaleRange The A1 notation for the source scale data.
 * @param {string} pasteScales The A1 notation for the destination scale data.
 * @param {string} validityRange The A1 notation for the source validity data.
 * @param {string} pasteValidity The A1 notation for the destination validity data.
 */
function bascProcessCells(spreadsheet, scaleRange, pasteScales, validityRange, pasteValidity) {
  // Define the pairs of [source, destination]
  const jobs = [
    { copyFrom: scaleRange,     pasteTo: pasteScales    },
    { copyFrom: validityRange,  pasteTo: pasteValidity  }
  ];

  jobs.forEach(job => {
    let copiedCells = spreadsheet.getRange(job.copyFrom);
    let pasteCells = spreadsheet.getRange(job.pasteTo);

    // Copy values directly to destination (transposed: true)
    copiedCells.copyTo(pasteCells, SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);

    // Wipe the source clean
    copiedCells.clearContent();
  });
}

/**
 * Applies marking rules to BASC-3 content and adaptive scales.
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadsheet The active spreadsheet object.
 * @param {string} contentScaleRange The A1 notation of the content scales to mark.
 * @param {string} adaptiveScaleRange The A1 notation of the adaptive scales to mark.
 */
function bascMarkScores(spreadsheet, contentScaleRange, adaptiveScaleRange) {
  // Process Content scales
  const bascContentRules = [
    { min: 70, max: Infinity, suffix: "**" },
    { min: 60, max: 69,       suffix: "*"  }
  ];

  let contentCells = spreadsheet.getRange(contentScaleRange);
  findAndReplace(contentCells, bascContentRules);

  // Process Adaptive scales
  const bascAdaptiveRules = [
    { min: 0,   max: 30, suffix: "**" },
    { min: 31,  max: 40, suffix: "*"  }
  ];

  let adaptiveCells = spreadsheet.getRange(adaptiveScaleRange);
  findAndReplace(adaptiveCells, bascAdaptiveRules);
}

/**
  * Main function to process scores for the BASC-3.
  * It uses the sheet name to determine which BASC-3 form is being used and calls processing and marking functions with the correct ranges.
 */
function bascMain() {
  // Initialize sheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  // Route to the correct processor based on the active sheet's name.
  switch (sheetName) {
    case "BASC-3 · Multi-Rater · TRS":
      bascProcessCells(spreadsheet, 'G27:Z30', 'B18', 'G33:I36', 'B40');
      bascMarkScores(spreadsheet, 'B18:E31', 'B32:E37');
      break;
    case "BASC-3 · Multi-Rater · TRS & PRS":
      bascProcessCells(spreadsheet, 'G26:AA29', 'B18', 'G32:I35', 'B41');
      bascMarkScores(spreadsheet, 'B18:E31', 'B32:E38');
      break;
    case "BASC-3 · Preschool · Multi-Rater · TRS & PRS":
      bascProcessCells(spreadsheet, 'G26:V29', 'B18', 'G32:I35', 'B36');
      bascMarkScores(spreadsheet, 'B18:E28', 'B29:E33');
      break;
    case "BASC-3 · SRS":
      bascProcessCells(spreadsheet, 'D21:X21', 'B13', 'D24:H24', 'B36');
      bascMarkScores(spreadsheet, 'B13:B28', 'B29:B33');
      break;
    case "BASC-3 Table · SRS · Child":
      bascProcessCells(spreadsheet, 'D21:V21', 'B13', 'D24:H24', 'B34');
      bascMarkScores(spreadsheet, 'B13:B26', 'B27:B31');
      break;
  }
};
