import React from "react";

import NumberButton from "./numberButton";

const Controller = (props) => {
    const getValue = (value) => {
        props.getNumber(value)
    }
    const operator = (event) => {
        localStorage.setItem("operation", event.currentTarget.getAttribute("operation"))
        dataSaver()
    }
    const {dataSaver, removeDigit, clearNumber} = props.functionSet

    return (
        <div className="controller">
            <div className="controller__numbers">
                <NumberButton getNumber = {getValue} value = "0" />
                <NumberButton getNumber = {getValue} value = "1" />
                <NumberButton getNumber = {getValue} value = "2" />
                <NumberButton getNumber = {getValue} value = "3" />
                <NumberButton getNumber = {getValue} value = "4" />
                <NumberButton getNumber = {getValue} value = "5" />
                <NumberButton getNumber = {getValue} value = "6" />
                <NumberButton getNumber = {getValue} value = "7" />
                <NumberButton getNumber = {getValue} value = "8" />
                <NumberButton getNumber = {getValue} value = "9" />
            </div>
            <div className="controller__operations">
                <button onClick={removeDigit} id="remove">RM</button>
                <button onClick={clearNumber} id="clear">CL</button>
                <button onClick={(event) => {operator(event)}} operation="add">+</button>
                <button onClick={(event) => {operator(event)}} operation="substract">-</button>
                <button onClick={(event) => {operator(event)}} operation="multiply"><span>+</span></button>
                <button onClick={(event) => {operator(event)}} operation="devide">/</button>
                <button onClick={(event) => {operator(event)}} operation="root">SQRT</button>
                <button onClick={(event) => {operator(event)}} operation="power">SQ</button>
                <button onClick={(event) => {operator(event)}} operation="factorial">!</button>
                <button onClick={() => {props.resultShower()}} id="result">=</button>
            </div>
        </div>
    )
}

export default Controller