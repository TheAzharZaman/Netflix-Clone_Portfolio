import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faSun } from '@fortawesome/free-solid-svg-icons'


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
        
        // Nav__switcher ////

        let Theme__controller= document.getElementById('Theme__adjustor');
        let App__main__container= document.getElementById('App-Main-UI-Container')
        let Remove__Banner__Bottom__Fade= document.getElementById('Banner__fade__bottom')
        let Row__bg__changer= document.getElementById('Row__posters__container')
        
        Theme__controller.addEventListener('click', () => {
            console.log('Theme__Switcher Triggered')
            Remove__Banner__Bottom__Fade.classList.toggle('Banner__fade__bottom')
            App__main__container.classList.toggle('App-Main-UI-Container')
            Row__bg__changer.classList.add('Row__bg__changer')
        })
    })

    return (
        <div className={`Nav__bar ${show && "Nav__black"}`} id='Nav'>
            <img className={`Netflix__logo`} src="https://i.ibb.co/52KLQyp/toppng-com-netflix-logo-icon-400x300.png" alt="NETFLIX-LOGO" border="0"></img>

            <div className='Navbar__icons_container'>
                <FontAwesomeIcon className='Theme__adjustor pointer' id='Theme__adjustor' icon= { faSun } /> 
            </div>

            <img className='User__avatar' src="https://i.ibb.co/sVB3zrK/avatar-icon-images-4.png" alt="User-Avatar" border="0"></img>
        </div>
    )
}

//    

export default Navbar
