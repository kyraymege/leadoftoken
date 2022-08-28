import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { clapNews, deleteNews, fetchNews, getUser, updateNews } from '../../../redux/apiCalls'
import draftToHtml from 'draftjs-to-html'
import { BiLoaderCircle } from 'react-icons/bi'
import Ad from './Ad'
import MostClaps from './MostClaps'
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ShareWithNews from './ShareWithNews'
import { PF } from '../../../redux/requestMethods'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor), { ssr: false })
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { MdOutlineCancel } from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Head from 'next/head';
import DOMPurify from 'dompurify'

const NewsDetails = ({ news }) => {
  const [newsData, setNewsData] = useState()
  const [editorState, setEditorState] = useState()
  const [author, setAuthor] = useState()
  const [onEdit, setOnEdit] = useState(false)
  const [title, setTitle] = useState("")
  const { currentUser } = useSelector((state) => state.auth)
  const router = useRouter()
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  useEffect(() => {
    fetchNews(news).then((response) => {
      setNewsData(response?.data)
      const html = draftToHtml(response?.data?.content)
      const blocksFromHTML = convertFromHTML(html)
      console.log(html)
      const content = ContentState.createFromBlockArray(blocksFromHTML)
      setEditorState(EditorState.createWithContent(content))
      setTitle(response?.data?.title)
      getUser(response?.data?.author).then((response) => {
        setAuthor(response?.data)
      })
    })
    const interval = setInterval(() => {
      fetchNews(news).then((response) => {
        setNewsData(response?.data)
        getUser(response?.data?.author).then((response) => {
          setAuthor(response?.data)
        })
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])


  function createMarkup() {
    return {
      __html: DOMPurify.sanitize(draftToHtml(newsData?.content, {
        unstyled: true,
      }
      ))
    };
  }

  const handleClap = () => {
    clapNews(currentUser?._id, news)
  }

  const handleSave = () => {
    if (title === "") {
      toast.error("Title is required")
    } else {
      const content = convertToRaw(editorState.getCurrentContent())
      updateNews(news, { title, content }, router)
    }
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this news?")) {
      deleteNews(news, router)
    }

  }

  return (
    <div className='flex flex-col lg:flex-row py-20 gap-y-10 gap-x-10 container items-start min-h-screen mx-auto w-full'>
      <Head>
        <title>LeadOfToken | {newsData?.title}</title>
        <meta name="LeadOfToken" content="Cryptocurrency news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="description" content="Crypto News!" />
      </Head>
      <div className='w-1/4 hidden lg:flex sticky top-0 h-96'>
        <Ad />
      </div>
      {onEdit ?
        <div className='px-10 rounded shadow-xl lg:w-2/4 dark:bg-[#252525] shadow-gray-400 dark:shadow-gray-800 bg-secondary py-10'>
          <div className='break-all'>
            <label className="block mb-2 text-lg font-medium text-gray-800 dark:text-gray-300">Title</label>
            <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} className="bg-tertiary border border-gray-300 text-gray-900 text-sm rounded focus:ring-indigo-700 focus:border-indigo-700 block w-full p-2.5 dark:bg-[#313131] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-700 dark:focus:border-indigo-700" />
          </div>
          <div className='py-10 flex items-center justify-center'>
            {newsData?.image == "/newsImage.png" ?
              < img src={newsData?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
              :
              <img src={PF + newsData?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
            }
          </div>
          <div className='py-6 break-all'>
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                image: { urlEnabled: true, previewImage: true }
              }}
              hashtag={{
                separator: ' ',
                trigger: '#',
              }}
              toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto text-gray-400 dark:bg-[#313131] text-gray-400"
              editorClassName=" mx-auto p-10 min-h-screen shadow-xl bg-tertiary dark:bg-[#414141] max-w-6xl"
            />
          </div>
          <div className='flex items-center justify-end cursor-pointer gap-x-6'>
            <div onClick={() => setOnEdit(prev => !prev)} className='flex items-center justify-end cursor-pointer'>
              <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <MdOutlineCancel size={24} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Cancel</span>
                <span className="relative invisible">Cancel</span>
              </div>
            </div>
            <div onClick={handleSave} className='flex items-center justify-end'>
              <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                  <AiFillSave size={24} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Save</span>
                <span className="relative invisible">Save</span>
              </div>
            </div>
          </div>
        </div>
        :
        newsData ?
          <div className='px-10 rounded shadow-xl lg:w-2/4 dark:bg-[#252525] shadow-gray-400 dark:shadow-gray-800 bg-secondary py-10'>
            <div className='flex items-center mb-6 justify-between'>
              <div className='flex'>
                <img
                  src={"https://avatars.dicebear.com/api/adventurer-neutral/:" + author?.name + ".svg"}
                  className="rounded h-12 w-12 overflow-hidden shadow"
                  alt="profile-image"
                />
                <div className='flex flex-col items-start'>
                  <h1 className="text-lg font-bold ml-6 dark:text-white">{author?.name}</h1>
                  <p className='font-extralight ml-6'>{moment(newsData?.createdAt).startOf('day').fromNow()}</p>
                </div>
              </div>
              <div className='flex fill-green-500 cursor-pointer'>
                {
                  author?.name === currentUser?.name ?
                    <div className='flex gap-x-3 items-center px-6'>
                      <AiFillEdit onClick={() => setOnEdit(prev => !prev)} className='fill-green-500 hover:scale-125 duration-150' />
                      <AiFillDelete onClick={handleDelete} className='fill-red-500 hover:scale-125 duration-150' />
                    </div>
                    :
                    <>
                    </>
                }
                <div onClick={handleClap} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 dark:bg-gray-600 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-700 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                      </path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                      </path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z">
                      </path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z">
                      </path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{newsData?.clap}</span>
                </div>
              </div>

            </div>

            <div className='break-all'>
              <h1 className='text-5xl font-bold'>{newsData?.title}</h1>
            </div>
            <div className='py-10 flex items-center justify-center'>
              {newsData?.image == "/newsImage.png" ?
                < img src={newsData?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
                :
                <img src={PF + newsData?.image} alt="news news" className="w-full object-cover max-w-lg h-72" />
              }
            </div>
            <div className='py-6 break-all'>
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
            <div className='flex items-center justify-end'>
              <ShareWithNews news={news} />
            </div>
          </div>

          :
          <div className='flex items-center mx-auto'>
            <p className='text-9xl font-extrabold text-indigo-700 animate-bounce'>L</p>
            <BiLoaderCircle className='animate-spin fill-indigo-500' size={96} />
            <p className='text-9xl font-extrabold text-indigo-700 animate-bounce'>ADING</p>
          </div>

      }
      <div className='lg:w-1/4 break-all lg:sticky top-0 h-full w-full px-6'>
        <MostClaps />
      </div>
    </div>
  )
}

export default NewsDetails