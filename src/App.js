import React from 'react';
import './App.css';
import Options from './Options';

let question = {
  heading: 'An Animal Cell Contains:',
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



function App() {
  return (
    <div className="App">
      <h2>{question.heading}</h2>
      <Options question={question} />
    </div>
  );
}

export default App;
