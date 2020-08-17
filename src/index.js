import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './css/index.css';
import {createStore} from 'redux';

render(
  <App />,
  document.getElementById('root')
);

function counter(state=0,action){
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
const store=createStore(counter);
function listen(msg){
    console.log(msg);
    console.log(store.getState())
}
store.subscribe(listen);

// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});