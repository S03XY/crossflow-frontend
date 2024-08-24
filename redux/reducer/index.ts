import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./user.reducer";
import AppStateReducer from "./appState";

export const rootReducer = combineReducers({ UserReducer, AppStateReducer });
