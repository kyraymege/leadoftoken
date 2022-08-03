import React from 'react'
import ProfileComponent from "../../components/Profile"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ToastContainer } from 'react-toastify'
import Head from "next/head";

const profile = ({ params }) => {
    const { url } = params;
    return (
        <div className="flex flex-col ">
            <Head>
                <title>Lead Of Token | Profile </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Head>
                <meta name="description" content="Your informations, your profile!" />
            </Head>
            <div className="dark:bg-gray-900 w-full flex flex-col items-center">
                <Header />
                <ToastContainer />
                <ProfileComponent user={url} />
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

export default profile