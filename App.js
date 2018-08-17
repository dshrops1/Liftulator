import React from 'react';
import {Provider} from "react-redux"

import CalculatorVeiw from './components/CalculatorVeiw'
import myState from "./myStore/myState"



export default class App extends React.Component {
  render() {
    return (

      <Provider store={myState}>
        <CalculatorVeiw/>
      </Provider>





    );
  }
}
