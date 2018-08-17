
 function actions(){

    function getCurrentCalcValue(){

        return {
            type: "GET_CURRENT_CALC_VALUE"
        }
    }

    function changeCurrentCalcValue(changeByAmount){

        return {
            type: "CHANGE_CURRENT_CALC_VALUE",
            payload: {
                changeByAmount,
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



    return {getCurrentCalcValue,changeCurrentCalcValue,changeButtonStateChoice}


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