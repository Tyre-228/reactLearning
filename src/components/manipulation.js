import React, { useState } from "react";
import Time from "./time";


const Manipulation = () => {
    let [seconds, changeSeconds] = useState(10)
    const timerStarter = () => {
        if(seconds > 0) {
            setTimeout(() => {
                changeSeconds(--seconds)
                timerStarter()
            }, 1000)
        }
    }
    return (
        <React.Fragment>
            <Time sec = {seconds} />
            <div className="manipulation">
                <div className="manipulation__change-delay">
                    <button 
                        onClick={() => {changeSeconds(++seconds)}} 
                        className="time_add">+</button>
                    <button 
                        onClick={() => {changeSeconds(seconds > 0 ? --seconds : seconds)}} 
                        className="time_substract">-</button>
                </div>
                <div 
                    onClick={() => {changeSeconds(seconds = 0)}}
                    className="manipulation__reset">
                    <button className="manipulation__reset-button">Reset</button>
                </div>
                <div className="manipulation__start">
                    <button 
                        className="manipulation__start-button"
                        onClick={timerStarter}>Start</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Manipulation