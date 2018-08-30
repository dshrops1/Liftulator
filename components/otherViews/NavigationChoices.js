import React from 'react';
import GeneralButton from '../GeneralButton'
import { StyleSheet, View, Alert} from 'react-native';

export default NavigationChoices = (props) => {

    return(
        <View style={styles.flexView}>

                {/*to calculator*/}
                <GeneralButton
                    textProps={"Calculator"}
                    styleProps={styles.navButtons}
                    functionProps={()=> props.navigation.navigate("calculator")}
                />
                {/*to friends*/}
                <GeneralButton
                    textProps={"Friends"}
                    styleProps={styles.navButtons}
                    functionProps={()=> Alert.alert("to Friends")}
                />
                {/*to personal records*/}
                <GeneralButton
                    textProps={"Personal Records"}
                    styleProps={styles.navButtons}
                    functionProps={()=> props.navigation.navigate('addPr')}
                />

        </View>

    )
}

const styles = StyleSheet.create({
    flexView : {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFEEAD",


    },

    navButtons : {
        //width: 150,
        alignSelf: "stretch",
        height: 100,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,
        borderWidth: 5,


    }


})