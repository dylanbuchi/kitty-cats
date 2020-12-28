import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component.jsx";

import { SearchBox } from "./components/search-box/search-box.component.jsx";

import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchField: "",
        };
    }
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const users = await response.json();

        this.setState({ cats: users });
    }

    render() {
        const { cats, searchField } = this.state;

        const catsFilteredByName = cats.filter((cat) =>
            cat.name.toLowerCase().includes(searchField.toLowerCase()),
        );
        return (
            <div className="App">
                <SearchBox
                    placeholder="Search"
                    handleChange={(e) =>
                        this.setState(
                            { searchField: e.target.value },
                            () => this.state,
                        )
                    }
                ></SearchBox>
                <CardList cats={catsFilteredByName}></CardList>
            </div>
        );
    }
}

export default App;
