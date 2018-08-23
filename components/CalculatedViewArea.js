import React from "react";
import { StyleSheet, Text, View} from 'react-native';


export default CalculatedViewArea = ({currValue,units,poundsOrLbs}) => {

    return(
    <View style={styles.calculateArea}>
        {/*use state value inside of text thus a calculated value*/}
        {/*maybe add style so numbers are bigger and bold*/}
        <Text style={styles.numberStyle}>{currValue + units[poundsOrLbs]}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    calculateArea:{
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "flex-end",

    },
    numberStyle: {
        fontSize: 25,
    }
})