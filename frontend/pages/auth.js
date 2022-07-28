import React, { useState } from "react";
import Footer from "../components/Footer";
import Auth from "../components/Auth/login"
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Head from "next/head";

function Login() {
    return (
        <div className="flex flex-col">
            <Head>
                <title>Lead Of Token | Sign In </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="dark:bg-gray-900  flex flex-col items-center">
                <Header />
                <div className="flex flex-col w-full ">
                    <Auth />
                </div>
                <ToastContainer />
                <Footer />
            </div>

        </div>
    );
}

export default Login;
