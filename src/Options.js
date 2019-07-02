import React, { Component } from 'react';

class Options extends Component {
    render() {
        return(
            <div className='options-div'>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer1.correctAnswer}</div>
                    <div className='answer answer2'>{this.props.question.answer1.wrongAnswer}</div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer2.wrongAnswer}</div>
                    <div className='answer answer2'>{this.props.question.answer2.correctAnswer}</div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer3.wrongAnswer}</div>
                    <div className='answer answer2'>{this.props.question.answer3.correctAnswer}</div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer4.correctAnswer}</div>
                    <div className='answer answer2'>{this.props.question.answer4.wrongAnswer}</div>
                </div>
            </div>
        )
    }
}

export default Options;