const quizeBaseAPI = () => {
    const quizeBase = [
        {
            id: 1,
            question: "What does HTML mean?",
            answer: "hypertext markup language",
        },
        {
            id: 2,
            question: "Which tag make a space between rows?",
            answer: "<br>",
        },
        {
            id: 3,
            question: "Which tag make the smallest title",
            answer: "<h6>",
        },
        {
            id: 4,
            question: "Which attribute for input block input",
            answer: "disabled",
        },
        {
            id: 5,
            question: "Which attribute style the element",
            answer: "style",
        },
        {
            id: 6,
            question: "Which tag create a link",
            answer: "<a>",
        },
        {
            id: 7,
            question: "Which object represent HTML(write abbreviature)",
            answer: "DOM",
        },
        {
            id: 8,
            question: "Which tag make a line",
            answer: "<hr>",
        }
    ]
    const getAllQuestions = () => {
        return [...quizeBase]
    }
    const getQuestionById = (id) => {
        return quizeBase.find(elem => elem.id === id ? true : false)
    }
    return {
        getAll: getAllQuestions,
        getById: getQuestionById,
    }
}

export default quizeBaseAPI