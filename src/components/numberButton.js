import React from "react";

const NumberButton = (props) => {
    const clickHandler = (event) => {
        props.getNumber(event.target.id)
    }
    return (
        <button onClick={clickHandler} className="number-button" id = {props.value}>{props.value}</button>
    )
}

export default NumberButton