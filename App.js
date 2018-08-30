import React from 'react';
import {Provider} from "react-redux"
import { createStackNavigator } from 'react-navigation'

import CalculatorVeiw from './components/CalculatorVeiw'
import NavigationChoices from './components/otherViews/NavigationChoices'
import myState from "./myStore/myState"


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
          screen: NavigationChoices,
          navigationOptions: {
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
