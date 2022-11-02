import React, { useEffect, useState } from 'react'
import { getYesterdaysBestToken } from '../../../redux/apiCalls'
import { PF } from '../../../redux/requestMethods'
import HorizontalMostClaps from './HorizontalMostClaps'

const AdSection = () => {
    const [yesterdayBest, setYesterdayBest] = useState()
    useEffect(() => {
        getYesterdaysBestToken().then((res) => {
            setYesterdayBest(res?.data);
        })
    }, [])

    return (
        <div className='container py-6 flex flex-col lg:items-center justify-center lg:flex-row gap-y-10 gap-x-20'>
            <div className='lg:w-1/4 relative'>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-700 rounded blur animate-pulse " />
                <HorizontalMostClaps />
            </div>
            <div className=' px-6'>
                <div className='flex relative w-full justify-center container border dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 rounded-2xl bg-secondary dark:bg-[#252525]'>
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-700 rounded blur animate-pulse " />
                    <img className='object-contain rounded-xl relative lg:max-w-md' src='/new.jpg' alt='new' />
                </div>
            </div>
            <div className='lg:w-1/4 relative h-56'>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-700 rounded blur animate-pulse " />
                <div className='flex relative flex-col container py-4 border dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 px-6 rounded-2xl bg-secondary dark:bg-[#252525]'>
                    <div className='mb-10'>
                        <div className='flex gap-x-2'>
                            <h1 className="lg:text-3xl text-2xl font-bold mb-2 dark:text-gray-400 text-gray-800">Yesterday&apos;s Best Token </h1>
                        </div>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div className='flex gap-x-6 items-center'>
                        <img className='w-24 rounded-full' loading='lazy' src={PF + yesterdayBest?.token_image} alt='yesterday best token logo' />
                        <h1 className='text-xl font-bold dark:text-gray-400 text-gray-800 break-all'>{yesterdayBest?.token_name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection