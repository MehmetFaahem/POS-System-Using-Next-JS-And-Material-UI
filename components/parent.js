import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InventoryIcon from '@mui/icons-material/Inventory';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CategoryIcon from '@mui/icons-material/Category';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ExploreIcon from '@mui/icons-material/Explore';
import PaymentsIcon from '@mui/icons-material/Payments';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import ReportIcon from '@mui/icons-material/Report';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ListSubheader from '@mui/material/ListSubheader';
import { Container, Stack } from '@mui/material';
import SideNav from './SideNav';

export default function Parent({ children }) {
    const [width, setWidth] = React.useState('30%')
    const [vg, setVg] = React.useState('hidden')

    function openNav() {
        setWidth('80%')
        setVg('visible')
    }


    function closeNav() {
        setShow(false)
    }
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className='mobile:absolute tablet:fixed mobile:invisible tablet:visible'
                    sx={{ width: `calc(100% - ${200}px)`, ml: `${200}px`, bgcolor: '#161717', }}
                >
                    <Stack direction='row' alignItems='center' >
                        <Toolbar>
                            <Container>
                                <Image src='https://i.ibb.co/qWn6TS8/svggescdr.png' height='120' width='120' />
                            </Container>
                        </Toolbar>
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div" >
                                Faahem's Digital POS System
                            </Typography>
                        </Toolbar>
                    </Stack>
                </AppBar>
                <div className='mobile:visible tablet:invisible'>
                    <button onClick={openNav} >Open</button>
                    <SideNav width={width} vg={vg} />
                </div>
                <Drawer
                    sx={{
                        width: 200,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', bgcolor: '#161717', color: 'white'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                    className='mobile:absolute tablet:static mobile:invisible tablet:visible'
                >
                    <Divider />
                    <List>
                        {[
                            { text: 'Dashboard', icon: <DashboardIcon />, link: '/' },
                            { text: 'Owners', icon: <AccountBoxIcon />, link: '/owners' },
                            { text: 'Bank Accounts', icon: <AccountBalanceIcon />, link: '/bankaccounts' }
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <Link href={text.link} >
                                    <ListItemButton>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            {text.icon}
                                        </ListItemIcon>
                                        <div>
                                            <ListItemText primary={text.text} />
                                        </div>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Sale & Purchase
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'POS',
                                icon: <WysiwygIcon />,
                                link: '/pos'
                            },
                            {
                                text: 'Sales',
                                icon: <LoyaltyIcon />,
                                link: '/sales'
                            },
                            {
                                text: 'Returns',
                                icon: <AssignmentReturnIcon />,
                                link: '/returns'
                            },
                            {
                                text: 'Purchase',
                                icon: <ShoppingBasketIcon />,
                                link: '/purchases'
                            },
                            {
                                text: 'Stoke',
                                icon: <InventoryIcon />,
                                link: '/'
                            },
                            {
                                text: 'Damages',
                                icon: <DoNotDisturbOnIcon />,
                                link: '/'
                            },
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <Link href={text.link} >
                                    <ListItemButton>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            {text.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text.text} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Product Information
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'Units',
                                icon: <ApartmentIcon />
                            },
                            {
                                text: 'Products',
                                icon: <PrecisionManufacturingIcon />
                            },
                            {
                                text: 'Categories',
                                icon: <CategoryIcon />
                            },
                            {
                                text: 'Brands',
                                icon: <BrandingWatermarkIcon />
                            }
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Expanses & Payments
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'expenses',
                                icon: <ExploreIcon />
                            },
                            {
                                text: 'payments',
                                icon: <PaymentsIcon />
                            }
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Customers & Suppliers
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'Customers',
                                icon: <SupportAgentIcon />
                            },
                            {
                                text: 'Suppliers',
                                icon: <PowerInputIcon />
                            }
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Reports
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'Daily Report',
                                icon: <ReportIcon />
                            },
                            {
                                text: 'Monthly Report',
                                icon: <ReportIcon />
                            },
                            {
                                text: 'All Reports',
                                icon: <ReportIcon />
                            },
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" sx={{
                            bgcolor: '#161717', color: 'white'
                        }}>
                            Top
                        </ListSubheader>
                    }>
                        {[
                            {
                                text: 'Top Product',
                                icon: <AirlineStopsIcon />
                            },
                            {
                                text: 'Top Customer',
                                icon: <AirlineStopsIcon />
                            }
                        ].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                {/* <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 4, mt: 15, color: 'black' }}
                > */}
                <div className='flex-grow p-6 mt-32'>
                    {children}
                </div>
                {/* </Box> */}
            </Box>
        </div >
    )
}
