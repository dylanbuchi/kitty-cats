import React from "react";

import { Card } from "../card/card.component.jsx";

import "./card-list.style.css";

export const CardList = ({ cats }) => {
    return (
        <div className="card-list">
            {cats.map((cat) => (
                <Card key={cat.id} cat={cat}></Card>
            ))}
        </div>
    );
};
