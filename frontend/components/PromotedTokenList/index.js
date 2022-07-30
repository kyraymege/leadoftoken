import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPromotedTokens, voteToken } from "../../redux/apiCalls";
import moment from "moment"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {PF} from "../../redux/requestMethods"

function PromotedTokenList() {
    const [coins, setCoin] = useState()
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.auth)
    const { isFetching, tokens } = useSelector((state) => state.token)    
    useEffect(() => {
        const res = fetchPromotedTokens();
        res?.then((res) => {
            setCoin(res?.data)
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
            <div className="w-full container py-20 sm:px-6">            
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-800 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between dark:border-b">
                        <h1 className="text-3xl font-extrabold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-indigo-500 to-white">Promoted Tokens</h1>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow px-4 md:px-10 pb-8 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800 dark:text-gray-400">
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

                                    <tr key={key} className="h-20 rounded-xl text-sm text-gray-800 bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 border-b border-t border-gray-100 dark:border-gray-500">
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
                                        <td className="">
                                            <div onClick={() => handleVote(token?._id)} className="flex justify-center  items-center">
                                                <span className="py-3 px-4 rounded hover:bg-white bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:bg-gray-700 dark:border-b-4 dark:border-gray-900 dark:hover:bg-gray-900 flex flex-col items-center cursor-pointer hover:scale-125">
                                                    <BiUpArrow />
                                                    <h1 className="font-bold text-center">{token?.vote}</h1>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PromotedTokenList;
