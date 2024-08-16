import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "../layout/layout";
import {AppRoutes} from "../../const/app-routes";
import Servers from "../../pages/servers/servers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoutes.Main}
                    element={
                        <Layout>
                            <Servers/>
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
