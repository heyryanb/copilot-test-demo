# copilot-test-demo

## Overview

This web application uses the GitHub Copilot API to pull all available data and display it in a series of bar graphs that show progress over time. It also allows users to download the data in a CSV file.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/heyryanb/copilot-test-demo.git
   ```
2. Navigate to the project directory:
   ```
   cd copilot-test-demo
   ```
3. Install the required packages and dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`.
3. Enter the name of the organization you want to query in the input form.
4. Click the "Submit" button to fetch and display the data in bar graphs.
5. To download the data in a CSV file, click the "Download CSV" button.

## Features

- Display GitHub Copilot API data in bar graphs
- Download data in a CSV file
- Responsive design

## Required Packages and Dependencies

- Node.js
- Express
- React
- Chart.js (or any other charting library)
- Axios (for making API requests)
- Jest (for testing)

## Accessing the GitHub Copilot API and Displaying Data in Bar Graphs

1. The application makes requests to the GitHub Copilot API using Axios.
2. The retrieved data is processed and stored in the application state.
3. The data is then displayed in bar graphs using a charting library like Chart.js.

## Downloading Data in a CSV File

1. The application includes a "Download CSV" button.
2. When the button is clicked, the data is converted into CSV format.
3. The CSV file is then downloaded to the user's local machine.
