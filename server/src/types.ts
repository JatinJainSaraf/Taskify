export type registerbody = {
    name: string,
    email: string,
    password: string,
    contactNo: string,
    catagories: string,
}

export type loginbody = {
    email: string,
    password: string,
    token?: string
}


export type addtaskbody = {
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string,
    userId: string
}
export type edittaskbody = {
    id: string,
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string
}

export type deletetaskbody = {
    id: string
}
export type gettaskcontrollerreq = {
    query: {
        id: string;
       
    };
}
export type finduserRes = {
    query: {
        id: string;
       
    };
}
export type getonetaskbody = {
    id: string
}
export type addcatagorybody = {
    name: string,
    subcategories: subcatagorybody
}

export type subcatagorybody = {
    id: Number,
    name: string
}

