import React, { Component } from 'react';

const names = [
  "Shea",
  "Ewing",
  "Yang",
  "Mcintosh",
  "Castillo",
  "Cunningham",
  "Johnston",
  "Mckay",
  "Roberson",
  "Perez",
  "Dudley",
  "Wood",
];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;

    const filteredNames = names.filter((name) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div>
        <h2>Search filtering</h2>
        <input
          type="text"
          value={searchValue}
          onChange={this.handleSearchChange}
          placeholder="Search..."
        />
        <ul>
          {filteredNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
