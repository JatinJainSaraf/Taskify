import React from 'react'
import LoginFormComponent from '../components/Forms/Login'
import AuthLayout from '../layouts/auth'

const LoginPage = () => {
    return (

        <AuthLayout >
            < div className="w-full max-w-xs mx-auto mt-36 h-screen items-center ">
                <h1 className="text-center text-xl font-bold mb-4">Login</h1>
                <LoginFormComponent />
            </div >
        </AuthLayout>
    )
}

export default LoginPage;