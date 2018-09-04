import React from 'react';
import {Provider} from "react-redux"
import { createStackNavigator } from 'react-navigation'

import CalculatorVeiw from './components/CalculatorVeiw'
import NavigationChoices from './components/otherViews/NavigationChoices'
import AddPR from "./components/otherViews/AddPR"
import myState from "./myStore/myState"
import AddPRContainer from "./containerComponents/AddPRContainer";
import PersonalRecords from "./components/otherViews/PersonalRecords";
import NavigationChoicesContainer from './containerComponents/NavigationChoicesContainer'
import PersonalRecordsContainer from "./containerComponents/PersonalRecordsContainer";


//may do react routing here and will need to decide were to rap provider maybe over whole react routing
const RootStack = createStackNavigator(
    {
        calculator: {
          screen: CalculatorVeiw,
          navigationOptions: {
            header: null
          }

        },
        nav: {
          screen: NavigationChoicesContainer,
          navigationOptions: {
            header: null
          }

        },
        addPr: {
          screen: AddPRContainer,
          navigationOptions: {
            header: null
          }
        },
        viewPRs: {
            screen: PersonalRecordsContainer,
            navigationOptions:{
                header: null
            }
        },


    },
    {
      initialRouteName: 'calculator'
    }
)


export default class App extends React.Component {
  render() {
    return (

      <Provider store={myState}>
        {/*<CalculatorVeiw/>*/}
        <RootStack/>
      </Provider>





    );
  }
}
