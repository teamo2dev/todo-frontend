import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import { AuthDispatchContext, AuthStateContext } from '../context/AuthContext';

interface IFormInput {
    username: string;
    password: string;
}

const LoginView: React.FC<RouteComponentProps> = () => {
    const { register, handleSubmit } = useForm();
    // TODO: https://react-hook-form.com/advanced-usage
    const history = useHistory();
    const { isAuthenticated } = useContext(AuthStateContext);
    const dispatch = useContext(AuthDispatchContext);

    const submitFormHandler = (data: IFormInput) => {
        alert(
            `Are you sure? Username: ${data.username} Password: ${data.password}`
        );
        try {
            dispatch({ type: 'signIn', payload: { isAuthenticated: true } });
            history.push('/profile');
            // TODO: Set cookie or localstorage to maintain authed state
        } catch (e) {
            alert('Failed to login');
        }
    };

    // const passwordValidation = (password: string) => {
    //     password.test(/^([a-zA-Z0-9_-]){3,5}$/)
    // };

    return (
        <div className="container">
            <header>
                <div className="header-headings">
                    <span>SIGN IN</span>
                </div>
            </header>
            <form
                className="account-form"
                onSubmit={handleSubmit(submitFormHandler)}
            >
                <div className="account-form-fields">
                    <input
                        id="username"
                        name="username"
                        type="email"
                        placeholder="E-mail"
                        required
                        ref={register}
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        ref={register}
                    />
                </div>
                <button className="btn-submit-form" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default LoginView;
