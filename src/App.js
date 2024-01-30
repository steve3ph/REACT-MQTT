
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RealTimeChart from './components/RealTimeChart';
import HistoricalDataTable from './components/HistoricalDataTable';
import './App.css'; 

function App() {
 const [realTimeData, setRealTimeData] = useState([]);
 const [historicalData, setHistoricalData] = useState([]);
 const [selectedDeviceNumber, setSelectedDeviceNumber] = useState('device10'); // Default selected device number
 const [error, setError] = useState(null);

 // List of device numbers
 const deviceNumbers = ['device1', 'device2','device3', 'device4','device5', 'device6','device7', 'device8','device9', 'device10', /* ...other devices... */];

 useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/real-time-data');
        setRealTimeData(response.data);
      } catch (err) {
        setError(err);
      }
    }

    async function fetchHistory(device_number, startDate, endDate) {
      console.log('Sending parameters:', device_number, startDate, endDate);
      try {
         const response = await axios.get('http://localhost:3000/historical-data', {
           params: { device_number, startDate, endDate },
         });
         setHistoricalData(response.data);
      } catch (err) {
         console.error('Failed to fetch historical data:', err);
      }
     }
     fetchData();
     fetchHistory(selectedDeviceNumber, '2024-01-25 10:23:04.687', '2024-01-25 16:55:35.835'); // Use selectedDeviceNumber
     
 }, [selectedDeviceNumber]); // Depend on selectedDeviceNumber

 if (error) {
    return <p>Error: {error.message}</p>;
 }

 return (
 <div className="App">
    <h1 className="title">Real Time Data Graph</h1> 
    <RealTimeChart data={realTimeData} /> 
    <div className="dropdown-container">
      <select value={selectedDeviceNumber} onChange={e => setSelectedDeviceNumber(e.target.value)}>
        <option value="" disabled>Select Device Number</option> 
        {deviceNumbers.map(deviceNumber => (
          <option value={deviceNumber} key={deviceNumber}>{deviceNumber}</option>
        ))}
      </select>
    </div>
    <HistoricalDataTable data={historicalData} />
 </div>
 );
}

export default App;

