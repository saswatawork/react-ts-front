import React, { useState } from "react";
import { RegisterForm, UserDetails } from "../../components/RegisterForm";

export const Register: React.FC = () => {
    const [error, setError] = useState<string>('');

    const registerHandler = (userDetails: UserDetails): void => {
        console.log({ userDetails })
    }

    return <RegisterForm register={registerHandler} error={error} />
}
