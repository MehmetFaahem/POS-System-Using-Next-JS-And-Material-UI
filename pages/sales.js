import React from 'react'
import Parent from '../components/parent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMattressPillow } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const cardVariants = {
    offscreen: {
        y: 100
    },
    onscreen: {
        y: 10,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }
};

function Sales() {
    return (
        <Parent>
            <div>
                <div>
                    <h1 className='text-4xl font-bold' >Sales</h1>
                </div>
                <div className='mt-6 flex space-x-4'>
                    <div className='bg-slate-900 rounded-xl flex-1'>
                        <div className='p-6 text-white'>
                            <h1 className='text-4xl font-bold'>Today Sold</h1>
                            <h1 className='text-3xl mt-2'>$87,949</h1>
                        </div>
                    </div>
                    <div className='bg-orange-600 rounded-xl  flex-1'>
                        <div className='p-6 text-white'>
                            <h1 className='text-4xl font-bold'>Total Sold</h1>
                            <h1 className='text-3xl mt-2'>$83,37,493</h1>
                        </div>
                    </div>
                </div>
                <div className='mb-8'>
                    <div>
                        <h1 className='text-4xl font-bold mb-4 mt-6'>Find Out</h1>
                    </div>
                    <div className='flex space-x-3' >
                        <div>
                            <input
                                placeholder='Bill Number'
                                type='number'
                                className='text-black text-3xl p-4 rounded-lg border-solid border-2 border-slate-800'
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Start Date'
                                type='date'
                                className='text-black text-3xl p-4 rounded-lg border-solid border-2 border-slate-800'
                            />
                        </div>
                        <div>
                            <input
                                placeholder='End Date'
                                type='date'
                                className='text-black text-3xl p-4 rounded-lg border-solid border-2 border-slate-800'
                            />
                        </div>
                    </div>
                    <div className='flex space-x-3 mt-5' >
                        <div className='mr-6'>
                            <div className='flex space-x-2 place-items-center'>
                                <h1 className='text-2xl font-bold'>Select Customer</h1>
                                <select autoFocus={false} name="customers" id="customers" className='text-black text-3xl p-4 px-5 rounded-lg border-solid border-2 border-slate-800'>
                                    <option value="Fahem">Fahem</option>
                                    <option value="Ibrahim">Ibrahim</option>
                                    <option value="Siyam">Siyam</option>
                                    <option value="Sifat">Sifat</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='flex space-x-2 place-items-center'>
                                <h1 className='text-2xl font-bold'>Select Product</h1>
                                <select name="products" id="products" className='text-black text-3xl p-4 px-5 rounded-lg border-solid border-2 border-slate-800'>
                                    <option value="Fahem">Oil</option>
                                    <option value="Ibrahim">Milk</option>
                                    <option value="Siyam">Water</option>
                                    <option value="Sifat">Rice</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex space-x-3 justify-end'>
                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className='flex space-x-1 place-items-center p-3 bg-slate-900 rounded-lg text-white'>
                                <FontAwesomeIcon icon={faFilter} color='white' />
                                <h1>Filter</h1>
                            </div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className='flex space-x-1 place-items-center p-3 bg-orange-600 rounded-lg text-white'>
                                <FontAwesomeIcon size='26' icon={faMattressPillow} color='white' />
                                <h1>Reset</h1>
                            </div>
                        </motion.button>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-4xl font-bold mb-4 mt-6'>Sale List</h1>
                        </div>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div
                                variants={cardVariants} className='bg-orange-600 rounded-sm'>
                                <h1 className='font-bold p-8 text-white text-center text-3xl'>You Have No List Yet</h1>
                            </motion.div >
                        </motion.div>
                    </div>
                </div>
            </div>
        </Parent>
    )
}

export default Sales