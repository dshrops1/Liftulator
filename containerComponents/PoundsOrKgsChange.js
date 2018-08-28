import CalculatorButtons from '../components/CalculatorButtons'
import { connect } from 'react-redux'
import myActions from "../myStore/myActions"


const mapStateToProps = (state) => ({
    poundsOrLbs: state.buttonStateChoice,
    units: state.units,


});


const mapDispatchToProps = (dispatch) => ({
    buttonValuePress: (value) => dispatch(myActions.changeCurrentCalcValue(value)),
    clearCurrValue: () => dispatch(myActions.clearCurrentValue()),
    changeOperator: (newOperator) => dispatch(myActions.changeOperatorValue(newOperator)),
    appendNumber: (numToAppend) => dispatch(myActions.appendNumberToCalculationString(numToAppend)),
    equalsPressed: ()=> dispatch(myActions.calculateCurrentValueAfterEqualPress()),


});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorButtons)