import React from 'react';
import GeneralButton from '../GeneralButton'
import {StyleSheet, View, Alert, AsyncStorage, Text} from 'react-native';

export default NavigationChoices = (props) => {

    const  retrieveData = async () => {
        try {

            let toReturn =[];
            let deadLift = await AsyncStorage.getItem("DeadLift")
            toReturn.push(<Text>DeadLift:  {deadLift}</Text>)
            let benchPress = await AsyncStorage.getItem("BenchPress")
            toReturn.push(<Text>BenchPress:  {benchPress}</Text>)
            let squat = await AsyncStorage.getItem("Squat")
            toReturn.push(<Text>Squat:  {squat}</Text>)

           // let keys = await AsyncStorage.getItem("DeadLift")
           // toReturn.push(<Text>DeadLift: {keys}</Text>)



            return toReturn

        } catch (error) {
            // Error retrieving data
            return [error]
        }
    }

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
                    //here we should navigate to PersonalRecords instead.

                    //issue here with our onclick not getting right data into redux
                    functionProps={  ()=> {
                        // props.onClick(retrieveData());
                        props.navigation.navigate('viewPRs');

                    }}
                />

            <GeneralButton
                textProps={"update records"}
                styleProps={styles.navButtons}
                //here we should navigate to PersonalRecords instead.

                //issue here with our onclick not getting right data into redux
                functionProps={  async ()=> {
                     props.onClick(await retrieveData());
                    //props.navigation.navigate('viewPRs');

                }}
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