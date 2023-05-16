import React, { useState } from "react";

import Controller from "./controller";
import Display from "./display";

const Calculator = () => {
    let [displayValue, changeDisplayValue] = useState(0)
    const numberChanger = (data) => {
        if(displayValue === (0 || "0")) {
            changeDisplayValue(`${data}`)
        } else {
            changeDisplayValue(`${displayValue}${data}`)
        }
    }
    const dataSaver = () => {
        localStorage.setItem("saved", `${displayValue}`)
        clearNumber()
    }
    const removeDigit = () => {
        if(`${displayValue}`.length < 2) {
            changeDisplayValue(0)
        } else {
            changeDisplayValue(`${displayValue}`.slice(0, displayValue.length - 1))
        }
    }
    const clearNumber = () => {
        changeDisplayValue(`0`)
    }
    const addNumber = () => {
        return +(localStorage.getItem("saved")) + +displayValue
    } 
    const substractNumber = () => {
        return +(localStorage.getItem("saved")) - +displayValue
    } 
    const multiplyNumber = () => {
        return +(localStorage.getItem("saved")) * +displayValue
    } 
    const devideNumber = () => {
        return +(localStorage.getItem("saved")) / +displayValue
    } 
    const factorialNumber = () => {
        let factorial = 1;

        for(let i = 1; i <= localStorage.getItem("saved"); i++) {
          factorial *= i;
        }
      
        return factorial;
    } 
    const rootNumber = () => {
        return (+(localStorage.getItem("saved"))) ** (1 / ( +displayValue))
    }
    const powerNumber = () => {
        return (+(localStorage.getItem("saved"))) ** (+displayValue)
    }
    const resultShower = () => {
        const operation = localStorage.getItem("operation")
        let result = ""
        switch(operation) {
            case "add":
                result = addNumber()
                changeDisplayValue(result)
                break
            case "substract":
                result = substractNumber()
                changeDisplayValue(result)
                break
            case "multiply":
                result = multiplyNumber()
                changeDisplayValue(result)
                break
            case "devide":
                result = devideNumber()
                changeDisplayValue(result)
                break
            case "root":
                result = rootNumber()
                changeDisplayValue(result)
                break
            case "power":
                result = powerNumber()
                changeDisplayValue(result)
                break
            case "factorial":
                result = factorialNumber()
                changeDisplayValue(result)
                break
        }
        localStorage.removeItem("operation")
        localStorage.removeItem("saved")
    }
    const functionSet = {dataSaver, removeDigit, clearNumber}

    return (
        <main className='calculator'>
            <div className='calculator__content'>
                <Display value = {displayValue}/>
                <Controller resultShower = {resultShower} functionSet = {functionSet} getNumber = {numberChanger} />
            </div>
      </main>
    )
}

export default Calculator