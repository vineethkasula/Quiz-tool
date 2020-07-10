import { createStore, combineReducers, applyMiddleware } from 'redux';
import questionsReducer  from '../src/Reducer/Questions.reducer';
import { loadState, saveState } from '../src/LocalStorage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


let questions = combineReducers({
    sr : questionsReducer, 
});

const  getData = loadState(); 
let store = createStore(
    questions,
    getData,
    composeWithDevTools(
        applyMiddleware(thunk)
    )    
);

store.subscribe(() => {
    saveState(store.getState())
});

console.log("store", store.getState());

export default store;
