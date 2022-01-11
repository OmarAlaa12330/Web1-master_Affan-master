import{menuitems} from "./menuitems"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './navbar.css'
import logo from '../Image/Titanic_Fitness_Logo.PNG'


export default function Navbar(){
    const [clicked,setclicked] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)
    let navigate = useNavigate()

    useEffect(()=>{
         let status = localStorage.getItem('isLoggedIn')
        if (status === "TRUE"){
            setLoggedIn(true)
        }else if (status === "FALSE"){
            setLoggedIn(false)
        }
    })
    
        return(
            <nav className="NavbarItems">
                <img className="fa-react" onClick={()=>navigate('/')}src={logo} alt="logo"/>
                <div className='menu-icon'onClick={()=>setclicked(!clicked)}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuitems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <a className={item.className} onClick={() => navigate(item.url)}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    } )}
                    
                    {loggedIn? <li className={clicked ? 'nav-menu active' : 'nav-menu'}><a className="nav-links-signup" onClick={() => navigate('Profile-Page')}>profile</a></li> : 
                    (<><li className={clicked ? 'nav-menu active' : 'nav-menu'}><a className="nav-links-signup" onClick={() => navigate('log-In')}>LogIn</a></li>
                    <li className={clicked ? 'nav-menu active' : 'nav-menu'}><a className="nav-links-signup" onClick={() => navigate('Sign-Up')}>SignUp</a></li> </>)}
                
                </ul>
            </nav>
        )
}

/*,
    {
        title: 'LogIn',
        url: 'Log-In',
        className: 'nav-links-signup'
    },
    {
        title: 'SignUp',
        url: 'Sign-Up',
        className: 'nav-links-signup'
    } */
