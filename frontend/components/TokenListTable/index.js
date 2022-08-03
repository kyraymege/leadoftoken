import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTokens, getTodaysBestToken, getYesterdaysBestToken, getTokensLength, voteToken } from "../../redux/apiCalls";
import moment from "moment"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
import { GiSpinningBlades } from "react-icons/gi"
import { PF } from "../../redux/requestMethods"

function TokenListTable() {
    const dispatch = useDispatch();
    const { isFetching, tokens } = useSelector((state) => state.token)
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.auth)
    const [tokenLength, setTokenLength] = useState()
    const [todayBestToken, setTodayBestToken] = useState()
    const [yesterdayBestToken, setYesterdayBestToken] = useState()
    const [activeStatus, setActiveStatus] = useState(router.query.as || 1);

    useEffect(() => {
        try {
            let page = router.query.p;
            let as = router.query.as;
            if (page && as) {
                fetchAllTokens(dispatch, page, as)

                setTokenLength(getTokensLength())

                getTodaysBestToken().then((res) => {
                    setTodayBestToken(res?.data?.[0])
                })

                getYesterdaysBestToken().then((res) => {
                    setYesterdayBestToken(res?.data?.[0])
                })

                getTokensLength().then((res) => {
                    setTokenLength(res?.data)
                })



            }
        } catch (error) {
            console.log(error)
        }
    }, [router.query.p, router.query.as])


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
                    <div className="sm:flex items-center justify-between">
                        <div className="flex flex-col lg:flex-row  items-center gap-x-12 gap-y-6">
                            <div className="sm:hidden relative w-11/12 mx-auto rounded">
                                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                </div>
                                <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                                    <option className="text-sm text-gray-600">All Time Best </option>
                                    <option className="text-sm text-gray-600">Today&apos;s Best </option>
                                    <option className="text-sm text-gray-600">Presales </option>
                                    <option className="text-sm text-gray-600">Recently Listed </option>
                                </select>
                            </div>
                            <div className="justify-between flex-wrap hidden sm:block bg-white dark:bg-gray-700  rounded-xl shadow-xl ">
                                <div className="xl:w-full pl-5 pr-5 h-full">
                                    <ul className="flex">
                                        <li onClick={() => { setActiveStatus(1); router.push("/?p=1&as=1") }} className={activeStatus == 1 ? "text-xl text-indigo-700 dark:text-white flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-medium" : "text-xl text-gray-600 py-3 mr-10 font-medium cursor-pointer hover:text-gray-800 dark:hover:text-gray-400"}>
                                            <span className="mb-3 cursor-pointer">All Time Best</span>
                                            {activeStatus == 1 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                        </li>
                                        <li onClick={() => { setActiveStatus(2); router.push("/?p=1&as=2") }} className={activeStatus == 2 ? "text-xl text-indigo-700 dark:text-white flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-medium" : "text-xl text-gray-600 py-3 mr-10 font-medium cursor-pointer hover:text-gray-800 dark:hover:text-gray-400"}>
                                            <span className="mb-3 cursor-pointer">Today&apos;s Best</span>
                                            {activeStatus == 2 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                        </li>
                                        <li onClick={() => { setActiveStatus(3); router.push("/?p=1&as=3") }} className={activeStatus == 3 ? "text-xl text-indigo-700 dark:text-white flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-medium" : "text-xl text-gray-600 py-3 mr-10 font-medium cursor-pointer hover:text-gray-800 dark:hover:text-gray-400"}>
                                            <span className="mb-3 cursor-pointer">Presales</span>
                                            {activeStatus == 3 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                        </li>
                                        <li onClick={() => { setActiveStatus(4); router.push("/?p=1&as=4") }} className={activeStatus == 4 ? "text-xl text-indigo-700 dark:text-white flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-medium" : "text-xl text-gray-600 py-3 mr-10 font-medium cursor-pointer hover:text-gray-800 dark:hover:text-gray-400"}>
                                            <span className="mb-3 cursor-pointer">Recently Listed</span>
                                            {activeStatus == 4 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {isFetching ?
                                <div className="flex justify-center items-center">
                                    <GiSpinningBlades className="animate-spin text-indigo-700" size={50} />
                                </div>
                                :
                                <>
                                    <div onClick={() => router.push("/token/" + todayBestToken?._id)} className="flex items-center justify-center gap-x-6 dark:bg-gray-900 bg-gray-300 py-3 px-5 rounded-xl hover:scale-110 cursor-pointer ">
                                        <div className="w-16 h-16">
                                            <img className="w-full h-full rounded-full" src={todayBestToken?.token_image == "/logo.png" ? todayBestToken?.token_image : PF + todayBestToken?.token_image} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-bold">Today&apos;s Best Token</h1>
                                            <p className="">{todayBestToken?.token_name}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => router.push("/token/" + yesterdayBestToken?._id)} className="flex items-center justify-center gap-x-6 dark:bg-gray-900 bg-gray-300 py-3 px-5 rounded-xl hover:scale-110 cursor-pointer ">
                                        <div className="w-16 h-16">
                                            <img className="w-full h-full rounded-full" src={yesterdayBestToken?.token_image == "/logo.png" ? yesterdayBestToken?.token_image : PF + yesterdayBestToken?.token_image} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-bold">Yesterday&apos;s Best Token</h1>
                                            <p className="">{yesterdayBestToken?.token_name}</p>
                                        </div>
                                    </div>
                                </>}
                        </div>

                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    {isFetching ?
                        <div className="flex justify-center items-center">
                            <GiSpinningBlades className="animate-spin text-indigo-700" size={50} />
                        </div>
                        :
                        <>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className="h-16 w-full text-sm leading-none text-gray-800 dark:text-gray-400">
                                        <th className="font-normal text-left pl-4">Project</th>
                                        <th className="font-normal text-left hidden lg:table-cell">Price</th>
                                        <th className="font-normal text-left hidden lg:table-cell">Market Cap</th>
                                        {activeStatus == 4 ?
                                            <th className="font-normal text-left hidden lg:table-cell">Added</th>
                                            :
                                            <th className="font-normal text-left hidden lg:table-cell">Time Since Launch</th>
                                        }
                                        <th className="font-normal ">Votes</th>
                                    </tr>
                                </thead>
                                {tokens?.map((token, key) => {
                                    return (
                                        <tbody key={key} className="w-full cursor-pointer">
                                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white dark:bg-gray-600 hover:bg-gray-100 border-b border-t border-gray-100 dark:border-gray-500">
                                                <td onClick={() => router.push("/token/" + token?._id)} className="pl-4 cursor-pointer">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10">
                                                            <img className="w-full h-full rounded-full" src={token?.token_image == "/logo.png" ? token?.token_image : PF + token?.token_image} />
                                                        </div>
                                                        <div className="pl-4">
                                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">{token?.token_name}</p>
                                                            <p className="text-xs leading-3 text-gray-600 pt-2 dark:text-gray-400 dark:hover:text-white">${token?.token_symbol}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)} >
                                                    <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-200 dark:hover:text-white">$ {token?.token_price}</p>
                                                </td>
                                                <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)}>
                                                    <p className="font-medium dark:text-gray-200 dark:hover:text-white">${token?.token_marketcap}</p>
                                                </td>
                                                {activeStatus == 4 ?
                                                    <>
                                                        <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)} >
                                                            <p className="font-medium dark:text-gray-200 dark:hover:text-white">{moment(token?.createdAt).startOf('day').fromNow()}</p>
                                                        </td>
                                                    </>
                                                    :
                                                    <td className="hidden lg:table-cell" onClick={() => router.push("/token/" + token?._id)} >
                                                        <p className="font-medium dark:text-gray-200 dark:hover:text-white">{moment(token?.launchdate).startOf('day').fromNow()}</p>
                                                        <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 dark:hover:text-white mt-2 ">{token?.launchdate}</p>
                                                    </td>
                                                }
                                                <td className="">
                                                    <div onClick={() => handleVote(token?._id)} className="flex justify-center  items-center">
                                                        <span className="py-3 px-4 rounded hover:bg-white bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:bg-gray-700 dark:border-b-4 dark:border-gray-900 dark:hover:bg-gray-900 flex flex-col items-center cursor-pointer hover:scale-125">
                                                            <BiUpArrow />
                                                            <h1 className="font-bold text-center">{token?.vote}</h1>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>)
                                })}
                            </table>
                        </>}

                    {tokenLength !== 0 &&

                        <div className="flex justify-center items-center mt-6">
                            <Pagination
                                totalItems={tokenLength}
                                itemsPerPage={5}
                                withProgressBar={true}
                                onPageСhange={(currentPage) => { router.push("/?p=" + currentPage + "&as=" + router.query.as); }}
                                customClassNames={{
                                    rpbItemClassName: 'custom-item',
                                    rpbItemClassNameActive: 'custom-item--active',
                                    rpbGoItemClassName: 'custom-go-item',
                                    rpbItemClassNameDisable: 'custom-item--disable',
                                    rpbProgressClassName: 'custom-progress-bar',
                                    rpbRootClassName: 'custom-root',
                                }}
                            />
                        </div>}
                </div>
            </div>
        </>
    );
}

export default TokenListTable;
