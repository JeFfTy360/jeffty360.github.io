import { Download, Mail, Margin } from '@mui/icons-material'
import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Landing() {

    const theme = useTheme()

    const Landing = styled(Stack)(({ theme }) => ({
        // backgroundColor: 'green',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: "85vh",
        paddingTop: '0.5vh',
        margin: '0rem 2rem 0rem 10rem',
        // animation: 'customAni 2s ease 0s normal none',

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            height: "86vh",
            alignSelf: 'center',
            alignItems: 'center',
            margin: '0rem',
            marginBottom: '0.2rem'
        }

    }))
    const ProfilLanding = styled(Box)(({ theme }) => ({
        display: "flex",
        alignSelf: 'center',
        // [theme.breakpoints.up('md')]: {
        //     alignItems: "center",
        //     justifyContent: "center",
        // }
    }))




    const TextSection = styled(Box)(({ theme }) => ({
        height: '25rem',
        // backgroundColor: "red",
        minWidth: '50rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '0.5rem',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'blue',
            // minWidth: '20rem',
            // marginBottom: '10rem'
        }


        // [theme.breakpoints.up('md')]: {
        //     textAlign: "start",
        //     height: "100%",
        //     width: "100%",
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "center",
        //     marginTop: '5rem'

        // }
    }))
    const ButtonSection = styled(Box)(({ theme }) => ({

        display: "flex",
        gap: 20,
        // marginTop: "2rem",
        [theme.breakpoints.up('md')]: {
            gap: 30,
            justifyContent: "center",
            alignItems: "start",
            textAlign: "start",
            marginTop: "5rem",
        }, [theme.breakpoints.up('sm')]: {
            marginTop: "2rem",
        }
    }))


    return (
        <Landing >
            <TextSection sx={{ order: { xs: 3, md: 1 } }}>
                <Typography variant='p' sx={{
                    fontSize: { xs: '2rem', md: '3rem', sm: '3rem' },
                    fontWeight: 'bold',
                    color: 'hsl(203, 100%, 97%, 60%)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}>
                    Hello, I'm
                </Typography>
                <Typography component="h1" sx={{
                    color: 'rgb(0, 169, 255)',
                    // fontSize: '60px',
                    fontSize: { xs: '2rem', md: '3.75rem', sm: '3.75rem' },
                    fontWeight: 700,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',

                    // fontSize: { xs: "5vw", sm: "5vw", md: "3rem" },
                    // fontWeight: "bold", color: "rgb(0, 169, 255)"
                }}>
                    Jephte Francois M
                </Typography>

                <Typography sx={{
                    fontSize: '2rem',
                    fontSize: { xs: '1.15rem', md: '2rem', sm: '2rem' },
                    color: 'hsl(203, 100%, 97%, 60%)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    // fontSize: { xs: "4.5vw", sm: "4vw", md: "3rem" },
                    // fontWeight: "bold",
                    // color: "hsl(203, 100%, 97%, 60%)"
                }}>
                    <Typewriter deleteSpeed={1} loop={false} words={['Computer Scientist and Junior Developer']} />
                    {/* Computer Scientist and Junior Developer */}
                </Typography>
                <ButtonSection>
                    <Button onClick={() => console.log("contact")} startIcon={<Mail />} variant='contained'>Contact me</Button>
                    <Button onClick={() => console.log("cv")} startIcon={<Download />} sx={{ backgroundColor: '#f0f9ff99' }} variant='contained'>Get my cv</Button>
                </ButtonSection>
            </TextSection>

            <ProfilLanding sx={{ order: { xs: 1, md: 2 } }} >
                <Box sx={{ width: { xs: '13rem', sm: 'auto', md: 'auto' } }} component="img" src='me.png' />
            </ProfilLanding>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'row', sm: 'row', md: 'column' },
                gap: '0.5rem',
                alignSelf: 'center',
                marginBottom: '3rem',
                [theme.breakpoints.down('md')]: {
                    // backgroundColor: 'green',
                    margin: '0'
                },
                order: { xs: 2, md: 3 },
                [theme.breakpoints.down('sm')]: {
                    // backgroundColor: 'red',
                    gap: '0.2rem',
                }

            }}>
                <FacebookIcon sx={{ fontSize: '2.5rem', color: '#0faaf8' }} />
                <GitHubIcon sx={{ fontSize: '2.5rem', color: '#0faaf8' }} />
                <LinkedInIcon sx={{ fontSize: '2.5rem', color: '#0faaf8' }} />
                <InstagramIcon sx={{ fontSize: '2.5rem', color: '#0faaf8' }} />
            </Box>

        </Landing >
    )
}
export default Landing
