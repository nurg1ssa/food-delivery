import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'
const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4  py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain' alt='delivery' />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in
                    <span className='text-orange-500 text-[3rem] lg:text-[5rem]'> Your City</span></p>
                <p className='text-base text-textColor text-justify  md:text-left  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate earum in debitis odit iusto tenetur veritatis tempore
                    doloremque cumque numquam distinctio sapiente pariatur expedita labore,
                    aperiam rerum, quas quisquam nulla!</p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} className='ml-auto h-420  w-full lg:w-auto lg:h-575' alt='hero-bg'/>
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center mt-4 flex-wrap gap-4 lg:gap-6'>
                    {heroData && heroData.map(n=>(
                        <div key={n.id} className="w-[120px] lg:w-[210px] p-4 h-[150px] lg:h-[204px] lg:max-h-[204px] bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-2 drop-shadow-lg">
                        <img src={n.imgSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt="" />
                        <p className='text-base lg:text-xl font-semibold text-textColor'>{n.name}</p>
                        <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold text-center'>{n.desc}</p>
                        <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
                    </div>
                    ))}
                </div> 
            </div>
        </section>
    )
}

export default HomeContainer