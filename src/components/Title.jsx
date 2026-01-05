import { Box, Typography } from '@mui/material'
import React from 'react'

function Title({ style, titre_1, titre_2 }) {



    return (
        <Box sx={style}>
            <Typography
                sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "rgba(240, 249, 255, 0.6)"
                }}
            >{titre_1}</Typography>
            <Typography
                variant='h1'
                sx={{
                    fontSize: "2rem",
                    color: "#00a9ff",
                    fontWeight: "bold",
                }}
            >{titre_2}</Typography>
        </Box>
    )
}

export default Title
