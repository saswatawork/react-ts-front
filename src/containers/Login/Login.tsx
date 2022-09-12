import React, { useState } from "react";
import { LoginForm, LoginDetails } from "../../components/LoginForm";

export const Login: React.FC = () => {
    const [error, setError] = useState<string>('');

    const loginHandler = (loginDetails: LoginDetails): void => {
        console.log({ loginDetails })
    }

    return <LoginForm login={loginHandler} error={error} />
}
