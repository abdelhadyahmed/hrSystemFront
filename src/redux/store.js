import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const enhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(rootReducer, compose(applyMiddleware(thunk), enhancer()));

export default store