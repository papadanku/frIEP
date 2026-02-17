
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

function eddtMarkAreaScores(spreadsheet, areaRange, type)
{
  // Get the range we are currently processing
  let inputRange = spreadsheet.getRange(areaRange);
  let inputValues = inputRange.getValues();

  // Normal | Mild At Risk | Moderate Clinical | High Clinical
  const parentRules = [
    [ // ADHD Rules
      { min: 38,  max: 60, suffix: '**' },
      { min: 24,  max: 37, suffix: '*'  }
    ],
    [ // Possible Psychosis Rules
      { min: 28,  max: 45, suffix: '**' },
      { min: 13,  max: 27, suffix: '*'  }
    ],
    [ // Social Maladjustment Rules
      { min: 49,  max: 75, suffix: '**' },
      { min: 26,  max: 48, suffix: '*'  }
    ],
    [ // Level of Severity Rules
      { min: 11,  max: 24, suffix: '**' },
      { min: 6,   max: 10, suffix: '*'  }
    ]
  ];

  // Normal | Mild At Risk | Moderate Clinical | High Clinical
  const teacherRules = [
    [ // ADHD Rules
      { min: 25,  max: 36, suffix: '**' },
      { min: 16,  max: 24, suffix: '*'  }
    ],
    [ // Possible Psychosis Rules
      { min: 13,  max: 30, suffix: '**' },
      { min: 8,   max: 12, suffix: '*'  }
    ],
    [ // Social Maladjustment Rules
      { min: 22,  max: 24, suffix: '**' },
      { min: 11,  max: 21, suffix: '*'  }
    ],
    [ // Level of Severity Rules
      { min: 13,  max: 18, suffix: '**' },
      { min: 7,   max: 12, suffix: '*'  }
    ],
    [ // Educational Impact Rules
      { min: 18,  max: 22, suffix: '**' },
      { min: 10,  max: 17, suffix: '*'  }
    ]
  ];

  const rulesMap = {
    parent: parentRules,
    teacher: teacherRules
  };

  const activeRules = rulesMap[type];

  const updatedValues = inputValues.map((row, rowIndex) => {
    const rules = activeRules[rowIndex];
    if (!rules) {
      return row;
    }

    return row.map(cell => {
      const value = parseFloat(cell);
      if (isNaN(value) || cell === "") {
        return cell;
      }

      const match = rules.find(rule => value >= rule.min && value <= rule.max);
      return match ? (value + match.suffix) : value;
    });
  });

  inputRange.setValues(updatedValues);
}

function eddtMain() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();
  const activeSheet = spreadsheet.getActiveSheet();

  if (sheetName == 'EDDT') {
    const characteristicScoreRange = 'B26:D30';
    const eddtMarkAreaScoresParentRange = 'B33:B36';
    const eddtMarkAreaScoresTeacherRanges = 'C33:D37';

    eddtMarkCharacteristicScores(activeSheet, characteristicScoreRange);
    eddtMarkAreaScores(activeSheet, eddtMarkAreaScoresParentRange, 'parent');
    eddtMarkAreaScores(activeSheet, eddtMarkAreaScoresTeacherRanges, 'teacher');
  }
}
