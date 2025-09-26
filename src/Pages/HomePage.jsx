import { Fragment } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Stats from "../Components/Common/Stats/Stats";
import Activities from "../Components/Common/Activities/Activities";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import AboutUsSection from "../Components/HomePage/AboutUsSection/AboutUsSection";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
import Amenities from "../Components/HomePage/Amenities/Amenities";
import Gallery from "../Components/Common/Gallery/Gallery";
import Pricing from "../Components/Common/Pricing/Pricing";

export default function HomePage() {
    return (
        <Fragment>
            <HomeHero/>
            <AboutUsSection/>
            <ContactForm/>
            <Amenities/>
            <Stats/>
            <Pricing/>
            <Activities/>
            <Gallery/>
        </Fragment>
    )
}