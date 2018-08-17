// this will be the whole calculator view
import React from "react";
import { StyleSheet, View} from 'react-native';
import NavBar from './NavBar'
import CalculatedViewArea from './CalculatedViewArea'
import myStore from '../myStore/myState'

import PoundsOrKgsChange from '../containerComponents/PoundsOrKgsChange'


 export default class CalculatorVeiw extends React.Component {

    render() {
        return (

            // Top container for calculator veiw
            <View  style={styles.topContainer}>

                <NavBar/>

                {/*this is where numbers are calculated*/}
                <CalculatedViewArea curr={myStore.getState().currentCalcValue}/>


                {/*this is the flex container for all the main calculator buttons*/}
                <PoundsOrKgsChange/>


            </View>





        );
    }
}

const styles = StyleSheet.create({
    topContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch"


    },


});

