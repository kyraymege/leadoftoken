import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {BsFillBookmarkStarFill} from "react-icons/bs"
import { FaUserCircle} from "react-icons/fa"
import {logOut} from "../../redux/apiCalls"
import {useDispatch} from "react-redux"
import { useRouter } from 'next/router'

function UserAvatar() {
    const [show, setshow] = useState(false);
    const { currentUser } = useSelector((state) => state.auth)    
    const dispatch = useDispatch();
    const router = useRouter();
    
    const signOut = ()=>{
        logOut(dispatch);
    }
    return (
        <>
            <div className="px-6 flex flex-col items-start sm:items-center sm:flex-row flex-wrap">
                <div
                    className="flex items-center mb-4 lg:mb-0 mr-10 relative cursor-pointer"
                    onClick={() => setshow(!show)}
                >
                    {show && (
                        <ul className="p-2 w-40 border-r border-indigo-500 bg-secondary dark:bg-[#313131] absolute rounded z-40 right-0 shadow mt-16  top-0">
                            <li onClick={()=> router.push("/profile/"+currentUser?._id)} className="cursor-pointer hover:bg-tertiary dark:hover:bg-[#414141] px-2 text-gray-700 dark:text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <FaUserCircle/>
                                <span className="ml-2">Profile</span>
                            </li>
                            <li onClick={()=> router.push("/watchlist/"+currentUser?._id)} className="cursor-pointer hover:bg-tertiary dark:hover:bg-[#414141] px-2 text-gray-700 dark:text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <BsFillBookmarkStarFill/>
                                <span className="ml-2">Watch List</span>
                            </li>
                            <li onClick={() => signOut()} className="cursor-pointer hover:bg-tertiary dark:hover:bg-[#414141] px-2 text-gray-700 dark:text-white text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="ml-2">Logout</span>
                            </li>

                        </ul>
                    )}
                    <div className="w-12 h-12 bg-cover rounded mr-3">
                        {
                            !currentUser?.image &&
                            <img
                                src={"https://avatars.dicebear.com/api/adventurer-neutral/:" + currentUser?.name + ".svg"}
                                className="rounded h-full w-full overflow-hidden shadow dark:border dark:border-indigo-200" 
                                alt="profile-image"
                            />
                        }
                        {
                            currentUser?.image &&
                            <img
                                src={currentUser?.image}
                                className="rounded h-full w-full overflow-hidden shadow"
                                alt="profile-image"
                            />
                        }
                    </div>
                    <div className="flex items-center">
                        
                            <p className="text-gray-700 dark:text-gray-400 dark:hover:text-white text-base font-medium lg:block">
                                {(currentUser?.name)}
                            </p>
                                                
                        <div
                            className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400"
                            onClick={() => setshow(!show)}
                        >
                            {show ? (
                                <svg
                                    id="upIcon1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-chevron-up"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            ) : (
                                <svg
                                    id="downIcon1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-chevron-down"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserAvatar;