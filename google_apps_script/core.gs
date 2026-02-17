
/** @OnlyCurrentDoc */

/**
 * Checks a single cell value against a set of rules and appends a suffix.
 *
 * @param {any} cell The cell value to process.
 * @param {Array<Object>} rules An array of rule objects, where each object has `min`, `max`, and `suffix` properties.
 * @returns {any} The original value with the suffix if a rule is matched, otherwise the original value.
 */
function findAndReplaceCell(cell, rules) {
    let value = parseFloat(cell);

    // Safety check: skip if not a number or if cell is empty
    if (isNaN(value) || cell === "")
    {
      return cell;
    }

    // Find the rule that fits
    let match = rules.find(rule => value >= rule.min && value <= rule.max);

    // Return the value with suffix if matched, otherwise original number
    return match ? (value + match.suffix) : value;
}

/**
 * Applies a set of marking rules to each cell in a given range.
 * This function reads all values from the range, processes them in memory, and writes the updated values back to the sheet in a single API call for efficiency.
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} inputRange The range of cells to process.
 * @param {Array<Object>} rules An array of rule objects to apply to each cell.
 */
function findAndReplace(inputRange, rules) {
  let data = inputRange.getValues();

  // Use map to create the new 2D array in memory
  let updatedData = data.map(row => row.map(cell => {
    return findAndReplaceCell(cell, rules);
  }));

  // The ONLY API call to write data
  inputRange.setValues(updatedData);
}

/**
 * A special trigger that runs when the spreadsheet is opened.
 * It iterates through all sheets and sets the vertical alignment to "middle" for all cells containing data.
 */
function onOpen() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = spreadsheet.getSheets();
  sheets.forEach(sheet => {
    const range = sheet.getDataRange();
    if (range.getNumRows() > 0 && range.getNumColumns() > 0) {
      range.setVerticalAlignment("middle");
    }
  });
}

/**
 * A special trigger that runs when the spreadsheet structure changes.
 * If a new row or column is inserted, it sets the vertical alignment to "middle".
 * @param {GoogleAppsScript.Events.SheetsOnChange} e The event object.
 */
function onSpreadsheetChange(e) {
  if (e.changeType === 'INSERT_ROW' || e.changeType === 'INSERT_COLUMN') {
    const changedRange = e.range; // This is the range of the newly inserted rows/columns
    changedRange.setVerticalAlignment("middle");
    Logger.log(`Applied center vertical alignment to newly ${e.changeType === 'INSERT_ROW' ? 'inserted rows' : 'inserted columns'}: ${changedRange.getA1Notation()}`);
  }
}
