import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import PopupForm from './Components/Common/PopupForm/PopupForm';

export default function App() {
  const [closePopup, setClosePopup] = useState(false);
  const [formAppear, setFormAppear] = useState(false);

  // Function to handle closing the popup and storing flag in localStorage
  const handleClose = () => {
    setClosePopup(true);
    localStorage.setItem('formAppear', 'true'); // Set flag so popup doesn't reappear
  };

  // Check localStorage on initial load
  useEffect(() => {
    const formAppearFlag = localStorage.getItem('formAppear');
    if (formAppearFlag === 'true') {
      setFormAppear(false); // Popup should not appear if previously closed
    } else {
      setFormAppear(true); // Show popup if it's the first visit
    }
  }, []);

  return (
          <Fragment>
            <Header />
              <HomePage/>
            <Footer />
            {!closePopup && formAppear &&
              <PopupForm handleClose={handleClose}/>
            }
          </Fragment>
  );
}