import React from "react";
import {Alert} from "react-native";
import { StyleSheet, View} from 'react-native';
import myStore from '../myStore/myState'
import myActions from "../myStore/myActions"
import GeneralButton from "./GeneralButton"


export default CalculatorButtons = ({poundsOrLbs, units, buttonValuePress, clearCurrValue, changeOperator, appendNumber, equalsPressed}) =>{

    //should find a way to factor this out so we doint have to bring in store or actions here
   const  unitSwitch = () => {

        switch(myStore.getState().buttonStateChoice){
            case 0:
                //going to dispatch an action here
                myStore.dispatch(myActions.changeButtonStateChoice(1))

                //another dispatch here for converting from lbs to kgs - make associateed action-


                break;
            case 1:
                //going to dispatch an action here
                myStore.dispatch(myActions.changeButtonStateChoice(0))
                //another dispatch here for converting from kgs to lbs -make associated action
                break;
            default:
                Alert.alert("reached case default")
                break;
        }
    }

   const createCommonButtons = (start,end)=>{

         let buttons = []

            for(let i = start; i <= end; i++){
            buttons.push(
            <GeneralButton
                key={i}
                functionProps={()=> appendNumber(i)}
                styleProps={styles.calcButtonsSmall}
                textProps={i}
            />)
        }

        return buttons;
    }


    return(
        <View style={styles.buttonsTop}>
            <View style={styles.calculatorButtonsFlex}>

                {/*45lbs or 25kgs*/}
                <GeneralButton
                    functionProps={()=>(poundsOrLbs === 0) ? buttonValuePress(45): buttonValuePress(25)}
                    textProps={myStore.getState().buttonStates[myStore.getState().buttonStateChoice][0]}
                    styleProps={styles.calcButtonsMain}
                />

                {/*35lbs or 20kgs */}
                <GeneralButton
                    functionProps={()=> (poundsOrLbs === 0) ? buttonValuePress(35): buttonValuePress(20)}
                    textProps={myStore.getState().buttonStates[myStore.getState().buttonStateChoice][1]}
                    styleProps={styles.calcButtonsMain}
                />

                {/*division operator */}
                <GeneralButton
                    functionProps={()=> changeOperator("/")}
                    styleProps={styles.calcButtonsMain}
                    textProps={"/"}
                />

            </View>

            {/*second row of main buttons*/}
            <View style={styles.calculatorButtonsFlex}>

                {/*25lbs or 15kgs*/}
                <GeneralButton
                    functionProps={()=> (poundsOrLbs === 0) ? buttonValuePress(25): buttonValuePress(15)}
                    styleProps={styles.calcButtonsMain}
                    textProps={myStore.getState().buttonStates[myStore.getState().buttonStateChoice][2]}
                />

                {/*10lbs or 10kgs */}
                <GeneralButton
                    functionProps={()=> buttonValuePress(10)}
                    styleProps={styles.calcButtonsMain}
                    textProps={myStore.getState().buttonStates[myStore.getState().buttonStateChoice][3]}
                />

                {/*multiplication operator*/}
                <GeneralButton
                    functionProps={()=> changeOperator('*')}
                    styleProps={styles.calcButtonsMain}
                    textProps={"*"}
                />

            </View>

            {/*calculator number pad*/}
            <View style={styles.calculatorButtonsFlex}>

                {/*creates buttons 0-4*/}
                {createCommonButtons(0,4)}

                <GeneralButton
                    functionProps={()=> changeOperator('+')}
                    styleProps={styles.calcButtonsOperators}
                    textProps={"+"}
                />

            </View>

            {/*second part of calculator number pad */}
            <View style={styles.calculatorButtonsFlex}>

                {/*creates butons 5-9*/}
                {createCommonButtons(5,9)}

                <GeneralButton
                    functionProps={()=> changeOperator('-')}
                    styleProps={styles.calcButtonsOperators}
                    textProps={"-"}
                />

            </View>

            <View style={styles.calculatorButtonsFlex}>

                <GeneralButton
                    functionProps={()=> clearCurrValue()}
                    styleProps={styles.calcButtonsSmall}
                    textProps={"Clear"}
                />

                <GeneralButton
                    functionProps={()=> changeOperator('%')}
                    styleProps={styles.calcButtonsSmall}
                    textProps={"%"}
                />

                <GeneralButton
                    functionProps={()=> equalsPressed()}
                    styleProps={styles.calcButtonsSmall}
                    textProps={"="}
                />

                <GeneralButton
                    functionProps={unitSwitch}
                    styleProps={styles.calcButtonsSmall}
                    textProps={units[poundsOrLbs]}
                />

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
