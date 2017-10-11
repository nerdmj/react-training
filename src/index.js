import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calci from './components/calculator/Calci';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Calci />, document.getElementById('calculator'));
registerServiceWorker();
