import BlogDetails from "../Components/BlogPage/BlogDetails/BlogDetails.jsx";
import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import Thankyou from "../Components/ThankYouPage/Thankyou.jsx";
import UnAuthorized from "../Components/UnAuthorized/UnAuthorixed.jsx";
import AboutUs from "../Pages/AboutUs.jsx";
import BlogAdminAccount from "../Pages/BlogAdminAccount.jsx";
import BlogPage from "../Pages/BlogPage.jsx";
import CommercialAdsProduction from "../Pages/CommercialAdsProduction.jsx";
import ContactUsPage from "../Pages/ContactUsPage.jsx";
import DigitalBranding from "../Pages/DigitalBranding.jsx";
import DigitalMarketing from "../Pages/DigitalMarketing.jsx";
import DroneProduction from "../Pages/DroneProduction.jsx";
import Home from "../Pages/Home.jsx";
import MediaProduction from "../Pages/MediaProduction.jsx";
import PodcastProduction from "../Pages/PodcastProduction.jsx";
import PortfolioPage from "../Pages/PortfolioPage.jsx";
import PresentationDesign from "../Pages/PresentationDesign.jsx";
import ServicePage from "../Pages/ServicePage.jsx";
import SuperAdminAccount from "../Pages/SuperAdminAccount.jsx";
import WebsiteDevelopment from "../Pages/WebsiteDevelopment.jsx";

const routes = [
  {
    path: "/",
    element: <Home/>,
    isProtected: false,
  },
  {
    path: "*",
    element: <PageNotFound/>,
    isProtected: false,
  },
  {
    path: "/thank-you",
    element: <Thankyou/>,
    isProtected: false,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
    isProtected: false,
  },
  {
    path: "/services",
    element: <ServicePage/>,
    isProtected: false,
  },
  {
    path: "/services/*",
    element: <PageNotFound/>,
    isProtected: false,
  },
  {
    path: "/wecan-studio/*",
    element: <PageNotFound/>,
    isProtected: false,
  },
  {
    path: "/case-studies",
    element: <PortfolioPage/>,
    isProtected: false,
  },
  {
    path: "/blogs",
    element: <BlogPage/>,
    isProtected: false,
  },
  {
    path: "/blogs/:blogName",
    element: <BlogDetails/>,
    isProtected: false,
  },
  {
    path: "/blogs/*",
    element: <BlogPage/>,
    isProtected: false,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage/>,
    isProtected: false,
  },
  {
    path: "/services/website-development",
    element: <WebsiteDevelopment/>,
    isProtected: false,
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketing/>,
    isProtected: false,
  },
  {
    path: "/services/digital-branding",
    element: <DigitalBranding/>,
    isProtected: false,
  },
  {
    path: "/services/presentation-design",
    element: <PresentationDesign/>,
    isProtected: false,
  },
    {
    path: "/wecan-studio/drone-production",
    element: <DroneProduction/>,
    isProtected: false,
  },
  {
    path: "/wecan-studio/podcast-production",
    element: <PodcastProduction/>,
    isProtected: false,
  },
  {
    path: "/wecan-studio/media-production",
    element: <MediaProduction/>,
    isProtected: false,
  },
  {
    path: "/wecan-studio/commercial-ads-production",
    element: <CommercialAdsProduction/>,
    isProtected: false,
  },
  {
    path: "/account/superAdmin-dashboard",
    element: <SuperAdminAccount/>,
    isProtected: true,
    roles: ["superAdmin"],
  },
  {
    path: "/account/blogAdmin-dashboard",
    element: <BlogAdminAccount/>,
    isProtected: true,
    roles: ["blogAdmin"],
  },
  {
    path: "/un-authorized",
    element: <UnAuthorized/>,
    isProtected: false,
  },
];

export default routes;




