import React from "react";

const Time = (props) => {
    return (
        <React.Fragment>
            <div className="time">
                <h2 className="time__content">{props.sec}</h2>
            </div>
        </React.Fragment>
    )
}
export default Time