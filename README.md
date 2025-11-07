
# FrIEP Project Overview

This project, named "FrIEP", consists of Google Apps Script files (`.gs`) designed to automate data processing and score marking within Google Sheets for psychological assessments. It includes scripts for ASRS, BASC-3, Conners 4, and Vineland 3 assessments, providing functions to move data between ranges and highlight scores based on clinical significance criteria using asterisks.

## Installation and Usage

These scripts are designed to be used within Google Sheets as Google Apps Script projects. There isn't a traditional "installation" process; instead, you integrate them directly into your Google Sheet.

### Steps to Integrate and Use the Scripts:

1. **Open Google Sheet:** Open the Google Sheet where you want to use these scripts.
2. **Access Apps Script Editor:** Go to `Extensions > Apps Script` in the Google Sheet menu. This will open a new tab with the Apps Script editor.
3. **Create New Script Files (if starting fresh):**
    * In the Apps Script editor, you'll typically see a `Code.gs` file by default. You can rename this or create new `.gs` files.
    * To create a new file, click the "+" icon next to "Files" in the left sidebar and select "Script". Name the file appropriately (e.g., `asrs.gs`, `basc.gs`, `conners.gs`, `shared.gs`, `vnl.gs`).
4. **Copy and Paste Code:**
    * Open each `.gs` file from this project (e.g., `source/asrs.gs`, `source/basc.gs`, etc.) in a text editor.
    * Copy the entire content of each `.gs` file.
    * Paste the content into the corresponding script file in your Google Apps Script editor.
    * **Important:** Ensure the content of `shared.gs` is also copied into a file named `shared.gs` (or similar) in your Apps Script project, as other scripts depend on its `findAndReplace` function.
5. **Save the Project:** After pasting all the code, save your Apps Script project by clicking the floppy disk icon or pressing `Ctrl + S` (Windows/Linux) / `Cmd + S` (Mac).
6. **Run a Function:**
    * In the Apps Script editor, select the desired main function from the dropdown menu at the top (e.g., `asrsMain`, `bascMain`, `connersMain`, `vnlMain`).
    * Click the "Run" button (play icon) next to the dropdown.
    * The first time you run a script, you may need to grant authorization. Follow the prompts to review permissions and allow the script to run.

### Script Manipulation and Customization:

* **Assessment-Specific Logic:** Each assessment (`asrs.gs`, `basc.gs`, `conners.gs`, `vnl.gs`) contains specific logic for processing and marking scores. You can modify the `rangeArray` (for ASRS and Conners) or the `switch` statement (for BASC-3) and `vnlMarkScores` calls (for Vineland 3) to adjust the target cells or sheet names.
* **Score Marking Criteria:** The regular expressions within the `findAndReplace` calls define the criteria for marking scores (e.g., `(6[0-4])` for "Slightly Elevated"). You can adjust these regular expressions and the asterisk patterns (`$1*`, `$1**`, `$1***`) to change how scores are highlighted.
* **Shared Utilities:** The `shared.gs` file contains the `findAndReplace` utility function. If you need to modify how text replacement works globally across all scripts, this is the place to do it.

**TODO:** Detailed instructions for linking these `.gs` files to a Google Sheet and setting up triggers for automated execution would be beneficial.
