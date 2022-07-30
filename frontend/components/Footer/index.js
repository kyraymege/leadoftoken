import Link from "next/link";
import { FiTwitter, FiInstagram,FiYoutube } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="container w-full border-t border-gray-200 py-8">
            <div className="lg:flex flex-col">
                <div className="py-16 flex flex-col justify-center items-center cursor-pointer">
                    <Link href="/">
                        <h1 className='text-5xl font-black dark:text-white'>L<span className='text-indigo-700'>o</span>T</h1>
                    </Link>
                </div>
                <div className="w-full px-6 pb-10">
                    <ul className="flex text-3xl md:text-base items-center md:flex flex-col md:flex-row justify-center md:bg-transparent">
                        <li className="text-gray-700 dark:text-gray-400 hover:animate-bounce hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0">
                            <Link href="https://twitter.com/leadoftoken">
                                <a target="_blank" rel="noreferrer">
                                    <FiTwitter />
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400 hover:animate-bounce hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                            <Link href="https://instagram.com/leadoftoken">
                                <a target="_blank" rel="noreferrer">
                                    <FiInstagram />
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400 hover:animate-bounce hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                            <Link href="https://t.me/leadoftoken">
                                <a target="_blank" rel="noreferrer">
                                    <FaTelegramPlane />
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400 hover:animate-bounce hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                            <Link href="https://www.youtube.com/channel/UC1jf0zSjbHZ2liDrE7KH9dw">
                                <a target="_blank" rel="noreferrer">
                                    <FiYoutube />
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="w-full px-6">
                    <ul className="flex text-3xl md:text-base items-center md:flex flex-col md:flex-row justify-center md:bg-transparent">
                        <li className="text-gray-700 dark:text-gray-400 hover:text-gray-900 hover:scale-125 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0">
                            <Link href="/AddToken">
                                Add Token
                            </Link>
                        </li>
                        <li className="text-gray-700 dark:text-gray-400 hover:text-gray-900 hover:scale-125 dark:hover:text-white cursor-pointer text-base font-normal lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                            <Link href="/Contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
export default Footer;
