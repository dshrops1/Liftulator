import React from "react";
import { StyleSheet, Text, View} from 'react-native';


export default CalculatedViewArea = ({currValue,units,poundsOrLbs}) => {

    return(
    <View style={styles.calculateArea}>
        <Text style={styles.numberStyle}>{currValue +  units[poundsOrLbs]}</Text>
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