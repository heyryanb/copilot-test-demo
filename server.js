const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let dataStore = [];

// Endpoint to handle requests for GitHub Copilot API data
app.post('/api/data', async (req, res) => {
  const { orgName } = req.body;
  const token = 'YOUR_GITHUB_TOKEN'; // Replace with your GitHub token

  try {
    const response = await axios.get(`https://api.github.com/orgs/${orgName}/repos`, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    const data = response.data;
    dataStore = data; // Store the data

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from GitHub API' });
  }
});

// Endpoint to download data as CSV
app.get('/api/download', (req, res) => {
  const csvData = convertToCSV(dataStore);
  const filePath = path.join(__dirname, 'data.csv');

  fs.writeFileSync(filePath, csvData);

  res.download(filePath, 'data.csv', (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to download CSV file' });
    }
  });
});

// Function to convert data to CSV format
function convertToCSV(data) {
  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(header => row[header]).join(','));

  return [headers.join(','), ...rows].join('\n');
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
