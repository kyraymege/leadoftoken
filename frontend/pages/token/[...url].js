import React from 'react'
import TokenDetails from '../../components/Tokens/TokenDetails';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ToastContainer } from 'react-toastify'

const TokenPage = ({ params }) => {
  const { url } = params;

  return (
    <div className="flex flex-col ">      
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <TokenDetails token={url} />
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  return { props: { params: context.params } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking' // can also be true or 'blocking'
  }
}

export default TokenPage