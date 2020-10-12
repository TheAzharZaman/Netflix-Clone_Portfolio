import React, {useEffect, useState} from 'react';

const Navbar = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if( window.scrollY > 100 ){
              handleShow(true);   
            } else handleShow(false);     
            
            return () => {
                window.removeEventListener('scroll')
            }
        })      
    })

    return (
        <div className={`Nav__bar ${show && "Nav__black"}`} id='Nav'>
            <img className={`Netflix__logo`} src="https://i.ibb.co/52KLQyp/toppng-com-netflix-logo-icon-400x300.png" alt="NETFLIX-LOGO" border="0"></img>

            <img className='User__avatar' src="https://i.ibb.co/sVB3zrK/avatar-icon-images-4.png" alt="User-Avatar" border="0"></img>
        </div>
    )
}

//    

export default Navbar
