import React from 'react'
import { v4 } from "uuid"
import './style.css'

export default function Answer(props) {    

    return (
        <div>
            <button
                onClick={() => props.handleClick(props.id)}
                className={props.selected ? "answer--button--selected" : "answer--button"}
            >
                {props.answer}
            </button>
        </div>
    )
}