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
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Snake Game (Terminal)",
            description:
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Snake Game (Terminal)",
            description:
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Snake Game (Terminal)",
            description:
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Snake Game (Terminal)",
            description:
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "https://github.com/yourusername/snake-game-terminal",
        },
        {
            title: "Snake Game (Terminal)",
            description:
                "Implémentation classique du jeu Snake dans un terminal avec interface ASCII.",
            medias: ["snake.gif", "snake1.png", "snake2.png"],
            technologies: ["Python", "keyboard", "os", "time", "json"],
            github: "https://github.com/yourusername/snake-game-terminal",
            live: "",
        },
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
        <Box sx={{ padding: "2rem 5rem" }}>
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
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {/* 🔹 Slider carré */}
                            <Box
                                sx={{
                                    width: 220,
                                    height: 220,
                                    mb: 2,
                                }}
                            >
                                <Slider {...sliderSettings}>
                                    {project.medias.map((media, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                width: 220,
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
                                >
                                    {project.description}
                                </Typography>

                                {/* 🔹 Tech */}
                                <Stack
                                    direction="row"
                                    spacing={1}
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
