import React from 'react'

function Input(props) {
    return (
        <div>
            <div className='mt-7 flex-col'>
                <h4 className='text-2xl font-bold' >{props.title}</h4>
                <input
                    placeholder={props.placeholder}
                    className='p-6 text-black mt-3 rounded-xl border-2 border-cyan-900 '
                    value={props.value}
                    onChange={props.action}
                    type={props.type}
                    list={props.list}
                />
            </div>
        </div>
    )
}

export default Input