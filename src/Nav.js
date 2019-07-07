import React from 'react';
import {Link} from "react-router-dom";






const Header = () =>{
    return(
        <header>
            <h1>Hello</h1><br/>
            <Link to="/home">Home</Link>

            <hr/>
        </header>
    )
}


export default Header