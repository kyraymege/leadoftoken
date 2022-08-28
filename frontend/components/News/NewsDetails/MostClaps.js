import React, { useEffect, useState } from 'react'
import { getMostClaps } from '../../../redux/apiCalls'
import { PF } from '../../../redux/requestMethods'

const MostClaps = () => {
    const [mostClaps, setMostClaps] = useState()
    useEffect(() => {
        getMostClaps().then(res => {
            setMostClaps(res?.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className=''>
            <div className='mb-6'>
                <div className='flex gap-x-2'>
                    <h1 className="sm:text-4xl text-5xl font-bold mb-2 dark:text-gray-400 text-gray-800">Most Claps</h1>
                </div>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-hidden gap-x-10 w-full snap-x snap-proximity'>
                {mostClaps?.map((news, index) => {
                    return (
                        <div key={index} className='flex items-start break-all cursor-pointer snap-center mb-6'>
                            <div className='relative w-32 '>
                                <span className='top-0 left-0 absolute bg-yellow-500 px-2 py-1 font-bold'>{index + 1}</span>
                                <a href={"/news/" + news?._id}>
                                    <img className='rounded' src={PF + news?.image} alt="cover" />
                                </a>
                            </div>
                            <div className='break-words w-52'>
                                <a href={"/news/" + news?._id}>
                                    <p className='font-medium ml-2'>{news?.title}</p>
                                </a>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div >
    )
}

export default MostClaps