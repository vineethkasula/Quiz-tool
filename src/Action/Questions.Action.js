import { constants } from '../Constants';

function addQuestionDetails(question){
    return dispatch => {
        dispatch(addQuestion(question));
    }

    function addQuestion(question) {
        return { type : constants.ADD_QUESTION, question}
    }
}

function dltQuestionDetails(){
    return dispatch => {
        dispatch(dltQuestion());
    }

    function dltQuestion() {
        return { type : constants.DLT_QUESTION }
    }
}

function clkQuestionDetails(indexValue){
    return dispatch => {
        dispatch(clkQuestion(indexValue));
    }

    function clkQuestion(indexValue) {
        return { type : constants.CLK_QUESTION, indexValue }
    }
}

function updtQuestionName(qstzn){
    return dispatch => {
        dispatch(updtQuestion(qstzn));
    }

    function updtQuestion(qstzn) {
        return { type : constants.UPDT_QUESTIONNAME, qstzn }
    }
}

export const questionActions = { addQuestionDetails, dltQuestionDetails, clkQuestionDetails, updtQuestionName };
