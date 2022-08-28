import React, { useState } from "react";

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white font-semibold">FAQ&apos;s</h1>

            <div role="listitem" className="bg-secondary dark:bg-[#252525] cursor-pointer shadow rounded-lg mt-3 flex relative w-1/2 mx-auto">
                <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                <div className="w-full p-8 break-all">
                    <div className="md:flex items-center justify-between">
                        <h2 className="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Contact</h2>
                        
                    </div>
                    <p className="md:w-80 text-xl leading-6 mt-4 text-gray-800 font-bold dark:text-white">support@leadoftoken.net</p>
                </div>
                <div className="w-2.5  h-auto bg-indigo-700 rounded-tr-md rounded-br-md" />
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                {/* <!-- Question 1 --> */}
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800 dark:text-white">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">Q1.</span> How can I list my token ?
                            </p>
                        </div>
                        <button aria-label="toggler" className="dark:bg-white rounded-full" onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal dark:text-gray-400">After logging in with your account, you can access the token addition page by clicking on the Add Token located in the Header section. After adding the token, it will be shared no later than 24 hours after the necessary checks have been provided.</p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">Q2.</span> How can I put my token in the Promoted Token section?
                            </p>
                        </div>
                        <button aria-label="toggler" className="dark:bg-white rounded-full" onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal dark:text-gray-400">you can contact us via the support@leadoftoken.net e-mail address. You will be provided with the necessary information.</p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">Q3.</span>
                                I forgot my password, what should I do ?
                            </p>
                        </div>
                        <button aria-label="toggler" className="dark:bg-white rounded-full" onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal dark:text-gray-400">you can contact us via the support@leadoftoken.net e-mail address. You will be provided with the necessary information.</p>
                    </div>
                </div>
               

                <hr className=" w-full lg:mt-10 my-8" />
            </div>
        </div>
    );
};

export default Contact;
