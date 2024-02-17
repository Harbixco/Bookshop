import React from 'react'
import { Link } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className='general'>
                  <div className='page' >PAGE NOT FOUND</div>
           <div className='go'>GO BACK TO</div>
           <div className='link'> <Link to="/" className="links">HOME</Link></div>
         
            </div>
        </div>
        </div>
        </div>
    )
}

export default ErrorPage
