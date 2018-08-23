
 function actions(){


    function changeCurrentCalcValue(changeByValue){

        return {
            type: "CHANGE_CURRENT_CALC_VALUE",
            payload: {
                changeByValue,
            }
        }
    }

    function changeButtonStateChoice(value){

        return {
            type: "CHANGE_BUTTON_STATE_CHOICE",
            payload: {
                value,
            }
        }
    }

    function clearCurrentValue(){
        return{
            type: "CLEAR_CURRENT_VALUE"
        }
    }

    function changeOperatorValue(newOperator){

        return {
            type: "CHANGE_CURRENT_OPERATOR",
            payload: {
                newOperator
            }
        }
    }



    return {changeCurrentCalcValue,changeButtonStateChoice,clearCurrentValue,changeOperatorValue}


}

export default actions()

/*
* example of action creator
*
* function addTodo(text){
*   return (
*       {
*           type : "ADD_TODO",
*           text
*       }
*   )
*   }
*
*   example of action
*
*   {
*       type: "ADD_TODO",
*       text: "must get this project up"
*   }
 */