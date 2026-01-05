import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Divider,
    Card,
    CardContent
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import Title from "./Title";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function ContactFooter() {
    return (
        <Box sx={{ padding: "2rem 5rem" }}>
            <Title
                titre_1="Vous avez un projet, une idée ou une opportunité ?"
                titre_2="Contact"
            />

            <Box
                sx={{
                    maxWidth: 900,
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: 4,
                    mt: 4,
                }}
            >
                {/* MESSAGE FORM */}
                <Card
                    sx={{
                        backgroundColor: "#ffffff0a",
                        borderRadius: 3,

                    }}
                >
                    <CardContent>
                        <Typography textAlign="center" variant="h6" gutterBottom>
                            Envoyer un message
                        </Typography>



                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                label="Email ou numéro de contact"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                            />

                            <Button
                                variant="contained"
                                startIcon={<SendIcon />}
                                sx={{
                                    alignSelf: "center",
                                    px: 4,
                                    borderRadius: 3,
                                    background:
                                        "linear-gradient(90deg, #00A9FF, #6DDCFF)",
                                    color: "#000",
                                    fontWeight: "bold",
                                }}
                            >
                                Envoyer le message
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                {/* EMAIL DIRECT */}
                <Card
                    sx={{
                        backgroundColor: "#ffffff0a",
                        borderRadius: 3,
                    }}
                >
                    <CardContent>
                        <Typography textAlign="center" variant="h6" gutterBottom>
                            Contact direct
                        </Typography>




                        <Stack spacing={2}>
                            {/* EMAIL */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<EmailIcon />}
                                href="mailto:jephtefrancois9@gmail.com"
                                sx={{
                                    borderRadius: 3,
                                    borderColor: "#00A9FF",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#00A9FF22",
                                    },
                                }}
                            >
                                Envoyer un email
                            </Button>

                            {/* WHATSAPP */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<WhatsAppIcon />}
                                href="https://wa.me/509XXXXXXXX"
                                target="_blank"
                                sx={{
                                    borderRadius: 3,
                                    borderColor: "#25D366",
                                    color: "#25D366",
                                    "&:hover": {
                                        backgroundColor: "#25D36622",
                                    },
                                }}
                            >
                                WhatsApp
                            </Button>

                            {/* TELEGRAM */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<TelegramIcon />}
                                href="https://t.me/your_username"
                                target="_blank"
                                sx={{
                                    borderRadius: 3,
                                    borderColor: "#229ED9",
                                    color: "#229ED9",
                                    "&:hover": {
                                        backgroundColor: "#229ED922",
                                    },
                                }}
                            >
                                Telegram
                            </Button>

                            {/* MAIL.RU */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<AlternateEmailIcon />}
                                href="mailto:yourname@mail.ru"
                                sx={{
                                    borderRadius: 3,
                                    borderColor: "#005FF9",
                                    color: "#005FF9",
                                    "&:hover": {
                                        backgroundColor: "#005FF922",
                                    },
                                }}
                            >
                                Mail.ru
                            </Button>
                        </Stack>
                    </CardContent>

                </Card>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 6, borderColor: "#ffffff22" }} />

            {/* Copyright */}
            <Typography
                variant="body2"
                align="center"
                color='rgba(255, 255, 255, 0.726)'

            >
                © {new Date().getFullYear()} Jephte François M — Tous droits réservés
            </Typography>
        </Box>
    );
}
