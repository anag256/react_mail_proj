import Mail from '@mui/icons-material/Mail'
import React, { useEffect, useState } from 'react'
import './InboxComponent.css'
import MailComponent from './MailComponent'
function InboxComponent({emailTo,emailcc,emailSub,emailBody,showEmails}) {
    
 
         
    return (
        <div className='inboxComp'>
            <div className='top_box'>
                <p>Inbox (0)</p>
                <div className='flx'>
                <input className='search_email' placeholder='Search email'/>
                <button className='search_btn'>Search</button>
                </div>
            </div>
            <div className='mails'>
                Your Inbox is empty. Please compose a mail and check the sent Emails section
            </div>
        </div>
    )
}

export default InboxComponent
