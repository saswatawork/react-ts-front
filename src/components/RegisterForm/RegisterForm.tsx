import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface UserDetails {
    username: string;
    password: string;
    email: string;
    phone: string;
}

interface RegisterProps {
    register: (LoginDetails: UserDetails) => void;
    error?: string;
}

export const RegisterForm: React.FC<RegisterProps> = ({ register, error }) => {
    const [userDetails, setUserDetails] = useState<UserDetails>({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    const registerHandler = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        register(userDetails);
    };

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) => {
        setUserDetails({ ...userDetails, [key]: e.target?.value });
    };

    return (
        <form onSubmit={registerHandler}>
            <div className='form-inner register-form'>
                <h2>Register</h2>
                {error && <div className='error'>{error}</div>}
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        required
                        type='text'
                        value={userDetails.username}
                        name='username'
                        placeholder='Enter Username'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'username')
                        }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>Phone</label>
                    <input
                        required
                        type='email'
                        value={userDetails.phone}
                        name='phone'
                        placeholder='Enter Phone'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'phone')
                        }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>Email</label>
                    <input
                        required
                        type='email'
                        value={userDetails.email}
                        name='email'
                        placeholder='Enter Email'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'email')
                        }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        required
                        type='password'
                        value={userDetails.password}
                        name='password'
                        placeholder='Enter Password'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeHandler(e, 'password')
                        }
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Register' />
                </div>
                <div className='form-group already-have-account'>
                    <span>Already have account?</span> <Link to="/"> Login</Link>
                </div>
            </div>
        </form>
    );
};
