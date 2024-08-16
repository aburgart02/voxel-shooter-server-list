import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../namespace';
import {servers} from "../servers/servers";

export const rootReducer = combineReducers({
    [NameSpace.Servers]: servers.reducer,
});
