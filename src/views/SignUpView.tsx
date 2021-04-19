import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
    username: string;
    password: string;
    reTypedPassword: string;
}

const SignUpView: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const password = useRef({});
    password.current = watch('password', '');

    const submitFormHandler = (data: IFormInput) => {
        alert(
            `Are you sure? Username: ${data.username} Password: ${data.password}`
        );
    };

    return (
        <div className="container">
            <header>
                <div className="header-headings">
                    <span>SIGN UP</span>
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
                        ref={register({
                            required: 'You must specify an email',
                        })}
                    />
                    {errors.username && (
                        <span className="form-error-msg">
                            {errors.username.message}
                        </span>
                    )}
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        ref={register({
                            required: 'You must specify a password',
                            minLength: {
                                value: 8,
                                message:
                                    'Password must have at least 8 characters',
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="form-error-msg">
                            {errors.password.message}
                        </span>
                    )}
                    <input
                        id="re_typed_password"
                        name="reTypedPassword"
                        type="password"
                        placeholder="Password Re-Type"
                        ref={register({
                            required: 'You must specify a password',
                            validate: (value) =>
                                value === password.current ||
                                'The passwords do not match',
                        })}
                    />
                    {errors.reTypedPassword && (
                        <span className="form-error-msg">
                            {errors.reTypedPassword.message}
                        </span>
                    )}
                </div>
                <button className="btn-submit-form" type="submit">
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default SignUpView;
