import React, { useContext, useEffect, useState } from 'react'
import {AppContext} from './MailBox.js';
import './MailComponent.css';
function MailComponent({email_to,email_cc,email_sub,email_body,email_date,emailID}) {
    const {selected,setIsSelected}= useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);
    const [eve,setEve]=useState();
    const handleOnChange=(e)=>{
       
        setIsChecked(!isChecked);
       setEve(e.target.name);
       
     }
    const [today]=useState(new Date());
    function setSelectedCheckboxes(e){
        // let ar2=[...selected,e]
        let ar2=[];
        if(isChecked===true){

            ar2=[...selected,e]
            setIsSelected(ar2);
           
            }
            else{
              if(!(typeof selected ==='undefined')){
                let ar3=[...selected]; 
                let ind=ar3.indexOf(e);            
                if(ind>=0){
                    ar3.splice(ind,1)
                }
                setIsSelected(ar3);
                console.log("else",ar3);
                // ar2=[...ar3];
                // setDeleteArray(ar2);
              }
           
              
            }
               
            // setDeleteArray(ar2);
    }
 useEffect(() => {
    setSelectedCheckboxes(eve); 
    
 }, [isChecked])
//  useEffect(() => {
//     setSelectedCheckboxes(eve); 
    
//  }, [deleteArray])
    let emailDate=new Date(email_date);
    // const[emailDate]=useState(new Date(email_date));
   
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      function month(mon){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
     return monthNames[mon];
      }

    return (
        <div className='mailComponent'>

         <input
          type="checkbox"
          name={emailID}
          checked={isChecked}
          onChange={handleOnChange}
        />
        
        <div className='email_details'>
        <span className='email_from'>{email_to?.split('@')[0]}</span>
        <span className='email_sub'>{email_sub}</span>
        <span className='email_date'>{(emailDate.getDate()===today.getDate() && emailDate.getMonth()===today.getMonth() &&  emailDate.getFullYear()===today.getFullYear())? formatAMPM(emailDate):`${emailDate.getDate()} ${month(emailDate.getMonth())}` }</span>
        {/* <span className='email_date'>{emailDate.getDate()}</span> */}

        </div>
        </div>
    )
}

export default MailComponent
