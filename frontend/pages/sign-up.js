import React from "react";
import Footer from "../components/Footer";
import RegisterComponent from "../components/Auth/RegisterComponent"
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Meta from "../components/Meta/Meta";

function Signup() {
    return (
        <div className="flex flex-col ">
            <Meta
                title="Lead Of Token | Sign Up"
                description="Sign up to Lead Of Token and start voting for your favorite tokens and coins!"
                ogImage="/logo.png"
                ogUrl="https://www.leadoftoken.com/sign-up/"
                ogType="cryptocurrency"
                ogTitle="Lead Of Token | Sign Up" />

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
