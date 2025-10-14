import "./HomeHero.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";

const PUBLIC_KEY = "PKoR53EHJAUqG_BLQ";
const SERVICE_ID = "service_g654l6k";
const TEMPLATE_ID = "template_lpssnjq";
import video from "../../../Assets/Banner/banner-video.mp4"
import { TextField } from "@mui/material";

export default function HomeHero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: '',
      service: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const errors = {};

  const validateErrors = () => {
      if (formData?.firstName?.trim()?.length === 0) errors.firstName = "First Name is Required";
      if (formData?.lastName?.trim()?.length === 0) errors.lastName = "Last Name is Required";
      if (formData?.phone?.trim()?.length === 0) errors.phone = "Phone No is Required";
      if (formData?.email?.trim()?.length === 0) errors.email = "Email is Required";
      // if (formData?.service?.trim()?.length === 0) errors.service = "Please select a service";
      if (formData?.message?.trim()?.length === 0) errors.message = "Message is Required";
  };

  const handleUpdate = (field) => (event) => {
      const inputValue = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: inputValue }));
  };

  const sendContactFormEmail = async (formData) => {
      const templateParams = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          // service: formData.service,
      };

      try {
          setIsLoading(true);
          const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
          console.log("Email sent successfully!", response);
          setResponse("Email sent successfully!");
          navigate("/thank-you");
      } catch (error) {
          console.error("Email sending error:", error);
          setResponse("Email sending error");
      } finally {
          setIsLoading(false);
      }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      validateErrors();

      if (Object.keys(errors).length === 0) {
          sendContactFormEmail(formData);
          setFormData({
              firstName: "",
              lastName: "",
              phone: "+971",
              email: "",
              message: "",
              service: "",
          });
          setFormErrors({});
      } else {
          console.log(errors);
          setFormErrors(errors);
      }
  };

  return (
    <div className="home-hero">
      <div className="overlay"></div>
        <video
          className="banner-video"
          key={video}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      <div className="hero-content">
        <div className="left-div">
          <h3 className="top-title">
            Al Mamsha
          </h3>
          <h4 className="sub-title">
            The First Fully Walkable Community In Sharjah
          </h4>
          <h1 className="title">
            <span className="color">Modern Lifestyle Community</span>
          </h1>
          <h2 className="description">
            Sharjah's new destination that integrates modern living, retail and leisure into a vibrant urban environment.
          </h2>
          <a href="#contact-us">
            <div
              className="btn btn-white-fill"
            >
              {/* <FlipLinkBtn isHovered={isHovered}> */}
              Get Exclusive Offer
              {/* </FlipLinkBtn> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}