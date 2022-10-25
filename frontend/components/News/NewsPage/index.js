import React from 'react'
import Carousel from './carousel'
import NewsGrid from './NewsGrid'
import { useRouter } from  'next/router'


const NewsComponent = () => {
    const router = useRouter();
    return (
        <div className='flex container flex-col items-center justify-center min-h-screen'>
            <div className="w-full flex justify-between mb-6 lg:mb-0 py-10 px-6">
                <div>
                    <div className='flex gap-x-2'>
                        <h1 className="sm:text-4xl text-5xl font-bold mb-2 dark:text-gray-400 text-gray-800">Project Articles</h1>
                    </div>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div onClick={()=>{router.push("/createNews")}} className='flex flex-col items-start justify-center'>
                    <button className='bg-indigo-400 hover:scale-105 hover:animate-spin duration-150 dark:bg-[#313131] px-4 py-2 rounded-xl mb-2'>
                        <p className='sm:text-lg lg:text-xl font-bold mb-2 dark:text-white text-gray-800'>Create a new article</p>
                    </button>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
            </div>
            <Carousel />
            <NewsGrid/>
        </div>
    )
}

export default NewsComponent