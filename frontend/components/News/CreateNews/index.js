import React, { useState } from 'react'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css';
import { BiImageAdd } from 'react-icons/bi'
import { MdOutlineImageNotSupported } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addNews, uploadImage } from '../../../redux/apiCalls';
const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor), { ssr: false })


const CreateNewsComponent = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null);
    const { currentUser } = useSelector((state) => state.auth)
    const router = useRouter();
    
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const saveArticle = (e) => {
        e.preventDefault();
        if (title === "" || editorState.getCurrentContent().getPlainText() === "") {
            alert("Please fill all fields")
        } else {
            if (file) {
                const data = new FormData();
                const filename = "newsImage-" + currentUser?._id + "-" + Date.now() + "-" + file.name;
                data.append("name", filename);
                data.append("file", file);
                try {
                    uploadImage(data);
                } catch (error) {
                    console.log(error);
                    toast.error(error);
                }
                addNews({
                    title,
                    content: convertToRaw(editorState.getCurrentContent()),
                    image: filename,
                    author: currentUser?._id
                }, router)
            } else {
                addNews({
                    title,
                    content: convertToRaw(editorState.getCurrentContent()),
                    image: "/newsImage.png",
                    author: currentUser?._id
                }, router)
            }
        }
    }

    return (
        <div className='min-h-screen my-20 pb-16 bg-secondary dark:bg-[#252525] px-20 py-10 rounded-lg border border-gray-300 dark:border-gray-700 shadow-2xl shadow-gray-400 dark:shadow-gray-800'>
            <div className='py-6'>
                <div className='flex gap-x-2'>
                    <h1 className="sm:text-4xl text-5xl font-bold mb-2 dark:text-gray-400 text-gray-800">Create an Article</h1>
                </div>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className='py-6 px-6'>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">News Cover Image </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
                    {!file &&
                        <div className="space-y-1 text-center items-center justify-center flex">
                            <BiImageAdd className="w-20 h-20 fill-gray-600" />
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" onChange={(e) => setFile(e.target.files[0])} className="sr-only " />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>}
                    {file &&
                        <>
                            <MdOutlineImageNotSupported className="w-12 h-12 text-gray-500" onClick={() => setFile(null)} />
                            <img className="object-contain h-96" src={window.URL.createObjectURL(file)} alt="" />
                        </>
                    }
                </div>
            </div>
            <div className='py-6'>
                <input onChange={(e) => setTitle(e.target.value)} type='text' className='w-full p-2 rounded bg-tertiary dark:bg-[#414141] py-4 px-10' placeholder='Title' />
            </div>
            <div>
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
                    placeholder='Write something...'
                    toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto text-gray-400 dark:bg-[#313131] text-gray-400"
                    editorClassName=" mx-auto p-10 min-h-screen shadow-xl bg-tertiary dark:bg-[#414141] max-w-6xl"
                />
            </div>
            <div className='flex items-center justify-center my-6'>
                <span className='border w-full border-gray-400' />
                <button onClick={saveArticle} className='bg-indigo-700 px-4 py-3 text-gray-400 hover:text-white hover:scale-125 text-xl rounded hover:animate-spin '>
                    Create
                </button>
                <span className='border w-full max-w border-gray-400' />
            </div>
        </div>
    )
}

export default CreateNewsComponent