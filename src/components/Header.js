import React from 'react';
import Logo from "../reactlogo.png"

import styles from "../components/styles.css"
import { Paper } from '@mui/material';


function Header() {
    return (
        <Paper elevation={5}>
            <div className="header-components">
            <img src={Logo} alt="Logo" href="!#"/>
            <h1>Notes React App!</h1>
        </div>
       
        </Paper>
       
       
        
    );
}

export default Header;
