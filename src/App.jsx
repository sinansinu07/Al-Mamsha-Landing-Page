import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import PopupForm from './Components/Common/PopupForm/PopupForm';
import Thankyou from './Components/ThankYouPage/Thankyou';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';

export default function App() {
  const [closePopup, setClosePopup] = useState(false);
  const [formAppear, setFormAppear] = useState(false);
  const [delayCount, setDelayCount] = useState(0);

  // Function to handle closing the popup with progressive delays
  const handleClose = () => {
    setClosePopup(true);
    setFormAppear(false);
    
    // Set timeout for next appearance based on delay count
    const delays = [10000, 30000, 60000]; // 10s, 30s, 1min
    const currentDelay = delays[delayCount] || null;
    
    if (currentDelay) {
      setTimeout(() => {
        setFormAppear(true);
        setClosePopup(false);
        setDelayCount(prev => prev + 1);
      }, currentDelay);
    }
  };

  // Function to handle form submission (stop all future popups)
  const handleSubmit = () => {
    setClosePopup(true);
    setFormAppear(false);
    localStorage.setItem('formSubmitted', 'true');
  };

  // Check localStorage and set initial popup
  useEffect(() => {
    const formSubmitted = localStorage.getItem('formSubmitted');
    
    if (formSubmitted === 'true') {
      // Don't show popup if form was previously submitted
      setFormAppear(false);
    } else {
      // Show popup on first visit
      setFormAppear(true);
    }
  }, []);

  return (
    <Fragment>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      {!closePopup && formAppear &&
        <PopupForm handleClose={handleClose} handleSubmit={handleSubmit}/>
      }
    </Fragment>
  );
}