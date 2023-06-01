import React, { useState } from "react";
import quizeBaseAPI from "../apis/quizeBase";

const QuizeElem = (props) => {
    const [answer, setAnswer] = useState("")
    const [postAnswerTag, setPostAnswerTag] = useState("")
    const submitHandler = (answer) => {
        if(answer.length > 0) {
            const correctAnswer = quizeBaseAPI().getById(props.id).answer
            if(correctAnswer.toLowerCase() === answer.toLowerCase()) {
                setPostAnswerTag("correct")
            } else {
                setPostAnswerTag("wrong")
            }
        }
    }
    const inputHandler = (event) => {
        setAnswer(event.target.value)
    }
    return (
        <div className={`question ${postAnswerTag}`} >
            <h2>{props.question}</h2>
            <input value={answer} onChange={inputHandler} placeholder="Insert your answer" />
            <button onClick={() => {submitHandler(answer)}}>Submit</button>
        </div>
    )
}

export default QuizeElem