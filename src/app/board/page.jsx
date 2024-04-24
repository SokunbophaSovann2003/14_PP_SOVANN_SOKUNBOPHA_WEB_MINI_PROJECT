import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'
import { workspaceService } from '@/service/workspace.service'

async function BoardView() {
  // const data = await workspaceService();
  // console.log("data22222222: ",data);
  return (
    <div className="items-start justify-center flex w-full">
      <div className="w-[25%]">
        <SidebarComponent></SidebarComponent>
      </div>
      <div className="w-[75%]">
        <NavbarComponent></NavbarComponent>
        <div className="p-8">
          <ListBoardComponentHeader></ListBoardComponentHeader>
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
              <div className="relative flex h-full flex-col border-red-700 border-b border-gray-200 p-1">
                <span className="text-md mb-0 text-gray-900">
                  Frontend Performance
                </span>
              </div>
            </div>
          </div>
          <TodoCardComponent></TodoCardComponent>
        </div>
      </div>
    </div>
  )
}

export default BoardView