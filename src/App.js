import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: '',
    };
  }

  // properties
  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  // methods
  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const users = await response.json();

    this.setState({ cats: users });
  }

  render() {
    const { cats, searchField } = this.state;

    const catsFilteredByName = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="Title">Kitty Cats</h1>
        <SearchBox
          placeholder="Search"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList cats={catsFilteredByName}></CardList>
      </div>
    );
  }
}

export default App;
