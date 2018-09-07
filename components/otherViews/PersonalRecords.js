import {Text,View, AsyncStorage, Picker, Alert, StyleSheet} from 'react-native'
import React from 'react'


export default PersonalRecords = (props) => {

    const POUNDS = "LBS";

    return(
        <View style={styles.viewBox}>

            <Text style={styles.flexChild}>Your PR's</Text>
            <Text style={styles.flexChild}>{props.liftsArray[0]}{POUNDS}</Text>
            <Text style={styles.flexChild}>{props.liftsArray[1]}{POUNDS}</Text>
            <Text style={styles.flexChild}>{props.liftsArray[2]}{POUNDS}</Text>
            {/*{props.liftsArray}*/}
            {/*maybe add a button here for going back*/}

        </View>
    )


}


const styles = StyleSheet.create(
    {
       viewBox: {

           display: "flex",
           flex: 1,
           justifyContent: "space-around",
           backgroundColor: "#FFEEAD",

       },

       flexChild: {

           fontSize: 28,
           // width: 500,
           height: 100,
           textAlign: "center",
           justifyContent: "center",
           alignItems: "center",
       }




    })