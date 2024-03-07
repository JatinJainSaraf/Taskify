
import React from 'react';
import RegistrationForm from '../components/Forms/Register';
import AuthLayout from '../layouts/auth';

const RegistrationPage = () => {
    return (
        <AuthLayout>
            <div className="w-full max-w-sm mx-auto mt-16 h-screen">
                <h1 className="text-center text-xl font-bold mb-4">Register</h1>
                <RegistrationForm />
            </div>
        </AuthLayout>
    );
};

export default RegistrationPage;