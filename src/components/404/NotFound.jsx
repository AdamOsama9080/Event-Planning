import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../colors';

const NotFound = () => {
    return (
        < >
        <div className="container text-center p-5">
        <img src="images/undraw_page_not_found_su7k 1.svg" className='w-25' alt="" />
        <h2 className='my-2'>Oops!</h2>
        <p className=''>We can't seem to find the page you are looking for</p>
        <Link to='/' className='btn rounded-5 my-4' style={{backgroundColor:colors.primaryColor , color:colors.whiteColor}}>Back to Homepage</Link>
        
        <p className='m-5'>Follow us on</p>
        <div className='d-flex justify-content-center' style={{fontSize:'32px'}}>

        <a href=''><i className="bi bi-youtube p-2 m-2 rounded " style={{color:colors.primaryColor,backgroundColor:colors.backgroundGreyColor}}  ></i></a>
        <a href=''><i className="bi bi-facebook p-2 m-2 rounded " style={{color:colors.primaryColor,backgroundColor:colors.backgroundGreyColor}}></i></a>
        <a href=''><i className="bi bi-instagram p-2 m-2 rounded " style={{color:colors.primaryColor,backgroundColor:colors.backgroundGreyColor}}></i></a>
        <a href=''><i className="bi bi-linkedin p-2 m-2 rounded " style={{color:colors.primaryColor,backgroundColor:colors.backgroundGreyColor}}></i></a>
        <a href=''><i className="bi bi-twitter  p-2 m-2 rounded " style={{color:colors.primaryColor,backgroundColor:colors.backgroundGreyColor}}></i></a>
        </div>
        </div>
        </>
    );
}

export default NotFound;
