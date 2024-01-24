import React from 'react'

function Portfolio() {
    return (
        <div className="grid grid-flow-row md:grid-cols-4 text-white bg-white bg-opacity-40 backdrop-blur-xl rounded-xl">
            <div className="border-b-2 md:border-b-0 md:border-r-2 border-white border-opacity-50 m-2 p-2 md:col-span-3">
                <div className='flex justify-between'>
                    <span>
                        <p>Portfolio</p>
                        <p>amount</p>
                        <p>loss/profit</p>
                    </span>
                    <span>
                        timeline
                    </span>
                </div>
                <div className='flex items-center justify-between text-center h-72 bg-gray-400'>
                    graph
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <span>Token Allocation</span>
                <span>graph - pie chart here</span>
            </div>
        </div>
    )
}

export default Portfolio