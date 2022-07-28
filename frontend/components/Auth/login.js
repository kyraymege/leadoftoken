import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { login, loginWithGoogle } from "../../redux/apiCalls";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "next/link";

export default function LoginComponent() {
    const [showpass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const router = useRouter();
    const { error, currentUser } = useSelector((state) => state.auth)

    useEffect(() => {
        if (currentUser) {
            router.push("/TokenLists")
        }
    }, [])

    const signInWithGoogle = async () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                loginWithGoogle(dispatch, result, router);
            }).catch((err) => {
                console.log(err)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.warn("You must fill all sections!")
        } else {
            try {
                login(dispatch, { email, password }, router)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="bg-indigo-50 dark:bg-gray-900 shadow-2xl">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 dark:text-white">
                        Login to your account
                    </p>
                    <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 dark:text-gray-400">
                        Dont have account?
                        <Link href="/Sign-up" className="hover:text-gray-500 ml-2 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer">

                            Sign up here
                        </Link>
                    </p>
                    <button onClick={signInWithGoogle} aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 dark:border-gray-500 flex items-center w-full mt-10 hover:bg-gray-100 dark:hover:bg-gray-900">
                        <FcGoogle size={24} />
                        <p className="text-base font-medium ml-4 text-gray-700 dark:text-gray-400">Continue with Google</p>
                    </button>
                    <button aria-label="Continue with github" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 dark:border-gray-500 flex items-center w-full mt-4 hover:bg-gray-100 dark:hover:bg-gray-900">
                        <BsGithub size={24} />
                        <p className="text-base font-medium ml-4 text-gray-700 dark:text-gray-400">Continue with Github</p>
                    </button>
                    <button aria-label="Continue with twitter" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 dark:border-gray-500 flex items-center w-full mt-4 hover:bg-gray-100 dark:hover:bg-gray-900">
                        <BsTwitter fill="#00acee" size={24} />
                        <p className="text-base font-medium ml-4 text-gray-700 dark:text-gray-400">Continue with Twitter</p>
                    </button>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                        <hr className="w-full bg-gray-400" />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800 dark:text-gray-400">

                            Email
                        </label>
                        <input onChange={(e) => { setEmail(e.target.value) }} id="email" aria-labelledby="email" type="email" className="bg-gray-200 dark:bg-gray-600 dark:text-white border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
                    </div>
                    <div className="mt-6 w-full">
                        <label className="text-sm font-medium leading-none text-gray-800 dark:text-gray-400">

                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input onChange={(e) => { setPassword(e.target.value) }} id="myInput" type={showpass ? "text" : "password"} className="bg-gray-200 dark:bg-gray-600 dark:text-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            <div onClick={() => setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <div id="show">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                            fill="#71717A"
                                        />
                                    </svg>
                                </div>
                                <div id="hide" className="hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={3} y1={3} x2={21} y2={21} />
                                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {error ?
                        <div className="bg-red-300 p-3 rounded-lg mt-6">
                            <p className="text-gray-700">Please check your Email and Password. It may be an incorrect or used mail.</p>
                        </div>
                        :
                        <>
                        </>}
                    <div className="mt-8">
                        <button onClick={handleLogin} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}