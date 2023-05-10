import React, { useState } from "react"
const Changer = () => {
    let [count, change] = useState(0)
    let [stepInpValue, stepValueChange] = useState(1)
    let step = +stepInpValue
    return (
        <React.Fragment>
            <div className="interface">
                <button className="decrease" onClick = {() => {change(count -= step)}}>-</button>
                <input style = {{width: 100}} value = {count} disabled />
                <button className="increase" onClick = {() => {change(count += step)}}>+</button>
            </div>
            <br/>
            <div className="reset">
                <button className="reset__button" onClick = {() => {change(count = 0)}}>Reset</button>
            </div>
            <br/>
            <div className="step">
                <label className = "step__description">Step</label>
                <input
                    value = {stepInpValue} 
                    onChange = {(event) => {stepValueChange(event.target.value)}} 
                    className = "step__input" 
                    placeholder="step"/>
            </div>
        </React.Fragment>
    )
}

export default Changer