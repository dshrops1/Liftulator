/*
* what should our store look like to begin with , before networking just the calculator app?
*
* we will have an action for button click to change between lbs and kgs that uses two arrays in state
* one for common lbs and one for common kgs that will be used to update the button text and value used
*
 */

import { createStore } from "redux";
//will bring in reducers here
import mainReducer from './myReducers/index'

const initalState = {

    currentCalcValue: 0, //value that will be displayed
    calculatingValueOne: null, //will be what user pressed to perform such as clicking 45
    calculatingValueTwo: null, //calculations come in pairs what is to be done to what
    operationValue: null,  //when this has a value it will calculate the based on the action of calc1 and calc2 and add it to currentCalcValue

    buttonStates: [[45,35,25,10],[25,20,15,10]] //values of our buttons first sub array is lbs second is kgs

}

//pass reducer to store
const store = createStore(mainReducer, initalState);
export default store;