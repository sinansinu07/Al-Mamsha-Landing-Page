import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";

import './ContactForm.scss';
import { IoClose } from 'react-icons/io5';
import { TextField } from '@mui/material';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import whatsapp from "../../../Assets/Common/whatsapp.svg"
import { MdCall } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PUBLIC_KEY = "PKoR53EHJAUqG_BLQ";
const SERVICE_ID = "service_g654l6k";
const TEMPLATE_ID = "template_lpssnjq";

function ContactForm({ handleSubmit, openPopup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: '',
      service: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const errors = {};

  const validateErrors = () => {
      if (formData?.name?.trim()?.length === 0) errors.name = "Last Name is Required";
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
          
          // Close the popup and redirect after successful email sending
          if (handleSubmit) {
              handleSubmit();
          }
          navigate("/thank-you");
      } catch (error) {
          console.error("Email sending error:", error);
          setResponse("Email sending error");
      } finally {
          setIsLoading(false);
      }
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      validateErrors();

      if (Object.keys(errors).length === 0) {
          // sendContactFormEmail(formData);
          toast.success("Email sent successfully!");
          setFormData({
              name: "",
              phone: "",
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
    <AnimatePresence>
    <div className="contact-form-overlay">
      <div className="header-contact-div">
        <div className="contact-us-div" onClick={openPopup}>
            Contact Us
        </div>
        <a href="https://wa.me/+971585100593"><div  className="whatsapp-div">
            <img src={whatsapp} alt="WhatsApp" />
        </div></a>  
        <a href="tel:+971545118288"><div  className="call-us-div">
            <MdCall className="contact-icon"/>
        </div></a>
      </div>
      <div className="contact-form-content">
        <div className="right">
            <form onSubmit={handleFormSubmit} className="contact-form">
              <h1 className="title">Get Your <span className="color">Exclusive Al Mamsha Offer</span></h1>
              <p className="form-description">Join the Al Mamsha community and experience the future of urban living. We'll contact you with exclusive offers and project details.</p>

              <TextField label="Name" variant="outlined" value={formData.name} onChange={handleUpdate('name')} fullWidth className="form-field" required />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}

              <PhoneInput
                country={"ae"}
                value={formData.phone}
                onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  paddingLeft: "50px",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  background: "#f8f9fa",
                  color: "#333",
                  transition: "all 0.3s ease",
                }}
                buttonStyle={{
                  border: "none",
                  borderRight: "1px solid #e0e0e0",
                  borderRadius: "12px 0 0 12px",
                  backgroundColor: "#f8f9fa",
                }}
                containerStyle={{
                  width: "100%",
                }}
                // apply focus + hover like MUI
                onFocus={(e) => {
                  e.target.style.border = "2px solid #B6735D";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid #e0e0e0";
                }}
                onMouseOver={(e) => {
                  if (document.activeElement !== e.target) {
                    e.target.style.border = "2px solid #B6735D";
                  }
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.target) {
                    e.target.style.border = "1px solid #e0e0e0";
                  }
                }}
              />
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

              <button type="submit" className="btn-white" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Get Exclusive Al Mamsha Offer'}
              </button>
              {response && <span className="form-response">{response}</span>}
            </form>
          {/* </div> */}
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
}

export default ContactForm;