import React, { useState } from "react";
import Footer from "../components/Footer";
import LoginComponent from "../components/Auth/LoginComponent";
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
            <Head>
                <meta name="description" content="You can Sign In immediately and Exlore Lead Of Token world!" />
            </Head>
            <div className="dark:bg-[#212121] bg-primary flex flex-col items-center">
                <Header />
                <div className="flex flex-col w-full ">
                    <LoginComponent />
                </div>
                <ToastContainer />
                <Footer />
            </div>

        </div>
    );
}

export default Login;
