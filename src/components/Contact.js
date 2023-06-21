import React from "react";
import Hero from "../pages/Hero"
import AboutImg from "../assests/img3.jpg"
import Footer from "../footer/Footer";
import Contactus from "../destination/Contactus";
const Contact=()=>{
    return (
        <div>
            <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="CONTACT"
        btnClass="hide"
        />
        <Contactus/>
        <Footer/>
        </div>
    )
}
export default Contact