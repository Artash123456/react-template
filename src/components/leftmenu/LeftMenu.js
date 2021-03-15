import React,{useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {SuperContext} from "../../context"
import "../index.scss"
/// icons
import {GiSpeedometer} from "react-icons/gi"
import {BiLayout} from "react-icons/bi"
import {FaBookOpen,FaChartLine, FaAngleRight, FaAngleDown } from "react-icons/fa"
import {HiTable} from "react-icons/hi"
export default function LeftMenu(props) {
    const [open, setopen] = useState(false)
    const [openAuth, setopenAuth] = useState(false)
    const context = useContext(SuperContext)
    const {isOpen} = context
    return (
        <div className={isOpen?"left-menu-opened" :"closed"}>
            <div className="links-in-leftmenu">
                <h3>CORE</h3>
                <Link to = "/">
                <GiSpeedometer/>
                    Dashboard
                </Link>
          
                <h3>INTERFACE</h3>
                <Link to= "/layouts"><BiLayout/>       LAYOUTS</Link>
                <h3 onClick={()=>setopen(!open)}><FaBookOpen/>PAGES{open?<FaAngleDown/>:<FaAngleRight/>}</h3>
                    
                    
                {open && 
                <ul>
                    <li onClick = {()=>setopenAuth(!openAuth)}>Authentification {openAuth?<FaAngleDown/>:<FaAngleRight/>}</li>
                  
                {openAuth && 
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link>Forgot Password</Link></li>
                        </ul>}
                        <Link to ="/errors">errors</Link>
                    </ul>}

        
                <Link to= "/charts"><FaChartLine/>       CHARTS</Link>
                <Link to= "/tables"><HiTable/>       TABLES</Link>
            </div>
            
            
        </div>
    )
    }
