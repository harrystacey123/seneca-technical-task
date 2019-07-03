import React, { Component } from 'react';
import './App.css';
import Options from './Options';

let question = {
  heading: 'An animal cell contains:',
  answer1: {
    wrongAnswer: 'Cell Wall',
    correctAnswer: 'Ribosomes'
  },
  answer2: {
    wrongAnswer: 'Chloroplast',
    correctAnswer: 'Cytoplasm'
  },
  answer3: {
    wrongAnswer: 'Impermeable membrane',
    correctAnswer: 'Partially permeable membrane'
  },
  answer4: {
    wrongAnswer: 'Cellulose',
    correctAnswer: 'Mitochondrea'
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false
    }
  }

  render() {
    return (
      <div className="App">
        <h2>{question.heading}</h2>
        <Options question={question} />
        <h3>The answer is <span>{this.state.isCorrect ? 'correct' : 'incorrect'}</span></h3>
      </div>
    );
  }
}

export default App;
