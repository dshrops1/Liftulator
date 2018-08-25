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

    stringOrder: "", //this will be used to add values 0-9 so that we can easily click out values like 125
                     // instead of having to change values by factors of 10 as in if we have 12 and click 5 then 1 in the 10's
                     // place needs to become the 100's place so instead we can just use strings and append and when needing to calculate we can then parse it

    operationValue: "+",  //when this has a value it will calculate the based on the action of calc1 and calc2 and add it to currentCalcValue

    buttonStateChoice: 0, //alter between 1 and two used to change buttons
    //third sub array is temporay while we fix some logic
    buttonStates: [[45,35,25,10],[25,20,15,10]], //values of our buttons first sub array is lbs second is kgs
    units: ["Lbs","Kgs"],



}

//pass reducer to store
const store = createStore(mainReducer, initalState);
export default store;