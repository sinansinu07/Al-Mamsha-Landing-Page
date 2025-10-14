import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import PopupForm from './Components/Common/PopupForm/PopupForm';
import Thankyou from './Components/ThankYouPage/Thankyou';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';

export default function App() {
  const [closePopup, setClosePopup] = useState(false);
  const [formAppear, setFormAppear] = useState(false);
  const location = useLocation();

  // Function to handle closing the popup - prevent future appearances
  const handleClose = () => {
    setClosePopup(true);
    setFormAppear(false);
    
    // Mark popup as closed and prevent future appearances
    localStorage.setItem('popupClosed', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Function to handle form submission (stop all future popups)
  const handleSubmit = () => {
    setClosePopup(true);
    setFormAppear(false);
    localStorage.setItem('formSubmitted', 'true');
    localStorage.setItem('popupDismissed', 'true');
  };

  // Check localStorage and set initial popup
  useEffect(() => {
    const formSubmitted = localStorage.getItem('formSubmitted');
    const popupDismissed = localStorage.getItem('popupDismissed');
    const popupClosed = localStorage.getItem('popupClosed');
    
    // Don't show popup on thank-you page
    if (location.pathname === '/thank-you') {
      setFormAppear(false);
    } else if (formSubmitted === 'true' || popupDismissed === 'true' || popupClosed === 'true') {
      // Don't show popup if form was submitted or popup was dismissed/closed
      setFormAppear(false);
    } else {
      // Show popup after 3 seconds on first visit
      setTimeout(() => {
        setFormAppear(true);
      }, 3000);
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      {!closePopup && formAppear && location.pathname !== '/thank-you' &&
        <PopupForm handleClose={handleClose} handleSubmit={handleSubmit}/>
      }
    </Fragment>
  );
}