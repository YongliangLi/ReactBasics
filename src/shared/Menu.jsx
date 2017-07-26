import React from 'react';

function Menu(){
    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-5">
                <ul>
                    <li>
                        <a href="/topics/0_JavaScriptOverview/exercise/exercise.html">0. JavaScript Overview</a>
                    </li>

                    <li>
                        <a href="/topics/1_Components/exercise/exercise.html">1. Components</a>
                        (<a href="/topics/1_Components/solution/solution.html">Solution</a>)
                    </li>
                    <li>
                        <a href="/topics/2_PropsAndPropTypes/exercise/exercise.html">2. Props & PropTypes</a>
                        (<a href="/topics/2_PropsAndPropTypes/solution/solution.html">Solution</a>)
                    </li>

                    <li>
                        <a href="/topics/3_StateAndLifecycleHooks/exercise/exercise.html">3. State & Lifecycle Hooks</a>
                        (<a href="/topics/3__StateAndLifecycleHooks/solution/solution.html">Solution</a>)
                    </li>
                    <li>
                        <a href="/topics/4_Events/exercise/exercise.html">4. Events</a>
                        (<a href="/topics/4_Events/solution/solution.html">Solution</a>)
                    </li>
                    <li>
                        <a href="/topics/5_LiftingState/exercise/exercise.html">5. Lifting State</a>
                        (<a href="/topics/5_LiftingState/solution/solution.html">Solution</a>)
                    </li>
                    <li>
                        <a href="/topics/6_FormsAndControlledComponents/exercise/exercise.html">6. Forms & Controlled Components</a>
                        (<a href="/topics/6_FormsAndControlledComponents/solution/solution.html">Solution</a>)
                    </li>
                    <li>
                        <a href="/topics/7_Routing/exercise/exercise.html">7. Routing</a>
                        (<a href="/topics/7_Routing/solution/solution.html">Solution</a>)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;