import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi"
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi"
import { fetchPromotedTokens, voteToken } from "../../../redux/apiCalls";
import moment from "moment"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { PF } from "../../../redux/requestMethods"

function PromotedTokenList() {
    const [coins, setCoin] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.auth)
    useEffect(() => {
        const res = fetchPromotedTokens();
        res?.then((res) => {
            setCoin(res?.data)
            setIsFetching(false);
        })

    }, [])

    const handleVote = (token_id) => {
        if (currentUser !== null) {
            voteToken(currentUser?._id, token_id)
        } else {
            toast.warn("You must login for vote token!")
        }
    }

    return (
        <>
            <div className="w-full  container py-20 sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-secondary dark:bg-[#252525] rounded border-t border-l border-r border-gray-300 dark:border-gray-700">
                    <div className="sm:flex items-center justify-between ">
                        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900">Promoted Tokens</h1>
                    </div>
                </div>
                <div className="bg-quaternary dark:bg-[#313131] shadow-xl shadow-gray-400 dark:shadow-gray-800 px-4 md:px-10 pb-8 overflow-y-auto border-r border-l border-b border-gray-300 dark:border-gray-700">
                    {isFetching ?
                        <div className='flex items-center mx-auto'>
                            <p className='text-9xl font-extrabold text-indigo-700 animate-bounce'>L</p>
                            <BiLoaderCircle className='animate-spin fill-indigo-500' size={96} />
                            <p className='text-9xl font-extrabold text-indigo-700 animate-bounce'>ADING</p>
                        </div>
                        :
                        <>
                            <table className="w-full  whitespace-nowrap">
                                <thead>
                                    <tr className="h-16 w-full text-sm leading-none text-gray-300 dark:text-gray-400">
                                        <th className="font-normal text-left pl-4">Project</th>
                                        <th className="font-normal text-left hidden lg:table-cell">Price</th>
                                        <th className="font-normal text-left hidden lg:table-cell">Market Cap</th>
                                        <th className="font-normal text-left hidden lg:table-cell">Time Since Launch</th>
                                        <th className="font-normal  ">Votes</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full rounded-xl cursor-pointer ">
                                    {coins?.map((token, key) => {
                                        return (

                                            <tr key={key} className="h-20 rounded-xl text-sm text-gray-700 bg-tertiary dark:bg-[#212121] hover:dark:bg-[#414141] hover:bg-secondary border-b border-t dark:border-gray-700 border-gray-300">
                                                <td onClick={() => router.push("/token/" + token?._id)} className="pl-4 cursor-pointer">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10">
                                                            <img className="w-full h-full" src={token?.token_image == "/logo.png" ? token?.token_image : PF + token?.token_image} />
                                                        </div>
                                                        <div className="pl-4">
                                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">{token?.token_name}</p>
                                                            <p className="text-xs leading-3 pt-2 dark:text-gray-200 dark:hover:text-white">${token?.token_symbol}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)}>
                                                    <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200 dark:hover:text-white">$ {token?.token_price}</p>
                                                </td>
                                                <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)}>
                                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">${token?.token_marketcap}</p>
                                                </td>
                                                <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)}>
                                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">{moment(token?.launchdate).startOf('day').fromNow()}</p>
                                                    <p className="text-xs leading-3 text-gray-600 mt-2 dark:text-gray-400 dark:hover:text-white">{token?.launchdate}</p>
                                                </td>
                                                <td className="px-6 cursor-pointer">
                                                    <div onClick={() => handleVote(token?._id)} className="relative flex items-center justify-center px-1 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-xl group">
                                                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                                                            <BiUpArrow />
                                                            <h1 className="font-bold text-center">{token?.vote}</h1>
                                                        </span>
                                                        <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Vote</span>
                                                        <span className="relative invisible">Vote</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </>}
                </div>
            </div>
        </>
    );
}

export default PromotedTokenList;
