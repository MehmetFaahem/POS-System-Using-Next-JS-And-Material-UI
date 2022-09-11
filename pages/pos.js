import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Parent from '../components/parent'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'
import Head from 'next/head'


const products = [
    {
        id: '1',
        name: 'Oil',
        barcode: '89239919-12383-12372',
        price: 125
    },
    {
        id: '2',
        name: 'Milk',
        barcode: '89239919-12383-12372',
        price: 45
    },
    {
        id: '3',
        name: 'Egg',
        barcode: '89239919-12383-12372',
        price: 12
    },
    {
        id: '4',
        name: 'Rice',
        barcode: '89239919-12383-12372',
        price: 80
    },
    {
        id: '5',
        name: 'Mula',
        barcode: '89239919-12383-12372',
        price: 30
    },
    {
        id: '6',
        name: 'Allu',
        barcode: '89239919-12383-12372',
        price: 55
    },
]




var selectedProducts = []

function pos() {

    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [listedProduct, setListedProduct] = useState()
    const [currentItemPrice, setCurrentItemPrice] = useState(0)
    const [TotalAmount, setTotalAmount] = useState(0)
    const [paidAmount, setPaidAmount] = useState(0)

    const [show, setShow] = useState(false)

    useEffect(() => {
        setCurrentItemPrice(0)
        setTotalAmount(TotalAmount + currentItemPrice * productQuantity)
    }, [listedProduct])


    useEffect(() => {
        Liist()
    }, [selectedProducts])

    let binc = []
    const productListing = (datas) => {
        selectedProducts.push(datas)
        setListedProduct(datas)
        console.log(selectedProducts);
        binc = products.find(({ name }) => name == productName)
        console.log(binc.price);
        setCurrentItemPrice(binc.price)
        console.log(currentItemPrice);
        setTotalAmount(TotalAmount + currentItemPrice)
    }

    const handleRemove = (current) => {
        let binc = []
        binc = products.find(({ name }) => name == current.lisingName)
        selectedProducts = selectedProducts.filter(({ id }) => id !== current.id)

        setTotalAmount(TotalAmount - binc.price * current.listingQuantity)

        console.log(binc);
        console.log(TotalAmount);
    }

    const handleModal = () => {
        setShow(true)
    }

    const Liist = () => {
        return (
            <div>
                {
                    selectedProducts.map((data, index) => (
                        <div key={index} className='mt-5 justify-between  text-white flex flex-row place-items-center bg-orange-600 rounded-xl'>
                            <div className=' flex flex-row'>
                                <div className='mr-3 p-5'>
                                    <h1 className='p-2 rounded-xl bg-black'>Name</h1>
                                    <h1 className='font-bold font-2xl mt-1'>{data.lisingName}</h1>
                                </div>
                                <div className='mr-3 p-5 '>
                                    <h1 className='p-2 rounded-xl bg-black'>Quantity</h1>
                                    <h1 className='font-bold font-2xl mt-1'>{data.listingQuantity}</h1>
                                </div>
                            </div>
                            <div>
                                <button className='hover:-translate-x-1 text-white bg-zinc-900 p-3 rounded-lg mr-10' onClick={() => handleRemove(data)}>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    const LiistTotalAmount = () => {
        return (
            <div>
                <div className='mt-5 justify-between  text-white flex flex-row place-items-center bg-orange-600 rounded-xl'>
                    <div className=' flex flex-row'>
                        <div className='mr-3 p-5 '>
                            <h1 className='p-2 rounded-xl bg-black'>Total Amount</h1>
                            <h1 className='font-bold font-2xl mt-1'>{TotalAmount}</h1>
                        </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                        <button onClick={() => handleModal()} className='hover:-translate-x-1 text-white bg-zinc-900 p-3 rounded-lg mr-10'>Payment</button>
                    </motion.div>
                </div>
            </div>
        )
    }


    return (
        <div>
            <Head>
                <title>POS</title>
            </Head>
            <Parent>
                <div>
                    <div>
                        <h1 className='text-4xl font-bold'>POS Management</h1>
                    </div>

                    <Modal show={show} products={selectedProducts} totals={TotalAmount} onClose={() => setShow(false)} title='Payment' >
                        <div className='flex flex-row justify-between place-items-center'>
                            <div className='bg-orange-600 rounded-xl'>
                                <h1 className='font-bold text-2xl justify-between text-white p-4'>Recievable Amount: ${TotalAmount}</h1>
                            </div>
                            <div className='bg-orange-600 rounded-xl'>
                                <h1 className='font-bold text-2xl justify-between text-white p-4'>Paid Amount: ${paidAmount}</h1>
                            </div>
                        </div>

                        <div>
                            <input
                                placeholder='Paying Amount'
                                value={paidAmount}
                                onChange={(e) => setPaidAmount(e.target.value)}
                                className='p-5 mt-3 rounded-xl text-2xl border-2 border-cyan-900 text-black bg-white'
                            />
                        </div>

                        <div className='flex mt-3 flex-row justify-between place-items-center'>
                            <div className='bg-green-900 rounded-xl'>
                                <h1 className='font-bold text-2xl justify-between text-white p-4'>Rest Amount: ${TotalAmount == 0 ? 0 : TotalAmount - paidAmount}</h1>
                            </div>
                            <div className='bg-green-900 rounded-xl'>
                                <h1 className='font-bold text-2xl justify-between text-white p-4'>Recieved Amount: ${paidAmount}</h1>
                            </div>
                        </div>
                    </Modal>

                    <div className='mt-8'>
                        <div className='mt-2'>
                            <h4 className='text-2xl font-bold' >Barcode</h4>
                            <input
                                list='codes'
                                placeholder='Barcode...'
                                className='p-6 mt-3 rounded-xl border-2 border-cyan-900'
                            />
                            <datalist id="codes">
                                {
                                    products.map((product, index) => (
                                        <option className='text-2xl p-4 rounded-lg' key={index} value={product.barcode}>{product.barcode} ----- {product.name}</option>
                                    ))
                                }
                            </datalist>
                        </div>
                        <div className='mt-2 flex flex-row place-items-center'>
                            <div className='mr-3'>
                                <h4 className='text-2xl font-bold' >Product Name</h4>
                                <input
                                    placeholder='Product Name...'
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    list='products'
                                    className='p-6 mt-3 rounded-xl border-2 border-cyan-900 '
                                />
                                <datalist id="products">
                                    {
                                        products.map((product, index) => (
                                            <option className='text-2xl p-4 rounded-lg' key={index} value={product.name}>{product.name}</option>
                                        ))
                                    }
                                </datalist>
                            </div>
                            <div>
                                <h4 className='text-2xl font-bold' >Quantity</h4>
                                <input
                                    placeholder='Quantity...'
                                    value={productQuantity}
                                    onChange={(e) => setProductQuantity(e.target.value)}
                                    type='number'
                                    className='py-6 pl-2 mt-3 rounded-xl border-2 border-cyan-900'
                                />
                            </div>
                            <div>
                                <button onClick={() => productListing({
                                    id: Date.now(),
                                    lisingName: productName,
                                    listingQuantity: productQuantity,
                                    price: products.find(({ name }) => name == productName)
                                })} className='p-6 mt-10 ml-2 rounded-xl border-2 border-cyan-900 text-white bg-orange-600'>+</button>
                            </div>

                        </div>
                        <Liist />
                        <div className='mt-2'>
                            <h4 className='text-2xl font-bold' >Date</h4>
                            <input
                                type='date'
                                className='p-6 mt-3 rounded-xl border-2 border-cyan-900 '
                            />
                        </div>
                        <div className='mt-2'>
                            <h4 className='text-2xl font-bold' >Customer Identity</h4>
                            <input
                                placeholder='Customer Name...'
                                className='p-6 mt-3 rounded-xl border-2 border-cyan-900 '
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <LiistTotalAmount />
                </div>
            </Parent>
        </div>
    )
}

export default pos