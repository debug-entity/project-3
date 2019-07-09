import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
const Header = () => (
    <React.Fragment>
        <h1 className='titleH'>ONASA</h1><br/>
        <Link className="navBtn" to="/">Home</Link>

    </React.Fragment>
) 


export default Header;