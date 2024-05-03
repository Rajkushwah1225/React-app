// Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
