import { useState } from 'react'
import Image from "next/image"
import cat1 from "../public/images/download-removebg-preview.png"
import Link from 'next/link'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/home" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-normal my-4" href="/projects" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Projects
                </a>
                <a className="text-xl font-normal my-4" href="/subteams" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Subteams
                </a>
                <a className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blog
                </a>
                <a className="text-xl font-normal my-4" href="/donate" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Donate
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="font-extralight pl-8 w-/12 flex items-center">
                <div className=" h-16 w-24 relative">
                <Image
                    src={cat1}
                    layout="fill" // required
                ></Image>
                </div>
                <div className=" pl-8 text-white">
                <NavLink to="/">
                        HOME
                    </NavLink>
                    </div>

                    <div className=" pl-8 text-white">

                    <NavLink to="/About">
                        ABOUT
                    </NavLink>
                    </div>

                    <div className=" pl-8 text-white">

                    <NavLink to="/projects">
                        PROJECTS
                    </NavLink>
                    </div>

                    <div className=" pl-8 text-white">

                    <NavLink to="/subteams">
                        SUBTEAMS
                    </NavLink>
                </div>

                <div className=" pl-8 text-white">

<NavLink to="/blog">
    BLOG
</NavLink>
</div>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="font-extralight pr-16 text-white">
                <NavLink to="/donate">
                        DONATE
                    </NavLink>
            </div>
            </div>
        </nav>
    )
}