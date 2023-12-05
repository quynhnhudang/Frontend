// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Pronunciation from './components/Pronunciation';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vocabulary" component={Vocabulary} />
        <Route path="/pronunciation" component={Pronunciation} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;

// Vocabulary.js
import React from 'react';

function Vocabulary() {
  // Implement vocabulary component
  return <div>Vocabulary Component</div>;
}

export default Vocabulary;

// Pronunciation.js
import React from 'react';

function Pronunciation() {
  // Implement pronunciation component
  return <div>Pronunciation Component</div>;
}

export default Pronunciation;

// Quiz.js
import React from 'react';

function Quiz() {
  // Implement quiz component
  return <div>Quiz Component</div>;
}

export default Quiz;
