
# Date Utilities Tool Overview

The Date Utilities tool is a single-page HTML application designed to perform common date calculations through a clean, responsive user interface. It offers two main modes: calculating the **duration** between two dates and performing **date arithmetic** (finding a future or past date by adding/subtracting a duration).

## Purpose and Functionality

The primary purpose of this tool is to provide a fast and reliable way for users to answer common date-related questions without needing external software or complex manual calculations.

* **Duration Calculator**: Determines the exact period (in years, months, and days) between a user-defined Start Date and End Date.
* **Date Arithmetic**: Calculates a new date by adding or subtracting a specified amount of time (in days, weeks, months, or years) from a Base Date.

## Key Features

The tool is feature-rich, combining utility with a modern, user-friendly design.

### Dual Calculation Modes

* **Duration Mode**: Calculates Y years, M months, and D days between two dates. It automatically handles situations where the Start Date is later than the End Date by calculating the absolute difference and providing an appropriate notification.
* **Date Arithmetic Mode**: Allows manipulation of dates using various units (days, weeks, months, years) and directions (Future or Past).

### Usability Enhancements

* **"Set Today" Buttons**: Dedicated buttons for quickly setting the End Date (in Duration Mode) or the Base Date (in Date Arithmetic Mode) to the current calendar date.
* **Responsive Design**: Utilizes a system font stack and self-contained CSS to ensure a consistent and reliable experience across different device sizes.

### Error Handling

The application includes robust client-side validation for inputs, displaying clear, contextual error messages (e.g., missing dates, non-positive duration amounts, invalid date formats).

### Offline Capability

**Self-Contained Codebase**: Since all the HTML, CSS (styles), and JavaScript (logic) are embedded within a single `DateCalculator.html` file, the tool requires **no internet connection or external resources** to function after it has been loaded or saved locally. This ensures 100% offline usability.

---

## Requirements and Technology Stack

### User Requirements

* **Browser**: Any modern web browser (e.g., Chrome, Firefox, Safari, Edge) that supports standard HTML5, CSS3, and JavaScript ES6 features.
* **Input**: Requires valid date inputs (YYYY-MM-DD format, typically handled by the browser's native date picker) and positive integer input for the duration amount.

### Technology Stack

* **HTML5**: Provides the structure and semantic markup.
* **CSS3**: Handles all styling, layout, and visual presentation. All styles are self-contained within a `<style>` block.
* **Vanilla JavaScript (ES6+)**: Implements all the core calculation logic, DOM manipulation, event handling, and mode switching. No external libraries or frameworks are used.
