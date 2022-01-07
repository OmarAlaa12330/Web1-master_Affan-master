import{menuitems} from "./menuitems"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './navbar.css'
import logo from '../Image/Titanic_Fitness_Logo.PNG'


export default function Navbar(){
    const [clicked,setclicked] = useState(false)
    let navigate = useNavigate()
    
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
                </ul>
            </nav>
        )
}

