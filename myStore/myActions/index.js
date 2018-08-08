
export default function actions(){

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


    //return all action creators, some actions creators could be just action objects but for consisentcy
    //we make them action creators and dont worry about performance from function calls.
    return {getCurrentCalcValue,changeCurrentCalcValue}
//    will return an object that exposed the actions
//or maybe have it return an object that exposes action creators (functions that create our actions)

}


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