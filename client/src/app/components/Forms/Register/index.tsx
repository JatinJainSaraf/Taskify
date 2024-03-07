"use client"
import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { registerUserValidation } from '@/app/register/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { RESULT_STATUS } from '@/constants';
import { NextResponse } from 'next/server';
import Link from 'next/link';
import { RegisterSubmitHandlerType } from '@/types';


export default function RegistrationForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [catagories, setCatagories] = useState([]);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerUserValidation) })

    const fetchAllCatagories = async () => {
        try {
            const res = await fetch(`/api/task/all-catagories`, {
                cache: 'no-store',
            });

            if (!res.ok) {
                throw new Error('Failed to fetch the tasks');
            }

            const catagoriesDataRes = await res.json();
            setCatagories(catagoriesDataRes.data);
        } catch (error) {
            console.error('Error Loading Topics:', error);
        }
    };

    useEffect(() => {


        fetchAllCatagories();
    }, []);



    const onSubmit = async (formData: RegisterSubmitHandlerType) => {

        try {
            await registerUserValidation.isValidSync({ ...formData }, { abortEarly: false });

            const registerRes = await fetch('api/register', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const registerData = await registerRes.json();

            if (registerData.status === RESULT_STATUS.SUCCESS) {
                router.push('/task');
                return NextResponse.json(formData);
            } else {
                return NextResponse.error()
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };






    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name<span className='text-red-500' >*</span>
                </label>
                <input
                    {...register('name')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"

                />
                <span className="text-red-500">{errors.name?.message}</span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email<span className='text-red-500' >*</span>
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
                    Password<span className='text-red-500' >*</span>
                </label>
                <div className="relative">
                    <input
                        {...register('password')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="******************"
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


            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
                    Contact No<span className='text-red-500' >*</span>
                </label>
                <input
                    {...register('contactNo')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="contactNo"
                    type="text"
                    placeholder="Contact No"
                />
                <span className="text-red-500">{errors.contactNo?.message}</span>
            </div>




            <div className="mb-6">
                <label htmlFor="catagories" className="block text-sm font-medium text-black">select catagories</label>
                <select
                    {...register('catagories')}
                    id="catagories"
                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"

                >


                    <option value="">Catagories</option>
                    {catagories.map((catagories: { _id: string, name: string }) => (
                        <>
                            <option key={catagories._id} value={catagories._id}>{catagories.name}</option>
                        </>

                    ))}

                </select>
            </div>




            <div className="flex items-center justify-between">
                <button
                    className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
            </div>
            <div className='flex items-center justify-center text-sm mt-6'>

                <p className='text-black'>Already have an account <Link href={"login"} className='text-blue-500'>Login now!</Link></p>
            </div>
        </form>
    );
}
