//connect container component for addPR

import { connect } from 'react-redux'
import myActions from "../myStore/myActions"
import AddPR from '../components/otherViews/AddPR'

const mapStateToProps = (state) => ({
     currValue: state.currentCalcValue,
     currLift: state.liftChoice,
     lbsorkgs: state.buttonStateChoice



});


const mapDispatchToProps = (dispatch, ownProps) => ({

    onClick: (liftValue) => dispatch(myActions.changeLiftValue(liftValue)),
    transformToLBS: (buttonState) => dispatch(myActions.changeButtonStateChoice(buttonState)),
    //if button state choice is 1 we need to transform it back to lbs before storing it
    clearCalc: ()=> dispatch(myActions.clearCurrentValue()),
    navigateBack: ()=> ownProps.navigation.navigate("calculator"),

});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPR)