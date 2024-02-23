import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import NotFound from "../pages/NotFound";
import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
};

export default observer(AppRouter);