//refactor navication bar out into this

import React from "react";
import {Alert} from "react-native";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons'
import Bolt from 'react-native-vector-icons/FontAwesome'
export default  NavBar = () => {

    return(

    <View style={styles.navContainer}>

        {/*hamburger button will change the view to a navigation pane*/}
        <TouchableOpacity
            style={styles.navButtons}
            onPress={()=> Alert.alert("this is navigation")}
        >
            <Text>
                <Icon
                    name='three-bars'
                    size={30}
                    color='#000'

                />
            </Text>

        </TouchableOpacity>

        {/*here is were our logo will go */}
        <View style={styles.logoContainer}>

            <Text style={styles.logoSpace}>LIFTULATOR</Text>

        </View>

        {/*allows user to quickly add new PR to common lift maybe using some sort of alert with inputs*/}
        <TouchableOpacity
            style={styles.navButtons}
            onPress={()=> Alert.alert("this is adding new PR")}
        >
            <Text>
                <Bolt
                    name="bolt"
                    size={30}
                />
            </Text>
        </TouchableOpacity>
    </View>)

}


const styles = StyleSheet.create({

    navContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        paddingTop: 25,
    },
    navButtons: {
        flex: 1,
        display: "flex",
        backgroundColor: 'green',
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,

    },

    logoContainer: {
        flex: 4,
        display: "flex",
        height: 60,
        justifyContent: "center",
        alignItems: "center",


    },

    logoSpace : {
        flex: 1,
        height: 60,
        padding: 10,
        paddingTop: 22,
        fontSize: 25,




    },


})