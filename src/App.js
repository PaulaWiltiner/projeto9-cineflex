
import React from 'react';
import './assets/styles/reset.css';
import GlobalStyle from './assets/styles/globalStyle';
import HomePage from './pages/HomePage'
import SchedulingPage from './pages/SchedulingPage'
import SeatsPage from './pages/SeatsPage'
import SuccessPage from './pages/SuccessPage'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <>
      <GlobalStyle />

        <BrowserRouter>

          <Routes>

              <Route  path='/homepage' element={<HomePage/>} />
              <Route path='/schedulingpage' element={<SchedulingPage />}/>
              <Route path='/' element={<SeatsPage />}/>
              <Route path='/successpage' element={<SuccessPage />}/>

          </Routes>

        </BrowserRouter>
    </>
  );
}