import React, { useState, useEffect } from 'react'
import { FcSearch } from "react-icons/fc"
import { GiCrossMark } from "react-icons/gi"
import { getSearchedToken } from '../../redux/apiCalls';
import { PF } from "../../redux/requestMethods"
import { useRouter } from 'next/router'

const SearchFeature = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter();

    useEffect(() => {
        if (searchTerm !== '') {
            const delayDebounceFn = setTimeout(() => {

                const res = getSearchedToken(searchTerm);
                res.then((res) => {
                    if (res) {
                        setFilteredCoins(res?.data)
                        setIsSearch(true)
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }, 1000)
            return () => clearTimeout(delayDebounceFn)
        }
    }, [searchTerm])

    return (
        <div className='hidden lg:block'>
            <div className="relative">
                <input
                    className="relative text-sm leading-none text-gray-600  bg-gray-200  dark:bg-gray-400  rounded lg:max-w-[452px] w-full px-10 py-4 outline-none flex-grow"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                />
                {isSearch == false ? <FcSearch size={24} className='absolute cursor-pointer top-[16px] right-4' /> : <GiCrossMark onClick={() => { setIsSearch((prev) => !prev); setSearchTerm("") }} size={24} className='absolute cursor-pointer top-[16px] right-4' />}
            </div>
            {isSearch &&
                <div className="overflow-y-hidden max-h-64 w-60 justify-center flex-col absolute outline-none flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-b-lg focus-within:text-gray-600 focus-within:shadow-md">
                    {filteredCoins?.map((token, key) => {
                        return (
                            <div key={key} onClick={() => { setIsSearch((prev) => !prev); router.push("/token/" + token?._id); }} className="flex items-center rounded-xl p-2 justify-start w-full py-1 cursor-pointer mt-3 hover:bg-gray-300">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                        className="rounded-full hover:scale-125"
                                        src={PF + token.token_image}
                                        height={40}
                                        width={40}
                                        alt={token.token_name}
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900 mt-2">
                                        {token.token_name}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>}

        </div>
    )
}

export default SearchFeature