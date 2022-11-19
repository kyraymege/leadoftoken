import React, { useEffect, useState } from "react";
import TokenListTable from "../components/Tokens/TokenListTable";
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import PromotedTokenList from "../components/Tokens/PromotedTokenList";
import { ToastContainer } from 'react-toastify'
import { logOut } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCookie } from 'cookies-next';
import AdSection from "../components/Tokens/AdSection";
import Announcements from "../components/Announcements";
import Meta from "../components/Meta/Meta";
import Script from 'next/script'

function Home() {
    const dispatch = useDispatch();
    const router = useRouter();
    // const [show, setShow] = useState(true)

    useEffect(() => {
        if (getCookie("access_token") === undefined) {
            logOut(dispatch);
        }
    }, [])



    return (
        <div className="flex flex-col ">
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-937NFKF9VG"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-937NFKF9VG');
                    `}
            </Script>
            <Meta
                title="Lead Of Token | Token Listings"
                description="Lead Of Token is a token voting site where you can vote for your favorite tokens and coins."
                ogImage="/logo.png"
                ogUrl="https://www.leadoftoken.com/"
                ogType="vote"
                ogTitle="Lead Of Token | Token Listings" />

            <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
                {/* {show &&
                    <Announcements setShow={setShow} />} */}
                <Header />
                <ToastContainer />
                <AdSection />
                <PromotedTokenList />
                <div onClick={() => router.push("/contact")} className='relative mt-10 container cursor-pointer max-w-sm lg:max-w-7xl'>
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-300 via-indigo-700 to-indigo-500 rounded blur animate-pulse" />
                    <img alt="ad" className='relative' src='https://storage.googleapis.com/coinsniper-assets/images/RCNyaANXFfrDQchhhVFRCZFob9w0c5ctl32QQ6R4.gif' />
                </div>
                <TokenListTable />
                <Footer />

            </div>

        </div>
    );
}

export default Home;
