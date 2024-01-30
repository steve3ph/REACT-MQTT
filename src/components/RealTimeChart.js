// RealTimeChart.js
// import React, { useEffect, useState } from 'react';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import './RealTimeChart.module.css'; // Import the CSS file
// import axios from 'axios'; // Import axios

// function RealTimeChart() {
//  const [data, setData] = useState([]);

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/real-time-data');
//         setData(response.data);
//       } catch (err) {
//         console.error('Failed to fetch real-time data:', err);
//       }
//     };

//     // Fetch data every 2 seconds
//     const intervalId = setInterval(fetchData, 2000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//  }, []);

//  // Map the data to the format expected by the LineChart component
//  const mappedData = data.map(item => ({
//     name: item.timestamp,
//     uv: item.value,
//  }));

//  return (
//     <div className="chart-container">
//       {/* <h2 className="chart-title">Real Time Data Graph</h2> <!-- Title --> */}
//       <LineChart width={500} height={300} data={mappedData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="uv" />
//       </LineChart>
//     </div>
//  );
// }

// export default RealTimeChart;



//newmodel

// RealTimeChart.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import io from 'socket.io-client';
import './RealTimeChart.module.css'; // Import the CSS file

function RealTimeChart() {
 const [data, setData] = useState([]);

 useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('real-time-data', (data) => {
       // Delay the setting of data
       setTimeout(() => {
          const formattedData = data.map(item => ({
             name: new Date(item.timestamp),
             uv: item.value,
          }));
          setData(formattedData);
       }, 1000); // Delay of 1 second
    });

    return () => socket.disconnect();
 }, []);

 // Map the data to the format expected by the LineChart component
 const mappedData = data.map(item => ({
    name: item.name,
    uv: item.uv,
 }));

 return (
    <div className="chart-container">
      <LineChart width={500} height={300} data={mappedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" />
      </LineChart>
    </div>
 );
}

export default RealTimeChart;




