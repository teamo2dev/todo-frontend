import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthStateContext } from '../context/AuthContext';

type PrivateRouteProps = {
    component: React.FunctionComponent;
    path: string;
    exact: boolean;
};

export const PrivateRoute = ({
    component: Component,
    path,
    exact,
}: PrivateRouteProps) => {
    const { isAuthenticated } = useContext(AuthStateContext);

    return (
        <Route
            exact={exact}
            path={path}
            component={() =>
                isAuthenticated ? (
                    <Component />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    );
};
