import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import productAppReducers from './reducers';
import '../../../shared/site.css';
import App8Exercise from './App.jsx';
import registerServiceWorker from '../../../registerServiceWorker';

ReactDOM.render(<App8Exercise />, document.getElementById('root'));
registerServiceWorker();
