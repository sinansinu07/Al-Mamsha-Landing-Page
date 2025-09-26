import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";

import './PopupForm.scss';
import logo from "../../../Assets/Logo/damac-white-logo.webp"
import image from "../../../Assets/Gallery/img22.webp"
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TextField } from '@mui/material';

const PUBLIC_KEY = "_Brk5dkZd_0m-_xFM";
const SERVICE_ID = "service_xad06ea";
const TEMPLATE_ID = "template_bo3cjet";

function PopupForm({ handleClose, handleSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      phone: '+971',
      email: '',
      message: '',
      service: '',
  });

  const [formErrors, setFormErrors] = useState({});
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
          firstName: formData.firstName,
          name: formData.name,
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

  const handleFormSubmit = (e) => {
      e.preventDefault();
      validateErrors();

      if (Object.keys(errors).length === 0) {
          sendContactFormEmail(formData);
          setFormData({
              firstName: "",
              name: "",
              phone: "+971",
              email: "",
              message: "",
              service: "",
          });
          setFormErrors({});
          // Call the handleSubmit prop to stop future popups
          if (handleSubmit) {
              handleSubmit();
          }
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
        <div className="left">
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
        </div>
        <div className="right">
          {/* <div className="contact-col"> */}
            <form onSubmit={handleFormSubmit} className="contact-form">
              <h1 className="title">Do you have any Questions?</h1>
              <p className="form-description">We will use the information to contact you ASAP! Thank you.</p>

              <TextField label="Name" variant="outlined" value={formData.name} onChange={handleUpdate('name')} fullWidth className="form-field" required />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}

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

              <button type="submit" className="btn-white">Submit</button>
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