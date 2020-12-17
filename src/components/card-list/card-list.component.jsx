import React, { Component } from "react";
import { Card } from "../card/card.component.jsx";

import "./card-list.style.css";
class CardList extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="card-list">
                {this.props["cats"].map((cat) => (
                    <Card key={cat.id} cat={cat}></Card>
                ))}
            </div>
        );
    }
}

export { CardList };
