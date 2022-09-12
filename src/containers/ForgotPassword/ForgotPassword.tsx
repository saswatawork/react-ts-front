import React, { useState } from "react";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm";

export const ForgotPassword: React.FC = () => {
    const [error, setError] = useState<string>('');

    const forgotPassHandler = (email: string): void => {
        console.log({ email })
    }

    return <ForgotPasswordForm forgotPass={forgotPassHandler} error={error} />
}