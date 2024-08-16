import {createSlice} from '@reduxjs/toolkit';
import {Server} from "../../types/server/server";
import {NameSpace} from "../namespace";
import {fetchServersAction} from "../api-actions/servers-actions/servers-actions";

type ServersState = {
    servers: Server[];
    isLoaded: boolean;
}

const initialState: ServersState = {
    servers: [],
    isLoaded: false,
};

export const servers = createSlice({
    name: NameSpace.Servers,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServersAction.pending, (state) => {
                state.isLoaded = false;
            })
            .addCase(fetchServersAction.fulfilled, (state, value) => {
                state.isLoaded = true;
                state.servers = value.payload;
            })
            .addCase(fetchServersAction.rejected, (state) => {
                state.isLoaded = false;
            });
    }
});
