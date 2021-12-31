import Inbox from '@mui/icons-material/Inbox'
import React, { createContext, useState } from 'react'
import ComposeMail from './ComposeMail'
import InboxComponent from './InboxComponent'
import './MailBox.css'
import MailBoxSideBar from './MailBoxSideBar'
import MailComponent from './MailComponent'
import emailjs from 'emailjs-com'
import SentMails from './SentMails'
export const AppContext=createContext(null);
function MailBox() {
    const [showComposeMail,setShowComposeMail]=useState(false);
    const [showInbox,setShowInbox]=useState(false);
    const [showSentMail,setShowSentMail]=useState(true);
    const [emailTo,setEmailTo]=useState("");
    const [emailcc,setEmailcc]=useState("");
    const [emailSub,setEmailSub]=useState("");
    const [emailBody,setEmailBody]=useState("");
    const [totalSentMail,setTotalSentMail]=useState("");
    const [selected,setIsSelected]=useState([]);
    const [indexesAr,setIndexesAr]=useState([]);
    const [search,setSearch]=useState([]);
    const [flag,setFlag]=useState(false);
    function showEmails() {
        let emails=localStorage.getItem("emails");
        let emailsObj;
        if(emails==null){
            emailsObj=[];
         }
         else{
            emailsObj= JSON.parse(emails);
         }
        
         let ar=[];
         let indexes=0;
        
         emailsObj.forEach(function(email,index){
        
           ar.push(<MailComponent key={index} email_to={email['emailTo']} email_cc={email['emailcc']} email_sub={email['emailSub']} email_body={email['emailBody']} email_date={email['emailDate']} emailID={email['emailID']} />) ;
            indexes++;
        
        });
        setTotalSentMail(indexes);
        // console.log(ar);
      
         return ar;
 
    }
   
    function DeleteEmails(delAr) {
        let emails=localStorage.getItem("emails");
        let emailsObj;
        if(emails==null){
           emailsObj=[];
         }
         else{
           emailsObj= JSON.parse(emails);
         }
         for(let i=0;i<delAr.length;i++){
         let delind = emailsObj.findIndex(email => email.emailID == delAr[i]);
         if(delind!==-1){
                       emailsObj.splice(delind,1);
                       console.log("multiple delete",emailsObj);
                       }
         }
      
         localStorage.setItem("emails",JSON.stringify(emailsObj));
        
         setIsSelected([])
         showEmails();
    }
    
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        let emailObj;
        const today = new Date();
        const emailDate=today;
        const rand=today.getDate()+Math.random(0,1);
        let addEmail={
            emailTo,
            emailcc,
            emailSub,
            emailBody,
            emailDate,
            emailID:rand,
            ID:rand
        }
        let email=localStorage.getItem("emails");
        if(email==null){
        //   emailObj=[];
        emailObj=[];
        }
        else{
          emailObj=JSON.parse(email);
        }
        emailObj.push(addEmail);
       
        localStorage.setItem("emails",JSON.stringify(emailObj));
        setEmailTo("");
        setEmailcc("");
        setEmailSub("");
        setEmailBody("");
        emailjs.send('service_sznn3bp', 'template_dkjvnej', emailObj)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        showEmails();

      }
    return (
        <AppContext.Provider value={{selected,setIsSelected,setSearch,search}}>
        <div className='mailBox'>
            <MailBoxSideBar showComposeMailbtn={setShowComposeMail} composeBtn={showComposeMail} showInbox={showInbox} setShowInbox={setShowInbox} showSentMail={showSentMail} setShowSentMail={setShowSentMail} />
            { showInbox &&
            <InboxComponent emailTo={emailTo} emailcc={emailcc} emailSub={emailSub} emailBody={emailBody} showEmails={showEmails}/>
            }
            {
                showSentMail && <>
                <SentMails totalSentMail={totalSentMail} showEmails={showEmails} DeleteEmails={DeleteEmails}  />
               
                </> 
            
            }
            {showComposeMail && <ComposeMail emailTo={emailTo} emailcc={emailcc} emailSub={emailSub} emailBody={emailBody} setEmailTo={setEmailTo} setEmailcc={setEmailcc} setEmailSub={setEmailSub} setEmailBody={setEmailBody}  handleSubmit={handleSubmit} />}
        </div>
        </AppContext.Provider>
    )
}

export default MailBox
