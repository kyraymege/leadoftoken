import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserAvatar from './userAvatar';
import { useSelector } from 'react-redux';
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTheme } from "next-themes";
import SearchFeature from './searchFeature';

const Header = () => {
    const [show, setShow] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter()
    const { currentUser } = useSelector((state) => state.auth)
    return (
        <nav className="w-full container border-b border-white">
            <div className="py-5 md:py-0 dark:bg-gray-900 mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <div className='cursor-pointer'>
                    <Link href="/">
                        <h1 className='text-5xl font-black dark:text-white'>L<span className='text-indigo-700'>o</span>T</h1>
                    </Link>
                </div>
                {/* Logo Section End*/}

                <div className='flex items-center justify-center'>
                    {theme == 'dark' &&
                        <button onClick={() => setTheme('light')} className='p-1 rounded-full bg-gray-700'>
                            <MdLightMode size={24} fill="yellow" />
                        </button>}
                    {theme == 'light' &&
                        <button onClick={() => setTheme('dark')} className='p-1 rounded-full bg-gray-700'>
                            <MdDarkMode size={24} fill="white" />
                        </button>}
                </div>
                <SearchFeature />
                <div>
                    <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                        <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </button>

                    <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                        <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </button>
                        <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">

                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125  cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0">
                                <Link href="/AddToken">
                                    <h1 className='underline underline-offset-8 decoration-double decoration-indigo-400'>Add Token</h1>
                                </Link>
                            </li>
                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <Link href="/Contact">
                                    <h1 className='underline underline-offset-8 decoration-double decoration-indigo-400'>Contact</h1>
                                </Link>
                            </li>
                            {currentUser == null ?
                                <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <Link href="/auth">
                                        <h1 className='underline underline-offset-8 decoration-double decoration-indigo-400'>Sign In</h1>
                                    </Link>
                                </li>
                                :
                                <div className='lg:hidden mt-10'>
                                <UserAvatar />
                                </div>
                            }

                        </ul>
                    </div>
                </div>

                {currentUser ?
                    <div className='hidden lg:block'>
                        <UserAvatar />
                    </div>
                    :
                    <button onClick={() => router.push("/auth")} className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button>
                }

            </div>
        </nav>
    )
}

export default Header