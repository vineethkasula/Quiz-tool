import { addQuestionDetails } from '../Action/Questions.Action';
import { constants } from '../Constants';

const intialState = {
    arr:[]
}

export default function questionsReducer(state = intialState, action) {
    switch(action.type){
        case constants.ADD_QUESTION:
            return{
                ...state,
                arr: [...state.arr, action.question]        
            };

        case constants.DLT_QUESTION:
            return{
                ...state,
                ...state.arr.splice(state.arr.length-1, 1),
                clickedIndex : -2,
            }

        case constants.CLK_QUESTION:
            console.log("{reducer - index value"+action.indexValue);
            return{
                ...state,
                clickedIndex : action.indexValue,
                isChanged : true
                
            }
        
        case constants.UPDT_QUESTIONNAME:
            return{
                ...state,

            }

        default:
            return state;
    }

}