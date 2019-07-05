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

  render() {
    return (
      <div className="App incorrect-answer-background">
        <h2 className='question-heading'>{question.heading}</h2>
        <Options question={question} />
      </div>
    );
  }
}

export default App;
