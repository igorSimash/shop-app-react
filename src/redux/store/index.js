import {createStore, applyMiddleware, combineReducers} from "redux";
import {productReducer} from "../reducers/ProductReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {commentReducer} from "../reducers/CommentReducer";

const root = combineReducers({
    products: productReducer,
    comments: commentReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)))