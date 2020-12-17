import React from "react";
import "./card.style.css";
export const Card = (props) => (
    <div className="card-container">
        <img
            alt="cat"
            src={`https://robohash.org/${props.cat["id"]}/?set=set4&size=140x140`}
        ></img>
        <div>
            <h4>{props.cat["name"]}</h4>
            <h6>{props.cat["email"]}</h6>
        </div>
    </div>
);
