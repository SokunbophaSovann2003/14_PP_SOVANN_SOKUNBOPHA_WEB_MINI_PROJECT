"use server"
import { getAllTaskService } from "@/service/task.service"

async function getAllTask() {
    const res = await getAllTaskService();
    console.log("This is my task : ", res);
    if(res.status == 200) {

    }
}

export {getAllTask}