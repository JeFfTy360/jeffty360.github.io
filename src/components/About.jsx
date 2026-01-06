
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
        title: "Freelance Developer & IT Support",
        subtitle: "Freelance",
        description:
            "Development of websites and applications, technical assistance, and IT maintenance for various clients.",
        icon: <WorkIcon />,
    },
    {
        date: "Jan 2020 – Dec 2021",
        title: "Virtual Reality Developer",
        subtitle: "École Supérieure d'Infotronique d'Haïti (ESIH)",
        description:
            "Collaboration with the ESIH Virtual Reality Laboratory. Participation in several virtual reality projects, including Afro-American Caribbean Matrimony (MAAC).",

        icon: <WorkIcon />,
    },
    {
        date: "Aug 2020 – Sep 2023",
        title: "Founder & Developer",
        subtitle: "Haiti Virtual Tour",
        description:
            "Founded and developed Haiti Virtual Tour, an immersive platform enabling virtual visits of different regions of Haiti on mobile, desktop, and VR headsets.",
        icon: <WorkIcon />,
    },
];

const education = [
    {
        date: "2019 – Present",
        title: "Information Systems and Technologies – Information Systems Development and Administration",
        subtitle: "Astrakhan State University",
        // description:
        //     "Développement logiciel, algorithmes, bases de données, systèmes informatiques.",
        skills: ["Astrakhan, Russia"],
        icon: <SchoolIcon />,
    },
    {
        date: "2019 – 2021",
        title: "Computer Science & Management",
        subtitle: "École Supérieure d'Infotronique d'Haiti (ESIH)",
        // description:
        //     "Bases solides en programmation, mathématiques et logique.",
        skills: ["Port-au-Prince, Haiti"],
        icon: <SchoolIcon />,
    },
];



function About() {
    const Image = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center"
    }))


    return (
        <WrapperSection >
            <Title style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }} titre_1="Get To Know More" titre_2="About me" />

            <Image id="about">
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
                {/* Passionné de sciences et de technologies, je suis curieux, motivé, créatif et déterminé. Je suis toujours très enthousiaste apprendre de nouvelles compétences. Avec un vif intérêt pour la programmation, l’électronique et la conception d’algorithmes, j’aime créer des solutions qui allient fonctionnalité et créativité. Mon parcours est alimenté par l’apprentissage continu, l’expérience pratique et le désir de transformer des idées en réalité. je suis particulièrement dévoué à résoudre les problèmes des utilisateurs et à offrir un soutien efficace. */}

                Passionate about science and technology, I am curious, motivated, creative, and determined. I am always highly enthusiastic about learning new skills. With a strong interest in programming, electronics, and algorithm design, I enjoy creating solutions that combine functionality and creativity. My journey is driven by continuous learning, hands-on experience, and the desire to turn ideas into reality. I am particularly dedicated to solving users’ problems and providing effective support.

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
