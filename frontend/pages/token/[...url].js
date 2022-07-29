import React, { useEffect } from 'react'
import Head from 'next/head';
import TokenDetails from '../../components/TokenDetails';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ToastContainer } from 'react-toastify'

const TokenPage = ({ params }) => {
    const { url } = params;

    return (
        <div className="flex flex-col ">
            <Head>
                <title>LeadOfToken | {url}</title>
                <meta name="LeadOfToken" content="Cryptocurrency news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="dark:bg-gray-900 w-full flex flex-col items-center">
                <Header />
                <ToastContainer />
                <TokenDetails token={url} />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    return { props: { params:context.params } };
  }
  
export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking' // can also be true or 'blocking'
    }
  }

export default TokenPage