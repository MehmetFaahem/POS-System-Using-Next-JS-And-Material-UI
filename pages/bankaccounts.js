import React, { useState, useEffect } from 'react'
import Parent from '../components/parent'
import Box from '@mui/material/Box';
import Button from '../components/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Input from '../components/Input'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

var SettledpreviousAmount = 10000

const Accounts = [
    {
        id: 1,
        AccountName: 'Active Bank Accounts',
        UserName: 'Faahem',
        OpeningBalance: '6090',
        CurrentBalance: '10000'
    },
    {
        id: 2,
        AccountName: 'Current Cash',
        UserName: 'Faahem',
        OpeningBalance: '6090',
        CurrentBalance: '10000'
    },
    {
        id: 3,
        AccountName: 'Currently In Bkash',
        UserName: 'Faahem',
        OpeningBalance: '6090',
        CurrentBalance: '10000'
    },
]

function Modal(props) {

    if (!props.show) {
        return null
    }

    return (
        <div onClick={props.onClose} className='bg-slate-700/75 left-48 items-center justify-center fixed flex flex-1 top-16 bottom-0 right-0'>
            <div id='animating' onClick={(e) => e.stopPropagation()} className=' border-1 border-solid shadow-2xl shadow-black border-slate-900 p-6 rounded-2xl text-white bg-zinc-900 w-2/5'>
                <div>
                    <h1 className='mb-1 font-bold  text-4xl' >{props.title}</h1>
                </div>

                <div className='pb-2'>
                    {props.children}
                </div>
            </div>
        </div>
    )


}

function bankaccounts() {

    

    const [show, setShow] = React.useState(false)
    const [account, setAccount] = React.useState({})
    const [FinalAmount, setFinalAmount] = React.useState(0)
    const [SpecificAmount, setSpecificAmount] = React.useState(0)
    const [withdrawAmount, setWithdrawAmount] = React.useState(0)
    const [transferAmount, setTransferAmount] = React.useState(0)
    const [addAmount, setAddAmount] = React.useState(SettledpreviousAmount)
    const [open, setOpen] = React.useState(false);

    const handleOpen = (account) => {
        setAccount(account)
        setOpen(true)
        setShow(true)
    };


    const [expose, setExpose] = React.useState(false);

    const handleExpose = (account) => {
        setAccount(account)
        setExpose(true)
    };

    const handleExit = () => setExpose(false);

    const [selectedAccount, setSelectedAccount] = React.useState('');

    const handleChange = (event) => {
        setSelectedAccount(event.target.value);
        setSpecificAmount(selectedAccount)
    };

    const handleShow = (account) => {
        setAccount(account)
        setShow(true);
    }
    const handleQuite = () => setShow(false);

    const addedAmount = () => {
        const Account = Accounts.find(({ id }) => id == account.id)
        setAddAmount(parseInt(Account.CurrentBalance) + parseInt(FinalAmount))
        Account.CurrentBalance = parseInt(addAmount)
        setOpen(false)
    }


    const withdrawedAmount = () => {
        const Account = Accounts.find(({ id }) => id == account.id)
        const current = Account.CurrentBalance
        if (current > withdrawAmount) {
            setAddAmount(parseInt(Account.CurrentBalance) - parseInt(withdrawAmount))
        }
        Account.CurrentBalance = parseInt(addAmount)
        setExpose(false)
    }

    const transferedAmount = () => {
        const Account = Accounts.find(({ id }) => id == account.id)

        const forTransferingAccount = Accounts.find(({ id }) => id == SpecificAmount)

        if (Account.CurrentBalance > transferAmount) {
            setAddAmount(parseInt(Account.CurrentBalance) - parseInt(transferAmount))
        }
        setShow(false)

        console.log(forTransferingAccount);
    }

    function ModalAdding() {
        return (
        <Modal title='Add Amount' onClose={() => setShow(false)} show={show}>
            <div className='space-y-3 flex-col flex'>
            <Input placeholder='Add Amount' />
            <div className='flex place-self-end'>
            <Button icon={<FontAwesomeIcon fontSize={30} icon={faBasketShopping} color='white' /> } text='Add' action={() => addedAmount()}/>
            </div>
            </div>
        </Modal>
        )
    }

    function ModalTransfering() {
        return (
            <Modal
                open={show}
                onClose={handleQuite}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='space-y-4'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Amount
                    </Typography>
                    <TextField id="outlined-basic" label="Outlined" value={transferAmount} autoFocus onChange={(e) => setTransferAmount(e.target.value)} variant="outlined" placeholder='Add Amount' />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Transfer To</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedAccount}
                                label="Age"
                                onChange={handleChange}
                            >
                                {
                                    Accounts.map((account, index) => (
                                        <MenuItem value={account.id} key={index}>{account.AccountName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Button onClick={() => transferedAmount()}>Transfer</Button>
                </Box>

            </Modal>
        )
    }

    function ModalWithdrawing() {
        return (
            <Modal
                open={expose}
                onClose={handleExit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='space-y-4  space-x-2'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Withdraw Amount
                    </Typography>
                    <TextField id="outlined-basic" label="Outlined" value={withdrawAmount} autoFocus onChange={(e) => setWithdrawAmount(e.target.value)} variant="outlined" placeholder='Withdraw Amount' />
                    <Button onClick={() => withdrawedAmount()}>Withdraw</Button>
                </Box>

            </Modal>
        )
    }

    return (
        <div>
            <Parent>
                <div>
                    {
                        Accounts.map((account, index) => (
                            <div className='p-6' key={index}>
                                <div>
                                    <h1 className='text-4xl font-bold' >{account.AccountName}</h1>
                                </div>
                                <div className='bg-neutral-900 rounded-2xl mt-5 flex flex-row justify-between place-items-center'>
                                    <div className='p-6 text-white'>
                                        <h1 className='p-1'>Name: {account.UserName}</h1>
                                        <h1 className='p-1'>Opening Balance: ${account.OpeningBalance}</h1>
                                        <h1 className='p-1'>Current Balance: ${account.CurrentBalance}</h1>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div>
                                            <button className='hover:-translate-x-1 text-white bg-orange-600 p-6 rounded-lg mr-10' onClick={() => handleOpen(account)}>Add</button>
                                        </div>
                                        <div>
                                            <button className='hover:-translate-x-1 text-white bg-orange-600 p-6 rounded-lg mr-10' onClick={() => handleExpose(account)}>Withdraw</button>
                                        </div>
                                        <div>
                                            <button className='hover:-translate-x-1 text-white bg-orange-600 p-6 rounded-lg mr-10' onClick={() => handleShow(account)}>Transfer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Parent>
            <ModalAdding />
            <ModalWithdrawing />
            <ModalTransfering />
        </div>
    )
}

export default bankaccounts