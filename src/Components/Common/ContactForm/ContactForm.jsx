import { useState } from "react";
import { TextField, MenuItem } from '@mui/material';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./ContactForm.scss";
import bg from "../../../Assets/Banner/damac-banner-image.jpg";
import icons1 from "../../../Assets/Icons/icon4.png";
import icons2 from "../../../Assets/Icons/icon8.png";
import icons3 from "../../../Assets/Icons/icon14.png";
import icons4 from "../../../Assets/Icons/icon9.png";

const PUBLIC_KEY = "_Brk5dkZd_0m-_xFM";
const SERVICE_ID = "service_xad06ea";
const TEMPLATE_ID = "template_bo3cjet";

export default function ContactForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '+971',
        email: '',
        message: '',
        service: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [response, setResponse] = useState("");

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
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            // service: formData.service,
        };

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            console.log("Email sent successfully!", response);
            setResponse("Email sent successfully!");
            navigate("/thank-you");
        } catch (error) {
            console.error("Email sending error:", error);
            setResponse("Email sending error");
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
        <section id="contact-us">
            <div className="contact-form-section">
                <img className="bg-img" src={bg} alt="" />
                <div className="overlay"></div>
                <div className="contact-content section-container">
                    <div className="contact-info">
                        <h1 className="main-title">Over 20 Years of<br /> Redefining Luxury Living</h1>
                        <p className="description">
                            DAMAC Island Phase 2 offers an unmatched lifestyle with world-class residences, vibrant activities, and premium amenities — redefining waterfront living in Dubai.
                        </p>

                        <div className="key-points">
                            <div className="point">
                                <div className="point-icon">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                                        <path d="M19 15L20.09 21.26L27 22L20.09 22.74L19 29L17.91 22.74L11 22L17.91 21.26L19 15Z" fill="currentColor"/>
                                    </svg> */}
                                    <img src={icons1} alt="" />
                                </div>
                                <div className="point-text">
                                    <h4>Luxury Living</h4>
                                    <p>Premium villas with world-class amenities</p>
                                </div>
                            </div>

                            <div className="point">
                                <div className="point-icon">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5H10.6C9.68 5 8.76 5.06 7.83 5.17L10.5 2.5L9 1L3 7V9H21ZM5 13.18V11H19V13.18C19 13.18 18.5 14 17 14H7C5.5 14 5 13.18 5 13.18Z" fill="currentColor"/>
                                    </svg> */}
                                    <img src={icons2} alt="" />
                                </div>
                                <div className="point-text">
                                    <h4>Water Activities</h4>
                                    <p>Aqua parks, lagoons & water sports</p>
                                </div>
                            </div>

                            <div className="point">
                                <div className="point-icon">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5C15.04 6.5 17.5 8.96 17.5 12ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z" fill="currentColor"/>
                                        <path d="M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z" fill="currentColor"/>
                                    </svg> */}
                                    <img src={icons3} alt="" />
                                </div>
                                <div className="point-text">
                                    <h4>Parks & Nature</h4>
                                    <p>Jungle parks, wildlife & green spaces</p>
                                </div>
                            </div>

                            <div className="point">
                                <div className="point-icon">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                                        <path d="M19 15L20.09 21.26L27 22L20.09 22.74L19 29L17.91 22.74L11 22L17.91 21.26L19 15Z" fill="currentColor"/>
                                    </svg> */}
                                    <img src={icons4} alt="" />
                                </div>
                                <div className="point-text">
                                    <h4>Premium Amenities</h4>
                                    <p>Fitness centers, spas & exclusive facilities</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="contact-details">
                            <p className="contact-description">Hey there, <br />What are you waiting for… Contact us<br /> and be a part of Todays Luxuxry!</p>
                            <div className="contact-div">
                                <div className="contact">
                                    <SlPhone className="icon" />
                                    <div className="details">
                                        <h3 className="head">Phone</h3>
                                        <a href="tel:+971 2345678"><h4 className="value">+971 2345678</h4></a>
                                    </div>
                                </div>
                                <div className="contact">
                                    <MdOutlineEmail className="icon" />
                                    <div className="details">
                                        <h3 className="head">Email</h3>
                                        <a href="mailto:info@damacproperties.com"><h4 className="value">info@damacproperties.com</h4></a>
                                    </div>
                                </div>
                                <div className="contact">
                                    <IoLocationOutline className="icon" />
                                    <div className="details">
                                        <h3 className="head">Damac Properties</h3>
                                        <a href="https://maps.com"><h4 className="value">Dubai, United Arab Emirates</h4></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <h1 className="title">Do you have any Questions?</h1>
                        <p className="form-description">We will use the information to contact you ASAP! Thank you.</p>

                        <TextField label="First Name" variant="outlined" value={formData.firstName} onChange={handleUpdate('firstName')} fullWidth className="form-field" required />
                        {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}

                        <TextField label="Last Name" variant="outlined" value={formData.lastName} onChange={handleUpdate('lastName')} fullWidth className="form-field" required />
                        {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}

                        <TextField label="Phone" variant="outlined" value={formData.phone} onChange={handleUpdate('phone')} fullWidth className="form-field" required />
                        {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}

                        <TextField label="Email" variant="outlined" value={formData.email} onChange={handleUpdate('email')} fullWidth className="form-field" required />
                        {formErrors.email && <div className="error-message">{formErrors.email}</div>}

                        {/* <TextField select label="Service" variant="outlined" value={formData.service} onChange={handleUpdate('service')} fullWidth className="form-field" required>
                            <MenuItem value="Website Development">Website Development</MenuItem>
                            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                            <MenuItem value="Digital Branding">Digital Branding</MenuItem>
                            <MenuItem value="Presentation Design(PPT)">Presentation Design (PPT)</MenuItem>
                            <MenuItem value="Podcast Production">Podcast Production</MenuItem>
                            <MenuItem value="Media Production">Media Production</MenuItem>
                            <MenuItem value="Drone Production">Drone Production</MenuItem>
                        </TextField> */}
                        {/* {formErrors.service && <div className="error-message">{formErrors.service}</div>} */}

                        <TextField label="Message" variant="outlined" multiline rows={4} value={formData.message} onChange={handleUpdate('message')} fullWidth className="form-field" required />
                        {formErrors.message && <div className="error-message">{formErrors.message}</div>}

                        <button type="submit" className="btn-blue">Submit</button>
                        {response && <span className="form-response">{response}</span>}
                    </form>
                </div>
            </div>
        </section>
    );
}
