import React, { useState } from "react";

interface ForgotPassProps {
    forgotPass: (email: string) => void;
    error?: string;
}

export const ForgotPasswordForm: React.FC<ForgotPassProps> = ({ forgotPass, error }) => {
    const [email, setEmail] = useState('');
    const forgotPasswordHandler = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        forgotPass(email);
    };

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(e.target?.value);
    };

    return (
        <form onSubmit={forgotPasswordHandler}>
            <div className='form-inner login-form'>
                <h2>Forgot Password?</h2>
                {error && <div className='error'>{error}</div>}
                <div className='form-group'>
                    <label htmlFor='username'>Email</label>
                    <input
                        required type='text'
                        value={email}
                        name='email'
                        placeholder='Enter Email'
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Reset Password' />
                </div>
            </div>
        </form>)
}