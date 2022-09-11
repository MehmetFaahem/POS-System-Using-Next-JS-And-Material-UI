import React from 'react'
import Button from '../components/Button'
import Parent from '../components/parent'

export default function Demo() {

    function Modal(props) {

        if (!props.show) {
            return null
        }
    
        return (
            <div onClick={props.onClose} className='bg-slate-700/75 items-center justify-center fixed flex flex-1 top-0 bottom-0 left-0 right-0'>
                <div  id='animating' onClick={(e) => e.stopPropagation()} className=' border-1 border-solid shadow-2xl shadow-black border-slate-900 p-6 rounded-2xl text-white bg-zinc-900 w-2/3'>
                    <div>
                        <h1 className='mb-4 font-bold text-4xl' >{props.title}</h1>
                    </div>
    
                    <div className='pt-4 pb-4'>
                        {props.children}
                    </div>
    
                    <div className='flex place-content-end place-items-center flex-row '>
        
                        <div className='bg-slate-700 rounded-lg font-bold mr-2'>
                            <button onClick={props.onClose} className='p-3 text-white '>Print</button>
                        </div>
    
                        <div className='bg-slate-900 rounded-lg font-bold mr-2'>
                            <button onClick={props.onClose} className='p-3 text-white '>Done</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    
    
    }

    const [show, setShow] = React.useState(false)
    const handleModal = () => {
        setShow(true)
    }
  return (
    <div>
        <div className='p-32'>
        <Button action={() => handleModal()} text='Exchange GF'/>
        </div>
        <Modal onClose={() => setShow(false)} show={show}>
            <h1 className='font-hind font-bold text-4xl'>
            বন্ধুর জায়গায় বন্ধু আছস, মাইয়ার হিসাব আলাদা
            </h1>
        </Modal>
    </div>
  )
}