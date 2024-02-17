import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './Index'
import Main from './Main'
import Proceed from './Proceed'
import Welcome from './WelcomePage'
import ErrorPage from './ErrorPage'

const Links = () => {
    return (
        <BrowserRouter>
      <Main/>
       <Routes>
         <Route exact path="/" element={<Index/>} />
          <Route path="/Proceed" element={<Proceed/>} />
          <Route path="/Welcome" element={<Welcome/>} />
           <Route path='*' element={<ErrorPage/>} />
       </Routes>
      </BrowserRouter>
    )
}

export default Links