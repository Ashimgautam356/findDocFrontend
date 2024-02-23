import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ambulance from '../../images/ambulance.jpg'
import doc1 from '../../images/doc1.jpg'

import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
const Carousl = () => {
    const[currentItem,setCurrentItem] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem(currentItem => (currentItem % 3) + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className=' w-full h-[30vh]'>
        {
            currentItem == 1  ?(
                <div className='absolute top-[50%] right-[0%] z-10  p-3 rounded-full w-[10%] items-center text-2xl bg-slate-400' onClick={()=>setCurrentItem(currentItem+1)} >
                    
                    <FaAngleRight />
                        
            </div>
            ) : currentItem ==3 ?(
                <div className='absolute top-[50%] z-10  p-3 rounded-full bg-slate-400 text-2xl w-[10%]'onClick={()=>setCurrentItem(currentItem-1)}>
                <FaAngleLeft />
                </div>
            ) :(

                <>
                    <div className='absolute top-[50%] z-10  p-3 rounded-full bg-slate-400 text-2xl w-[10%]'onClick={()=>setCurrentItem(currentItem-1)}>
                    <FaAngleLeft />
                    </div>
                    <div className='absolute top-[50%] right-[0%] z-10  p-3 rounded-full bg-slate-400 text-2xl w-[10%]' onClick={()=>setCurrentItem(currentItem+1)}>
                        <FaAngleRight />
                    </div>
                </>

            )          
        }
    
        {
            currentItem ===1 ?(
                <div className=' flex flex-row justify-center items-center w-full h-full' >
                    <div className='w-[60%] h-full'>
                        <div className='p-4'>
                            <h1 className='mb-3 text-2xl font-bold tracking-wider text-blue-600 '>Find My Doctor</h1>
                            <p className=' text-sm  w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem nesciunt consectetur aut aspernatur perferendis libero ipsam laboriosam et magnam eius blanditiis numquam iste, ad repellat tempore? Adipisci, ducimus id.</p>
                        </div>

                        <div className=' ml-4 w-[80%] flex flex-row justify-between  '>
                            <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">About Us</Link></button>
                            <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">Find Doctor</Link></button>
                        </div>
                    </div> 

                    <div className='w-[40%] h-full'>
                        <img src={doc1} alt="" className='w-full h-full object-cover object-center' />
                    </div>

            
                </div>
            ):currentItem ===2?(
                <div className=' flex flex-row justify-center items-center w-full h-full' >
                <div className='w-[60%] h-full'>
                    <div className='p-4'>
                        <h1 className='mb-3 text-2xl font-bold tracking-wider text-red-600 '>Search For Blood</h1>
                        <p className=' text-sm  w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem nesciunt consectetur aut aspernatur perferendis libero ipsam laboriosam et magnam eius blanditiis numquam iste, ad repellat tempore? Adipisci, ducimus id.</p>
                    </div>
                    
                    <div className=' pl-4 w-full flex flex-row justify-evenly'>
                        <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">Find Blood</Link></button>
                        <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">Donate Blood</Link></button>
                    </div>
                </div> 

                <div className='w-[40%] h-full'>
                    <img src={doc1} alt="" className='w-full h-full object-cover object-center' />
                </div>

            
             </div>
            ):(
                <div className=' flex flex-row justify-center items-center w-full h-full' >
                    <div className='w-[60%] h-full'>
                        <div className='p-4'>
                            <h1 className='mb-3 text-2xl font-bold tracking-wider text-red-600 '>Search Ambulance</h1>
                            <p className=' text-sm  w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem nesciunt consectetur aut aspernatur perferendis libero ipsam laboriosam et magnam eius blanditiis numquam iste, ad repellat tempore? Adipisci, ducimus id.</p>
                        </div>
                        
                        <div className=' pl-4 w-full flex flex-row justify-evenly'>
                            <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">Find Ambulance</Link></button>
                            <button className='w-[40%] bg-mainBg text-white text-sm font-semibold pt-1 pb-1 rounded-sm'> <Link to="/aboutUs">Register Your Ambulance</Link></button>
                        </div>
                    </div> 

                    <div className='w-[40%] h-full'>
                        <img src={ambulance} alt="" className='w-full h-full object-cover object-center' />
                    </div>

            
                </div>
            )
            


        }
                
    </div>

  )
}

export default Carousl