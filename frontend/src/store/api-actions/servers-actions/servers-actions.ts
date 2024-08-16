import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../../../types/state/state";
import {AxiosInstance} from "axios";
import {ApiRoutes} from "../../../api/api-routes";
import {Server} from "../../../types/server/server";

export const fetchServersAction = createAsyncThunk<Server[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'servers/fetchServers',
    async (_arg, {extra: api}) => {
        const {data} = await api.get<Array<string>>(ApiRoutes.GetServers);
        return data.map(str => JSON.parse(str));
    },
);