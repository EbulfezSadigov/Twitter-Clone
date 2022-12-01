import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import TrendingList from './trendingList'

const Trending = () => {
    return (
        <div className='hidden lg:block w-[350px] mt-2'>
            <div className='bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10'>
                <FiSearch />
                <input className='bg-transparent w-[100%] outline-none text-[16px] font-semibold' type="text" placeholder='Search Twitter' />
            </div>
            <div className='bg-[#16181C] rounded-[20px] text-white mt-4 px-4 py-4'>
                <h1 className='text-[20px] font-medium'>What's Happening</h1>
                <TrendingList />
                <TrendingList />
                <TrendingList />
            </div>
            <div className='bg-[#16181C] rounded-[20px] text-white mt-4 px-4 py-4'>
                <h1 className='text-[20px] font-medium'>Who to follow</h1>
                <div className="flex mt-3 pb-2 border-b border-gray-700">
                    <img
                        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt=""
                        className="w-[60px] h-[60px] rounded-full mr-4  object-cover"
                    />
                    <div className="text-[#6e767d]">
                        <div className="inline-block group">
                            <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block">
                                Ebulfez Sadiqov
                            </h4>
                            <span className="ml-1.5 text-sm sm:text-[15px]">
                                @ebulfezsadigov
                            </span>
                        </div>
                        <button className='ml-auto mt-3 bg-cyan-600 text-white rounded-full w-20 h-[30px] font-bold hover:bg-[#1a8cd8]'>Follow</button>
                    </div>
                </div>
                <div className="flex mt-3 pb-2 border-b border-gray-700">
                    <img
                        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt=""
                        className="w-[60px] h-[60px] rounded-full mr-4  object-cover"
                    />
                    <div className="text-[#6e767d]">
                        <div className="inline-block group">
                            <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block">
                                Ebulfez Sadiqov
                            </h4>
                            <span className="ml-1.5 text-sm sm:text-[15px]">
                                @ebulfezsadigov
                            </span>
                        </div>
                        <button className='ml-auto mt-3 bg-cyan-600 text-white rounded-full w-20 h-[30px] font-bold hover:bg-[#1a8cd8]'>Follow</button>
                    </div>
                </div>
                <div className="flex mt-3">
                    <img
                        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt=""
                        className="w-[60px] h-[60px] rounded-full mr-4  object-cover"
                    />
                    <div className="text-[#6e767d]">
                        <div className="inline-block group">
                            <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block">
                                Ebulfez Sadiqov
                            </h4>
                            <span className="ml-1.5 text-sm sm:text-[15px]">
                                @ebulfezsadigov
                            </span>
                        </div>
                        <button className='ml-auto mt-3 bg-cyan-600 text-white rounded-full w-20 h-[30px] font-bold hover:bg-[#1a8cd8]'>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending