import { connect } from 'react-redux'
import myActions from "../myStore/myActions"
import CalculatedViewArea from '../components/CalculatedViewArea'

const mapStateToProps = (state) => ({
    currValue: state.currentCalcValue,
    poundsOrLbs: state.buttonStateChoice,
    units: state.units,



});


const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch()
    //in here we can map any dispatch we are using in CalculatorButtons to a props function and just use that
    //after that we should be able to get rid of the store.

});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatedViewArea)