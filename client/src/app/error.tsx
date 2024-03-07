"use client"
import React from 'react';

interface ErrorProps {
    message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-red-600 text-center">
                <h2 className="text-lg font-bold mb-2">Error</h2>
                <p>{message || 'An unexpected error occurred.'}</p>
            </div>
        </div>
    );
};

export default Error;