import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";

import './PopupForm.scss';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TextField } from '@mui/material';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { toast } from 'react-toastify';
const PUBLIC_KEY = "PKoR53EHJAUqG_BLQ";
const SERVICE_ID = "service_g654l6k";
const TEMPLATE_ID = "template_lpssnjq";

// sales@propwiserealtyllc.com, sadik.shaikh@media247.digital

function PopupForm({ handleClose, handleSubmit }) {
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
          toast("Email sent successfully!");
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="popup-modal-overlay">
      <motion.div 
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className={`popup-modal-content`}>
        <IoClose className="closeButton" onClick={() => { handleClose() }}/>
        {/* <div className="left">
          <div className="left-content">
            <img src={logo} alt="" className="logo" />
            <p>We're all about creating communications that sparkle and 
              shine for the brands we love. 
              But there's more to us than just creating pretty pictures.
            </p>
          </div>
          <div className="left-image">
              <img src={image} alt="DAMAC Islands Phase 2" />
          </div>
        </div> */}
        <div className="right">
          {/* <div className="contact-col"> */}
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
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  paddingLeft: "50px",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                buttonStyle={{
                  border: "none",
                  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px 0 0 12px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
                containerStyle={{
                  width: "100%",
                }}
                // apply focus + hover like MUI
                onFocus={(e) => {
                  e.target.style.border = "2px solid #B6735D";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                }}
                onMouseOver={(e) => {
                  if (document.activeElement !== e.target) {
                    e.target.style.border = "2px solid #B6735D";
                  }
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.target) {
                    e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
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
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}

export default PopupForm;