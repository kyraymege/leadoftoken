import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import NewsComponent from '../components/News/NewsPage/index';
import Head from "next/head";

const news = () => {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Lead Of Token | News </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta name="description" content="Here is the Lead Of Token News! Let's check current media activities!" />
      </Head>
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <NewsComponent/>
        <Footer />
      </div>
    </div>
  )
}

export default news