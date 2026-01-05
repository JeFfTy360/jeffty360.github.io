import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Title from './Title'

function WrapperSection({ children }) {

    const Container = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "hsla(204, 100%, 97%, 0.016)",
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        padding: '2rem',
        borderRadius: "16px",
        width: "70rem",
        padding: "1.5rem 2rem 1.5rem",
        gap: "1.5rem",
        [theme.breakpoints.down("md")]: {
            width: "95%",
        }
    }))

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Container>
                {children}
            </Container>
        </Box>
    )
}

export default WrapperSection
