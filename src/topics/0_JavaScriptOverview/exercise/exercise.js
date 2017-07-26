import React from 'react';
import ReactDOM from 'react-dom';
import '../../../shared/site.css';
import Banner from '../../../shared/Banner';
import $ from 'jQuery';
import registerServiceWorker from '../../../registerServiceWorker';

ReactDOM.render(<Banner />, document.getElementById('banner'));
registerServiceWorker();


$(document).ready(() => {
    const functions = {
        jsVarLetConst: () => {
                var varTotal = 0;
                let letTotal = 0;
                const constTotal = 0;

                if (true){
                    var varTotal = 100;
                    let letTotal = 100;
                    const constTotal = 100;
                }

                letTotal = letTotal + 1;
                //constTotal = constTotal + 1; //Throws an error!

                console.log('varTotal', varTotal); //varTotal is 100
                console.log('letTotal', letTotal); //letTotal is 1
                console.log('constTotal', constTotal); //constTotal is 0
            },

        jsStringTemplates: () => {
            let name = 'John';
            console.log(`Hello, ${name}`);
        },

        jsObjectMethods: () => {
            let functions = {
                oldWayFunction: function() {
                    //do some work
                },
                newWayFunction(){
                    //do some other work
                }
            }
        },

        jsArrowFunctions: () => {
            function oldWayFunction(){
                //do some work
            }

            var arrowFunction = () => {
                //do some other work
            };
        },

        jsSpread: () => {
            var numbers = [1, 2, 3],
                newNumbers = Array.of(...numbers);

            console.log('New Array: ', newNumbers);
        },

        jsDestructuring: () => {
            const properties = { firstName: 'FirstName', middleName: 'MiddleName', lastName: 'LastName' };
            const { firstName, lastName } = properties;

            console.log('Names: ', firstName, lastName);
        }
    };

    functions.jsVarLetConst();
    functions.jsStringTemplates();
    functions.jsObjectMethods();
    functions.jsArrowFunctions();
    functions.jsSpread();
    functions.jsDestructuring();
});