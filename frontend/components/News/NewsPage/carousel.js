import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getMostClaps } from "../../../redux/apiCalls"
import { PF } from "../../../redux/requestMethods";
import { useRouter } from "next/router";

export default function Carousel() {
    const [mostClaps, setMostClaps] = useState()
    const router = useRouter();
    useEffect(() => {
        getMostClaps()
            .then((res) => {
                setMostClaps(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="2xl:mx-auto 2xl:container 2xl:max-w-5xl flex justify-center bg-secondary dark:bg-[#212121] shadow-2xl shadow-gray-300 dark:shadow-gray-800 rounded">
            <div className="py-4 w-full max-w-sm lg:max-w-5xl">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden max-w-xl" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="cursor-pointer">
                            {mostClaps?.map((news, index) => {
                                return (
                                    <Slide onClick={() => router.push("/news/" + news?._id)} key={index}>
                                        <div className="gallery-cell shadow-2xl shadow-gray-700 lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                            <div className="relative w-full h-full lg:block hidden">
                                                <img src={PF + news?.image} alt="sitting area" className="object-center object-cover w-full h-full" />
                                                <div className="flex justify-between pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0 w-full bg-black bg-opacity-50 py-6">
                                                    <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{news?.title}</h1>
                                                    <div className="flex  items-center gap-x-3 fill-green-500">
                                                        <svg width="36" height="36" viewBox="0 0 24 24" aria-label="clap">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                            </path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                            </path>
                                                        </svg>
                                                        <p className="text-lg font-bold">{news?.clap}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full h-full lg:hidden">
                                                {news?.image == "/newsImage.png" ?
                                                    <img src={news?.image} alt="news news" className="object-center object-cover w-full h-full" />
                                                    :
                                                    <img src={PF + news?.image} alt="news news" className="object-center object-cover w-full h-full" />
                                                }
                                                <div className="flex justify-between pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0 w-full bg-black bg-opacity-50 py-6">
                                                    <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{news?.title}</h1>
                                                    <div className="flex  items-center gap-x-3 fill-green-500">
                                                        <svg width="36" height="36" viewBox="0 0 24 24" aria-label="clap">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                            </path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                            </path>
                                                        </svg>
                                                        <p className="text-lg font-bold">{news?.clap}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>)
                            })
                            }
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block max-w-5xl" naturalSlideWidth={1024} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true} currentSlide={0}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge cursor-pointer">
                            {mostClaps?.map((news, index) => {
                                return (
                                    <Slide onClick={() => router.push("/news/" + news?._id)} key={index} className="carousel__inner-slideLarge">
                                        <div className="gallery-cell w-full h-full ">
                                            <div className="relative w-full h-full lg:block hidden ">
                                                <span className="absolute bg-yellow-500 px-6 py-4 text-lg font-bold rounded">{index + 1}</span>
                                                {news?.image == "/newsImage.png" ?
                                                    <img src={news?.image} alt="news news" className="object-center rounded-xl object-cover w-full h-full" />
                                                    :
                                                    <img src={PF + news?.image} alt="news news" className="object-center rounded-xl object-cover w-full h-full" />
                                                }
                                                <div className="flex justify-between pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0 w-full bg-black bg-opacity-50 py-6">
                                                    <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{news?.title}</h1>
                                                    <div className="flex  items-center gap-x-3 fill-green-500">
                                                        <svg width="36" height="36" viewBox="0 0 24 24" aria-label="clap">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                            </path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                            </path>
                                                        </svg>
                                                        <p className="text-lg font-bold text-white">{news?.clap}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full h-full lg:hidden">
                                                <span className="absolute bg-yellow-500 px-6 py-4 text-lg font-bold rounded">{index + 1}</span>
                                                <img src={PF + mostClaps?.image} alt="sitting area" className="rounded-xl object-center object-cover w-full h-full" />
                                                <div className="flex pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0 w-full bg-black bg-opacity-50 py-6">
                                                    <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{news?.title}</h1>
                                                    <div className="flex  items-center gap-x-3 fill-green-500 ">
                                                        <svg width="36" height="36" viewBox="0 0 24 24" aria-label="clap">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                                                            </path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                                                            </path>
                                                        </svg>
                                                        <p className="text-lg font-bold">{news?.clap}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                )
                            })
                            }
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 520px;
                        width: 1024px;                                               
                        padding: 10px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            width: 378px !important;
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                                             
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
    );
}