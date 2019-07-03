import React, { Component } from 'react';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer1WrongActive: true,
            answer1CorrectActive: false,
            answer2WrongActive: false,
            answer2CorrectActive: true,
            answer3WrongActive: true,
            answer3CorrectActive: false,
            answer4WrongActive: false,
            answer4CorrectActive: true,
            isCorrect: false
        };
        this.handleClickAnswer1 = this.handleClickAnswer1.bind(this)
        this.handleClickAnswer2 = this.handleClickAnswer2.bind(this)
        this.handleClickAnswer3 = this.handleClickAnswer3.bind(this)
        this.handleClickAnswer4 = this.handleClickAnswer4.bind(this)
    }

    handleClickAnswer1() {
        const currentStateAnswer1Wrong = this.state.answer1WrongActive;
        const currentStateAnswer1Correct = this.state.answer1CorrectActive;
        this.setState({answer1WrongActive: !currentStateAnswer1Wrong});
        this.setState({answer1CorrectActive: ! currentStateAnswer1Correct})
    };

    handleClickAnswer2() {
        const currentStateAnswer2Wrong = this.state.answer2WrongActive;
        const currentStateAnswer2Correct = this.state.answer2CorrectActive;
        this.setState({answer2WrongActive: !currentStateAnswer2Wrong});
        this.setState({answer2CorrectActive: ! currentStateAnswer2Correct})
    };

    handleClickAnswer3() {
        const currentStateAnswer3Wrong = this.state.answer3WrongActive;
        const currentStateAnswer3Correct = this.state.answer3CorrectActive;
        this.setState({answer3WrongActive: !currentStateAnswer3Wrong});
        this.setState({answer3CorrectActive: ! currentStateAnswer3Correct})
    };

    handleClickAnswer4() {
        const currentStateAnswer4Wrong = this.state.answer4WrongActive;
        const currentStateAnswer4Correct = this.state.answer4CorrectActive;
        this.setState({answer4WrongActive: !currentStateAnswer4Wrong});
        this.setState({answer4CorrectActive: ! currentStateAnswer4Correct})
    };

    handleIsCorrect() {
        if (this.state.answer1CorrectActive === true) {
            this.setState({ isCorrect: true});
        };
    };

    render() {
        return(
            <div className='options-div'>
                <div className='answer-div'>
                    <div className={this.state.answer1WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer1}>
                        <div className='answer'>{this.props.question.answer1.wrongAnswer}</div>
                    </div>
                    <div className={this.state.answer1CorrectActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer1}>
                        <div className='answer'>{this.props.question.answer1.correctAnswer}</div>
                    </div>
                </div>
                <div className='answer-div'>
                    <div className={this.state.answer2WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer2}>
                        <div className='answer'>{this.props.question.answer2.wrongAnswer}</div>
                    </div>
                    <div className={this.state.answer2CorrectActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer2}>
                        <div className='answer'>{this.props.question.answer2.correctAnswer}</div>
                    </div>
                </div>
                <div className='answer-div'>
                    <div className={this.state.answer3WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer3}>
                        <div className='answer'>{this.props.question.answer3.wrongAnswer}</div>
                    </div>
                    <div className={this.state.answer3CorrectActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer3}>
                        <div className='answer'>{this.props.question.answer3.correctAnswer}</div>
                    </div>
                </div>
                <div className='answer-div'>
                    <div className={this.state.answer4WrongActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer4}>
                        <div className='answer'>{this.props.question.answer4.wrongAnswer}</div>
                    </div>
                    <div className={this.state.answer4CorrectActive ? 'highlighted' : 'non-highlighted'} onClick={this.handleClickAnswer4}>
                        <div className='answer'>{this.props.question.answer4.correctAnswer}</div>
                    </div>
                </div>
                <h3 className='result'>The answer is <span>{this.state.isCorrect ? 'correct' : 'incorrect'}</span></h3>
            </div>
        )
    }
}

export default Options;