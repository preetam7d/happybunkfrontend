import React from "react";
import Hero from "../pages/Hero"
import AboutImg from "../assests/img2.jpg"
import Footer from "../footer/Footer";
import AboutUs from "../destination/AboutUs";
const About=()=>{
    return (
        <>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="ABOUT"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
        
    )
}
export default About