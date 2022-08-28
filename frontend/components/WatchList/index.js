import React, { useState, useEffect } from 'react'
import moment from "moment"
import ShareWith from './shareWith';
import { AiTwotoneStar } from "react-icons/ai"
import { useSelector } from 'react-redux';
import { addWatchList, getUser } from "../../redux/apiCalls";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {PF} from "../../redux/requestMethods"

const Profile = ({ user}) => {
  const router = useRouter();  
  const [token, setToken] = useState();
  const [watchUser, setWatchUser] = useState();
  const { currentUser } = useSelector((state) => state.auth)

  useEffect(() => {
    const res = getUser(user);
    res?.then((res) => {
      setToken(res?.data?.token_watchList);
      setWatchUser(res?.data);      
    })
  }, [])

  const handleWatchList = (token_id) => {
    addWatchList(currentUser?._id, token_id);
  }

  return (
    <div className="container mx-auto min-h-screen  w-full py-20 sm:px-6">
      <div className="border-r border-l border-t border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800 dark:border-gray-700 justify-center items-center px-4 md:px-10 py-4 md:py-7 bg-secondary dark:bg-[#252525] rounded-tl-lg rounded-tr-lg ">
        <div className="sm:flex items-center justify-between">
          <div className='flex items-center'>
            <img
              src={"https://avatars.dicebear.com/api/adventurer-neutral/:" + watchUser?.name + ".svg"}
              className="rounded h-16 w-16 overflow-hidden shadow"
              alt="profile-image"
            />
            <h1 className="text-3xl font-extrabold ml-6 dark:text-white">{watchUser?.name}<span className='text-indigo-700'>&apos;s Watch List</span></h1>
          </div>
          {currentUser?._id == user &&
          <ShareWith user={user}/>           
          }
        </div>
      </div>
      <div className="bg-secondary dark:bg-[#313131] px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto border-r border-l border-b dark:border-gray-700 border-gray-300 shadow-2xl shadow-gray-400 dark:shadow-gray-800">
        <div className="bg-quaternary dark:bg-[#313131] shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">

          {token?.length == 0 ?
            <div className='flex justify-center items-center '>
              <h1 className='text-2xl font-bold text-indigo-700'>Add a token in your Watch List</h1>
            </div>
            :
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800 dark:text-gray-400">
                  <th>#</th>
                  <th className="font-normal text-left pl-4">Project</th>
                  <th className="font-normal text-left pl-12">Price</th>
                  <th className="font-normal text-left pl-20">Market Cap</th>
                  <th className="font-normal text-left pl-20">Time Since Launch</th>

                </tr>
              </thead>
              {token?.map((token, key) => {
                return (
                  <tbody key={key} className="w-full cursor-pointer">
                    <tr className="h-20 text-sm leading-none text-gray-800 bg-tertiary dark:bg-[#212121] hover:dark:bg-[#414141] hover:bg-secondary border-b border-t border-gray-300 dark:border-gray-700">
                      <td className="">
                        {currentUser?._id == user &&
                          <div onClick={() => handleWatchList(token?._id)} className="flex justify-center  items-center">
                            <span className="p-4 rounded-2xl hover:bg-tertiary bg-quaternary dark:bg-[#313131] flex-col cursor-pointer hover:animate-spin">
                              <AiTwotoneStar size={24} className="fill-yellow-300" />
                            </span>
                          </div>}
                      </td>
                      <td onClick={() => router.push("/token/" + token?._id)} className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img className="w-full h-full" src={token?.token_image == "/logo.png" ? token?.token_image : PF + token?.token_image} />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium dark:text-white">{token?.token_name}</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2 dark:text-gray-400">${token?.token_symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td onClick={() => router.push("/token/" + token?._id)} className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800 dark:text-white">$ {token?.token_price}</p>
                      </td>
                      <td onClick={() => router.push("/token/" + token?._id)} className="pl-20">
                        <p className="font-medium dark:text-white">${token?.token_marketcap}</p>
                      </td>
                      <td onClick={() => router.push("/token/" + token?._id)} className="pl-20">
                        <p className="font-medium dark:text-white">{moment(token?.launchdate).startOf('day').fromNow()}</p>
                        <p className="text-xs leading-3 text-gray-600 mt-2 dark:text-gray-400">{token?.launchdate}</p>
                      </td>

                    </tr>
                  </tbody>
                )
              })}
            </table>}



        </div>
      </div>
    </div>
  )
}

export default Profile