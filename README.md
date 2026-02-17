
# frIEP ("Free IEP")

frIEP is a collection of tools that help school psychologists streamline their workflow. It automates the tedious parts of scoring psychological assessments in Google Sheets and helps draft the narrative evaluation reports that follow.

## What's Inside?

This repository contains two main components:

* **`google_apps_script/`**: A set of Google Apps Scripts that you can add to any Google Sheet. These scripts automatically process raw scores for various assessments, marking them based on clinical significance. This includes scripts for:
    * ASRS (Autism Spectrum Rating Scales)
    * BASC-3 (Behavior Assessment System for Children, Third Edition)
    * Conners 4
    * EDDT (Emotional Disturbance Decision Tree)
    * Vineland 3 (Vineland Adaptive Behavior Scales, Third Edition)
* **`.gemini/`**: This directory holds instructions and evaluation templates for the Gemini CLI agent. After your scores are processed, you can use Gemini to quickly generate formatted sections of a psychoeducational report based on the data.

You will also find a simple `date_calculator/` tool for calculating chronological ages.

## How It Works

### 1. Automate Scoring in Google Sheets

You start by copying the scripts from the `google_apps_script/` directory into the Apps Script editor of your Google Sheet. Once installed, you can run them as macros to instantly process and mark your assessment data.

For detailed setup instructions, see the [Google Apps Script README](google_apps_script/README.md).

### 2. Generate Reports with Gemini

After scoring, you can take the processed data and use it with the Gemini CLI. The agent uses the templates in the `.gemini/` directory to help you draft the narrative sections of your evaluation report, saving you time and effort.
