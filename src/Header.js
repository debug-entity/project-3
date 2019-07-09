import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
    <React.Fragment>
        <h1>ONASA</h1><br/>
        <Link className="navBtn" to="/">Home</Link>
    </React.Fragment>
) 


export default Header;