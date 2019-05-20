import React from "react";
import "./App.css";
import "./grid.css";
const Button = props => {
    return (
        <button className="  button xs-col-12 sm-col-6" onClick={props.onClick}>
            {props.content}
        </button>
    );
};

export default Button;
// 