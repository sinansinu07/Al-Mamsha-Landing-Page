import { Fragment, useEffect } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Helmet from "../General/Helmet";
import { initHomePageScripts } from "../Utils/scripts";
import AboutUs from "../Components/HomePage/AboutUs/AboutUs";
import Pricing from "../Components/HomePage/Pricing/Pricing";
import FloorPlan from "../Components/HomePage/FloorPlan/FloorPlan";
import Amenities from "../Components/HomePage/Amenities/Amenities";
import Gallery from "../Components/HomePage/Gallery/Gallery";
import Location from "../Components/HomePage/Location/Location";

export default function HomePage({ openPopup }) {
    useEffect(() => {
        const cleanup = initHomePageScripts();
        return cleanup;
    }, []);

    return (
        <Fragment>
            <Helmet title="Al Mamsha | Sharjah's First Fully Walkable Community" />
            <HomeHero openPopup={openPopup}/>
            <AboutUs/>
            <Pricing openPopup={openPopup}/>
            <FloorPlan openPopup={openPopup}/>
            <Amenities/>
            <Gallery/>
            <Location openPopup={openPopup}/>
        </Fragment>
    )
}