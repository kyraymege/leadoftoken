import React, { useEffect, useState } from "react";
import TokenListTable from "../components/Tokens/TokenListTable";
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import PromotedTokenList from "../components/Tokens/PromotedTokenList";
import Head from "next/head";
import { ToastContainer } from 'react-toastify'
import { logOut } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCookie } from 'cookies-next';
import AdSection from "../components/Tokens/AdSection";
import Announcements from "../components/Announcements";

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
            <Head>
                <title>Lead Of Token | Token Lists </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Head>
                <meta name="description" content="You can access all the listed tokens here!" />
            </Head>
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
