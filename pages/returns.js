import React from 'react'
import Parent from '../components/parent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMattressPillow } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Returns() {
    return (
        <Parent>
            <div>
                <div className='mb-8'>
                    <div>
                        <h1 className='text-4xl font-bold mb-4 mt-6'>Returns Find Out</h1>
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
                            <h1 className='text-4xl font-bold mb-4 mt-6'>Return List</h1>
                        </div>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}>
                            <div className='bg-orange-600 rounded-sm'>
                                <h1 className='font-bold p-8 text-white text-center text-3xl'>You Have No List Yet</h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Parent>
    )
}

export default Returns