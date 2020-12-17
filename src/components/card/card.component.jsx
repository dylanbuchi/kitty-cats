import React from "react";
import "./card.style.css";
export const Card = (props) => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${props.monster["id"]}/?set=set4&size=140x140`}
        ></img>
        <div>
            <h4>{props.monster["name"]}</h4>
            <h6>{props.monster["email"]}</h6>
        </div>
    </div>
);
