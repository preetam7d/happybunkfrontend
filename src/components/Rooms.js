import React from "react";
import Hero from "../pages/Hero"
import AboutImg from "../assests/img4.jpg"
import Room from "../destination/Room";
import Footer from "../footer/Footer";
const Rooms=()=>{
    return (
        <>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="ROOMS"
        btnClass="hide"
        />
        <Room/>
        <Footer/>
        
    </>
        
        )
}
export default Rooms