import CalculatorButtons from '../components/CalculatorButtons'
import { connect } from 'react-redux'
import myActions from "../myStore/myActions"


const mapStateToProps = (state) => ({
    poundsOrLbs: state.buttonStateChoice,
    units: state.units,


});


const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch()


});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorButtons)