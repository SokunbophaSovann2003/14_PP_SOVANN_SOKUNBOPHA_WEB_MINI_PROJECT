"use server"
import { createWorkspaceService } from "@/service/workspace.service";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

async function createWorkspace(data){
    const newWorkSpace = {
      workspaceName: data.get("workspaceName")
    }
    const res = await createWorkspaceService(newWorkSpace);

    console.log("THis is my new workspace : ", res);
    if (res.status == 200) {
        redirect.push("/board")
    }
}

export {createWorkspace}