import React from 'react'
import SidebarLink from './sidebarLink'
import { BsThreeDots, BsTwitter } from "react-icons/bs"
import { signOut, useSession } from 'next-auth/react'
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon } from './icon'

const Sidebar = () => {
    const { data: session } = useSession()

    return (
        <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-700 pr-0 xl:pr-8'>
            <div className='flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:ml-24'>
                <BsTwitter className='text-[34px] text-cyan-600' />
            </div>
            <div className='space-y-2 mt-4 mb-2.5 xl:ml-24'>
                <SidebarLink text="Home" Icon={HomeIcon} />
                <SidebarLink text="Explore" Icon={ExploreIcon} />
                <SidebarLink text="Notifications" Icon={NotificationsIcon} />
                <SidebarLink text="Messages" Icon={MessagesIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarksIcon} />
                <SidebarLink text="Lists" Icon={ListsIcon} />
                <SidebarLink text="Profile" Icon={ProfileIcon} />
                <SidebarLink text="More" Icon={MoreIcon} />
            </div>

            <button className="hidden xl:inline ml-auto bg-cyan-600 text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]">
                Tweet
            </button>

            <div
                className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2"
                onClick={signOut}
            >
                <img
                    src={session?.user?.image}
                    alt=""
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">{session?.user?.name}</h4>
                    <p className="text-[#6e767d]">@{session?.user?.tag}</p>
                </div>
                <BsThreeDots className="h-5 hidden xl:inline ml-10" />
            </div>

        </div>
    )
}

export default Sidebar