import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './login.scss';

export interface LoginDetails {
    username: string;
    password: string;
}

interface LoginProps {
    login: (LoginDetails: LoginDetails) => void;
    error?: string;
}

export const LoginForm: React.FC<LoginProps> = ({ login, error }) => {
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        username: '',
        password: '',
    });

    const loginHandler = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        login(loginDetails);
    };

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) => {
        setLoginDetails({ ...loginDetails, [key]: e.target?.value });
    };

    return (
        <form onSubmit={loginHandler}>
            <div className='form-inner login-form'>
                <h2>Login</h2>
                {error && <div className='error'>{error}</div>}
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        required type='text'
                        value={loginDetails.username}
                        name='username'
                        placeholder='Enter Username'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'username')
                        }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        required
                        type='password'
                        value={loginDetails.password}
                        name='password'
                        placeholder='Enter Password'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'password')
                        }
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Login' />
                </div>
                <div className='form-group remember'>
                    <div className='form-group__checkbox'>
                        <input type="checkbox" name="remember" />
                        <label htmlFor="Remember me">Remember Me</label>
                    </div>
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
                <div className='form-group not-a-member'>
                    <span>Not a member?</span> <Link to="/register"> Sign Up</Link>
                </div>
            </div>
        </form>
    );
};
