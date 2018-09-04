import { connect } from 'react-redux'
import myActions from "../myStore/myActions"
import PersonalRecords from '../components/otherViews/PersonalRecords'
import {Text,View, AsyncStorage, Picker, Alert, StyleSheet} from 'react-native'

const mapStateToProps = (state) => ({
    currValue: state.currentCalcValue,
    poundsOrLbs: state.buttonStateChoice,
    units: state.units,
    liftsArray: state.returnLifts,




});




const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch()
    //in here we can map any dispatch we are using in CalculatorButtons to a props function and just use that
    //after that we should be able to get rid of the store.
    //onClick: (arrayValue)=> dispatch(myActions.changeReturnLifts(arrayValue))

});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalRecords)