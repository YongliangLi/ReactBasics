import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App7Exercise from './topics/7_Routing/exercise/App.jsx';

import './shared/site.css';
import './index.css';
import Banner from './shared/Banner';
import MenuRouter from './shared/MenuRouter.jsx'
import registerServiceWorker from './registerServiceWorker';


function RoutingPaths (){
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/Routing-Exercise" component={App7Exercise}/>
                    <Route path="/" component={MenuRouter}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<RoutingPaths />, document.getElementById('root'));
registerServiceWorker();
