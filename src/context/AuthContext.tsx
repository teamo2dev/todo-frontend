import React, { useReducer, Dispatch } from 'react';

type AuthStateType = {
    isAuthenticated: boolean;
};

type AuthActionType = 'signIn' | 'signOut';

type AuthAction = {
    type: AuthActionType;
    payload: AuthStateType;
};

const defaultAuthValue: AuthStateType = {
    isAuthenticated: Boolean(localStorage.getItem('token')),
};

export const AuthStateContext = React.createContext<AuthStateType>(
    defaultAuthValue
);
export const AuthDispatchContext = React.createContext<Dispatch<AuthAction>>(
    () => null
);

const authReducer = (
    state: AuthStateType,
    action: AuthAction
): AuthStateType => {
    if (!action.type) {
        return { isAuthenticated: false };
    }

    return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
    };
};

type AuthProviderProps = {
    children: React.ReactChild;
};

export const AuthProvider = (props: AuthProviderProps) => {
    const { children } = props;
    const [state, dispatch] = useReducer(authReducer, defaultAuthValue);

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};
