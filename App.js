import React from 'react';
import myStore from './myStore/myState'

import CalculatorVeiw from './components/CalculatorVeiw'




export default class App extends React.Component {
  render() {
    return (


        <CalculatorVeiw curr={myStore.getState().currentCalcValue}/>





    );
  }
}
