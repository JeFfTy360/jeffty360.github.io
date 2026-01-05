import React from "react";
import { Box, Typography, Chip, Stack, Divider } from "@mui/material";

export default function HorizontalTimeline({ title, items }) {
    return (
        <Box sx={{ maxWidth: 1200, mx: "auto", mt: 6 }}>

            {/* 🔹 Titre */}
            {title && (
                <Typography
                    variant="h5"
                    textAlign="center"
                    fontWeight={600}
                    color="#00a9ff"
                    mb={4}
                >
                    {title}
                </Typography>
            )
            }

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    position: "relative",
                }}
            >
                {/* Ligne horizontale */}
                <Divider
                    sx={{
                        position: "absolute",
                        top: 24,
                        left: 0,
                        right: 0,
                        borderBottomWidth: 2,
                    }}
                />

                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: `${100 / items.length - 2}%`,
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: "50%",
                                backgroundColor: "primary.main",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto",
                                zIndex: 1,
                            }}
                        >
                            {item.icon}
                        </Box>

                        {/* Contenu */}
                        <Box mt={2}>
                            <Typography variant="caption" color="text.secondary">
                                {item.date}
                            </Typography>

                            <Typography variant="h6">
                                {item.title}
                            </Typography>

                            {item.subtitle && (
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {item.subtitle}
                                </Typography>
                            )}

                            <Typography variant="body2" mb={1}>
                                {item.description}
                            </Typography>

                            {item.skills && (
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent="center"
                                    flexWrap="wrap"
                                >
                                    {item.skills.map((skill, i) => (
                                        <Chip key={i} label={skill} size="small" />
                                    ))}
                                </Stack>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >
    );
}
