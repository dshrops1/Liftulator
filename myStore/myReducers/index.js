export default function reducers(state ={}, action){

    switch(action.type){
        case "CHANGE_BUTTON_STATE_CHOICE":
            return {...state, buttonStateChoice: action.payload.value }

        default:
            return state

    }


}

//dont mutate state return new state object with updated fields
//easy way to do this is to return an object spreading previous state and adding changed state
// ex: { ...x , changedState: change} will be a new object with changedState which would have been in x also just being updated
