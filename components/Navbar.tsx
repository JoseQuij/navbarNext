"use client"

import React, { useState} from 'react'
import { useTheme } from 'next-themes'
import { Link } from 'react-scroll'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItems {
    label: string,
    page: string
}

const Nav_Items: Array<NavItems> = [
    {
        label: "About",
        page: "about",
    },
    {
        label: "Profile",
        page: "profile",
    },
    {
        label: "Projects",
        page: "projects",
    },

]

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavBar] = useState(false) 
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div className=' justify-between md:items-center md:flex'>
            <div>
                <div className='flex items-center justify-between py-3'>
                    <div className='md:py-5 md:block'>
                        <h2 className=' text-2xl font-bold'>Jose Quijije</h2>
                    </div>
                    <div className='md:hidden '>
                        <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border ' onClick={() =>setNavBar(!navbar)} >
                            {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
                        </button>
                    </div>
                </div>  
            </div>
            <div >
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"}`} >
                    <div className=' items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 backdrop-blur-lg md:backdrop-blur-0'>
                        {Nav_Items.map((item, idx) =>{
                            return <Link 
                               key={idx}
                               to={item.page}
                               className={
                                "block lg:inline-block dark:text-slate-100 hover:scale-105 cursor-pointer "
                               }
                               
                               spy={true}
                               smooth={true}
                               offset={100}
                               duration={500} >{item.label}</Link>
                        })}
                        {currentTheme === "dark" ? (
                            <button onClick={() => setTheme("light")} className='bg-slate-100 p-2 rounded-xl'>
                                <RiSunLine size={25} color="black"/>
                            </button>
                        ) : (
                            <button onClick={() => setTheme("dark")} className='bg-slate-100 p-2 rounded-xl'>
                                <RiMoonFill size={25}/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            
            
        </div>
    </header>
  )
}

export default NavBar
