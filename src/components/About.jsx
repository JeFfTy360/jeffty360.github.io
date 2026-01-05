
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Title from './Title'
import WrapperSection from './WrapperSection'

import HorizontalTimeline from './HorizontalLineTime';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export const experience = [
    {
        date: "Jan 2022 – Present",
        title: "Développeur & Support Informatique freelance",
        subtitle: "Freelance",
        description:
            "Développement de sites web et d’applications, assistance technique et maintenance informatique pour différents clients.",
        skills: [
            "React",
            "JavaScript",
            "Support IT",
            "Maintenance",
            "Web Development",
        ],
        icon: <WorkIcon />,
    },
    {
        date: "Jan 2020 – Dec 2021",
        title: "Développeur Réalité Virtuelle",
        subtitle: "École Supérieure d'Infotronique d'Haïti (ESIH)",
        description:
            "Collaboration avec le laboratoire de réalité virtuelle de l’ESIH. Participation à plusieurs projets de réalité virtuelle, notamment Afro-American Caribbean Matrimony (MAAC).",
        skills: [
            "Réalité Virtuelle",
            "Unity",
            "C#",
            "UX",
        ],
        icon: <WorkIcon />,
    },
    {
        date: "Aug 2020 – Sep 2023",
        title: "Fondateur & Développeur",
        subtitle: "Haiti Virtual Tour",
        description:
            "Fondation et développement de Haiti Virtual Tour, une plateforme immersive permettant de visiter virtuellement différentes régions d’Haïti sur mobile, desktop et casque VR.",
        skills: [
            "Unity",
            "C#",
            "VR",
            "Entrepreneuriat",
            "UX Design",
        ],
        icon: <WorkIcon />,
    },
];

const education = [
    {
        date: "2019 – 20",
        title: "Systèmes et technologies de l’information - Développement et administration des SI",
        subtitle: "Université d'État d'Astrakhan",
        // description:
        //     "Développement logiciel, algorithmes, bases de données, systèmes informatiques.",
        skills: ["Python", "C++", "SQL", "Algorithmique"],
        icon: <SchoolIcon />,
    },
    {
        date: "2019 – 2021",
        title: "Sciences Informatiques & Gestion",
        subtitle: " École Supérieure d'Infotronique d'Haiti",
        // description:
        //     "Bases solides en programmation, mathématiques et logique.",
        // skills: ["C", "Maths", "Structures de données"],
        icon: <SchoolIcon />,
    },
];



function About() {
    const Image = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center"
    }))


    return (
        <WrapperSection>
            <Title style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }} titre_1="Get To Know More" titre_2="About me" />

            <Image>
                <img style={{ borderRadius: "1000px", width: "150px", margin: "2px" }} src="aboutMe.png" />
            </Image>
            <Typography textAlign="justify" sx={{

                hyphens: 'auto',    // césure automatique des mots 
                // wordBreak: 'break-word', // force la coupure des mots longs si besoin
                // overflowWrap: 'break-word',
                color: 'rgba(255, 255, 255, 0.726)',
                padding: {
                    md: "0 3rem 0 3rem"
                },
                fontSize: { sm: '1.3rem', xs: '1rem' }
            }}>
                Passionné de sciences et de technologies, je suis curieux, motivé, créatif et déterminé. Je suis toujours très enthousiaste apprendre de nouvelles compétences. Avec un vif intérêt pour la programmation, l’électronique et la conception d’algorithmes, j’aime créer des solutions qui allient fonctionnalité et créativité. Mon parcours est alimenté par l’apprentissage continu, l’expérience pratique et le désir de transformer des idées en réalité. je suis particulièrement dévoué à résoudre les problèmes des utilisateurs et à offrir un soutien efficace.
            </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "column"
                },




            }}>
                <HorizontalTimeline title="Education" items={education} />
                <HorizontalTimeline title="Experience" items={experience} />

            </Box>
        </WrapperSection>
    )
}

export default About
