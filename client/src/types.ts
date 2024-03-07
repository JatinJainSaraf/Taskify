export type RegisterDataType = {
    status: string,
    message: string,

    userId: string,
    token?: string,

}

export type LoginDataType = {
    status: string,
    message: string,

    userId: string,
    token?: string,

}
export type LoginSubmitHandlerType = {
    email: string;
    password: string;
}
export type DeletetHandlerType = {
    query: {
        taskId: string;
    };
}



export type RegisterSubmitHandlerType = {
    contactNo?: string | undefined;
    catagories?: string | undefined;
    recoverCode?: number | undefined;
    assignTask?: string | undefined;
    createdTask?: string | undefined;
    name: string;
    email: string;
    password: string;
}



export type addTaskDataType = {
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string,
}

export type editTaskDataType = {
    newTitle: string,
    newDescription: string,
    newSubCatagory: string,
    newStatus: string,
    newPriority: string,
}
export type getoneTasksReturnDataType = {
    newTitle: string,
    newDescription: string,
    newSubCatagory: string,
    newStatus: string,
    newPriority: string,
    status: string,

}
export type deleteReturnDataType = {
    newTitle: string,
    newDescription: string,
    newSubCatagory: string,
    newStatus: string,
    newPriority: string,
    status: string,

}


export type addTaskeReturnDataType = {
    userId: string,
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string,
}

export type tasksData = {
    _id: string,
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}

export type getTasksReturnDataType = {
    _id: string,
    title: string,
    description: string,
    catagory: string
    subCatagory: string,
    status: string,
    priority: string,
}
export type editTasksReturnDataType = {
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string,
}
export type getallCatagoriesReturnDataType = {
    _id: string,
    name: string,
    subcategories: [
        id: string,
        name: string,
        _id: string
    ]
    status: string,

}
export type catagoriesDataType = {
    _id: string,
    name: string,

    status: string,

}
export type getSubCatagoriesReturnDataType = {
    _id: string,
    name: string,

    status: string,

}
