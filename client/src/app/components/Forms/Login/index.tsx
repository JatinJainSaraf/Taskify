'use client'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUserValidation } from '@/app/register/validation';
import { RESULT_STATUS } from '@/constants';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NextResponse } from 'next/server';
import { LoginSubmitHandlerType } from '@/types';

const LoginFormComponent = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginUserValidation) })
    const onSubmit = async (formData: LoginSubmitHandlerType) => {
        try {
            await loginUserValidation.isValidSync({ ...formData }, { abortEarly: false });

            const loginRes = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const loginData = await loginRes.json();


            if (loginData.status === RESULT_STATUS.SUCCESS) {


                router.push('/task')

                return NextResponse.json(formData);
            }
            if (loginData.status === RESULT_STATUS.FAILURE) {
                setErrorMessage(loginData.message);
            }

        } catch (error) {
            console.error('Error while login:', error);
            setErrorMessage("An error occurred during login. Please try again later.");
            return NextResponse.error()

        }
    }




    return (
        <div className=''>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email <span className='text-red-500'>*</span>
                    </label>
                    <input
                        {...register('email')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                    <span className="text-red-500">{errors.email?.message}</span>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative">
                        <input
                            {...register('password')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                        />
                        <span className="absolute inset-y-0 right-0 flex mt-3 pr-3">
                            {showPassword ? (
                                <FaRegEye onClick={togglePasswordVisibility} style={{ color: 'black' }} className="text-gray-500 cursor-pointer" />
                            ) : (
                                <FaRegEyeSlash onClick={togglePasswordVisibility} style={{ color: 'black' }} className="text-gray-500 cursor-pointer" />
                            )}
                        </span>
                        <span className="text-red-500">{errors.password?.message}</span>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-red-500 hover:bg-green-700 text-white font-semibold py-0.5 px-2 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className='flex items-center justify-center'>

                    {errorMessage && <p className='text-red-400'>{errorMessage}</p>}
                </div>
                <div className='flex items-center justify-center text-sm mt-4'>

                    <p className='text-black'> {"Don't have an account?"} <Link href={"register"} className='text-blue-500'>register now!</Link></p>
                </div>

            </form>
        </div>
    )
}

export default LoginFormComponent