import TokenInfo from "../components/AddToken/tokenInfo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

export default function AddToken() {
    return (
        <div className="flex flex-col ">
            <Head>
                <title>Lead Of Token | Add Token</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Head>
                <meta name="description" content="Add new token to Lead Of Token.Please fill out this form carefully to add a new token to Lead Of Token." />
            </Head>
            <div className="dark:bg-gray-900 w-full flex flex-col items-center">
                <Header />
                <ToastContainer />
                <div className="py-20 shadow-2xl">
                    <TokenInfo />

                </div>
                <Footer />
            </div>
        </div>
    )
}
