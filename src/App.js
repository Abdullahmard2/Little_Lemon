import './style/base.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage'; 
import ConfirmedBooking from './components/ConfirmedBooking';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




/* HOW TO ADD CHANGES TO GITHUB 
cd path/to/your/project
git status
git add .
git commit -m "ADD YOUR MESSAGE HERE"
git push origin main    OR
git push origin your-branch-name    IF NOT ON MAIN    */

