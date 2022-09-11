import React from 'react'
import { motion } from 'framer-motion'


function Button(props) {
    return (
        <div>
            <motion.button onClick={props.action} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className='flex text-white place-items-center rounded-2xl space-x-4 bg-slate-900 p-4 font-bold text-2xl'>
                {props.icon}
                <h1>{props.text}</h1>
            </motion.button>
        </div>
    )
}

export default Button