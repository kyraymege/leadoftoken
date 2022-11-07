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
        <nav className="w-full container border-b border-gray-400 dark:border-gray-400">
            <div className="py-5 md:py-0 bg-primary dark:bg-[#212121] mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <div className='cursor-pointer '>
                    <Link href="/">
                        <img className='h-16 w-20' src='/logo.png' alt='logo' />
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

                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105  cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0">
                                <Link href="/addToken">
                                    <h1 className='hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-indigo-400'>Add Token</h1>
                                </Link>
                            </li>
                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105 cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <Link href="/project-articles">
                                    <h1 className='hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-indigo-400'>Project Articles</h1>
                                </Link>
                            </li>
                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105 cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <Link href="/contact">
                                    <h1 className='hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-indigo-400'>Contact</h1>
                                </Link>
                            </li>
                            {currentUser == null ?
                                <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-105 cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <Link href="/auth">
                                        <h1 className='lg:hidden underline underline-offset-8 decoration-wavy decoration-indigo-400'>Sign In</h1>
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
                    <button onClick={() => router.push("/auth")} className="relative lg:inline-block text-lg group hidden">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-indigo-700 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-700 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Sign In</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-700 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                }

            </div>
        </nav>
    )
}

export default Header