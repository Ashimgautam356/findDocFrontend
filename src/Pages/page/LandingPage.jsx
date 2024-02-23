import React from 'react'
import Carousl from '../../Components/landingPageComponents/Carousl'
import doc2 from '../../images/doc2.jpg'
import ambulance2 from '../../images/ambulance2.jpg'
import { Link } from 'react-router-dom'
import { FaHospital,FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
const LandingPage = () => {
  return (
    <div className='relative'>
        {/* slider */}
        <>
            <Carousl></Carousl>
        </>

       
        {/* about us section */}
        <section className=' w-full flex flex-col mt-20 justify-center items-center'>
            <div className='w-[90%] text-2xl text-center font-semibold mb-4 md:text-4xl md:font-bold md:mb-8'>
                <h1>About Us</h1>
            </div>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-evenly'>
                <div className='w-full mb-4 md:w-[40%]'>
                    <img src={doc2} alt="aboutUsBanner" className='object-center object-cover' />
                </div>
                <div className='w-full text-center md:w-[40%] md:flex md:flex-row md:justify-center md:items-center'>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptas exercitationem pariatur. Illum totam velit tempore in sunt, ex rerum sit sed voluptate obcaecati ratione cumque aut consectetur explicabo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestiae eum earum esse nostrum deserunt vel totam quod archit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quae voluptatem provident porro atque dolorem architecto odit nihil! Rem blanditiis est vitae distinctio soluta illum debitis ab eius commodi ipsam.e
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptas exercitationem pariatur. Illum totam velit tempore in sunt, ex rerum sit sed voluptate obcaecati ratione cumque aut consectetur explicabo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestiae eum earum esse nostrum deserunt vel totam quod archit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quae voluptatem provident porro atque dolorem architecto odit nihil! Rem blanditiis est vitae distinctio soluta illum debitis ab eius commodi ipsam.e
                    </p>
                </div>
            </div>
        </section>


        {/* list of some hospital section */}
        <section className='mt-24 w-full flex flex-col justify-center items-center'>
            <div className='w-[90%] mb-8'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>Hospitals</h1>
            </div>
            <div className='w-[90%] flex flex-col'>
                {/* list of hospital */}
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[15vh] md:h-[18vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'> <FaHospital className='inline mr-2'></FaHospital>Lumbini City Hospital</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className=' underline mb-2 font-semibold'><Link>Blood bank Details</Link> </p>
                                <p><IoMdTime className='inline mr-2 text-xl'></IoMdTime>time: 10 to 5</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[15vh] md:h-[18vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'> <FaHospital className='inline mr-2'></FaHospital>Lumbini City Hospital</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className=' underline mb-2 font-semibold'><Link>Blood bank Details</Link> </p>
                                <p><IoMdTime className='inline mr-2 text-xl'></IoMdTime>time: 10 to 5</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[15vh] md:h-[18vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'> <FaHospital className='inline mr-2'></FaHospital>Lumbini City Hospital</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className=' underline mb-2 font-semibold'><Link>Blood bank Details</Link> </p>
                                <p><IoMdTime className='inline mr-2 text-xl'></IoMdTime>time: 10 to 5</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <button className='bg-white p-3 mt-8 rounded-md border border-thirdMainBg text-thirdMainBg hover:bg-thirdMainBg hover:text-white hover:border-white font-semibold transition-all delay-200 ease-in'>See more</button>
        </section>


        {/* list of some Ambulance section */}
        <section className='mt-24 w-full flex flex-col justify-center items-center'>
            <div className='w-[90%] mb-8'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>Ambulance</h1>
            </div>
            <div className='w-[90%] flex flex-col'>
                {/* list of Ambulance */}
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[20vh] md:h-[25vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'>Nishant Bhattarai</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className='mb-2 font-semibold'>Vehicle Type: Pick Up</p>
                                <p className='font-semibold'> Features
                                    <ul className='flex flex-col ml-2 md:ml-4 font-medium'>
                                        <li className='mb-2 md:mb-1'>With Oxygen Cylinder</li>
                                        <li className='mb-2 md:mb-1'>cardiac monitors</li>
                                        <li className='mb-2 md:mb-1'>ventilators</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[20vh] md:h-[25vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'>Nishant Bhattarai</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className='mb-2 font-semibold'>Vehicle Type: Pick Up</p>
                                <p className='font-semibold'> Features
                                    <ul className='flex flex-col ml-2 md:ml-4 font-medium'>
                                        <li className='mb-2 md:mb-1'>With Oxygen Cylinder</li>
                                        <li className='mb-2 md:mb-1'>cardiac monitors</li>
                                        <li className='mb-2 md:mb-1'>ventilators</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='w-full mb-3 flex flex-row justify-around items-center bg-thirdMainBg text-white rounded-lg h-[20vh] md:h-[25vh]'>
                        <div className='w-[30%] h-[90%] rounded-lg'>
                            <img src={ambulance2} alt="HospitalImage" className='w-full h-full object-cover object-center rounded-lg'/>
                        </div>
                        <div className='w-[60%] flex flex-row justify-around md:justify-evenly text-xs'>
                            <div className='w-[60%]'>
                                <h1 className='font-bold w-full mb-2 md:text-2xl'>Nishant Bhattarai</h1>
                                <p className='font-semibold mb-2 md:text-xl'>
                                <IoLocationSharp className='inline mr-2'></IoLocationSharp>Butwal , Bhudki Chowk</p>
                                <p className='font-medium md:text-lg'><FaPhoneAlt className='inline mr-2'></FaPhoneAlt>038394567</p>
                            </div>
                            <div className='md:text-lg'>
                                <p className='mb-2 font-semibold'>Vehicle Type: Pick Up</p>
                                <p className='font-semibold'> Features
                                    <ul className='flex flex-col ml-2 md:ml-4 font-medium'>
                                        <li className='mb-2 md:mb-1'>With Oxygen Cylinder</li>
                                        <li className='mb-2 md:mb-1'>cardiac monitors</li>
                                        <li className='mb-2 md:mb-1'>ventilators</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <button className='bg-white p-3 mt-8 rounded-md border border-thirdMainBg text-thirdMainBg hover:bg-thirdMainBg hover:text-white hover:border-white font-semibold transition-all delay-200 ease-in'>See more</button>
        </section>
    </div>
  )
}

export default LandingPage