'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const Navbar = () => {

    const router = useRouter()
    const handleLogout = async () => {
        await fetch("/api/logout");
        router.push("/login");  
    }
    return (
        <>
            <header className=" body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-indigo-600 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">TASKIFY</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap space-x-3 items-center text-base justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex  ">

                                <Link href={"/task"} className="inline-flex pl-2 text-indigo-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0" aria-current="page">Tasks</Link>

                            </div>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="inline-flex text-red-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-red-400 hover:text-white rounded text-base mt-4 md:mt-0">Log out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar