import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai"
import { BsFillShareFill } from 'react-icons/bs';
import { FaTwitterSquare } from "react-icons/fa"

function ShareWith({ user }) {
    const [show, setshow] = useState(false);
    const copyToClipboard = () => {
        var text = "https://www.leadoftoken.com/watchlist/"+user;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    }
    return (
        <>
            <div className="px-6 flex flex-col items-start sm:items-center sm:flex-row flex-wrap">
                <div
                    className="flex items-center mb-4 lg:mb-0 mr-10 relative cursor-pointer"
                    onClick={() => setshow(!show)}
                >
                    {show && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-16  top-0">
                            <li onClick={() => window.open('https://twitter.com/intent/tweet?text=%F0%9F%94%A5%F0%9F%94%A5%20Here%20is%20my%20awesome%20Watch%20List%20%F0%9F%94%A5%F0%9F%94%A5%0A%0A%E2%9E%A1%EF%B8%8Fhttps%3A//www%2Eleadoftoken%2Ecom/watchlist/' + user + '%0A%0A%23crypto%20%23leadoftoken%20%23mywatchlist', '', ' scrollbars=yes,menubar=no,width=600, height=400, resizable=yes,toolbar=no,location=no,status=no')}
                                className="cursor-pointer text-gray-700 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <FaTwitterSquare size={20} className="fill-cyan-500" />
                                <span className="ml-2 font-medium">Share with Twitter</span>
                            </li>
                            <li onClick={()=> copyToClipboard()} className="cursor-pointer text-gray-700 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <AiFillCopy size={20} className="fill-gray-600" />
                                <span className="ml-2 font-medium">Copy Link!</span>
                            </li>

                        </ul>
                    )}

                    <div className="flex items-center border dark:border-white border-gray-900 py-2 px-4 rounded-full">

                        <p className="text-gray-700 dark:text-gray-400 dark:hover:text-white text-base font-medium lg:block">
                            Share With
                        </p>

                        <BsFillShareFill className="ml-4 dark:fill-white fill-gray-800  " size={20} />

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
export default ShareWith;