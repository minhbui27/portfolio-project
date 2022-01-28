import React from 'react'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Projects = () => {
    const pageTransition ={ 
        in: {
            opacity: 1, 
            x: 0
        },
        out: {
            opacity: 0, 
            x: "-100vh"
        }
    }
    return(
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="flex flex-row w-screen bg-gray-900">
            <div className="flex flex-col bg-gray-600 w-1/5 h-auto">
                <div className="mx-4 mt-4 h-1/5">
                    <h1 style={{fontSize:"50px",fontFamily:"Montserrat",color:"white"}}>Welcome to my projects page</h1>
                </div>
                {/* <div className="flex flex-col w-full bg-gray-300 pt-4 px-4">
                    <div className="flex flex-row w-full bg-gray-400">
                        <div className="rounded-full h-12 w-12 bg-gray-900"></div>
                    </div>
                    <div className="flex -mt-0.5 flex-row w-full bg-gray-400">
                        <div className="h-16 ml-4 w-4 bg-gray-900"></div>
                    </div>
                    <div className="flex flex-row w-full bg-gray-400">
                        <FontAwesomeIcon icon={['fa', 'circle']} color="rgb(17, 24, 39)" size="3x"/>
                    </div>
                    <div className="flex flex-row w-full bg-gray-400">
                    </div>
                    <div className="flex flex-row w-full bg-gray-400">
                        <FontAwesomeIcon icon={['fa', 'circle']} color="rgb(17, 24, 39)" size="3x"/>
                    </div>
                    <div className="flex flex-row w-full bg-gray-400">
                    </div>
                    <div className="flex flex-row w-full bg-gray-400">
                        <FontAwesomeIcon icon={['fa', 'circle']} color="rgb(17, 24, 39)"size="3x"/>
                    </div>
                </div> */}
                <div className="container bg-gray-200 mx-auto w-full h-4/5">
                <div className="relative wrap overflow-hidden px-10 h-full">
                    
                    
                    <div className="border h-full border-2-2 absolute border-opacity-100 border-gray-800 ml-10" style={{left:"6.5%"}}></div>
                    <div className="my-8 flex justify-between items-center w-full right-timeline">
                        
                        <div className="w-2/12 justify-center flex items-center order-1 bg-gray-800 shadow-xl h-8 rounded-full">
                            <h1 className="z-20 mx-auto font-semibold text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        
                        <div className="w-2/12 justify-center flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="z-20 mx-auto font-semibold text-lg text-white">2</h1>
                            
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        
                        <div className="w-2/12 justify-center flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="z-20 mx-auto font-semibold text-lg text-white">3</h1>
                            
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        
                        <div className="w-2/12 justify-center flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="z-20 mx-auto font-semibold text-lg text-white">4</h1>
                            
                            <div className="border-2-2 absolute border-opacity-100 border-gray-800 h-8 border"></div>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-10/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-nowrap flex-col my-4 w-4/5">
                <div className="flex mx-8 my-4">
                    <div className="flex flex-row rounded-lg h-64 w-screen bg-gray-400">
                        <div className="my-4 ml-4 w-1/6 h-56 bg-gray-500 rounded-l-lg">
                            <img className="h-full w-full rounded-l-lg" src="https://images.outlookindia.com/public/uploads/articles/2021/1/21/Trump1_20170515_402_602.jpg"></img>
                        </div>
                        <div className="my-4 mr-4 w-5/6 h-56 bg-gray-300 rounded-r-lg">
                            <div className="m-4">
                                <h1 style={{fontFamily:"Montserrat"}}>Project 1</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mx-8 my-4">
                    <div className="flex flex-row rounded-lg h-64 w-screen bg-gray-400">
                        <div className="my-4 ml-4 w-1/6 h-56 bg-gray-500 rounded-l-lg">
                            <img className="h-full w-full rounded-l-lg" src="https://images.outlookindia.com/public/uploads/articles/2021/1/21/Trump1_20170515_402_602.jpg"></img>
                        </div>
                        <div className="my-4 mr-4 w-5/6 h-56 bg-gray-300 rounded-r-lg">
                            <div className="m-4">
                                <h1 style={{fontFamily:"Montserrat"}}>Project 2</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mx-8 my-4">
                    <div className="flex flex-row rounded-lg h-64 w-screen bg-gray-400">
                        <div className="my-4 ml-4 w-1/6 h-56 bg-gray-500 rounded-l-lg">
                            <img className="h-full w-full rounded-l-lg" src="https://images.outlookindia.com/public/uploads/articles/2021/1/21/Trump1_20170515_402_602.jpg"></img>
                        </div>
                        <div className="my-4 mr-4 w-5/6 h-56 bg-gray-300 rounded-r-lg">
                            <div className="m-4">
                                <h1 style={{fontFamily:"Montserrat"}}>Project 3</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mx-8 my-4">
                    <div className="flex flex-row rounded-lg h-64 w-screen bg-gray-400">
                        <div className="my-4 ml-4 w-1/6 h-56 bg-gray-500 rounded-l-lg">
                            <img className="h-full w-full rounded-l-lg" src="https://images.outlookindia.com/public/uploads/articles/2021/1/21/Trump1_20170515_402_602.jpg"></img>
                        </div>
                        <div className="my-4 mr-4 w-5/6 h-56 bg-gray-300 rounded-r-lg">
                            <div className="m-4">
                                <h1 style={{fontFamily:"Montserrat"}}>Project 4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Projects