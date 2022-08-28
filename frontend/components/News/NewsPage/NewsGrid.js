import React, { useEffect, useState } from 'react'
import { getNews, getPromotedNews } from '../../../redux/apiCalls'
import { PF } from '../../../redux/requestMethods'
import { useRouter } from 'next/router'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroll-component';
import { BiLoaderCircle } from 'react-icons/bi'

const NewsGrid = () => {
    const [promoted, setPromoted] = useState()
    const [news, setNews] = useState([])
    const router = useRouter();
    const [count, setCount] = useState(1)

    useEffect(() => {
        getPromotedNews().then(res => {
            setPromoted(res?.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className="grid lg:grid-cols-3 grid-cols-1 px-6 py-10">
                {promoted?.map((promote, key) => {
                    return (
                        <div key={key} onClick={() => router.push("/news/" + promote?._id)} className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2 px-6 py-6 rounded bg-secondary dark:bg-[#252525] shadow-2xl shadow-gray-400 dark:shadow-gray-800 mx-6 cursor-pointer border border-gray-300 dark:border-gray-700">
                            <div className='max-w-lg h-72'>
                                <span className='absolute bg-yellow-500 px-6 py-4 rounded text-xl font-bold shadow-2xl hover:scale-105'>Promoted</span>
                                {promote?.image == "newsImage.png" ?
                                    <img src={promote?.image} alt="promoted news" className="w-full object-cover max-w-lg h-72" />
                                    :
                                    <img src={PF + promote?.image} alt="promoted news" className="w-full object-cover max-w-lg h-72" />
                                }
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="text-base leading-4 text-gray-500">{moment(promote?.createdAt).fromNow()}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 1H0" stroke="#6B7280" />
                                        </svg>
                                        <div className='fill-green-500 hover:animate-ping duration-1000 w-9 h-9 hover:w-6 hover:h-9'>
                                            <svg viewBox="0 0 24 24" aria-label="clap">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                </path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                </path>
                                            </svg>
                                        </div>
                                        <p className="text-lg font-medium leading-none text-gray-500 ml-2">{promote?.clap}</p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold leading-6 mt-4 dark:text-white">{promote?.title}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <InfiniteScroll
                dataLength={news.length}
                next={() => {
                    console.log("scrolled")
                    setCount(prev => prev + 1)
                    getNews(count).then(res => {
                        setNews([...news, ...res.data])
                    })
                }}
                hasMore={true}
                endMessage={
                    <p>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                loader={
                    <div className='flex justify-center items-center mx-auto overflow-y-hidden'>
                        <p className='text-3xl font-extrabold text-indigo-700'>L</p>
                        <BiLoaderCircle className='animate-spin fill-indigo-500' size={36} />
                        <p className='text-3xl font-extrabold text-indigo-700'>ADING</p>
                    </div>
                }>
                {<div className="grid lg:grid-cols-3 grid-cols-1 px-6 py-10">
                    {news?.map((news, key) => {
                        return (
                            <div key={key} onClick={() => router.push("/news/" + news?._id)} className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2 px-6 py-6 rounded bg-secondary dark:bg-[#252525] shadow-2xl shadow-gray-400 dark:shadow-gray-800 mx-6 cursor-pointer border border-gray-300 dark:border-gray-700">
                                <div className='max-w-lg h-72'>
                                    {news?.image == "/newsImage.png" ?
                                        <img src={news?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
                                        :
                                        <img src={PF + news?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
                                    }
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="text-base leading-4 text-gray-500">{moment(news?.createdAt).fromNow()}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M64 1H0" stroke="#6B7280" />
                                            </svg>
                                            <div className='fill-green-500 hover:animate-ping duration-1000 w-9 h-9 hover:w-6 hover:h-9'>
                                                <svg viewBox="0 0 24 24" aria-label="clap">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                    </path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium leading-none text-gray-500 ml-2">{news?.clap}</p>
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-semibold leading-6 mt-4 dark:text-white">{news?.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                }
            </InfiniteScroll>
        </>
    )
}

export default NewsGrid