import { Fragment } from 'react';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';

export default function App() {
  return (
          <Fragment>
            <Header />
              <HomePage/>
            <Footer />
          </Fragment>
  );
}