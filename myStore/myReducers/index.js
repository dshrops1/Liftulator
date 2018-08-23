import Alert from 'react-native'

export default function reducers(state ={}, action){

    const  KILLO = 2.20462
    //used to determine operation function
    const MATHCHOICE = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) {return x - y},
        '*': function (x, y) {return x * y},
        '/': function (x, y) {return x / y},
    }

    //(parseFloat((state.currentCalcValue / 2.2).toFixed(2))):(parseFloat((state.currentCalcValue * 2.2).toFixed(2)))
    switch(action.type){
        case "CHANGE_BUTTON_STATE_CHOICE":
            return {
                ...state,
                buttonStateChoice: action.payload.value,
                //work on how we want to do our math here so when we enter 45lbs and go to kgs back to lbs it still ='s 45lbs
                currentCalcValue: (action.payload.value === 1) ? (parseFloat((state.currentCalcValue / KILLO).toFixed(2))) : (Math.round(state.currentCalcValue * KILLO))
            }
        case "CHANGE_CURRENT_CALC_VALUE":
            return {...state, currentCalcValue: MATHCHOICE[state.operationValue](state.currentCalcValue, action.payload.changeByValue)}
        case "CLEAR_CURRENT_VALUE":
            return {...state, currentCalcValue: 0}
        case "CHANGE_CURRENT_OPERATOR":
            return {...state, operationValue:"/"}
        default:
            return state

    }


}

//dont mutate state return new state object with updated fields
//easy way to do this is to return an object spreading previous state and adding changed state
// ex: { ...x , changedState: change} will be a new object with changedState which would have been in x also just being updated
