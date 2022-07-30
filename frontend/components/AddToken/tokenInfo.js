import React, { useState } from 'react'
import { FiTwitter, FiInstagram, } from "react-icons/fi";
import { FaEthereum, FaDiscord, FaReddit, FaTelegramPlane } from "react-icons/fa";
import { BiPolygon, BiImageAdd  } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { addToken, uploadImage } from '../../redux/apiCalls';
import { useSelector } from 'react-redux';

const TokenInfo = () => {
    const [token_name, setTokenName] = useState("")
    const [token_symbol, setTokenSymbol] = useState("")
    const [token_price, setTokenPrice] = useState("")
    const [token_marketcap, setTokenMarketCap] = useState("")
    const [launchdate, setTokenLaunchDate] = useState("")
    const [token_website, setTokenWebsite] = useState("")
    const [token_description, setTokenDescription] = useState("")
    const [token_twitter, setTokenTwitter] = useState("")
    const [token_telegram, setTokenTelegram] = useState("")
    const [token_instagram, setTokenInstagram] = useState("")
    const [token_discord, setTokenDiscord] = useState("")
    const [token_reddit, setTokenReddit] = useState("")
    const [token_audit, setTokenAudit] = useState("")
    const [token_contractAddress, setTokenContractAddress] = useState("")
    const [token_network, setnetworkType] = useState("BSC");
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState(null);
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.auth)

    const handleAddToken = (e) => {
        e.preventDefault();
        if (token_name === "" || token_symbol === "" || token_price === "" || token_marketcap === "" || launchdate === "" || token_website === "" || token_description === "") {
            toast.error("Please fill all require sections.")
        } else {
            var isPresale = checked;
            var token_creator = currentUser._id;
            if (file) {
                        const data = new FormData();
                        const filename = token_creator + "_" + file.name;
                        data.append("name", filename);
                        data.append("file", file);
                        try {
                           uploadImage(data);
                                                      
                        } catch (error) {
                            console.log(error);
                            toast.error(error);
                        }
                        addToken({
                            token_name,
                            token_symbol,
                            token_network,
                            token_price,
                            token_marketcap,
                            token_image: filename,
                            launchdate,
                            token_website,
                            token_description,
                            token_twitter,
                            token_telegram,
                            token_instagram,
                            token_discord,
                            token_reddit,
                            token_audit,
                            token_contractAddress,
                            isPresale,
                            token_creator
                        }, router);                        
                    }else{
                        addToken({
                            token_name,
                            token_symbol,
                            token_network,
                            token_price,
                            token_marketcap,
                            token_image: "/logo.png",
                            launchdate,
                            token_website,
                            token_description,
                            token_twitter,
                            token_telegram,
                            token_instagram,
                            token_discord,
                            token_reddit,
                            token_audit,
                            token_contractAddress,
                            isPresale,
                            token_creator
                        }, router);
                    }
            
        }
    }

    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 ">
                    <div className="lg:px-4 sm:px-0 ml-6 mt-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Token Information</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            This information will be used on the page of your project.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow-2xl mx-6 items-center mr-6 sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5  bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Token Name <span className='text-red-400'>*</span>
                                    </label>
                                    <input
                                        onChange={(e) => { setTokenName(e.target.value) }}
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                        placeholder='Ex: LeadOfToken'
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Token Symbol <span className='text-red-400'>*</span>
                                    </label>
                                    <input
                                        onChange={(e) => { setTokenSymbol(e.target.value) }}
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                        placeholder='Ex: LOT'
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Token Price <span className='text-red-400'>*</span>
                                    </label>
                                    <input
                                        onChange={(e) => { setTokenPrice(e.target.value) }}
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                        placeholder='Ex: 0.01'
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Token Market Cap <span className='text-red-400'>*</span>
                                    </label>
                                    <input
                                        onChange={(e) => { setTokenMarketCap(e.target.value) }}
                                        type="text"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                        placeholder='Ex: 100.000'
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Launch Date <span className='text-red-400'>*</span>
                                    </label>
                                    <input
                                        onChange={(e) => { setTokenLaunchDate(e.target.value) }}
                                        type="date"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                        placeholder='Ex: 0.5.05.20222'
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Website <span className='text-red-400'>*</span>
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-500 dark:bg-gray-400 bg-gray-50 text-gray-500 text-sm">
                                                https://
                                            </span>
                                            <input
                                                onChange={(e) => { setTokenWebsite(e.target.value) }}
                                                type="text"
                                                name="company-website"
                                                id="company-website"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm dark:bg-gray-600 dark:text-white border-gray-300"
                                                placeholder="www.leadoftoken.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Project Description <span className='text-red-400'>*</span>
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            onChange={(e) => { setTokenDescription(e.target.value) }}
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border dark:bg-gray-600 dark:text-white border-gray-300 rounded-md"
                                            placeholder="This project is the future of the crypto world!"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Project Avatar <span className='text-red-400'>*</span></label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        {!file &&
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" onChange={(e) => setFile(e.target.files[0])} className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>}
                                        {file &&
                                            <>
                                                <BiImageAdd className="w-20 h-20" onClick={() => setFile(null)} />
                                                <img className="object-contain w-full h-full" src={window.URL.createObjectURL(file)} alt="" />
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 mt-6 ml-6">
                        <div className="lg:px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Social Media Links</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow-2xl mx-6 overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6">
                                    <div className="grid-flow-col grid-cols-6 gap-6">

                                        <div className="grid gap-6 mb-6">
                                            <div className=" sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Twitter
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-500 bg-gray-50 text-gray-500 text-sm">
                                                        <FiTwitter className='fill-white'/>
                                                    </span>
                                                    <input
                                                        onChange={(e) => { setTokenTwitter(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-400"
                                                        placeholder="https://www.twitter.com/leadoftoken"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6 mb-6">
                                            <div className=" sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Telegram
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 dark:bg-gray-500 text-gray-500 text-sm">
                                                        <FaTelegramPlane className='fill-white' />
                                                    </span>
                                                    <input
                                                        onChange={(e) => { setTokenTelegram(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-400"
                                                        placeholder="https://www.telegram.me/leadoftoken"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6">
                                            <div className=" sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Instagram
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 dark:bg-gray-500 text-gray-500 text-sm">
                                                        <FiInstagram className='fill-white'/>
                                                    </span>
                                                    <input
                                                        onChange={(e) => { setTokenInstagram(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-400"
                                                        placeholder="https://www.instagram.com/leadoftoken"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6">
                                            <div className=" sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Discord
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-500 bg-gray-50 text-gray-500 text-sm">
                                                        <FaDiscord className='fill-white'/>
                                                    </span>
                                                    <input
                                                        onChange={(e) => { setTokenDiscord(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-400"
                                                        placeholder="https://www.Discord.com/leadoftoken"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6">
                                            <div className=" sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Reddit
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-500 bg-gray-50 text-gray-500 text-sm">
                                                        <FaReddit className='fill-white'/>
                                                    </span>
                                                    <input
                                                        onChange={(e) => { setTokenReddit(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-400"
                                                        placeholder="https://www.Reddit.com/leadoftoken"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 mt-6 ml-6">
                        <div className="lg:px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Settings</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">The necessary settings for your project are determined.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow mx-6 overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                                    <fieldset>
                                        <legend className="text-base font-medium text-gray-900 dark:text-white">Project Contract Settings</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        defaultChecked={checked}
                                                        onChange={() => setChecked(!checked)}
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
                                        </div>
                                    </fieldset>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Audit
                                        </label>
                                        <input
                                            onChange={(e) => { setTokenAudit(e.target.value) }}
                                            type="text"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-600 dark:text-white"
                                            placeholder='Ex: Techrate,certik or etc'
                                        />
                                    </div>
                                    <p className="text-gray-500 dark:text-white">Please select your project network.</p>
                                    <div className="pb-6 flex w-full ">

                                        <div id="filters" className="bg-transparent border-2 border-gray-200 rounded-2xl flex items-center">
                                            <div onClick={() => setnetworkType("BSC")} className={token_network == "BSC" ? "text-brand bg-gray-100 dark:bg-gray-800 rounded-l-2xl w-16 dark:text-gray-500  h-16 flex justify-center items-center " : "w-16 h-16 rounded-l-2xl focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-gray-600   flex justify-center items-center cursor-pointer focus:bg-gray-100  hover:bg-gray-100 "}>
                                                <SiBinance className={token_network == "BSC" ? "fill-yellow-400" : ""} size={40} />
                                            </div>
                                            <div onClick={() => setnetworkType("ETH")} className={token_network == "ETH" ? "text-brand bg-gray-100 dark:bg-gray-800  w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-gray-600  flex justify-center items-center cursor-pointer focus:bg-gray-100  hover:bg-gray-100 "}>
                                                <FaEthereum className={token_network == "ETH" ? "fill-blue-400" : ""} size={40} />
                                            </div>
                                            <div onClick={() => setnetworkType("polygon")} className={token_network == "polygon" ? "text-brand bg-gray-100 dark:bg-gray-800 rounded-r-2xl w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand rounded-r-2xl  dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-gray-600  flex justify-center items-center cursor-pointer focus:bg-gray-100  hover:bg-gray-100 "}>
                                                <BiPolygon className={token_network == "polygon" ? "fill-purple-400" : ""} size={40} />
                                            </div>

                                        </div>
                                    </div>
                                    {!checked &&
                                        <div className="grid gap-6 mb-6">
                                            <div className=" sm:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                                    Contract Address
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        onChange={(e) => { setTokenContractAddress(e.target.value) }}
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-lg rounded-r-md sm:text-sm border-gray-300 dark:bg-gray-600 dark:text-white"
                                                        placeholder="Ex: 0x0000000000000000000"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6">
                                    <button
                                        onClick={handleAddToken}
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Token
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TokenInfo