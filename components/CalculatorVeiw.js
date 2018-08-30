// this will be the whole calculator view
import React from "react";
import { StyleSheet, View} from 'react-native';
import NavBar from './NavBar'


//this was bad namming because the container wrapper needs to do more than just that
import PoundsOrKgsChange from '../containerComponents/PoundsOrKgsChange'
import CalculatedViewContainer from '../containerComponents/CalculatedVeiwContainer'

 export default class CalculatorVeiw extends React.Component {

    render() {
        return (

            // Top container for calculator veiw
            <View  style={styles.topContainer}>

                <NavBar propsClick={this.props.navigation}/>

                {/*this is where numbers are calculated*/}
                {/*need calculated view area to have a container component so we can view the change*/}
                <CalculatedViewContainer/>


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

