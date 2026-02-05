import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Divider,
    Card,
    CardContent,
    Alert
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import emailjs from "@emailjs/browser";
import Title from "./Title";

export default function ContactFooter() {
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSend = () => {
        setError("");
        setSuccess(false);

        if (!contact || !message) {
            setError("Please fill all fields");
            return;
        }

        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!PUBLIC_KEY) {
            setError("Email service not configured");
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_g8ex16u",
                "template_mfeay4e",
                {
                    contact: contact,
                    message: message,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setSuccess(true);
                setContact("");
                setMessage("");
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setError(err.text || "Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box id="contact" sx={{ padding: "2rem 5rem" }}>
            <Title
                titre_1="Do you have a project, an idea, or an opportunity?"
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
                <Card sx={{ backgroundColor: "#ffffff0a", borderRadius: 3 }}>
                    <CardContent>
                        <Typography textAlign="center" variant="h6" gutterBottom>
                            Send a message
                        </Typography>

                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                label="Email or contact number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <Button
                                variant="contained"
                                startIcon={<SendIcon />}
                                onClick={handleSend}
                                disabled={loading}
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
                                {loading ? "Sending..." : "Send"}
                            </Button>

                            {success && (
                                <Alert severity="success">
                                    Message sent successfully ✅
                                </Alert>
                            )}

                            {error && (
                                <Alert severity="error">
                                    {error}
                                </Alert>
                            )}
                        </Stack>
                    </CardContent>
                </Card>

                {/* DIRECT CONTACT */}
                <Card sx={{ backgroundColor: "#ffffff0a", borderRadius: 3 }}>
                    <CardContent>
                        <Typography textAlign="center" variant="h6" gutterBottom>
                            Direct Contact
                        </Typography>

                        <Stack spacing={2}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<EmailIcon />}
                                href="mailto:jephtefrancois9@gmail.com"
                            >
                                Send an email
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<WhatsAppIcon />}
                                href="https://wa.me/79962746496"
                                target="_blank"
                            >
                                WhatsApp
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<TelegramIcon />}
                                href="https://t.me/jeffty360"
                                target="_blank"
                            >
                                Telegram
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<AlternateEmailIcon />}
                                href="mailto:jephtefrancois9@mail.ru"
                            >
                                Mail.ru
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ my: 6, borderColor: "#ffffff22" }} />

            <Typography
                variant="body2"
                align="center"
                color="rgba(255,255,255,0.7)"
            >
                © {new Date().getFullYear()} Jephte François M — All rights reserved
            </Typography>
        </Box>
    );
}
