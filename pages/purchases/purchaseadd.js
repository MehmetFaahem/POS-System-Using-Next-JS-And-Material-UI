import React, { useState, useRef } from 'react'
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMoneyCheckDollar, faPrint } from '@fortawesome/free-solid-svg-icons'
import Parent from '../../components/parent'
import Input from '../../components/Input'
import { ComponentToPrint } from '../../components/ComponentToPrint'
import { useReactToPrint } from 'react-to-print'
import Modal from '../../components/Modal'
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

var ListedProduct = []

function Purchaseadd() {

    const [suppliyerName, setSuppliyerName] = React.useState('')
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [supplyDate, setSupplyDate] = useState('')
    const [listedProduct, setListedProduct] = useState()
    const [totalAmount, setTotalAmount] = useState(0)
    const [show, setShow] = useState(false)
    const [paidAmount, setPaidAmount] = useState(0)



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const productListing = (datas) => {
        ListedProduct.push(datas)
        setListedProduct(datas)
        console.log('Done');
        console.log(datas);
        console.log(listedProduct);
        setTotalAmount(totalAmount + parseInt(datas.price) * datas.listingQuantity)
    }

    const removeItem = (current) => {
        ListedProduct = ListedProduct.filter(({ id }) => id !== current.id)
        console.log(ListedProduct);
        console.log(current.id);
        setTotalAmount(totalAmount - parseInt(current.price) * current.listingQuantity)

    }


    function Card() {

        return (
            <div>
                {
                    ListedProduct.map((data, index) => (
                        <div key={index} className='mt-5 justify-between  text-white flex flex-row place-items-center bg-slate-900 rounded-xl'>
                            <div className=' flex flex-row'>
                                <div className='mr-3 p-5'>
                                    <h1 className='p-2 rounded-xl bg-black'>Suppliyer Name</h1>
                                    <h1 className='font-bold font-2xl mt-1 text-center'>{data.suppliyer}</h1>
                                </div>
                                <div className='mr-3 p-5'>
                                    <h1 className='p-2 rounded-xl bg-black'>Product Name</h1>
                                    <h1 className='font-bold font-2xl mt-1 text-center'>{data.lisingName}</h1>
                                </div>
                                <div className='mr-3 p-5 '>
                                    <h1 className='p-2 rounded-xl bg-black'>Quantity</h1>
                                    <h1 className='font-bold font-2xl mt-1 text-center'>{data.listingQuantity}</h1>
                                </div>
                                <div className='mr-3 p-5 '>
                                    <h1 className='p-2 rounded-xl bg-black'>Price</h1>
                                    <h1 className='font-bold font-2xl mt-1 text-center'>{data.price}</h1>
                                </div>
                                <div className='mr-3 p-5 '>
                                    <h1 className='p-2 rounded-xl bg-black text-center'>Date</h1>
                                    <h1 className='font-bold font-2xl mt-1 text-center'>{data.supplyDate}</h1>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => removeItem(data)} className='hover:-translate-x-1 text-white bg-zinc-900 p-3 rounded-lg mr-10'>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    const handleModal = () => {
        setShow(true)
    }


    return (
        <Parent>
            <Head>
                <title>Add Purchase</title>
            </Head>
            <div className='invisible absolute'>
                <ComponentToPrint ref={componentRef} itemsList={ListedProduct} totalAmount={totalAmount} />
            </div>
            <Modal show={show} products={ListedProduct} totals={totalAmount} onClose={() => setShow(false)} title='Payment' >
                <div className='flex flex-row justify-between place-items-center'>
                    <div className='bg-orange-600 rounded-xl'>
                        <h1 className='font-bold text-2xl justify-between text-white p-4'>Recievable Amount: ${totalAmount}</h1>
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
                        <h1 className='font-bold text-2xl justify-between text-white p-4'>Rest Amount: ${totalAmount == 0 ? 0 : totalAmount - paidAmount}</h1>
                    </div>
                    <div className='bg-green-900 rounded-xl'>
                        <h1 className='font-bold text-2xl justify-between text-white p-4'>Recieved Amount: ${paidAmount}</h1>
                    </div>
                </div>
            </Modal>
            <div>
                <h1 className='font-bold text-4xl'>Create Purchase</h1>
                <div className='flex flex-col space-x-9 mt-5'>
                    <div className='flex mobile:flex-col tablet:flex-row place-items-center space-x-20'>
                        <div>
                            <div className='flex space-x-5' >
                                <Input action={
                                    (e) => setSuppliyerName(e.target.value)
                                } value={suppliyerName} title='Suppliyer Name' placeholder='Suppliyer' />
                                <Input action={
                                    (e) => setSupplyDate(e.target.value)
                                } value={supplyDate} title='Date' type='date' placeholder='Supplying Date' />
                                <Input value={productName} action={
                                    (e) => setProductName(e.target.value)
                                } title='Product Name' list='codes' type='name' placeholder='Product Name' />
                            </div>
                            <div className='flex space-x-5 place-items-center'>

                                <Input action={
                                    (e) => setProductPrice(e.target.value)
                                } value={productPrice} title='Price' type='number' placeholder='Price' />

                                <Input action={
                                    (e) => setProductQuantity(e.target.value)
                                } value={productQuantity} title='Quantity' type='number' placeholder='Pic' />

                                <div className='mt-16 pl-5'>
                                    <Button
                                        icon={<FontAwesomeIcon size='26' icon={faCartPlus} color='white' />}
                                        text='Add This'
                                        action={() => productListing({
                                            id: Date.now(),
                                            lisingName: productName,
                                            listingQuantity: productQuantity,
                                            price: productPrice,
                                            suppliyer: suppliyerName,
                                            supplyDate: supplyDate
                                        })}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='bg-slate-900 rounded-2xl h-72 w-60'>
                            <div className='p-4'>
                                <h1 className='font-bold mt-3 text-3xl text-center text-white'>Total Amount</h1>
                                <div>
                                    <h1 className='text-white mt-5 text-2xl'>
                                        Amount: ${totalAmount}
                                    </h1>
                                    <h1 className='text-white mt-3 text-2xl'>
                                        Items: {ListedProduct.length}
                                    </h1>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <Button action={() => handlePrint()} text='Print' icon={<FontAwesomeIcon size='24' icon={faPrint} color='white' />} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <datalist id="codes">
                        {
                            products.map((product, index) => (
                                <option className='text-2xl p-4 rounded-lg' key={index} value={product.name}>{product.name}</option>
                            ))
                        }
                    </datalist>
                </div>
                <h1 className='font-bold text-4xl mt-5'>Details</h1>
                <Card />
                {
                    !ListedProduct.length ? '' : <div className='flex py-4 justify-center'>
                        <Button action={() => handleModal()} text='Payment' icon={<FontAwesomeIcon size='24' color='white' icon={faMoneyCheckDollar} />} />
                    </div>
                }
            </div>
        </Parent>
    )
}

export default Purchaseadd