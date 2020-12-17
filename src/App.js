import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cats: [],
        };
    }
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const users = await response.json();

        this.setState({ cats: users });
    }

    render() {
        return (
            <div className="App">
                <CardList cats={this.state["cats"]}></CardList>
            </div>
        );
    }
}

export default App;
