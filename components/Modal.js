import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ComponentToPrint } from './ComponentToPrint'
import { useReactToPrint } from 'react-to-print'

function Modal(props) {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    if (!props.show) {
        return null
    }

    return (
        <div onClick={props.onClose} className='bg-slate-700/75 items-center justify-center fixed flex top-12 bottom-0 left-60 right-0'>
            <div className='invisible absolute'>
                <ComponentToPrint ref={componentRef} itemsList={props.products} totalAmount={props.totals} />

            </div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }} onClick={(e) => e.stopPropagation()} className=' border-4 border-solid shadow-2xl shadow-orange-50 border-orange-600 p-6 rounded-3xl text-white bg-zinc-900 w-2/3'>
                <div>
                    <h1 className='mb-4 font-bold text-4xl' >{props.title}</h1>
                </div>

                <div className='pt-4 pb-4'>
                    {props.children}
                </div>

                <div className='flex place-content-end place-items-center flex-row '>
                    <div className='bg-black rounded-lg font-bold mr-2'>
                        <button onClick={props.onClose} className='p-3 text-white '>Cancel</button>
                    </div>

                    <div className='bg-orange-600 rounded-lg font-bold mr-2'>
                        <button onClick={props.onClose} className='p-3 text-white '>Paid</button>
                    </div>

                    <div className='bg-red-700 rounded-lg font-bold mr-2'>
                        <button onClick={handlePrint} className='p-3 text-white '>Print</button>
                    </div>

                    <div className='bg-green-900 rounded-lg font-bold mr-2'>
                        <button onClick={props.onClose} className='p-3 text-white '>Done</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )


}

export default Modal