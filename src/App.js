import React from 'react'
import Question from './Question'
import './style.css'
import { v4 } from "uuid"

export default function App() {
  const [questions, setQuestions] = React.useState([])
  const [newQuestions, setNewQuestions] = React.useState([])
  const allShuffledQuestions = []

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => (localStorage.setItem("questions", JSON.stringify(data.results))))
    shuffleAnswers()

  }, [])

  function startQuiz() {
    setNewQuestions(JSON.parse((localStorage.getItem("questions"))))
  }


   function shuffleAnswers() {
    const allQuestions = JSON.parse((localStorage.getItem("questions")))
    for (let i = 0; i < allQuestions.length; i++) {
      const mixedAnswers = []
      const questionAndShuffledAnswers = {
        question: allQuestions[i].question,
        answers: mixedAnswers
      }
      mixedAnswers.push(allQuestions[i].correct_answer)
      for (let j = 0; j < allQuestions[i].incorrect_answers.length; j++) {
        mixedAnswers.push(allQuestions[i].incorrect_answers[j])
      }
      mixedAnswers.sort(() => Math.random() - 0.5)
      allShuffledQuestions.push(questionAndShuffledAnswers)
    }
    setQuestions(allShuffledQuestions)
  }

console.log(newQuestions)

  const setQuizElements = questions.map(question => (
    <Question
      question={question.question}
      answers={question.answers}
      key={v4()}
      id={v4()}
    />
  ))

  return (
    <main>
      {Object.keys(newQuestions).length > 0 ?
        <div className='container'>
          {setQuizElements}
          <section className='btn-container'>
            <button className='submit--btn'>Check answers</button>
          </section>
        </div> :
        <section className="first--page">
          <h1>Quizzical</h1>
          <h2>Welcome to Quizzical, press the button to get started!</h2>
          <button className="start-button" onClick={startQuiz}>Start quiz</button>
        </section>}
    </main>
  )
}