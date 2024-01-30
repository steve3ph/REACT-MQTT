// import React, { useState } from 'react';
// import { Table, Input, Button } from 'semantic-ui-react';

// function HistoricalDataTable({ data }) {
//  const [filterInput, setFilterInput] = useState("");
//  const [filteredData, setFilteredData] = useState(data);

//  const handleFilter = () => {
//     let filtered = data.filter(row => row.device_number.includes(filterInput));
//     setFilteredData(filtered);
//  };

//  return (
//     <div>
//       <Input placeholder='Search...' onChange={event => setFilterInput(event.target.value)} />
//       <Button onClick={handleFilter}>Filter</Button>

//       <Table celled>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Device Number</Table.HeaderCell>
//             <Table.HeaderCell>Parameter</Table.HeaderCell>
//             <Table.HeaderCell>Value</Table.HeaderCell>
//             <Table.HeaderCell>Timestamp</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>
//           {filteredData.map((row) => (
//             <Table.Row key={row.id}>
//               <Table.Cell>{row.device_number}</Table.Cell>
//               <Table.Cell>{row.parameter}</Table.Cell>
//               <Table.Cell>{row.value}</Table.Cell>
//               <Table.Cell>{row.timestamp}</Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//     </div>
//  );
// }

// export default HistoricalDataTable;



// import React, { useEffect, useState } from 'react';
// import { Table } from 'semantic-ui-react';
// import axios from 'axios';
// import styles from './HistoricalDataTable.module.css';

// function HistoricalDataTable() {
//  const [data, setData] = useState([]);

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/historical-data', {
//           params: { device_number: 'device10' }, // Pass the device_number parameter
//         });
//         setData(response.data);
//       } catch (err) {
//         console.error('Failed to fetch historical data:', err);
//       }
//     };

//     fetchData();
//  }, []);

//  return (
//     <Table celled className={styles.table}>
//       <Table.Header className={styles.header}>
//         <Table.Row>
//           <Table.HeaderCell className={styles.cell}>Device Number</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Parameter</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Value</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Timestamp</Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>

//       <Table.Body>
//         {data.map((row) => (
//           <Table.Row key={row.id}>
//             <Table.Cell className={styles.cell}>{row.device_number}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.parameter}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.value}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.timestamp}</Table.Cell>
//           </Table.Row>
//         ))}
//       </Table.Body>
//     </Table>
//  );
// }

// export default HistoricalDataTable;


// HistoricalDataTable.js
// import React from 'react';
// import { Table } from 'semantic-ui-react';
// import styles from './HistoricalDataTable.module.css';

// function HistoricalDataTable({ data }) {
//  return (
//     <Table celled className={styles.table}>
//       <Table.Header className={styles.header}>
//         <Table.Row>
//           <Table.HeaderCell className={styles.cell}>Device Number</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Parameter</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Value</Table.HeaderCell>
//           <Table.HeaderCell className={styles.cell}>Timestamp</Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>

//       <Table.Body>
//         {data.map((row) => (
//           <Table.Row key={row.id}>
//             <Table.Cell className={styles.cell}>{row.device_number}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.parameter}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.value}</Table.Cell>
//             <Table.Cell className={styles.cell}>{row.timestamp}</Table.Cell>
//           </Table.Row>
//         ))}
//       </Table.Body>
//     </Table>
//  );
// }

// export default HistoricalDataTable;

// HistoricalDataTable.js
import React from 'react';
import { Table } from 'semantic-ui-react';
import styles from './HistoricalDataTable.module.css';

function HistoricalDataTable({ data }) {
 return (
    <Table celled className={styles.table}>
      <Table.Header className={styles.header}>
        <Table.Row>
          <Table.HeaderCell className={styles.cell}>Device Number</Table.HeaderCell>
          <Table.HeaderCell className={styles.cell}>Parameter</Table.HeaderCell>
          <Table.HeaderCell className={styles.cell}>Value</Table.HeaderCell>
          <Table.HeaderCell className={styles.cell}>Timestamp</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell className={styles.cell}>{row.device_number}</Table.Cell>
            <Table.Cell className={styles.cell}>{row.parameter}</Table.Cell>
            <Table.Cell className={styles.cell}>{row.value}</Table.Cell>
            <Table.Cell className={styles.cell}>{row.timestamp}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
 );
}

export default HistoricalDataTable;





