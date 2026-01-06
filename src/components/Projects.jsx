import React from "react";
import Slider from "react-slick";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
    Chip,
    Grid
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Title from "./Title";



export default function Projects() {

    const projects = [
        {
            title: "Snake Game (Terminal)",
            description:
                "A complete and fully functional implementation of the classic arcade game Snake, developed entirely in Python. The game runs directly in the terminal and uses ASCII characters for its graphical interface.",
            medias: ["snake2.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Let's go - AstrakhanXcurtion",
            description:
                "A robust web application developed with Python and Django, designed to enable the creation, sharing, and management of interactive excursions and guided tours. Registered and logged-in users can create excursions, which are reviewed and validated by moderators. Visitors can select excursions, complete them on-site, and then rate or comment on them. Each excursion consists of points that users can follow on an interactive map in real time.",
            medias: ["astra1.png", "astra2.png", "astra3.png"],
            technologies: ["Python/Django", "Html/Css", "JavaScript", "Django Channels", "Redis", "Yandex Maps API"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Astrakhan Events",
            description:
                "A web-based event management system designed to simplify the creation, promotion, and management of events. The platform enables organizers to control the entire event lifecycle, from ticket sales to real-time participant validation through a QR code system.",
            medias: ["event1.png", "event2.png", "event3.png", "event4.png"],
            technologies: ["Python/Django", "Html/Css", "JavaScript"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Mini Bank",
            description:
                "A desktop application designed to simulate the operation of a basic banking system, enabling simple and efficient management of clients, bank accounts, and transactions. The application provides comprehensive client management features, including adding new clients, updating existing information, displaying the complete list of clients, and searching for specific clients. It also supports the management of bank accounts associated with clients, allowing account creation, activation and deactivation, viewing all existing accounts, and performing targeted searches. Finally, the transaction management module enables credit (deposit) and debit (withdrawal) operations while maintaining a detailed history of all transactions performed.",
            medias: ["bank_1.png", "bank_2.png", "bank_3.png", "bank_4.png"],
            technologies: ["C++", "Qt", "QMake", "Mysql"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Haiti Virtual Tour",
            description:
                "Haiti Virtual Tour, an immersive platform that enables virtual visits to different regions of Haiti from a smartphone, tablet, computer, or virtual reality headset.",
            medias: ["hvt1.gif", "hvt2.gif", "hvt3.png", "hvt4.png", "hvt5.png"],
            technologies: ["Javascript", "360° Photography", "Html/css", "c#", "unity"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        // {
        //     title: "Snake Game (Terminal)",
        //     description:
        //         "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
        //     medias: ["snake.gif", "snake1.png", "snake2.png"],
        //     technologies: ["Python", "keyboard", "os", "time", "json"],
        //     github: "https://github.com/yourusername/snake-game-terminal",
        //     live: "",
        // },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Box id="projects" sx={{ padding: "2rem 5rem" }}>
            <Title titre_1="Explore" titre_2="My Projects" />

            <Grid container spacing={4} m={2}

                justifyContent="center" l
                alignItems="center"
            >
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                boxShadow: 4,
                                padding: "1.5rem",
                                backgroundColor: "#ffffff08",
                                maxWidth: "542px",
                                minHeight: "650px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-around"
                            }}
                        >
                            {/* 🔹 Slider carré */}
                            <Box
                                sx={{
                                    width: 440,
                                    height: 220,
                                    mb: 2,
                                }}
                            >
                                <Slider {...sliderSettings}>
                                    {project.medias.map((media, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                width: 1000,
                                                height: 220,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={media}
                                                alt={project.title}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    borderRadius: 2,
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
                            </Box>

                            {/* 🔹 Contenu */}
                            <CardContent sx={{ textAlign: "center", p: 0 }}>
                                <Typography variant="h6" mb={1}>
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    mb={2}
                                    textAlign="justify"

                                >
                                    {project.description}
                                </Typography>

                                {/* 🔹 Tech */}
                                <Stack
                                    direction="row"
                                    gap={1}
                                    flexWrap="wrap"
                                    justifyContent="center"
                                    mb={2}
                                >
                                    {project.technologies.map((tech, i) => (
                                        <Chip key={i} label={tech} variant="outlined" />
                                    ))}
                                </Stack>

                                {/* 🔹 Boutons */}
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<GitHubIcon />}
                                        href={project.github}
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>

                                    {project.live && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            startIcon={<LaunchIcon />}
                                            href={project.live}
                                            target="_blank"
                                        >
                                            Live
                                        </Button>
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
