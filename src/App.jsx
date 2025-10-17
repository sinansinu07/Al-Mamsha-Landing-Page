import { useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import ContactForm from './Components/Common/ContactForm/ContactForm';
import Thankyou from './Components/ThankYouPage/Thankyou';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';

import './App.scss';
import PopupForm from './Components/Common/PopupForm/PopupForm';

export default function App() {
  const [closePopup, setClosePopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Function to handle closing the popup - prevent future appearances
  const handleClose = () => {
    setClosePopup(true);
    setShowPopup(false);
    
    // Mark popup as closed and prevent future appearances
    localStorage.setItem('popupClosed', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Function to handle form submission (stop all future popups)
  const handleSubmit = () => {
    setClosePopup(true);
    setShowPopup(false);
    localStorage.setItem('formSubmitted', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Function to open popup from CTA buttons
  const openPopup = () => {
    setShowPopup(true);
    setClosePopup(false);
  };

  return (
      <div className="app-container">
        <div className="app-content">
          <Header />
            <Routes>
              <Route path="/" element={<HomePage openPopup={openPopup} />} />
              <Route path="/thank-you" element={<Thankyou />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          <Footer />
        </div>
        <div className="app-popup">
          <ContactForm handleClose={handleClose} handleSubmit={handleSubmit}/>
        </div>
          {(!closePopup || showPopup) && location.pathname !== '/thank-you' &&
            <PopupForm handleClose={handleClose} handleSubmit={handleSubmit}/>
          }
      </div>
    );
}