import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:3001/api/getData') 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
           
            <strong>Name: {item.id}</strong>
            <p>Email: {item.name}</p>
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
