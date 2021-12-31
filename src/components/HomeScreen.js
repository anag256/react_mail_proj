import React, { useState } from 'react'
import SideBar from './SideBar'
import VerticalBar from './VerticalBar'
import './HomeScreen.css'
import MailBox from './MailBox'
function HomeScreen() {
    const [iconClicked,setIconClicked]=useState(false);
    return (
        <div className='homeScreen'>
            {/* TopNavBAr */}
            {/* LeftSIdeBAR */}
            {/* MailBOX */}
            <div className='homeScreennavs'>  
            <VerticalBar setIconClicked={setIconClicked} iconClicked={iconClicked}/>
            <SideBar setIconClicked={setIconClicked} iconClicked={iconClicked}/>
            </div>
          
        </div>
    )
}

export default HomeScreen
