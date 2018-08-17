import React from "react";
import {Alert} from "react-native";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import myStore from '../myStore/myState'
import myActions from "../myStore/myActions"

export default CalculatorButtons = ({poundsOrLbs, units}) =>{

     unitSwitch = () => {

        switch(myStore.getState().buttonStateChoice){
            case 0:
                //going to dispatch an action here
                myStore.dispatch(myActions.changeButtonStateChoice(1))
                // Alert.alert("reached case 1");

                break;
            case 1:
                //going to dispatch an action here
                myStore.dispatch(myActions.changeButtonStateChoice(0))
                // Alert.alert("reached case 2")
                break;
            default:
                Alert.alert("reached case default")
                break;
        }
    }

    return(
        <View style={styles.buttonsTop}>
            <View style={styles.calculatorButtonsFlex}>

                {/*45lbs or 25kgs*/}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=>Alert.alert("this is either 45lbs or 25kg")}
                >
                    {/*text will also be based of state thus a calculated value*/}
                    <Text>
                        {myStore.getState().buttonStates[myStore.getState().buttonStateChoice][0]}
                    </Text>
                </TouchableOpacity>

                {/*35lbs or 20kgs */}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=> Alert.alert("this is either 35lbs or 20kg")}
                >
                    <Text>
                        {myStore.getState().buttonStates[myStore.getState().buttonStateChoice][1]}
                    </Text>

                </TouchableOpacity>

                {/*division */}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=> Alert.alert("will divide calculated value by value typed after")}
                >
                    <Text>
                        /
                    </Text>

                </TouchableOpacity>



            </View>


            {/*second row of main buttons*/}
            <View style={styles.calculatorButtonsFlex}>

                {/*25lbs or 15kgs*/}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=> Alert.alert("this is either 25lbs or 15kg")}
                >
                    {/*text will also be based of state thus a calculated value*/}
                    <Text>
                        {myStore.getState().buttonStates[myStore.getState().buttonStateChoice][2]}
                    </Text>
                </TouchableOpacity>

                {/*10lbs or 10kgs */}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=> Alert.alert("this will be 10lb and kgs")}
                >
                    <Text>
                        {myStore.getState().buttonStates[myStore.getState().buttonStateChoice][3]}
                    </Text>

                </TouchableOpacity>

                {/*multiplication*/}
                <TouchableOpacity
                    style={styles.calcButtonsMain}
                    onPress={()=> Alert.alert("will multiple the current value by followed value")}
                >
                    <Text>
                        *
                    </Text>

                </TouchableOpacity>


            </View>


            {/*calculator number pad*/}
            <View style={styles.calculatorButtonsFlex}>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 0")}
                >
                    {/*text will also be based of state thus a calculated value*/}
                    <Text>
                        0
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 1")}
                >
                    <Text>
                        1
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 2")}
                >
                    <Text>
                        2
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 3")}
                >
                    <Text>
                        3
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 4")}
                >
                    <Text>
                        4
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsOperators}
                    onPress={()=> Alert.alert("will add next value to current value ")}
                >
                    <Text>
                        +
                    </Text>

                </TouchableOpacity>


            </View>

            {/*second part of calculator number pad */}
            <View style={styles.calculatorButtonsFlex}>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 5 ")}
                >
                    {/*text will also be based of state thus a calculated value*/}
                    <Text>
                        5
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 6")}
                >
                    <Text>
                        6
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 7")}
                >
                    <Text>
                        7
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value 8")}
                >
                    <Text>
                        8
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("value of 9")}
                >
                    <Text>
                        9
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.calcButtonsOperators}
                    onPress={()=> Alert.alert("will minus the next typed value from current value")}
                >
                    <Text>
                        -
                    </Text>

                </TouchableOpacity>


            </View>


            <View style={styles.calculatorButtonsFlex}>

                {/*clear button*/}
                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("will clear value from our store to 0")}
                >
                    <Text>
                        Clear
                    </Text>

                </TouchableOpacity>

                {/*percent button*/}
                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={()=> Alert.alert("will take percentage from next value and current value ex: if current value is 100 and next value after % is 10 then new current value will be 10")}
                >
                    <Text>
                        %
                    </Text>

                </TouchableOpacity>

                {/*pounds to kgs and vice versa*/}
                <TouchableOpacity
                    style={styles.calcButtonsSmall}
                    onPress={unitSwitch}
                >

                    {/*will also be calculated value switching between lbs and kgs*/}
                    <Text>
                        {units[poundsOrLbs]}
                    </Text>

                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch"


    },


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
    logoSpace : {
        flex: 1,
        height: 60,
        padding: 10,
        paddingTop: 22


    },
    space: {
        height: 25
    },

    logoContainer: {
        flex: 4,
        display: "flex",
        height: 60,
        justifyContent: "center",
        alignItems: "center",

    },

    calculateArea:{
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "flex-end",

    },

    calculatorButtonsFlex:{
        flex: 1,
        display: "flex",
        flexDirection: "row",


    },

    calcButtonsMain: {
        flex: 2,
        display: "flex",
        backgroundColor: 'green',
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,
        borderColor: "black",
        borderWidth: 1.5,


    },

    calcButtonsSmall: {
        flex: 1,
        display: "flex",
        backgroundColor: 'green',
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,
        borderColor: "black",
        borderWidth: 1.5,


    },

    calcButtonsOperators: {
        flex: 2.6,
        display: "flex",
        backgroundColor: 'green',
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        elevation: 200,
        borderColor: "black",
        borderWidth: 1.5,


    },

    numberStyle: {
        fontSize: 25,
    },

    buttonsTop: {
        flex: 6
    }


});
