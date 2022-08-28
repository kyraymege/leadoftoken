import NewsCard from './NewsCard';
import UpdateTokenModel from './UpdateTokenModel';
import React, { useEffect, useState } from 'react'
import { deleteToken, getCreatorsTokens, getUser, getUserNews } from "../../redux/apiCalls";
import { useSelector } from 'react-redux';
import { PF } from '../../redux/requestMethods';
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

const ProfileComponent = ({ user }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [profileUser, setProfileUser] = useState();
  const [profileTokens, setProfileTokens] = useState([]);
  const [userNews, setUserNews] = useState([]);
  const [editToken, setEditToken] = useState();
  const [onEdit, setOnEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const res = getUser(user);
    res?.then((res) => {
      setProfileUser(res?.data);
      getUserNews(user).then((response) => {
        setUserNews(response?.data);
      })
    })

    getCreatorsTokens(user).then((res) => {
      setProfileTokens(res?.data)
    })
  }, [])

  const handleDeleteToken = (id) => {
    deleteToken(id, router);
  }

  return (
    <div className='static flex flex-col lg:flex-row min-h-screen w-full lg:px-20 gap-x-6'>
      {onEdit &&
        <UpdateTokenModel token={editToken} setOnEdit={setOnEdit} />}
      <div className={onEdit ? "flex flex-col lg:flex-row blur-lg" : "flex flex-col lg:flex-row"}>
        <div className='lg:w-1/3 lg:sticky lg:top-0 h-full'>
          <div>
            <div className="w-full py-10 rounded-xl shadow-2xl my-20">
              <div className="container px-6 flex items-start justify-start">
                <div aria-label="group of cards" className="w-full">
                  <div className="flex flex-col lg:flex-row mx-auto bg-secondary dark:bg-[#252525] shadow rounded">
                    <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                      <div className="w-24 h-24 mb-3 p-2 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <img role="img" className="w-full h-full overflow-hidden object-cover rounded-xl" src={"https://avatars.dicebear.com/api/adventurer-neutral/:" + profileUser?.name + ".svg"} alt="avatar" />
                      </div>
                      <h2 className=" text-xl tracking-normal font-medium mb-1">{profileUser?.name}</h2>
                    </div>

                    {!profileTokens?.length == 0 ?
                      <div className="w-full  px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l  border-gray-300 flex flex-col items-center py-10 gap-y-6">
                        {profileTokens?.map((token, key) => {
                          <h1 className='font-semibold text-2xl'> Your Tokens</h1>

                          return (
                            <div key={key}>
                              <div className='flex items-center gap-x-4'>
                                <img role="img" className="w-16 h-16 overflow-hidden object-cover rounded-xl" src={PF + token?.token_image} alt="avatar" />
                                <h2 className=" text-xl tracking-normal font-medium mb-1">{token?.token_name}</h2>
                                {currentUser ?
                                  <>
                                    <AiFillEdit onClick={() => { setEditToken(token); setOnEdit(prev => !prev) }} className='fill-green-500 hover:scale-125 cursor-pointer' />
                                    <AiFillDelete onClick={() => handleDeleteToken(token?._id)} className='fill-red-500 hover:scale-125 cursor-pointer' />
                                  </>
                                  :
                                  <>
                                  </>}
                              </div>

                            </div>
                          )
                        })}
                      </div>
                      :
                      <div className='flex items-center justify-center px-6'>
                        <p className='font-medium text-base py-4 lg:text-2xl'>You haven&apos;t added tokens yet.</p>
                      </div>
                    }
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


        <NewsCard news={userNews} />

      </div>
    </div>
  )
}

export default ProfileComponent