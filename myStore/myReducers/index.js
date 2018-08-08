export default function reducers(state ={}, action){


    return state;
}

//dont mutate state return new state object with updated fields
//easy way to do this is to return an object spreading previous state and adding changed state
// ex: { ...x , changedState: change} will be a new object with changedState which would have been in x also just being updated
