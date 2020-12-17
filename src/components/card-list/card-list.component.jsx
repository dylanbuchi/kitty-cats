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
                {this.props["monsters"].map((monster) => (
                    <Card key={monster.id} monster={monster}></Card>
                ))}
            </div>
        );
    }
}

export { CardList };
