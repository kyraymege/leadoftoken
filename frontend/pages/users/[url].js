import React from 'react'
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ToastContainer } from 'react-toastify'
import EmailVerify from '../../components/VerifyEmail';

const Users = ({ params }) => {
  const { url } = params;

  return (
    <div className="flex flex-col ">
      <Head>
        <title>LeadOfToken | {url}</title>
        <meta name="LeadOfToken" content="Cryptocurrency news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="description" content="To take advantage of the privileges of Lead Of Token, you can create your own watch list by logging in immediately and share it with your friends or followers!" />
      </Head>
      <div className="dark:bg-gray-900 w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <EmailVerify param={url} />
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

export default Users