import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import myActions from '../myActions'
import {Alert, AsyncStorage} from "react-native";
import myState from '../myState'
// ...

//so with this saga we are going to change kgstoLbs then have a delay then store locally to phone.
//then we will run sagaMiddleware.run(helloSaga) where we need it done either having it exported so we can use it
//or creating a custom action and reducer for this saga and realted call
//

const storeData = async (lift, value) => {
    try {

        await AsyncStorage.setItem(lift.toString(), value.toString());
    } catch (error) {
        // Error saving data
        Alert.alert("did not save. Try again")
    }
}



export function* saveToLocal() {

    //so logically we want to put() and update our state
    //then delay
    //then save to local
    yield put(myActions.changeButtonStateChoice(0))
    //yield Alert.alert('does this saga work at this point')
    //yield delay(20)
    try {
        yield storeData(myState.getState().liftChoice, myState.getState().currentCalcValue)
    }catch(error){

        Alert.alert("error is " + error)
    }
    yield put(myActions.clearCurrentValue())


    // yield delay(1000)
    // yield
}