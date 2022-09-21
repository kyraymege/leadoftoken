import React, { useEffect, useState } from 'react'
import { getMostClaps } from '../../../redux/apiCalls'
import { PF } from '../../../redux/requestMethods'

const HorizontalMostClaps = () => {
    const [mostClaps, setMostClaps] = useState()
    useEffect(() => {
        getMostClaps().then(res => {
            setMostClaps(res?.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className='flex flex-col relative container py-4 border dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 px-6 rounded-2xl bg-secondary dark:bg-[#252525]'>
            <div className='mb-6'>
                <div className='flex gap-x-2'>
                    <h1 className="lg:text-4xl text-2xl font-bold mb-2 dark:text-gray-400 text-gray-800">Most Claps</h1>
                </div>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className='flex overflow-x-auto scrollbar gap-x-10 snap-x snap-proximity pl-2 min-h-[150px]'>
                {mostClaps?.map((news, index) => {
                    return (
                        <div key={index} className='flex items-start break-all cursor-pointer snap-center'>
                            <div className='relative w-32 '>
                                <span className='top-0 left-0 absolute bg-yellow-500 px-2 py-1 font-bold'>{index + 1}</span>
                                <a href={"/news/" + news?._id}>
                                    {news?.image == "/newsImage.png" ?
                                        <img className='rounded' src={news?.image} alt="cover" />
                                        :
                                        <img className='rounded' src={PF + news?.image} alt="cover" />
                                    }
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

export default HorizontalMostClaps