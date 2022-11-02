import React, { useState } from "react";
import Footer from "../components/Footer";
import LoginComponent from "../components/Auth/LoginComponent";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Meta from "../components/Meta/Meta";

function Login() {
    return (
        <div className="flex flex-col">
            
            <Meta
                title="Lead Of Token | Sign In"
                description="Sign in to Lead Of Token and start voting for your favorite tokens and coins!"
                ogImage="/logo.png"
                ogUrl="https://www.leadoftoken.com/auth/"
                ogType="auth"
                ogTitle="Lead Of Token | Sign In" />

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
