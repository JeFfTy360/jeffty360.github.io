import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function WrapperSkills({ title, logopath, description }) {
    return (
        <Card sx={{ mx: "1px", backgroundColor: "#ffffff02", borderRadius: "1rem", maxWidth: 150 }}>

            <CardMedia
                component="img"
                sx={{
                    height: 'auto',
                    width: "100%",
                    padding: ".1rem"
                }}
                image={logopath}
                title="green iguana"
            />

        </Card>
    )
}

export default WrapperSkills
