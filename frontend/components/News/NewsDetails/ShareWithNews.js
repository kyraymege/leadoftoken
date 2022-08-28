import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai"
import { BsFillShareFill } from 'react-icons/bs';
import { FaTwitterSquare } from "react-icons/fa"

function ShareWithNews({ news }) {
    const [show, setshow] = useState(false);
    const copyToClipboard = () => {
        var text = "https://www.leadoftoken.com/news/" + news;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    }
    return (
        <>
            <div className="flex flex-col items-start sm:items-center sm:flex-row flex-wrap">
                <div
                    className="flex items-center mb-4 lg:mb-0 relative cursor-pointer"
                    onClick={() => setshow(!show)}
                >
                    {show && (
                        <ul className="p-2 w-40 border-r bg-gray-200 dark:bg-white absolute rounded z-40 right-0 shadow mt-14  top-0">
                            <li onClick={() => window.open('https://twitter.com/intent/tweet?source=https%3A%2F%2Fleadoftoken.com%2F&text=%F0%9F%94%A5%F0%9F%94%A5%20Awesome%20article%20from%20Lead%20Of%20Token%20News%20%F0%9F%94%A5%F0%9F%94%A5%0A%0A%E2%9E%A1%EF%B8%8Fhttps%3A//www%2Eleadoftoken%2Ecom/news/'+news+'%0A%0A%23crypto%20%23leadoftoken%20%23leadoftokennews', '', ' scrollbars=yes,menubar=no,width=600, height=400, resizable=yes,toolbar=no,location=no,status=no')}
                                className="cursor-pointer text-gray-700 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <FaTwitterSquare size={20} className="fill-cyan-500" />
                                <span className="ml-2 font-medium">Share with Twitter</span>
                            </li>
                            <li onClick={() => copyToClipboard()} className="cursor-pointer text-gray-700 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <AiFillCopy size={20} className="fill-gray-600" />
                                <span className="ml-2 font-medium">Copy Link!</span>
                            </li>

                        </ul>
                    )}
                    <div onClick={() => setshow(!show)} className="relative inline-flex items-center px-10 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-3 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <BsFillShareFill className="ml-4 dark:fill-white fill-gray-800" size={20} />
                        </span>
                        <span className="relative">Share With</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ShareWithNews;