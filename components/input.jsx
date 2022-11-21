import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { BsImage, BsEmojiSmile } from "react-icons/bs"
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai"
import { RiBarChart2Line } from "react-icons/ri"
import { IoCalendarNumberOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"

const Input = () => {

    const [loading, setloading] = useState(false)
    const [input, setinput] = useState('')
    const { data: session } = useSession();
    const [selectedFile, setselectedFile] = useState(null)

    const addImageToPost=(e)=>{
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setselectedFile(readerEvent.target.result)
        }
    }

    return (
        <div className={`mt-4 px-4 ${loading && 'opacity-60'}`}>
            <div className='grid grid-cols-[48px,1fr] gap-4'>
                <div>
                    <img src={session?.user.image} alt="" className='h-12 w-12 rounded-full object-contain' />
                </div>
                <div className='w-[90%]'>
                    <textarea onChange={e => setinput(e.target.value)} className='resize-none w-[100%] bg-transparent outline-none text-[20px]' placeholder='What`s happening' rows='2' value={input}></textarea>
                    {selectedFile && (

                        <div className="relative mb-4">
                            <div className='absolute w-8 h-8 bg-[#15181c] hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer' onClick={() => setselectedFile(null)}>
                                <AiOutlineClose className='text-white h-5' />
                            </div>

                            <img
                                src={selectedFile}
                                alt=""
                                className='rounded-2xl max-h-80 object-contain' />

                        </div>

                    )}
                    {!loading&&(
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4 text-[20px] text-[#1d9bf0]'>
                                <label htmlFor="file">
                                    <BsImage className='cursor-pointer'/>
                                </label>
                                <input type="file" id='file' hidden onChange={addImageToPost}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Input