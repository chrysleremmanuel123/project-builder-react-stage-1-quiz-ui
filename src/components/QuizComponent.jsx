/* eslint-disable */
import React from 'react'

export default class QuizComponent extends React.Component {
    render() {
        return (
            <div className="maincontainer">
                <div className="quizcontainer">
                    <h1 className="heading">Questions</h1>
                    <h3 className="question">Which is the only mammal that can't jump</h3>
                    <div className="options">
                        <button className="opt">Dog</button>
                        <button className="opt">Goat</button>
                    </div>
                    <div className="options">
                        <button className="opt">Elephant</button>
                        <button className="opt">Lion</button>
                    </div>
                    <div className="btn">
                        <button className="previous btnstyle">Previous</button>
                        <button className="next btnstyle">Next</button>
                        <button className="quit btnstyle">Quit</button>

                    </div>
                </div>
            </div>
        )
    }
}

