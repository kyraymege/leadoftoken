import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import CreateNewsComponent from '../components/News/CreateNews';
import Meta from '../components/Meta/Meta';

const createNews = () => {
  return (
    <div className="flex flex-col ">
      <Meta
        title="Lead Of Token | Create Article"
        description="Create new articles about your projects or your favourite projects. Get Claps and always stay up there!"
        ogImage="/logo.png"
        ogUrl="https://www.leadoftoken.com/createNews/"
        ogType="news"
        ogTitle="Lead Of Token | Create Article" />
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <CreateNewsComponent />
        <Footer />
      </div>
    </div>
  )
}

export default createNews