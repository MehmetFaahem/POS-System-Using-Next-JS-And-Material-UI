import React from 'react'
import Parent from '../../components/parent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'


function Purchase() {
    return (
        <Parent>
            <div className='flex flex-col space-y-5 items-center content-center justify-center mt-28 '>
                <div>
                    <Link href='/purchases/purchaseadd'>
                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='flex text-white place-items-center rounded-2xl space-x-4 bg-slate-900 p-8 font-bold text-3xl'>
                            <FontAwesomeIcon fontSize={50} icon={faBasketShopping} color='white' />
                            <h1>Add Purchase Details</h1>
                        </motion.button>
                    </Link>
                </div>

                <div>
                    <Link href='/purchases/purchaselist'>
                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className='flex text-white place-items-center rounded-2xl space-x-4 bg-slate-900 p-8 font-bold text-3xl'>
                            <FontAwesomeIcon fontSize={50} icon={faClipboardList} color='white' />
                            <h1>Find Purchases</h1>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </Parent>
    )
}

export default Purchase