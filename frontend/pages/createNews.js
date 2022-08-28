import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import CreateNewsComponent from '../components/News/createNews/index';
import Head from "next/head";

const createNews = () => {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Lead Of Token | Create News </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta name="description" content="You can create new article on this page! Create and get Claps!" />
      </Head>
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <CreateNewsComponent/>
        <Footer />
      </div>
    </div>
  )
}

export default createNews