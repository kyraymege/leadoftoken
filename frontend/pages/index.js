import React from "react";
import TokenListTable from "../components/TokenListTable";
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import PromotedTokenList from "../components/PromotedTokenList";
import Head from "next/head";
import { ToastContainer } from 'react-toastify'

function Home() {

  return (
    <div className="flex flex-col ">
            <Head>
                <title>Lead Of Token | Token Lists </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Head>
                <meta name="description" content="You can access all the listed tokens here!" />
            </Head>
            <div className="dark:bg-gray-900 w-full flex flex-col items-center">            
            <Header />
            <ToastContainer/>                        
            <PromotedTokenList />
            <div className='relative mt-10 container'>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-700 rounded blur animate-pulse"/>
                <img className='relative' src='https://storage.googleapis.com/coinsniper-assets/images/RCNyaANXFfrDQchhhVFRCZFob9w0c5ctl32QQ6R4.gif' />
            </div>
            <TokenListTable />
            <Footer />
            
            </div>
            
        </div>
  );
}

export default Home;
