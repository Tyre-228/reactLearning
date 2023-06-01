import React from "react";
import quizeBaseAPI from "../apis/quizeBase";
import QuizeElem from "./quizeElem";

const Main = () => {
    const quizeList = quizeBaseAPI().getAll()
    return (
        <div className="main">
            { quizeList.map(elem => <QuizeElem key={elem.id} id={elem.id} question={elem.question} answer={elem.answer}/>) }
        </div>
    )
}

export default React.memo(Main)