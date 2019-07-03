import React, { Component } from 'react';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer1WrongActive: false,
            answer1CorrectActive: true,
            answer2Wrong: 'non-highlighted',
            answer2Correct: 'highlighted',
            answer3Wrong: 'non-highlighted',
            answer3Correct: 'highlighted',
            answer4Wrong: 'highlighted',
            answer4Correct: 'non-highlighted',
        };
        this.handleClickAnswer1 = this.handleClickAnswer1.bind(this)
    }

    handleClickAnswer1() {
        const currentStateAnswer1Wrong = this.state.answer1WrongActive;
        const currentStateAnswer1Correct = this.state.answer1CorrectActive;
        this.setState({answer1WrongActive: !currentStateAnswer1Wrong});
        this.setState({answer1CorrectActive: ! currentStateAnswer1Correct})
    };

    render() {
        return(
            <div className='options-div'>
                <div className='answer-div'>
                    <div className={this.state.answer1WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer1}>
                        <div className='answer'>{this.props.question.answer1.correctAnswer}</div>
                    </div>
                    <div className={this.state.answer1CorrectActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer1}>
                        <div className='answer answer2'>{this.props.question.answer1.wrongAnswer}</div>
                    </div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer2.wrongAnswer}</div>
                    <div className='answer answer2 answer3'>{this.props.question.answer2.correctAnswer}</div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer3.wrongAnswer}</div>
                    <div className='answer answer2 answer3'>{this.props.question.answer3.correctAnswer}</div>
                </div>
                <div className='answer-div'>
                    <div className='answer answer1'>{this.props.question.answer4.correctAnswer}</div>
                    <div className='answer answer2 answer3'>{this.props.question.answer4.wrongAnswer}</div>
                </div>
            </div>
        )
    }
}

export default Options;