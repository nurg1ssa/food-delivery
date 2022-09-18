import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from 'framer-motion'
function RowContainer({ flag }) {
    return (
        <div className={`w-full  my-12 
    ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
            <div className='w-300 md:w-340 h-auto my-12 bg-cardOverlay p-2 rounded-lg backdrop-blur-lg hover:drop-shadow-lg'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-4fc54.appspot.com/o/Images%2F1662982922047-i1.png?alt=media&token=308c40df-9fe5-4237-944b-11f1983440e3"
                        className='w-40 -mt-8 drop-shadow-2xl' />
                    <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white' />
                    </motion.div>
                </div>
                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>Strawberry Chocolate</p>
                    <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500'>$</span> 5.25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowContainer