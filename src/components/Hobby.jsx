import React from "react";
import { Box, Typography } from "@mui/material";
import Title from "./Title";

export default function Hobby() {
    const images = [
        "hobby1.JPG",
        "hobby2.JPG",
        "hobby4.JPG",
        "hobby5.JPG",
        "hobby3.JPG",
        "hobby6.png",


    ];

    return (
        <Box id="hobby" sx={{ padding: "2rem 5rem" }}>
            <Title titre_1="Explore" titre_2="My Hobbies" />
            <Box display="flex" flexDirection="row" justifyContent="space-around">
                <Typography
                    sx={{
                        mt: "1.5rem",
                        fontSize: "1.1rem",
                        color: "rgba(255,255,255,0.75)",
                        maxWidth: "520px",
                        lineHeight: 1.7,
                    }}
                >
                    I have been practicing guitar, piano, and saxophone for over five years.
                    As an amateur photographer, I am especially drawn to nature photography, a universe I am gradually discovering and exploring.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center", // ✅ align horizontal
                        alignItems: "center",     // ✅ align vertical
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "360px",
                            height: "280px",
                        }}
                    >
                        {images.map((img, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={img}
                                alt={`hobby-${index}`}
                                sx={{
                                    position: "absolute",
                                    width: "200px",
                                    height: "130px",
                                    objectFit: "cover",
                                    borderRadius: "1rem",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                                    top: `${index * 35}px`,
                                    left: `${index * 40}px`,
                                    zIndex: index,
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        zIndex: 10,
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>



        </Box>
    );
}
