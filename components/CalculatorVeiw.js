// this will be the whole calculator view
import React from "react";
import { StyleSheet, Text, View,  Alert, TouchableOpacity} from 'react-native';
import NavBar from './NavBar'
import CalculatedViewArea from './CalculatedViewArea'
import CalculatorButtons from './CalculatorButtons'

export default class CalculatorVeiw extends React.Component {
    render() {
        return (

            // Top container for calculator veiw
            <View style={styles.topContainer}>

                <NavBar/>

                {/*this is where numbers are calculated*/}
                <CalculatedViewArea curr={this.props.curr}/>


                {/*this is the flex container for all the main calculator buttons*/}
                <CalculatorButtons/>


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
