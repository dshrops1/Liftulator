//connect container component for addPR

import { connect } from 'react-redux'
import myActions from "../myStore/myActions"
import AddPR from '../components/otherViews/AddPR'

const mapStateToProps = (state) => ({
     currValue: state.currentCalcValue,
     currLift: state.liftChoice,




});


const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch()
    //in here we can map any dispatch we are using in CalculatorButtons to a props function and just use that
    //after that we should be able to get rid of the store.
    onClick: (liftValue) => dispatch(myActions.changeLiftValue(liftValue))

});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPR)