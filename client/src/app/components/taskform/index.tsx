'use client'

import MainLayout from '@/app/layouts/main';
import { RESULT_STATUS } from '@/constants';
import React, { useEffect, useState } from 'react';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { addTaskDataType } from '@/types';



const TaskForm = ({ taskId }: any) => {
    const router = useRouter();

    //all the states

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [catagory, setCatagory] = useState([]);

    const [subCatagory, setSubCatagory] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [priority, setPriority] = useState<string>('');

    const [task, setTask] = useState([]);



    const addTaskData = {
        title,
        description,
        subCatagory,
        status,
        priority,
    };
    const editTaskData = {
        title,
        description,
        subCatagory,
        status,
        priority,
    };

    // if user edit the tasks so will have the task id 
    useEffect(() => {
        const getonetask = async () => {
            try {
                const res = await fetch(`/api/task/getonetask/${taskId}`, {

                });

                if (!res.ok) {
                    throw new Error('Failed to fetch the task');
                }

                const { data } = await res.json();
                setTask(data.data);
                setTitle(data.title)
                setDescription(data.description)
                setSubCatagory(data.subCatagory)
                setStatus(data.status)
                setPriority(data.priority)

            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };



        getonetask();
    }, [taskId]);



    // fetching all the subcatagories

    const fetchAllSubCatagories = async () => {
        try {
            const res = await fetch(`/api/task/getsubcatagories`, {
                // cache: 'no-store',
            });

            if (!res.ok) {
                throw new Error('Failed to fetch the catagories');
            }

            const data = await res.json();
            setCatagory(data.data.subcategories);
        } catch (error) {
            console.error('Error Loading Catagories:', error);
        }
    };

    useEffect(() => {


        fetchAllSubCatagories();
    }, []);


    const taskData = taskId ? editTaskData : addTaskData

    const handleTask = async (taskData: addTaskDataType) => {


        try {
            const url = taskId ? `/api/task/edittask/${taskId}` : `/api/task/create`
            const method = taskId ? "PUT" : "POST"
            const res = {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            }

            const response = await fetch(url, res);

            const responseData = await response.json();

            if (responseData.status === RESULT_STATUS.SUCCESS) {
                router.push('/task');
                return NextResponse.json(taskData);
            } else {
                console.log(RESULT_STATUS.FAILURE);
                return NextResponse.error()
            }
        } catch (error) {
            const errormessage = taskId ? 'error while edit task' : "error while adding  task"

            console.error('errormessage', errormessage);
        }



    };



    return (
        <MainLayout  >
            <div className="container mx-auto px-8 py-8 h-screen">
                <h2 className="text-2xl font-medium mb-4">Add Task</h2>
                <div className='mx-auto px-20 py-8'>


                    <form onSubmit={(e) => { e.preventDefault(); handleTask(taskData); }}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-black">Description</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="subCatagory" className="block text-sm font-medium text-black">Catagory</label>
                            <select
                                id="subCatagory"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={subCatagory}
                                onChange={(e: any) => {
                                    console.log("🚀 ~ e:", e.target.value)

                                    setSubCatagory(e.target.value)
                                }
                                }
                            >
                                <option value="">Catagories</option>
                                {catagory.map((category: { _id: string, name: string }) => (
                                    <option key={category._id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>




                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="status" className="block text-sm font-medium text-black">Status</label>
                                <select
                                    id="status"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    <option value="ToDo">ToDo</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="assign to" className="block text-sm font-medium text-black">priority To</label>
                                <select
                                    id="assign to"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="high">high</option>
                                    <option value="medium">medium</option>
                                    <option value="low">low</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex ">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </MainLayout >
    );
}
export default TaskForm