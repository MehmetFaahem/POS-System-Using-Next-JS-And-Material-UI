import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {


    return (
        <div ref={ref}>

            <div>
                <h1 className="mt-10 font-bold text-slate-900 text-6xl place-self-center text-center mb-10" >Dush Shopno LTD</h1>
            </div>

            <div className="flex flex-row justify-between py-3 px-10 border-b-2 border-black " >
                <h1>Your Items</h1>
                <h1>Quantity</h1>
                <h1>Pice Price</h1>
                <h1>Total Price</h1>
            </div>

            {
                props.itemsList.map((item, index) => (
                    <div key={index} className=''>
                        <div className="py-3 px-10 border-b-2 border-slate-900 flex flex-row justify-between">
                            <h1 className="text-2xl text-black">{item.lisingName}</h1>
                            <h1 className="text-2xl text-black">{item.listingQuantity}</h1>
                            <h1 className="text-2xl text-black">{item.price.price || item.price}</h1>
                            <h1 className="text-2xl text-black">{item.listingQuantity * item.price.price || item.listingQuantity * item.price}</h1>
                        </div>
                    </div>
                ))
            }

            <div className="mt-10 flex mx-10 flex-row justify-between ">
                <h1 className="text-4xl font-bold text-black">Final Amount</h1>
                <h1 className="text-4xl font-bold text-black">${props.totalAmount}</h1>
            </div>
        </div>
    );
});