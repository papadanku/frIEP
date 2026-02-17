
# Google Apps Script

To use these scripts, you add them directly to your Google Sheet project.

## Instructions

### Add the Scripts to Your Google Sheet

1. Open your Google Sheet.
2. In the menu, go to **Extensions > Apps Script**.
3. Give your new script project a name.
4. Click the **+** icon next to "Files" to add a new script file.
5. Name the new file after one of the scripts (e.g., `asrs`).
6. Open the corresponding script file (e.g., `asrs.gs`) from this repository.
7. Copy the code and paste it into the file you created in the Apps Script editor.
8. Repeat these steps for all the other scripts: `basc.gs`, `conners.gs`, `core.gs`, `eddt.gs`, and `vnl.gs`.

### Use the Scripts as Macros

1. In your Google Sheet, go to **Extensions > Macros > Import Macro**.
2. Add each function that ends with "Main" (like `asrsMain`, `eddtMain`, and `bascMain`).
3. To make the macro easier to run, you can give it a custom name. For example, you can rename `eddtMain` to "EDDT \| Process Scores".

## How to Customize the Scripts

* **Change Target Cells**: To change which cells or sheets the scripts affect, you edit the script for that assessment.
    * For most scripts (like `asrs.gs`, `conners.gs`, `eddt.gs`, and `vnl.gs`), you update the cell range string (e.g., `'B18:E33'`) in the `getRange()` calls.
    * For the BASC-3 (`basc.gs`), you edit the ranges within the `switch` statement to target different BASC-3 forms.
* **Change Score Marking Rules**: You can change how the scripts mark scores. Each script has a `rules` array that defines score ranges (`min`, `max`) and the `suffix` to add (e.g., `*`, `**`). You can edit these rules to match your criteria.
* **Change Shared Functions**: The `core.gs` file contains a `findAndReplace` function that all other scripts use. If you want to change how text is replaced across all scripts, edit this file.

## Assessment Information

* **Autism Spectrum Rating Scales (ASRS)**
    * **Webpage**: https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Behavior/Autism-Spectrum-Rating-Scales/p/100000354
    * **Sample Report**: https://www.uvm.edu/d10-files/documents/2025-02/VCHIP_CHAMP_asd_del4d_asrs.pdf
* **Behavior Assessment System for Children \| Third Edition**
    * **Webpage**: https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Behavior/Behavior-Assessment-System-for-Children-%7C-Third-Edition-/p/100001402
    * **Sample Report**: https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/basc-3/basc-3-rating-scales-report-sample.pdf
* **Conners 4**
    * **Webpage**: https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Behavior/Conners-4th-Edition/p/P100043000
    * **Sample Report**: https://www.pearsonclinical.co.uk/content/dam/school/global/clinical/uk-clinical/files/conners-4/Conners-4-Sample-Single-Rater-Report.pdf
* **Emotional Disturbance Decision Tree (EDDT)**
    * **Webpage**: https://www.parinc.com/products/eddt-new
    * **Sample Report**: https://www.parinc.com/docs/default-source/product-resources/eddt-ir-sample.pdf?sfvrsn=2d1e8f85_3
* **Vineland Adaptive Behavior Scales \| Third Edition**
    * **Webpage**: https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Behavior/Vineland-Adaptive-Behavior-Scales-%7C-Third-Edition/p/100001622
    * **Sample Report**: https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/vineland-3/vineland-3-comprehensive-interview-form-sample-report.pdf
