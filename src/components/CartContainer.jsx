import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'

const CartContainer = () => {
    return (
        <div className='fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                <motion.div whileTap={{ scale: 0.75 }}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className='text-textColor text-lg font-semibold'>Cart</p>
                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>
                    Clear<RiRefreshFill />
                </motion.p>
            </div>
            <div className='w-full h-full bg-gray-600 rounded-t-[2rem] flex flex-col '>
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                    <div className='w-full p-1 px-2 rounded-lg bg-gray-500 flex items-center gap-2'>
                        <img className='w-20 h-20 max-w-[60px]' src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-4fc54.appspot.com/o/Images%2F1663077825527-c3.png?alt=media&token=fbb8c270-26a6-4872-8923-b21d5b842c1f' alt='' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'>
                                Bla Bla Bla
                            </p>
                            <p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>
                        </div>
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-gray-500 text-gray-50 flex items-center justify-center'>
                                |
                            </p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex-1 bg-gray-500 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>$ 8.5</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery</p>
                        <p className='text-gray-400 text-lg'>$ 8.5</p>
                    </div>
                    <div className='w-full border-b border-gray-600 my-2'></div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-200 text-xl font-semibold'>Total</p>
                        <p className='text-gray-200 text-xl font-semibold'>$ 11.5</p>
                    </div>
                    <motion.button whileTap={{ scale: 0.8 }}
                        type='button'
                        className='w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'
                    >
                        Check Out
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer