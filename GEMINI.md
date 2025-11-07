# FrIEP Project Overview

This project, named "FrIEP", consists of Google Apps Script files (`.gs`) designed to automate data processing and score marking within Google Sheets for psychological assessments. It includes scripts for ASRS, BASC-3, Conners 4, and Vineland 3 assessments, providing functions to move data between ranges and highlight scores based on clinical significance criteria using asterisks.

## Building and Running

Google Apps Script projects are typically deployed and run directly from the Google Sheets environment they are bound to. There isn't a traditional "build" step. To run these scripts:

1.  Open the Google Sheet associated with these scripts.
2.  Go to `Extensions > Apps Script`.
3.  Select the desired function (e.g., `asrsMain`, `bascMain`, `connersMain`, `vnlMain`) from the dropdown in the Apps Script editor and click "Run".

**TODO:** Specific instructions for linking these `.gs` files to a Google Sheet and setting up triggers would be beneficial.

## Development Conventions

*   The scripts use standard JavaScript syntax for Google Apps Script.
*   Functions are clearly named (e.g., `asrsMain`, `bascProcessCells`).
*   Regular expressions are used extensively for pattern matching in score marking.
*   The `shared.gs` file indicates a practice of centralizing common utility functions.
