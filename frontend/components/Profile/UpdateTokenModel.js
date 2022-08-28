import React, { useState, useEffect } from 'react'
import { updateToken } from '../../redux/apiCalls'
import { PF } from '../../redux/requestMethods'
import { useRouter } from "next/router"
import {MdOutlineCancel} from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'

const UpdateTokenModel = ({ token, setOnEdit }) => {
    const [token_name, setTokenName] = useState("")
    const [token_symbol, setTokenSymbol] = useState("")
    const [token_price, setTokenPrice] = useState("")
    const [token_marketcap, setTokenMarketCap] = useState("")
    const [token_website, setTokenWebsite] = useState("")
    const [token_description, setTokenDescription] = useState("")
    const [token_twitter, setTokenTwitter] = useState("")
    const [token_telegram, setTokenTelegram] = useState("")
    const [token_instagram, setTokenInstagram] = useState("")
    const [token_discord, setTokenDiscord] = useState("")
    const [token_reddit, setTokenReddit] = useState("")
    const [token_audit, setTokenAudit] = useState("")
    const [checked, setChecked] = useState(false);

    const router = useRouter();

    useEffect(() => {
        console.log(token)
        setTokenName(token?.token_name)
        setTokenSymbol(token?.token_symbol)
        setTokenPrice(token?.token_price)
        setTokenMarketCap(token?.token_marketcap)
        setTokenWebsite(token?.token_website)
        setTokenDescription(token?.token_description)
        setTokenTwitter(token?.token_twitter)
        setTokenTelegram(token?.token_telegram)
        setTokenInstagram(token?.token_instagram)
        setTokenDiscord(token?.token_discord)
        setTokenReddit(token?.token_reddit)
        setTokenAudit(token?.token_audit)
        setChecked(token?.token_isPresale)
    }, [token])


    const handleUpdateToken = (e) => {
        e.preventDefault();
        const token_isPresale = checked;
        updateToken(token._id,
            {
                token_name,
                token_symbol,
                token_price,
                token_marketcap,
                token_website,
                token_description,
                token_twitter,
                token_telegram,
                token_instagram,
                token_discord,
                token_reddit,
                token_audit,
                token_isPresale,
            }, router)
    }
    return (
        <section className="absolute z-50 lg:w-[800px] lg:left-1/4 bg-opacity-50 py-6 px-6">
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4 overflow-y-auto scrollbar h-[800px]">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <div className="block relative">
                                <img alt="profil" src={PF + token?.token_image} className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </div>
                            <h1 className="text-gray-600 text-lg font-medium dark:text-white">
                                {token?.token_name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white grid grid-rows-1">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Name
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenName(e.target.value) }} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_name} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Symbol
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenSymbol(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_symbol} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Price
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenPrice(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_price} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Marketcap
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenMarketCap(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_marketcap} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Website
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenWebsite(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_website} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Description
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <textarea onChange={(e) => { setTokenDescription(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_description} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Twitter
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenTwitter(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_twitter} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Telegram
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenTelegram(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_telegram} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Instagram
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenInstagram(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_instagram} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Discord
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenDiscord(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_discord} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Reddit
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenReddit(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_reddit} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-start p-4">
                        <div className="flex items-center h-5">
                            <input
                                defaultChecked={checked}
                                onChange={(e) => { setChecked(!checked) }}
                                id="presale"
                                name="presale"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="presale" className="font-medium text-gray-700 dark:text-gray-400">
                                Presale
                            </label>
                            <p className="text-gray-500">If your project is in the Presale stage, mark it.</p>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Audit
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenAudit(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 value-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={token_audit} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center justify-end cursor-pointer gap-x-6'>
                        <div onClick={() => setOnEdit(prev => !prev)} className='flex items-center justify-end cursor-pointer'>
                            <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                    <MdOutlineCancel size={24} />
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Cancel</span>
                                <span className="relative invisible">Cancel</span>
                            </div>
                        </div>
                        <div onClick={handleUpdateToken} className='flex items-center justify-end'>
                            <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                                    <AiFillSave size={24} />
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Save</span>
                                <span className="relative invisible">Save</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    )
}

export default UpdateTokenModel