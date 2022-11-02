import React from 'react'
import ContactComp from "../components/Contact/index"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify'
import Meta from '../components/Meta/Meta';

const contact = () => {
  return (
    <div className="flex flex-col ">
      <Meta
        title="Lead Of Token | Contact"
        description="Contact us for any questions or suggestions you have about Lead Of Token."
        ogImage="/logo.png"
        ogUrl="https://www.leadoftoken.com/contact/"
        ogType="contact"
        ogTitle="Lead Of Token | Contact" />
      
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <ContactComp />
        <Footer />
      </div>
    </div>
  )
}

export default contact
