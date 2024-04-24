import React from 'react'

function StatisticComponent() {
    return (
        <div class="mt-2 relative z-10">
            <p className='mt-20 text-center font-bold'>Statistics on July</p>
            <ul class="mt-4 mx-auto max-w-xs text-left font-medium text-lg leading-none">
                <li>
                    <a class="py-3.5 w-full flex items-center " href="#">
                        <span class="ml-5 mr-2.5 w-1 h-6 bg-green-500 rounded-md"></span>
                        <p>
                            Mocha
                            <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                        </p>
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center " href="#">
                        <span class="ml-5 mr-2.5 w-1 h-6 bg-orange-500 rounded-md"></span>
                        <p>
                            Mocha
                            <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                        </p>
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center " href="#">
                        <span class="ml-5 mr-2.5 w-1 h-6 bg-blue-500 rounded-md"></span>
                        <p>
                            Mocha
                            <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                        </p>
                    </a>
                </li>
                <li>
                    <a class="py-3.5 w-full flex items-center " href="#">
                        <span class="ml-5 mr-2.5 w-1 h-6 bg-yellow-500 rounded-md"></span>
                        <p>
                            Mocha
                            <span class="font-normal text-gray-500 text-sm">(JavaScript)</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default StatisticComponent