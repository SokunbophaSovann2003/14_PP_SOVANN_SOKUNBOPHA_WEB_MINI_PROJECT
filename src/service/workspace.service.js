import { requestHeader } from "@/lib/requestHeader";

//done
export const createWorkspaceService = async(request) =>{
    console.log("this is my req: ", request);
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',{
        method: 'POST',
        body: JSON.stringify(request),
        headers: header,
    });
   
    const data = await res.json();
    console.log("Datas : ", data);
    return data;
};

// done
export const addWorkspaceToFavoriteService = async(request) =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces/add-to-favorite/'+request.id,{
        method: 'PUT',
        body: JSON.stringify({"isFavorite": request.isFavorite}),
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};

// done
export const updateWorkspaceService = async(request) =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces/'+request.id,{
        method: 'PUT',
        body: JSON.stringify({"workspaceName": request.workspaceName}),
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};

// done
export const workspaceService = async() =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',{
        method: 'GET',
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};

//done
export const getWorkspaceByIdService = async(id) =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces/' + id,{
        method: 'GET',
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};

//done
export const deleteWorkspaceByIdService = async(id) =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces/'+id,{
        method: 'DELETE',
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};