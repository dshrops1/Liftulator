import React from "react";
import { StyleSheet, Text, View} from 'react-native';


export default CalculatedViewArea = (props) => {

    return(
    <View style={styles.calculateArea}>
        {/*use state value inside of text thus a calculated value*/}
        {/*maybe add style so numbers are bigger and bold*/}
        <Text style={styles.numberStyle}>{props.curr}</Text>
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