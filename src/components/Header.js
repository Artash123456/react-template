import React from 'react'
import {Link} from "react-router-dom"
import {useContext} from "react"
import {SuperContext} from "../context"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaUserCog} from "react-icons/fa"
import {MdFindInPage} from "react-icons/md"
import "./index.scss"
export default function Header() {
    const context = useContext(SuperContext)
    const {handleChange} = context
    return (
        <div className="header">
            
            <div className="header-center">

            <div className="logo-and-burger">
                <Link to ="/" className="logo">React Template</Link>
                <GiHamburgerMenu onClick={handleChange} color="var(--secondary)" cursor="pointer"/>
            </div>
            <div className="search-login-form">
                <div>
                <input type="search"/>
                <MdFindInPage  color="var( --primary)" cursor="pointer"/>
                </div>
                <FaUserCog color="var( --secondary)" cursor="pointer"/>

            </div>
            
            </div>
        </div>
    )
}
