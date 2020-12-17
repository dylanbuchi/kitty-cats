import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
        };
    }
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const users = await response.json();

        this.setState({ monsters: users });
    }

    render() {
        return (
            <div className="App">
                <CardList monsters={this.state["monsters"]}></CardList>
            </div>
        );
    }
}

export default App;
