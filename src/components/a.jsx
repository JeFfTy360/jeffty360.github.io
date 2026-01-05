import React from "react";
import { Box, Typography } from "@mui/material";
import Title from "./Title";

export default function Hobby() {

    return (
        <Box sx={{ padding: "2rem 5rem" }}>
            <Title titre_1="Vous avez un projet, une idée ou une opportunité ? Envoyez-moi un message." titre_2="Contact" />
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        label="Email ou numéro de contact"
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#bbb" } }}
                        InputProps={{ style: { color: "white" } }}
                    />

                    <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#bbb" } }}
                        InputProps={{ style: { color: "white" } }}
                    />

                    {/* Boutons */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<SendIcon />}
                            sx={{
                                px: 4,
                                py: 1.2,
                                borderRadius: 3,
                                background:
                                    "linear-gradient(90deg, #00A9FF, #6DDCFF)",
                                color: "#000",
                                fontWeight: "bold",
                            }}
                        >
                            Envoyer le message
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<EmailIcon />}
                            href="mailto:jephtefrancois9@gmail.com"
                            sx={{
                                px: 4,
                                py: 1.2,
                                borderRadius: 3,
                                color: "white",
                                borderColor: "#00A9FF",
                                "&:hover": {
                                    backgroundColor: "#00A9FF22",
                                },
                            }}
                        >
                            Envoyer un email
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 5, borderColor: "#ffffff22" }} />

            {/* Copyright */}
            <Typography
                variant="body2"
                align="center"
                color="grey.500"
            >
                © {new Date().getFullYear()} Jephte François M — Tous droits réservés
            </Typography>


        </Box>
    );
}
