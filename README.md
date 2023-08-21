# Dynamic Calendar App

This is a simple React application that features a dynamic calendar component. The calendar allows you to select a specific date and view the corresponding month's calendar.

## Features

- View a dynamic calendar that highlights the current date and selected date.
- Choose a date using the input box in the app.
- Automatically highlight the current date of the displayed month.

## Installation

Clone the repository to your local machine:
   git clone https://github.com/Prajwal-W/dynamic-calendar-app.git

Navigate to the project directory:
cd dynamic-calendar-app

Install the required dependencies:
npm install

Start the development server:
npm start
Open your web browser and navigate to http://localhost:3000 to view the app.

Usage
In the input box, enter a date in the format dd-mm-yyyy (e.g., 15-09-2023).
Press the "Apply" button to display the calendar for the selected month.
The selected date will be highlighted in the calendar.
The current date of the displayed month will also be highlighted.

Technologies Used
React
react-testing-library (for testing)
Babel
Webpack
Date-fns (for date manipulation)
Project Structure
src/ - Contains the source code files.
App.js - Main application component that includes the input box and the Calendar component.
Calendar.js - Reusable calendar component that displays the calendar based on the selected date.
Calendar.css - Styles for the calendar component.
... (other files)
public/ - Contains the HTML file and other static assets.
tests/ - Contains test files for the components.

Testing
This project includes unit tests to ensure the functionality of the components. To run the tests, use the following command:
npm test

