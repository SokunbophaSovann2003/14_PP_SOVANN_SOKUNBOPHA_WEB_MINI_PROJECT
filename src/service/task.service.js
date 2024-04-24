import { requestHeader } from "@/lib/requestHeader";

// done
export const getAllTaskService = async(id) =>{
    const header = await requestHeader();
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId='+id,{
        method: 'GET',
        headers: header,
    });
   
    const data = await res.json();
    console.log("Data : ", data);
    return data;
};