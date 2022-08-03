import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi"
import { AiFillCopy, AiTwotoneStar, AiFillRedditCircle } from "react-icons/ai"
import { SiWebflow } from "react-icons/si"
import { FiTwitter, FiInstagram, } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi"
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si"
import { FcClock } from "react-icons/fc"
import { addWatchList, fetchRandomTokens, fetchToken, voteToken } from "../../redux/apiCalls";
import { useSelector } from 'react-redux';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useRouter } from 'next/router'
import { PF } from "../../redux/requestMethods"

function TokenDetails({ token }) {
    const [tokenn, setTokenn] = useState({});
    const [randomTokens, setRandomTokens] = useState([]);
    const [chart, setChart] = useState();
    const { currentUser } = useSelector((state) => state.auth)
    const router = useRouter();

    const handleWatchList = () => {
        addWatchList(currentUser?._id, tokenn[0]?._id);
    }

    const copyToClipboard = (id) => {
        var text = document.getElementById(id).innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    }

    const toFixed = (x) => {
        if (Math.abs(x) < 1.0) {
            var e = parseInt(x?.toString().split('e-')[1]);
            if (e) {
                x *= Math.pow(10, e - 1);
                x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
            }
        } else {
            var e = parseInt(x?.toString().split('+')[1]);
            if (e > 20) {
                e -= 20;
                x /= Math.pow(10, e);
                x += (new Array(e + 1)).join('0');
            }
        }
        return x;
    }

    const getData = async (token_contractAddress) => {
        var data = {
            "56": [
                token_contractAddress,
            ]
        };
        var options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: data,
            url: 'https://api.coinbrain.com/public/coin-info',
        };
        axios(options)
            .then((res) => {
                // handle success
                setChart(res?.data[0]);
            })
            .catch((err) => {
                // handle error
                // console.log(err.response.data);
            })
    }

    useEffect(() => {
        fetchToken(token).then((res) => {
            setTokenn(res?.data)
            getData(res?.data?.token_contractAddress)

        })

        fetchRandomTokens().then((res) => {
            setRandomTokens(res?.data);
        })


        const interval = setInterval(() => {
            const res = fetchToken(token);
            res.then((res) => {
                setTokenn(res?.data)
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [token])

    const handleVote = (token_id) => {
        if (currentUser !== null) {
            voteToken(currentUser?._id, token_id)
        } else {
            toast.warn("You must login for vote token!")
        }
    }

    return (
        <>
            <div className="w-full bg-gray-200 dark:bg-gray-900  py-10">
                <div className="container mx-auto  lg:px-6 flex items-start justify-center">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row items-start w-full bg-white dark:bg-gray-800 shadow-2xl rounded-xl">
                            <div className="w-full lg:w-1/3 p-6">
                                <img className="object-contain rounded-xl w-full h-full" src={PF + tokenn[0]?.token_image} />
                            </div>
                            <div className="w-full items-start flex  p-6  justify-between">
                                <div className="flex flex-col">
                                    <div className="w-full items-start flex lg:flex-row flex-col gap-x-6">
                                        <h1 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white">{tokenn[0]?.token_name}</h1>
                                        <p className="text-xl lg:text-3xl font-thin mt-1 text-gray-400">${tokenn[0]?.token_symbol}</p>
                                        <span className="w-px h-10 bg-gray-300 hidden lg:block" />
                                        <div onClick={handleWatchList} className="flex items-center gap-4">
                                            <AiTwotoneStar className="mt-2 hover:fill-yellow-300 fill-gray-300 cursor-pointer" size={30} />
                                            <p className="mt-2 text-xl text-gray-400 cursor-pointer">Add to Watchlist</p>
                                        </div>
                                    </div>
                                    <div className="py-6 flex flex-wrap">
                                        <p className="pr-4 lg:text-lg lg:font-medium font-medium text-md dark:text-white">{tokenn[0]?.token_network} Contract Address :</p>
                                        {tokenn[0]?.isPresale == true ?
                                            <div className="bg-indigo-200 rounded-full py-1 px-2 flex justify-center items-center">
                                                <FcClock size={25} />
                                                <p id="contractAddress" className="pr-4 text-lg font-thin text-gray-500 break-all ml-2">This Token on Presale now!</p>
                                            </div>
                                            :
                                            <>
                                                <p id="contractAddress" className="pr-4 text-lg font-thin text-gray-500 break-all">{tokenn[0]?.token_contractAddress}</p>
                                                <AiFillCopy onClick={() => { copyToClipboard("contractAddress"); toast.success("coppied!") }} className="mt-1 cursor-pointer dark:text-white hover:scale-125" />
                                            </>
                                        }
                                    </div>
                                    <div className="flex gap-4 items-center py-6">
                                        <a target="_blank" rel="noreferrer" href={"https://" + tokenn[0]?.token_website}><SiWebflow size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" /></a>
                                        {!tokenn[0]?.token_telegram == "" &&
                                            <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_telegram}>
                                                <FaTelegramPlane size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" />
                                            </a>}
                                        {!tokenn[0]?.token_twitter == "" &&
                                            <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_twitter}>
                                                <FiTwitter size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" />
                                            </a>}
                                        {!tokenn[0]?.token_instagram == "" &&
                                            <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_instagram}>
                                                <FiInstagram size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" />
                                            </a>}
                                        {!tokenn[0]?.token_discord == "" &&
                                            <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_discord}>
                                                <SiDiscord size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" />
                                            </a>}
                                        {!tokenn[0]?.token_reddit == "" &&
                                            <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_reddit}>
                                                <AiFillRedditCircle size={40} className="bg-gray-200 hover:bg-gray-300 p-2 text-gray-500 rounded-xl cursor-pointer" />
                                            </a>}
                                        <span className="w-px h-10 bg-gray-300" />
                                        <div className="flex gap-4">
                                            {tokenn[0]?.token_network == "BSC" && tokenn[0]?.isPresale == false &&
                                                <a target="_blank" rel="noreferrer" href={"https://pancakeswap.finance/swap?outputCurrency=" + tokenn[0]?.token_contractAddress}>
                                                    <img width={40} className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-1 rounded-xl" src="/pancakeswap.png" />
                                                </a>
                                            }
                                            {tokenn[0]?.token_network == "BSC" && tokenn[0]?.isPresale == false &&
                                                <a target="_blank" rel="noreferrer" href={"https://poocoin.app/tokens/" + tokenn[0]?.token_contractAddress}>
                                                    <img width={40} className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-1 rounded-xl" src="/poocoin.png" />
                                                </a>
                                            }
                                            {tokenn[0]?.token_network == "ETH" && tokenn[0]?.isPresale == false &&
                                                <a target="_blank" rel="noreferrer" href={"https://app.uniswap.org/#/swap?outputCurrency=" + tokenn[0]?.token_contractAddress}>
                                                    <img width={40} className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-1 rounded-xl" src="/uniswap.png" />
                                                </a>
                                            }
                                            {!tokenn[0]?.token_audit == "" &&
                                                <a target="_blank" rel="noreferrer" href={tokenn[0]?.token_audit}>
                                                    <GiMagnifyingGlass size={40} fill="grey" className="cursor-pointer bg-gray-200 hover:bg-gray-300 p-1 rounded-xl" />
                                                </a>
                                            }

                                        </div>

                                    </div>
                                    <div className="flex gap-4 items-center py-6">
                                        {tokenn[0]?.isPresale == false ?
                                            <>
                                                <div className="flex flex-col ">
                                                    <p className="text-gray-400 text-sm lg:text-lg">Price <span className={toFixed(chart?.priceUsd24hAgo) - toFixed(chart?.priceUsd) < 0 ? 'text-red-500' : 'text-green-500'}>% {((toFixed(chart?.priceUsd24hAgo) - toFixed(chart?.priceUsd)) / toFixed(chart?.priceUsd) * 100).toFixed(2)}</span></p>
                                                    {chart == undefined ?
                                                        <p className="font-medium dark:text-white">${tokenn[0]?.token_price}</p> : <p className="font-medium">${toFixed(chart?.priceUsd)}</p>}
                                                </div>
                                                <span className="w-px h-10 bg-gray-300" />
                                                <div className="flex flex-col ">
                                                    <p className="text-gray-400">Market Cap</p>
                                                    {chart == undefined ?
                                                        <p className="font-medium dark:text-white text-sm lg:text-lg">${tokenn[0]?.token_marketcap}</p> : <p className="font-medium text-sm lg:text-lg">${(Math.round(parseInt(chart?.marketCapUsd) * 100) / 100).toLocaleString()}</p>}
                                                </div>
                                            </>
                                            :
                                            <>
                                                <p className="px-2 py-1 bg-indigo-200 text-gray-500 font-normal rounded-full">Presale</p>
                                            </>}
                                        <span className="w-px h-10 bg-gray-300 " />
                                        <div className="flex flex-col ">
                                            <p className="text-gray-400">Launch Date</p>
                                            <p className="font-medium dark:text-gray-200">{tokenn[0]?.launchdate}</p>
                                        </div>
                                    </div>
                                    <div className="small:my-12 my-8 w-3/4 border-dotted border p-6">
                                        <p className="whitespace-pre-wrap overflow-hidden font-normal text-gray-500 dark:text-gray-300 text-md">
                                            {tokenn[0]?.token_description}
                                        </p>
                                    </div>
                                    {tokenn[0]?.token_network == 'BSC' && tokenn[0]?.isPresale == false &&
                                        <iframe width="100%"
                                            height="600"
                                            frameBorder="0"
                                            scrolling="no"
                                            src={"https://coinbrain.com/embed/" + tokenn[0]?.token_contractAddress + "?theme=dark&chart=1&trades=1"}>

                                        </iframe>}

                                </div>

                                <div onClick={() => handleVote(tokenn[0]?._id)} className="">
                                    <div className="flex  items-center">
                                        <span className="py-3 w-8 lg:w-12 rounded hover:bg-white bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:bg-gray-700 dark:border-b-4 dark:border-gray-900 dark:hover:bg-gray-900 flex flex-col items-center cursor-pointer hover:scale-125">
                                            <BiUpArrow />
                                            <h1 className="font-bold text-center">{tokenn[0]?.vote}</h1>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Card code block end */}


                        </div>
                        <div className="dark:bg-gray-900 mt-20 px-4">
                            <div className="pb-20">
                                <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 lg:h-96 h-56 rounded-2xl">
                                    <div className="mx-auto container w-full flex flex-col justify-center items-center">
                                        <div className="flex justify-center items-center flex-col">
                                            <div className="mt-20">
                                                <h2 className="lg:text-6xl md:text-5xl text-2xl font-black leading-10 text-white">EXPLORE OTHER TOKENS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
                                        {randomTokens?.map((token, key) => {
                                            return (
                                                <div onClick={() => router.push("/token/" + token?._id)} key={key} className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white dark:bg-gray-800 shadow rounded-2xl cursor-pointer">
                                                    <img src={PF + token?.token_image} className="object-contain lg:w-24 lg:h-24 w-12 h-12 rounded-full" />
                                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none font-bold text-center text-gray-600 dark:text-white ">{token?.token_name}</p>
                                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600  dark:text-white">{token?.token_network}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default TokenDetails;
