import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import productAppReducers from './reducers';
import App8Solution from './App.jsx';
import registerServiceWorker from '../../../registerServiceWorker';
import '../../../shared/site.css';

// ReactDOM.render(<App8Solution />, document.getElementById('root'));
//

let store = createStore(productAppReducers);

ReactDOM.render(
    <Provider store={store}>
        <App8Solution />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
