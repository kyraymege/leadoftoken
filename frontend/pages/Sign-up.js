import React, { useState } from "react";
import Footer from "../components/Footer";
import Auth from "../components/Auth/register"
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Head from "next/head";

function Signup() {
    return (
        <div className="flex flex-col ">
            <Head>
                <title>Lead Of Token | Sign Up </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="dark:bg-gray-900 w-full flex flex-col items-center">
            <Header />
            <ToastContainer />
            <div className="flex flex-col w-full">
            <Auth />
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default Signup;
