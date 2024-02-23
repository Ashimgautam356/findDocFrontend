import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {

    // sidebar handler
    const [isClicked,setisClicked] = useState(false);
    

  return (
    <div className=' h-[8vh] flex flex-row justify-center items-center bg-mainBg'>
        
        {/* logo */}
        <div className='w-[20%] md:w-[10%]  h-full'>
            <Link>
            <img src="" alt="Logo" />
            </Link>
        </div>
       
       
        <div className='w-[70%] md:w-[80%] h-full  flex flex-row justify-end md:justify-evenly items-center'>
            
            {/* input section */}
            <div className='hidden md:block md:w-[50%] h-[70%] '>
                <input type="text" className='focus:outline-none h-full w-[60%] p-2 md:text-xl text-sm' placeholder='Lumbini Hospital'/>
                <input type="submit" className='p-0 w-[40%] h-full bg-red-700 text-white text-sm'/>
            </div>

            {/* navlinks */}
            <div className='hidden md:block md:w-[30%] '>
                <ul className='w-full h-full flex flex-row justify-around'>
                    <li><Link>About Us</Link></li>
                    <li><Link>Blood</Link></li>
                    <li><Link>Ambulance</Link></li>
                </ul>
            </div>

            {/* login logout section */}
            <div className=' w-[50%] h-[70%] md:w-[20%] flex flex-row justify-evenly items-center text-sm'>
                <Link>Login</Link>
                <Link>Signup</Link>
            </div>

            {/* sidebar for mobile */}
            <div className='w-[30%] h-[70%] md:hidden flex flex-col justify-end items-end'>
                <button onClick={()=>setisClicked(!isClicked)} className='text-2xl items-center'>
                    <HiMiniBars3CenterLeft></HiMiniBars3CenterLeft>
                </button>

                {/* side bar */}
                {
                    isClicked &&(
                        <div className='w-full md:hidden h-screen flex flex-col items-center bg-mainBg absolute top-0 left-0 p-5'>
                            <div className='text-2xl mb-20'>
                                <button onClick={()=>{setisClicked(false)}}>
                                <RxCross2></RxCross2>
                                </button>
                            </div>
                            
                            <div className='flex flex-col w-[80%] relative justify-center '>
                                <div className='w-full '>
                                    <ul className='w-full flex flex-col justify-center items-center text-lg font-semibold '>
                                        <li className='pt-3 pb-3 mb-2 border border-red-800 w-full text-red-800 text-center' onClick={()=>setisClicked(false)}><Link  className=''>Blood</Link></li>

                                        <li className='pt-3 pb-3 mb-2 border border-blue-700 w-full text-center text-blue-700' onClick={()=>setisClicked(false)}><Link  className=''>Ambulance</Link></li>

                                        <li className='pt-3 pb-3 mb-2 border border-green-700 w-full text-center text-green-700' onClick={()=>setisClicked(false)}><Link  className=''>Doctor</Link></li>
                                        <li className='pt-3 pb-3 mb-2 border border-green-700 w-full text-center text-green-700' onClick={()=>setisClicked(false)}><Link  className=''>About Us</Link></li>
                                        
                                    </ul>
                                </div>

                                <div className='mt-10 border border-black flex flex-col items-center'>
                                    <input type="text" placeholder='Lumbini Hospital' className='focus:outline-none h-full w-full p-2 md:text-xl text-lg mb-5'/>
                                    <input type="submit" className='pt-1 pb-1 w-[60%] h-full bg-red-700 text-white text-lg rounded-sm' onClick={()=>setisClicked(false)}/>
                                </div>
                            </div>

                        </div>
                    )
                }
         
            </div>
        </div>
    </div>  
  )
}

export default Nav