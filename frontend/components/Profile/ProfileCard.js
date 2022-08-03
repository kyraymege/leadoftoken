import React, { useEffect, useState } from 'react'
import { deleteToken, getCreatorsTokens, getUser } from "../../redux/apiCalls";
import { useSelector } from 'react-redux';
import { PF } from '../../redux/requestMethods';
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import UpdateTokenModel from './UpdateTokenModel';
import { useRouter } from 'next/router';

const ProfileCard = ({ user }) => {
    const { currentUser } = useSelector((state) => state.auth);
    const [profileUser, setProfileUser] = useState();
    const [profileTokens, setProfileTokens] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const res = getUser(user);
        res?.then((res) => {
            setProfileUser(res?.data);
        })

        getCreatorsTokens(user).then((res) => {
            setProfileTokens(res?.data)
        })
    }, [])

    const handleDeleteToken = (id) => {
        deleteToken(id,router);
    }

    return (
        <div>
            <div className="w-full py-10 rounded-xl shadow-2xl my-20">
                <div className="container px-6 flex items-start justify-start">
                    <div aria-label="group of cards" className="w-full">
                        <div className="flex flex-col lg:flex-row mx-auto bg-indigo-50 dark:bg-gray-800 shadow rounded">
                            <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                                <div className="w-24 h-24 mb-3 p-2 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                    <img role="img" className="w-full h-full overflow-hidden object-cover rounded-xl" src={"https://avatars.dicebear.com/api/adventurer-neutral/:" + profileUser?.name + ".svg"} alt="avatar" />
                                </div>
                                <h2 className=" text-xl tracking-normal font-medium mb-1">{profileUser?.name}</h2>
                            </div>

                            <div className="w-full  px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l  border-gray-300 flex flex-col items-center py-10 gap-y-6">
                                {profileTokens?.map((token, key) => {
                                    <h1 className='font-semibold text-2xl'> Your Tokens</h1>

                                    return (
                                        <div key={key}>
                                            <div  className='flex items-center gap-x-4'>
                                                <img role="img" className="w-16 h-16 overflow-hidden object-cover rounded-xl" src={PF + token?.token_image} alt="avatar" />
                                                <h2 className=" text-xl tracking-normal font-medium mb-1">{token?.token_name}</h2>
                                                {currentUser ?
                                                    <>
                                                        <AiFillEdit onClick={() => setIsEdit((prev) => !prev)} className='fill-green-500 hover:scale-125 cursor-pointer' />
                                                        <AiFillDelete onClick={() => handleDeleteToken(token?._id)} className='fill-red-500 hover:scale-125 cursor-pointer' />
                                                    </>
                                                    :
                                                    <>
                                                    </>}
                                            </div>

                                            {isEdit &&
                                                <UpdateTokenModel token={token} />}
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileCard