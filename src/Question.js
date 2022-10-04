import React from 'react'
import Answer from './Answer'
import { v4 } from "uuid"
import './style.css'

export default function Question(props) {

    const [question, setQuestion] = React.useState(props)
    const [answer, setAnswer] = React.useState(generateAnswer())


    function generateAnswer() {
        const answerList = []
        question.answers.map(answer => (
            answerList.push({
                answer: answer,
                id: v4(),
                isActive: false
            })
        ) )
        
        return answerList 
    }

    

    const answers = answer.map(answer => (
        <Answer
            answer={answer.answer}
            key={v4()}
            id={answer.id}
            handleClick={handleClick}
            isActive={answer.isActive}
        />
    ))


    function handleClick(id) {
        setAnswer(answer.map(answer => {
            return id === answer.id ? { ...answer, isActive: !answer.isActive } : answer
        }))
    }

    return (

        <section className="quiz--question">
            <h1>{props.question.replace("&quot;", '"')}</h1>
            <section className="answer--section">
                {answers}
            </section>
        </section>
    )
}


/* export default function Question(props) {

    const [answers, setAnswers] = React.useState([])

    React.useEffect(() => {
        const mixedAnswers = []
        mixedAnswers.push(props.correct)
        for (let i = 0; i < props.incorrect.length; i++) {
            mixedAnswers.push(props.incorrect[i])
            setAnswers(mixedAnswers)
            setAnswers(prevAnswers => prevAnswers.sort(() => Math.random() - 0.5))
        }


    }, [])


    const answerBtn = answers.map(answer => (
        <Answer
            answer={answer}
            key={v4()}
            id={v4()}
            selected={false} />
    ))



console.log(answerBtn)
return (

        <section className="quiz--question">
            <h1>{props.question.replace("&quot;", '"')}</h1>
            <section className="answer--section">
                {answerBtn}
            </section>
        </section>
    )
}
 */




// IN CASE SHIT FUCKS UP



/*
    function generateAnswers() {
        const answers = []
        answers.push(props.correct)
        for (let i = 0; i < props.incorrect.length; i++) {
            answers.push(props.incorrect[i])
        }
        const answersShuffled = answers.sort(() => Math.random() - 0.5)
        const answerElements = answersShuffled.map(answer => (
            <Button 
            answer={answer}
            handleClick={handleClick}
            key={v4()}/>
        ))
        return answerElements
    }
 */