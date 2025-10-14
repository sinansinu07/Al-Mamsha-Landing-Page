import { Fragment, useEffect } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import ContactForm from "../Components/Common/ContactForm/ContactForm";
import Gallery from "../Components/Common/Gallery/Gallery";
import Helmet from "../General/Helmet";
import { initHomePageScripts } from "../Utils/scripts";
import ProjectDetails from "../Components/HomePage/ProjectDetails/ProjectDetails";
import AboutUs from "../Components/HomePage/AboutUs/AboutUs";
import QuickContact from "../Components/Common/QuickContact/QuickContact";

export default function HomePage() {
    useEffect(() => {
        const cleanup = initHomePageScripts();
        return cleanup;
    }, []);

    return (
        <Fragment>
            <Helmet title="Al Mamsha | Sharjah's First Fully Walkable Community" />
            <HomeHero/>
            <AboutUs/>
            <QuickContact/>
            <ProjectDetails/> 
            <ContactForm/>
            {/* <Gallery/> */}
        </Fragment>
    )
}