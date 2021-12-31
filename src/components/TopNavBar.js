import React from 'react'
import './TopNavBar.css';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
function TopNavBar({setIconClicked,iconClicked}) {
    return (
        <div className='topNavBar'>
            <div className="menu-icon" onClick={()=>setIconClicked(!iconClicked)}>
            {console.log(iconClicked)}
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <input className="searchbar" type="text" placeholder='Search for something...'/>
            <MailIcon style={{color:'#808080',marginRight:'8px',cursor:'pointer'}}/>
            <NotificationsIcon style={{color:'#808080',marginRight:'8px',cursor:'pointer'}}/>
            
            <LogoutIcon style={{color:'#808080',marginRight:'8px',cursor:'pointer'}} />
          
            <span className='logout' style={{cursor:'pointer'}} >Log out</span>
           
        </div>
    )
}

export default TopNavBar
