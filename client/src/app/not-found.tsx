import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-4xl font-semibold'>404 - Page Not Found</h1>
                <p > {" Get back to the"} <Link href={"/"} className=' text-blue-400 hover:text-blue-600 duration-300'>Homepage now!</Link></p>
            </div>
        </>
    );
}