import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import StatisticComponent from '@/components/StatisticComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

function ListView() {
    
  return (
    <div className="items-start justify-center flex w-full">
      <div className="w-[25%]">
        <SidebarComponent></SidebarComponent>
      </div>
      <div className="w-[75%] ">
        <NavbarComponent></NavbarComponent>
        <div className='flex justify-between'>
          <div className='w-[75%]'>
            <div className="p-8">
              <ListBoardComponentHeader></ListBoardComponentHeader>
              <div className="p-3 mt-4 flex items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md bg-yellow-500">
                <div className="rounded-md py-2 px-6 shrink-0 bg-white items-center text-center">
                  <p className='text-[14px]'>Mon</p>
                  <p className='text-[24px]'>10</p>
                  {/* <Image src="https://www.svgrepo.com/show/502433/tool.svg" alt="" className="h-12 w-12" /> */}
                </div>
                <div className="p-2 w-full">
                  <p className="font-semibold text-lg">Tool with sidebar</p>

                  <div className='flex justify-between items-center w-full'>
                    <span className="text-gray-600">Description of tool</span>
                    <button className="bg-white py-2 px-6 rounded-lg text-sm font-medium">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[25%]'>
            <StatisticComponent></StatisticComponent>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ListView