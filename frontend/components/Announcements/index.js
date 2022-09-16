import { GiCrossMark } from 'react-icons/gi'
import { BsMegaphoneFill } from "react-icons/bs"

export default function Announcements({ setShow }) {
    return (
        <div className="bg-indigo-700 w-full">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-indigo-800 p-2">
                            <BsMegaphoneFill className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 truncate font-medium text-white">
                            <span className="md:hidden">Lead Of Token Agency Live!</span>
                            <span className="hidden md:inline"><b>Big news!</b> We're excited to announce <b>Lead Of Token Agency!</b></span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <a
                            href="https://agency.leadoftoken.com"
                            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            onClick={() => setShow(prev => !prev)}
                            type="button"
                            className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        >
                            <span className="sr-only">Dismiss</span>
                            <GiCrossMark className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}