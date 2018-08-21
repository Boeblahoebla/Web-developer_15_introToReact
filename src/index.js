// View library
import React from 'react'; 

// DOM
import ReactDOM from 'react-dom'; 

// Add css for this component, described in its own css file
import './index.css'; 

// import the js file containing the rendering of the component
import Hello from './Hello';

// This line speeds up everything. 
// Without this import and its call at the end of this file the site would still load
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('root'));

// the call of the registerServiceWorker
registerServiceWorker();
