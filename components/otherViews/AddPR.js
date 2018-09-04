import {Text,View, AsyncStorage, Picker, Alert, StyleSheet} from 'react-native'
import React from 'react'
import GeneralButton from "../GeneralButton"



export default AddPR = (props) =>{


    const _storeData = async (lift, value) => {
        try {

            await AsyncStorage.setItem(lift.toString(), value.toString());
        } catch (error) {
            // Error saving data
            Alert.alert("did not save. Try again")
        }
    }


    return(
        <View>
            <Text>


            </Text>

            {/*set picker choice to our redux store using onValueChange()*/}
            <Picker
                onValueChange={(itemValue)=>props.onClick(itemValue)}
                selectedValue={props.currLift}
            >
                <Picker.Item label="DeadLift" value="DeadLift"/>
                <Picker.Item label="Squat" value="Squat"/>
                <Picker.Item label="BenchPress" value="BenchPress"/>
                {/*what do we need to add to our state object for all of this*/}
            </Picker>

            <Text>Your new PR: {props.currValue}</Text>

            <GeneralButton
                textProps="Submit"
                functionProps={()=> _storeData(props.currLift, props.currValue)}

            />




        </View>


    )
}