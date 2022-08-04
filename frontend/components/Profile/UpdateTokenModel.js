import React, { useState } from 'react'
import { updateToken } from '../../redux/apiCalls'
import { PF } from '../../redux/requestMethods'
import { useRouter } from "next/router"

const UpdateTokenModel = ({ token }) => {
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
    const handleUpdateToken = (e) => {
        e.preventDefault();
        const token_isPresale=checked;
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
        },router)
    }
    return (
        <section className="w-full bg-opacity-50 py-6">
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <a href="#" className="block relative">
                                <img alt="profil" src={PF + token?.token_image} className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </a>
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
                                <input onChange={(e) => { setTokenName(e.target.value) }} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_name} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Symbol
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenSymbol(e.target.value) }} type="text" id="user-info-email"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_symbol} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Price
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenPrice(e.target.value) }} type="text" id="user-info-email"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_price} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Marketcap
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenMarketCap(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_marketcap} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Website
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenWebsite(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_website} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Description
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <textarea onChange={(e) => { setTokenDescription(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_description} />
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
                                <input onChange={(e) => { setTokenTwitter(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_twitter} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Telegram
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenTelegram(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_telegram} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Instagram
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenInstagram(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_instagram} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Discord
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenDiscord(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_discord} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Token Reddit
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input onChange={(e) => { setTokenReddit(e.target.value) }} type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_reddit} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-start p-4">
                        <div className="flex items-center h-5">
                            <input
                                defaultChecked={token?.isPresale}
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
                                <input onChange={(e) => { setTokenAudit(e.target.value) }} type="text" id="user-info-email"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={token?.token_audit} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button onClick={handleUpdateToken} type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Edit
                        </button>
                    </div>
                </div>
            </form>
        </section>

    )
}

export default UpdateTokenModel