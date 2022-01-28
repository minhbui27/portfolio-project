import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useState} from 'react'

const Nav = () => {
    const location = useLocation()
    const path_name = location.pathname
    const [menu,setMenu] = useState(true);
    return(
    <nav className="bg-gray-900">
        <div className="sm:px-6 lg:pr-16 lg:pl-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button onClick={() => setMenu(!menu)}type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <svg className={(menu ? 'block' : 'hidden') + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <svg className={(menu ? 'hidden' : 'block') + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex-1 h-full flex items-center justify-start sm:items-stretch sm:justify-start">
                    <div className="hidden content-center sm:block">
                        <div className="flex flex-wrap h-full content-center">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <p className="text-3xl font-normal antialiased font-sans text-white hover:text-blue-500" >Minh Bui</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                    <div className="hidden sm:block">
                    <div className="flex space-x-4">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <Link to="/" className={(path_name === "/" ? "bg-gray-900" : "hover:bg-gray-700") + " text-white text-base px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">Home</Link>

                        <Link to="/projects" className={(path_name === "/projects" ? "bg-gray-900" : "hover:bg-gray-700") + " text-base text-white px-3 py-2 rounded-md text-sm font-medium"}>Projects</Link>

                        <Link to="/about" className={(path_name === "/about" ? "bg-gray-900" : "hover:bg-gray-700") + " text-base text-white px-3 py-2 rounded-md text-sm font-medium"}>About</Link>
                    
                        <Link to="/game" className={(path_name === "/game" ? "bg-gray-900" : "hover:bg-gray-700") + " text-base text-white px-3 py-2 rounded-md text-sm font-medium"}>Game</Link>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={!menu ? 'sm:hidden' : 'hidden'} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>

                <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>

                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            
                <Link to="/game" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Game</Link>
            </div>
        </div>
    </nav>
    )
}

export default Nav