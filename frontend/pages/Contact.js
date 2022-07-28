import React from 'react'
import ContactComp from "../components/Contact/index"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Head from "next/head";

const Contact = () => {
  return (
    <div className="flex flex-col ">
    <Head>
        <title>Lead Of Token | Contact </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="dark:bg-gray-900 w-full flex flex-col items-center">
    <Header />
    <ToastContainer />
    <ContactComp />
    <Footer />
    </div>
</div>
  )
}

export default Contact