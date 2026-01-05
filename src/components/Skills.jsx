import Title from './Title'
import React from "react";
import Slider from "react-slick";
import WrapperSkills from "./WrapperSkills";
import { Box } from "@mui/material";

export default function Skills() {

    const baseSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        slidesToScroll: 1,
        centerPadding: "1px", // 🔹 Réduit l'espace entre les slides
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const slider1 = {
        ...baseSettings,
        speed: 5000,
        slidesToShow: 4,
        rtl: false,
    };

    const slider2 = {
        ...baseSettings,
        speed: 4000,
        slidesToShow: 4,
        rtl: true,
    };

    const slider3 = {
        ...baseSettings,
        speed: 5000,
        slidesToShow: 4,
        rtl: false,
        autoplay: false,
    };

    return (
        <Box sx={{ padding: "2rem 5rem" }} className="slider-container">
            <Title titre_1="Explore" titre_2="My technology stack" />

            <Box sx={{ padding: "2rem 10rem" }} className="slider-container">
                {/* 🔹 Slider 1 */}
                <Slider {...slider1}>
                    <WrapperSkills logopath="python.png" />
                    <WrapperSkills logopath="c++.png" />
                    <WrapperSkills logopath="c_sharp.png" />
                    <WrapperSkills logopath="java.png" />
                    <WrapperSkills logopath="javascript.png" />
                </Slider>

                {/* 🔹 Slider 2 */}
                <Box sx={{ margin: "0.5rem" }}>
                    <Slider {...slider2}>
                        <WrapperSkills logopath="htmlcss.png" />
                        <WrapperSkills logopath="react.png" />
                        <WrapperSkills logopath="next.png" />
                        <WrapperSkills logopath="django.png" />
                        <WrapperSkills logopath="fastapi.png" />
                    </Slider>
                </Box>

                {/* 🔹 Slider 3 */}
                <Slider {...slider3}>
                    <WrapperSkills logopath="git.png" />
                    <WrapperSkills logopath="spark.png" />
                    <WrapperSkills logopath="arduino.png" />
                </Slider>
            </Box>
        </Box>
    );
}