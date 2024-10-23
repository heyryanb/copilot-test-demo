import axios from 'axios';
import { useState } from 'react';
import BarGraph from './components/BarGraph';
import DownloadButton from './components/DownloadButton';

function App() {
  const [orgName, setOrgName] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/data', { orgName });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="orgName">Organization Name:</label>
        <input
          type="text"
          id="orgName"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <BarGraph data={data} />
      <DownloadButton data={data} />
    </div>
  );
}

export default App;
