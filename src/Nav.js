import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';






const Header = () =>{
    return(
        <header>
            <h1>ONASA</h1>
            <Link className="navBtn" to="/home">Home</Link>

            <hr/>
        </header>
    )
}


export default Header