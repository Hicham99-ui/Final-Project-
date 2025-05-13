import React from 'react';
import './index.css'
// import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import { Route,Routes } from 'react-router-dom';
import FootbalPage from './components/pages/Football/FootbalPage';
import BasketPage from './components/pages/Basketball/BasketPage';
import TennisPage from './components/pages/Tennis/Tennispage';
import SwimPage from './components/pages/Swim/SwimPage';
import TerrainDetails from './components/pages/Football/TerrainDetails';
import BookingForm from './components/pages/Football/BookingForm';
import ConfirmationPage from './components/pages/Football/ConfirmationPage';
import BasketballCourtDetails from './components/pages/Basketball/BasketballCourtDetails';
import BasketballBookingForm from './components/pages/Basketball/BasketballBookingForm';
import BookingConfirmation from './components/pages/Basketball/BookingConfirmation';
import TennisCourtDetails from './components/pages/Tennis/TennisCourtDetails';
import TennisBookingForm from './components/pages/Tennis/TennisBookingForm';
import SwimmingPoolDetails from './components/pages/Swim/SwimmingPoolDetails';
import SwimmingBookingForm from './components/pages/Swim/SwimmingBookingForm';




function App() {
  return (
    <div className='page'>
          <Routes >

                         
                         <Route path="/FootbalPage" element = {<FootbalPage/>} />
                           <Route path="/Basket" element = {<BasketPage/>} />
                         <Route path="/Tennis" element = {<TennisPage/>}/>
                         <Route path="/Swim" element = {<SwimPage/>}/>
                         {/* football router */}
                         <Route path="/details/Football/:id" element={<TerrainDetails />} />
                         <Route path="/book/Football/:id" element={<BookingForm />} />
                        <Route path="/confirmation" element={<ConfirmationPage />} />
                        {/* basket router */}
                        <Route path="/details/basketball/:id" element={<BasketballCourtDetails />} />
                        <Route path="/book/basketball/:id" element={<BasketballBookingForm />} />
                        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                        {/* tennis router */}
                        <Route path="/details/tennis/:id" element={<TennisCourtDetails />} />
                        <Route path="/book/tennis/:id" element={<TennisBookingForm />} />
                        {/* swim router */}
                        <Route path="/swimming/details/:id" element={<SwimmingPoolDetails />} />
                        <Route path="/book/:id" element={<SwimmingBookingForm />} />

                         
                      </Routes>
      
      <MyFooter />
    </div>
  
    
  );
};

export default App
