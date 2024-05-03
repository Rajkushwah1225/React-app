// Form.js
import React, { useState } from 'react';
import Table from './Table';


const Form = ({ onAdd }) => {

  const [inputValues, setInputValues] = useState({ email: "", password: "" })
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    // console.log(e.target.name, e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, inputValues])
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={inputValues.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={inputValues.password}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
      <Table data={data} />
    </>
  );
};

export default Form;
