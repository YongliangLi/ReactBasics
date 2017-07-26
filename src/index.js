import React from 'react';
import ReactDOM from 'react-dom';

import './shared/site.css';
import './index.css';
import Banner from './shared/Banner';
import Menu from './shared/Menu.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<Menu />, document.getElementById('root'));
registerServiceWorker();
