import React from 'react'
import HorizontalMostClaps from './HorizontalMostClaps'

const AdSection = () => {
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
                            <h1 className="lg:text-4xl text-2xl font-bold mb-2 dark:text-gray-400 text-gray-800">Airdrops</h1>
                            <h1 className="lg:text-4xl text-2xl font-bold mb-2 dark:text-red-400 text-red-400">SOON</h1>
                        </div>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div className='blur-lg'>
                        <tbody className="w-full cursor-pointer">
                            <tr className="h-10 text-sm text-gray-800 bg-tertiary hover:bg-secondary dark:bg-[#212121] hover:dark:bg-[#414141] border-b border-t border-gray-100 dark:border-gray-700">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full rounded-full" src="/logo.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">Token</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2 dark:text-gray-400 dark:hover:text-white">$token_symbol</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden lg:table-cell" >
                                    <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200 dark:hover:text-white">$ token_price</p>
                                </td>
                                <td className="hidden lg:table-cell">
                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">$token_marketcap</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="w-full cursor-pointer">
                            <tr className="h-10 text-sm text-gray-800 bg-tertiary hover:bg-secondary dark:bg-[#212121] hover:dark:bg-[#414141] border-b border-t border-gray-100 dark:border-gray-700">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full rounded-full" src="/logo.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">Token</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2 dark:text-gray-400 dark:hover:text-white">$token_symbol</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden lg:table-cell" >
                                    <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200 dark:hover:text-white">$ token_price</p>
                                </td>
                                <td className="hidden lg:table-cell">
                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">$token_marketcap</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="w-full cursor-pointer">
                            <tr className="h-10 text-sm text-gray-800 bg-tertiary hover:bg-secondary dark:bg-[#212121] hover:dark:bg-[#414141] border-b border-t border-gray-100 dark:border-gray-700">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full rounded-full" src="/logo.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">Token</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2 dark:text-gray-400 dark:hover:text-white">$token_symbol</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden lg:table-cell" >
                                    <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200 dark:hover:text-white">$ token_price</p>
                                </td>
                                <td className="hidden lg:table-cell">
                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">$token_marketcap</p>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection