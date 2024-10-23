const request = require('supertest');
const app = require('../server');

describe('GitHub Copilot API Data', () => {
  it('should fetch data from GitHub API and store it', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ orgName: 'test-org' });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should handle errors when fetching data from GitHub API', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ orgName: 'invalid-org' });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Failed to fetch data from GitHub API');
  });
});

describe('CSV Download', () => {
  it('should download data as CSV file', async () => {
    const response = await request(app).get('/api/download');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('text/csv');
    expect(response.headers['content-disposition']).toContain('attachment; filename="data.csv"');
  });

  it('should handle errors when downloading CSV file', async () => {
    // Simulate an error by clearing the dataStore
    app.dataStore = [];

    const response = await request(app).get('/api/download');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Failed to download CSV file');
  });
});
