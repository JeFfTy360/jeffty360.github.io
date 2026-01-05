import { Menu as Menu_icon, MenuBook } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Link, MenuItem, Stack, styled, Tab, Tabs, Toolbar, Typography, useScrollTrigger, useTheme } from '@mui/material'
import Menu from '@mui/material/Menu';
import React, { useState } from 'react'

function NavBar() {

    const [open, setOpen] = useState(false)
    const [activeNav, setActiveNav] = useState('');
    const theme = useTheme()



    const handleOpen = () => {
        setOpen(!open)
    }


    const StyledNavBar = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: 'center',
        height: "12vh",
    }))


    const Logo = styled(Box)(({ theme }) => ({
        background: "radial-gradient(circle farthest-side at top left, #00A9FF 25%, #A0E9FF 83%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "2rem",
        fontWeight: "bolder",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem"
        },
    }))


    const NavOptionsGroup = styled(Box)(({ them, active }) => ({
        display: 'flex',
        gap: '2rem',
        marginBottom: '1rem',
    }))


    const NavOption = styled(Button)(({ them, active }) => ({
        fontSize: '1.5rem',
        margin: '0rem',
        padding: '0rem',
        color: 'hsl(203, 100%, 97%, 60%)',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        textTransform: 'none',
        fontWeight: "normal",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
        textDecoration: (active) === 'true' ? "underline" : "none",
        textUnderlineOffset: (active) === 'true' ? "0.5rem" : undefined,
        textDecorationColor: (active) === 'true' ? "rgba(0, 164, 246, 1)" : undefined,
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "1rem",
            textDecorationColor: "rgb(181, 181, 181)",
            cursor: 'none'

        }
    }))


    const SmallScreenOption = styled(Box)(({ theme }) => ({
        padding: 20,
        // backgroundColor: 'red',
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }))


    return (
        <StyledNavBar component="nav"  >
            <Logo >
                Jephte Francois M
            </Logo>
            <NavOptionsGroup >
                {
                    ['About', 'Experience', 'Project', 'Article', 'Contact'].map((label) => {
                        return <NavOption
                            key={label}
                            active={(activeNav === label).toString()}
                            onClick={() => setActiveNav(label)}
                        >{label}</NavOption>
                    })
                }
            </NavOptionsGroup>
            <SmallScreenOption>
                <Menu_icon sx={{ color: "black", fontSize: "3rem" }} onClick={handleOpen} />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={handleOpen}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem >About</MenuItem>
                    <MenuItem >Experience</MenuItem>
                    <MenuItem >Project</MenuItem>
                    <MenuItem >Article</MenuItem>
                    <MenuItem >Contact</MenuItem>
                </Menu>
            </SmallScreenOption>
        </StyledNavBar >
    )
}
export default NavBar
