import React, { useContext } from 'react'
import MailComponent from './MailComponent'
import './SentMails.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {AppContext} from './MailBox';
function SentMails({totalSentMail,showEmails,DeleteEmails}) {
    const {selected,setIsSelected,setSearch,search}= useContext(AppContext);
    return (
        <div className='sentMails'>
            <div className='top_box'>
                <p>Sent Mails ({totalSentMail})</p>
                <p>{selected.length!==0 && <DeleteIcon style={{cursor:'pointer'}} onClick={()=>{DeleteEmails(selected)}}/>}</p>
                <div className='flx'>
                <input className='search_email' placeholder='Search email'/>
                <button className='search_btn'>Search</button>
                </div>
            </div>
            <div className='mails'>
                {/* <MailComponent/> */}
                {showEmails().reverse()}
               
            </div>  
        </div>
    )
}

export default SentMails
