import React from 'react'
import TopNavBar from './TopNavBar'
import './SideBar.css'
import MailBox from './MailBox'
function SideBar({setIconClicked,iconClicked}) {
    return (
        <div className='sideBar'>
            <TopNavBar setIconClicked={setIconClicked} iconClicked={iconClicked}/>
            <MailBox/>
        </div>
    )
}

export default SideBar
