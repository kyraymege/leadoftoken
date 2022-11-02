import TokenInfo from "../components/Tokens/AddToken/tokenInfo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ToastContainer } from 'react-toastify'
import Meta from "../components/Meta/Meta"

export default function AddToken() {
    return (
        <div className="flex flex-col ">
            <Meta
                title="Lead Of Token | Add Token"
                description="Add your token to Lead Of Token and start getting votes from our community!"
                ogImage="/logo.png"
                ogUrl="https://www.leadoftoken.com/addToken/"
                ogType="cryptocurrency"
                ogTitle="Lead Of Token | Add Token" />            
            <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
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
