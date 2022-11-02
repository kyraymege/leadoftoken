import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import NewsComponent from '../components/News/NewsPage/index';
import Meta from '../components/Meta/Meta';

const news = () => {
  return (
    <div className="flex flex-col ">
      <Meta
        title="Lead Of Token | Project Articles"
        description="Reviews and Announcements about crypto projects your favourite and will discover are in the Lead Of Token's Project Articles section."
        ogImage="/logo.png"
        ogUrl="https://www.leadoftoken.com/project-articles/"
        ogType="news"
        ogTitle="Lead Of Token | Project Articles" />
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <NewsComponent />
        <Footer />
      </div>
    </div>
  )
}

export default news