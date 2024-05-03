// App.js
import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import MyComponent from './Api';
import MyPromise from './Promise';

const App = () => {
  const [tableData, setTableData] = useState([]);

  const handleAdd = (formData) => {
    setTableData([...tableData, formData]);
  };


  return (
    <div>
      <h1>Form and Table Example</h1>
      {/* <Form /> */}
      {/* <Table data={tableData} /> */}
      {/* <MyComponent /> */}
      <MyPromise />
    </div>
  );
};
export default App;
