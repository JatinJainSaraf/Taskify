"use client"

import React from 'react';

import TaskForm from '@/app/components/taskform';




function EditTask({ params }: any) {
    return (
        <div><TaskForm taskId={params.id} /> </div>
    )
}

export default EditTask