import React, { Component } from 'react';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer1WrongActive: false,
            answer1Correct: 'non-highlighted',
            answer2Wrong: 'non-highlighted',
            answer2Correct: 'highlighted',
            answer3Wrong: 'non-highlighted',
            answer3Correct: 'highlighted',
            answer4Wrong: 'highlighted',
            answer4Correct: 'non-highlighted',
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const currentState = this.state.answer1WrongActive;
        this.setState({answer1WrongActive: !currentState});
    };

    render() {
        return(
            <div className='options-div'>
                <div className='answer-div'>
                    <div className={this.state.answer1WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClick}>
                        <div className='answer answer1 answer3'>{this.props.question.answer1.correctAnswer}</div>
                    </div>
                    <div >
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