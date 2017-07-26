import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuRouter(){
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-5">
                    <ul>
                        <li>
                            <a href="/topics/0_JavaScriptOverview/exercise/exercise.html">0. JavaScript Overview</a>
                        </li>

                        <li>
                            <a href="/topics/RenderingPractice/exercise/exercise.html">Rendering Practice</a>
                        </li>

                        <li>
                            <a href="/topics/1_Components/exercise/exercise.html">1. Components</a>
                        </li>
                        <li>
                            <a href="/topics/2_PropsAndPropTypes/exercise/exercise.html">2. Props & PropTypes</a>
                        </li>

                        <li>
                            <a href="/topics/3_StateAndLifecycleHooks/exercise/exercise.html">3. State & Lifecycle Hooks</a>
                        </li>
                        <li>
                            <a href="/topics/4_Events/exercise/exercise.html">4. Events</a>
                        </li>
                        <li>
                            <a href="/topics/5_LiftingState/exercise/exercise.html">5. Lifting State</a>
                        </li>
                        <li>
                            <a href="/topics/6_FormsAndControlledComponents/exercise/exercise.html">6. Forms & Controlled Components</a>
                        </li>
                        <li>
                            <NavLink className="menu-item" to="/Routing-Exercise">7. Routing</NavLink>
                        </li>
                        <li>
                            <a href="/topics/8_Redux/exercise/exercise.html">8. Redux</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*<hr/>*/}
            {/*<div className="row">*/}
                {/*<div className="col-md-4 col-md-offset-5">*/}
                    {/*<ul>*/}
                        {/*<li>*/}
                            {/*<a href="/topics/Extra_Children/exercise/exercise.html">Extras. Children</a>  (<a href="/topics/Extra_Children/solution/solution.html">Solution</a>)*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<a href="/topics/Extra_HigherOrderComponent/exercise/exercise.html">Extras. Higher Order Component</a>  (<a href="/topics/Extra_HigherOrderComponent/solution/solution.html">Solution</a>)*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );
}

export default MenuRouter;