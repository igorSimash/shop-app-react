import {createStore, applyMiddleware, combineReducers} from "redux";
import {productReducer} from "../reducers/ProductReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {commentReducer} from "../reducers/CommentReducer.js";
import {priceReducer} from "../reducers/PriceRangeReducer";

const root = combineReducers({
    products: productReducer,
    comments: commentReducer,
    priceRange: priceReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)))