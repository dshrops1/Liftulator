import {Text,View, AsyncStorage, Picker, Alert, StyleSheet} from 'react-native'
import React from 'react'


export default PersonalRecords = (props) => {



    return(
        <View>

            <Text>LIFTS</Text>
            <Text>value back:</Text>
            {/*{Alert.alert("mylifts: " + props.liftsArray)}*/}
            {props.liftsArray}


        </View>
    )


}