import React, { useEffect, useState } from 'react'
import { getYesterdaysBestToken } from '../../../redux/apiCalls'
import { PF } from '../../../redux/requestMethods'
import HorizontalMostClaps from './HorizontalMostClaps'

const AdSection = () => {
    const [yesterdayBest, setYesterdayBest] = useState()
    useEffect(() => {
        getYesterdaysBestToken().then((res) => {
            setYesterdayBest(res.data);
            console.log(res?.data)
        })
    }, [])

    return (
        <div className='container py-6 flex flex-col justify-center lg:flex-row gap-y-10 gap-x-20'>
            <div className='lg:w-1/4'>
                <HorizontalMostClaps />
            </div>
            <div className='lg:w-1/4 px-6'>
                <div className='flex w-full justify-center container border dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 rounded-2xl bg-secondary dark:bg-[#252525]'>
                    <img className='object-contain rounded-xl lg:max-w-md' src='/soon.jpg' alt='soon' />
                </div>
            </div>
            <div className='lg:w-1/4'>
                <div className='flex flex-col container py-4 border dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 px-6 rounded-2xl bg-secondary dark:bg-[#252525]'>
                    <div className='mb-10'>
                        <div className='flex gap-x-2'>
                            <h1 className="lg:text-4xl text-2xl font-bold mb-2 dark:text-gray-400 text-gray-800">Yesterday&apos;s Best Token </h1>
                        </div>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div className='flex gap-x-6 items-center'>
                        <img className='w-24' loading='lazy' src={PF + yesterdayBest[0]?.token_image} alt='yesterday best token logo' />
                        <h1 className='text-2xl font-bold dark:text-gray-400 text-gray-800 break-all'>{yesterdayBest[0]?.token_name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection