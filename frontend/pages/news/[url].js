import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ToastContainer } from 'react-toastify'
import NewsDetails from '../../components/News/NewsDetails';

const NewsPage = ({ params }) => {
  const { url } = params;

  return (
    <div className="flex flex-col ">
      <div className="dark:bg-[#212121] bg-primary w-full flex flex-col items-center">
        <Header />
        <ToastContainer />
        <NewsDetails news={url} />
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

export default NewsPage