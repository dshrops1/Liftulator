import {Text,View, AsyncStorage, Picker, Alert, StyleSheet} from 'react-native'
import React from 'react'
import GeneralButton from "../GeneralButton"
import {sagaMiddleware} from '../../myStore/myState'
import {saveToLocal} from '../../myStore/sagas'



export default AddPR = (props) =>{


    const getReadyToStore = () =>{

        props.navigateBack()
        sagaMiddleware.run(saveToLocal)


    }

    return(
        <View style={styles.viewBox}>


            {/*set picker choice to our redux store using onValueChange()*/}
            <Picker
                onValueChange={(itemValue)=>props.onClick(itemValue)}
                selectedValue={props.currLift}

            >
                <Picker.Item label="DeadLift" value="DeadLift"/>
                <Picker.Item label="Squat" value="Squat"/>
                <Picker.Item label="BenchPress" value="BenchPress"/>

            </Picker>

            <Text style={styles.flexChild}>Your new PR: {props.currValue}</Text>

            <GeneralButton
                textProps="Submit"
                functionProps={()=> getReadyToStore() }
                styleProps={styles.navButtons}

            />




        </View>


    )
}


const styles = StyleSheet.create({

    viewBox: {

        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#FFEEAD",

    },

    flexChild: {

        fontSize: 28,
        height: 100,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    navButtons : {
        alignSelf: "stretch",
        height: 100,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,
        borderWidth: 5,


    }



})