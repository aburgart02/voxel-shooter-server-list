import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../api/api';
import {rootReducer} from './root-reducer/root-reducer';

export const api = createAPI();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
        })
});
