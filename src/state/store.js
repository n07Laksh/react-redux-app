import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/amountReducers";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({reducer}, {}, applyMiddleware(thunk))
