import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTrash } from "react-icons/fa";

// Define the component props
interface RemoveBtnProps {
    taskId: string;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ taskId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const removeTask = async () => {
        const res = await fetch(`/api/task/delete-task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            

            
        }
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className='text-red-400'>
                <FaTrash size={24} />
            </button>

            <Transition show={isOpen} as={React.Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                Confirm Deletion
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Are you sure you want to delete this task?
                                </p>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                    onClick={removeTask}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default RemoveBtn;