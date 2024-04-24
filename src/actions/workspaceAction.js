"use server"
import { createWorkspaceService, deleteWorkspaceByIdService, workspaceService } from "@/service/workspace.service";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

async function createWorkspace(data){
    const newWorkSpace = {
      workspaceName: data.get("workspaceName")
    }
    const res = await createWorkspaceService(newWorkSpace);

    console.log("THis is my new workspace : ", res);
    if (res.status == 200) {
        redirect("/todo-board")
    }
}

async function deleteWorkspaceById(id) {
    const res = await deleteWorkspaceByIdService(id);
    console.log("delete res : ", res);
    if (res.status == 200) {
        redirect("/todo-board")
    }
};

async function getAllWorkspace(){
  const res = await workspaceService();

  console.log("THis is my new workspace : ", res);
  if (res.status == 200) {
      redirect("/todo-board")
  }
}

export {createWorkspace, deleteWorkspaceById}