import React from 'react';
import './index.css'

import MyFooter from './components/MyFooter';
import { Route,Routes } from 'react-router-dom';
import FootbalPage from './components/pages/Football/FootbalPage';
import BasketPage from './components/pages/Basketball/BasketPage';
import TennisPage from './components/pages/Tennis/Tennispage';
import SwimPage from './components/pages/Swim/SwimPage';
import TerrainDetails from './components/pages/Football/TerrainDetails';
import BasketballCourtDetails from './components/pages/Basketball/BasketballCourtDetails';
import TennisCourtDetails from './components/pages/Tennis/TennisCourtDetails';
import SwimmingPoolDetails from './components/pages/Swim/SwimmingPoolDetails';
import BookingForm from './components/pages/BookingForm';
import BookingConfirmation from './components/pages/BookingConfirmation';
import AdminDashboard from './components/pages/AdminDashboard';




;




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
                        {/* basket router */}
                        <Route path="/details/basketball/:id" element={<BasketballCourtDetails />} />
                        {/* tennis router */}
                        <Route path="/details/tennis/:id" element={<TennisCourtDetails />} />
                        {/* swim router */}
                        <Route path="/swimming/details/:id" element={<SwimmingPoolDetails />} />


                        
                        <Route path="/book/:sport/:id" element={<BookingForm />} />
                        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                      
                      <Route path="/admin" element={<AdminDashboard />} />
                         
                      </Routes>
      
      <MyFooter />
    </div>
  
    
  );
};

export default App
