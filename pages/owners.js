import React from 'react'
import Parent from '../components/parent'

function owners() {
    return (
        <div>
            <Parent>
                <div>
                    <div>
                        <div>
                            <h1 className='text-4xl font-bold font-sans'>Owners Now</h1>
                        </div>
                        <div className='bg-neutral-900 rounded-2xl mt-5 flex flex-row justify-between place-items-center'>
                            <div className='p-6 text-white'>
                                <h1 className='p-1'>Name: Mehmet Faahem</h1>
                                <h1 className='p-1'>Email: mehmetfaahem@gmail.com</h1>
                                <h1 className='p-1'>Phone: +880234234242</h1>
                                <h1 className='p-1'>Location: 299/B West Shonapur, Mirpur, Dahaka</h1>
                            </div>
                            <div>
                                <button className='hover:-translate-x-6 text-white bg-orange-600 p-6 rounded-lg mr-10'>Remove</button>
                            </div>
                        </div>
                        <div className='bg-neutral-900 rounded-2xl mt-5 flex flex-row justify-between place-items-center'>
                            <div className='p-6 text-white'>
                                <h1 className='p-1'>Name: Mohammad Ibrahim</h1>
                                <h1 className='p-1'>Email: kardi420@gmail.com</h1>
                                <h1 className='p-1'>Phone: +8802123124123</h1>
                                <h1 className='p-1'>Location: 299/B West Shonapur, Mirpur, Dahaka</h1>
                            </div>
                            <div>
                                <button className='hover:-translate-x-6 text-white bg-orange-600 p-6 rounded-lg mr-10'>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Parent>
        </div>
    )
}

export default owners