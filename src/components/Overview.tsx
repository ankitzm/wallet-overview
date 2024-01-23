import React from 'react'

function Overview() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 text-white bg-white bg-opacity-40 backdrop-blur-xl rounded-xl">
            <div className="border-r-2 border-white border-opacity-50 m-2 p-2">
                <p className='mb-1 text-sm font-semibold'>
                    Total Asset
                </p>
                <div className='flex items-center justify-between gap-1'>
                    <p className="truncate text-base font-bold sm:text-2xl"><span className="animate-price-tick-rise">$1,208,314.20</span></p>
                </div>
            </div>
            <div className="md:border-r-2 border-white border-opacity-50 m-2 p-2">
                <p className='mb-1 text-sm font-semibold'>
                    Debt
                </p>
                <p className="truncate text-base font-bold sm:text-2xl"><span className="animate-price-tick-rise">$1,208,314.20</span></p>
            </div>
            <div className="md:border-r-2 border-white border-opacity-50 m-2 p-2">
                <p className='mb-1 text-sm font-semibold'>
                    NFT Asset
                </p>
                <p className="truncate text-base font-bold sm:text-2xl"><span className="animate-price-tick-rise">$1,208,314.20</span></p>
            </div>
            <div className="m-4">
                <p className='mb-1 text-sm font-semibold'>
                    Claim
                </p>
                <p className="truncate text-base font-bold sm:text-2xl">$1,208,314.20</p>
            </div>
        </div>
    )
}

export default Overview