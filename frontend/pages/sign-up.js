import React from "react";
import Footer from "../components/Footer";
import RegisterComponent from "../components/Auth/RegisterComponent"
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
            <Head>
                <meta name="description" content="Feel the privileges of Lead Of Token by Signing up now." />
            </Head>
            <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
                <Header />
                <ToastContainer />
                <div className="flex flex-col w-full">
                    <RegisterComponent />

                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Signup;
