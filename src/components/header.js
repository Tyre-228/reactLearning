import React from "react";

const Header = (props) => {
    return (
        <h1 className="header">Welcome {props.name || "Visitor"} to this awesome quize app</h1>
    )
}

export default React.memo(Header)