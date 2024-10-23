import React from 'react';
import { CSVLink } from 'react-csv';

const DownloadButton = ({ data }) => {
  const headers = [
    { label: 'Label', key: 'label' },
    { label: 'Value', key: 'value' },
  ];

  const csvData = data.map(item => ({
    label: item.label,
    value: item.value,
  }));

  return (
    <CSVLink data={csvData} headers={headers} filename="copilot_data.csv">
      <button>Download CSV</button>
    </CSVLink>
  );
};

export default DownloadButton;
