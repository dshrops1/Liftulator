import React from 'react';
import { StyleSheet, Text, View, Button , Alert, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  render() {
    return (

    <View style={styles.topContainer}>

        {/*this is our nav bar basically*/}
      <View style={styles.container}>
          <TouchableOpacity
              style={styles.navButtons}
              onPress={()=> Alert.alert("this is navigation")}
          >
              <Text> hamburger icon </Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>

          <Text style={styles.logoSpace}>Logo</Text>

          </View>

          <TouchableOpacity
              style={styles.navButtons}
              onPress={()=> Alert.alert("this is adding new PR")}
          >
              <Text> + </Text>
          </TouchableOpacity>
      </View>

        {/*this is where numbers are calculated*/}
        <View style={styles.testText}>
             <Text>245</Text>
        </View>

        <View style={styles.calculatorButtons}>

        </View>

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


    container: {
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
      height: 60,
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

  testText:{
      flex: 3.5,
      justifyContent: "flex-end",
      alignItems: "flex-end"

  },

  calculatorButtons:{
      flex: 8,
      backgroundColor: "black"
  }

});
