
/** @OnlyCurrentDoc */

function findAndReplace(inputRange, rules) {
  let data = inputRange.getValues();

  // Use map to create the new 2D array in memory
  let updatedData = data.map(row => row.map(cell => {
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
  }));

  // The ONLY API call to write data
  inputRange.setValues(updatedData);
}

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

function onSpreadsheetChange(e) {
  if (e.changeType === 'INSERT_ROW' || e.changeType === 'INSERT_COLUMN') {
    const changedRange = e.range; // This is the range of the newly inserted rows/columns
    changedRange.setVerticalAlignment("middle");
    Logger.log(`Applied center vertical alignment to newly ${e.changeType === 'INSERT_ROW' ? 'inserted rows' : 'inserted columns'}: ${changedRange.getA1Notation()}`);
  }
}
