/* eslint-disable */
import React from 'react'

export default class ResultComponent extends React.Component {
    render() {
        return (
            <div className="maincontainer">
                <div className="resultcontainer">
                    <h2 className="resultheading">You Need More Practice</h2>
                    <h1 className="question ">Your Score:20%</h1>

                    <div className="resultquestions">
                        <p >Total Number of Questions</p>
                        <p>15</p>
                    </div>
                    <div className="resultquestions">
                        <p >Number of Attempted Questions</p>
                        <p>9</p>
                    </div>
                    <div className="resultquestions">
                        <p >Number of Correct Answers</p>
                        <p>3</p>
                    </div>
                    <div className="resultquestions">
                        <p >Number of Wrong Answers</p>
                        <p>5</p>
                    </div>


                </div>
            </div>
        )
    }
}